import { getObjects } from "../editor/storage.js";
import { layers } from "./layers.js";

let night = false;

export function initDayNight() {

    const button = document.getElementById("day-night-toggle");

    if (!button) return;

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

}

function updateMutants() {

    getObjects().forEach(object => {

        if (object.type !== "mutant") return;

        if (!object.marker) return;

        // ---------- НОЧЬ ----------
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

        }

        // ---------- ДЕНЬ ----------
        else {

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