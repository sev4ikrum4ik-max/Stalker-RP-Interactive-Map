import { getObjects } from "../editor/storage.js";
import { layers } from "./layers.js";

let night = false;

export function initDayNight() {

    const button = document.getElementById("day-night-toggle");

    if (!button) return;

    // Устанавливаем начальное состояние кнопки
    button.textContent = "☀ День";

    button.addEventListener("click", () => {

        night = !night;

        const map = document.getElementById("map");

        if (map) {
            map.classList.toggle("night-mode", night);
        }

        const overlay = document.getElementById("night-overlay");

        overlay?.classList.toggle("active", night);

        button.textContent = night
            ? "🌙 Ночь"
            : "☀ День";

        updateMutants();

    });

    // Небольшая задержка, чтобы все маркеры успели создаться
    setTimeout(updateMutants, 50);

}

export function updateMutants() {

    getObjects().forEach(object => {

        if (object.type !== "mutant") return;

        if (!object.marker) return;

        if (night) {

            if (!object.showNight) {

                layers.mutant.removeLayer(object.marker);
                return;

            }

            if (
                object.nightX != null &&
                object.nightY != null
            ) {

                object.marker.setLatLng([
                    object.nightY,
                    object.nightX
                ]);

            }

        } else {

            if (!object.showDay) {

                layers.mutant.removeLayer(object.marker);
                return;

            }

            object.marker.setLatLng([
                object.y,
                object.x
            ]);

        }

        if (!layers.mutant.hasLayer(object.marker)) {

            layers.mutant.addLayer(object.marker);

        }

    });

}

export function isNight() {
    return night;
}