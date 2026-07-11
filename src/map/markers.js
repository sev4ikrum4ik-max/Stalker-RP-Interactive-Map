import L from "leaflet";

import { layers } from "./layers.js";
import { showInfo } from "../ui/info.js";

import { editorEnabled } from "../editor/editor.js";
import { openEditorForm } from "../editor/form.js";

let activeMarker = null;

const allMarkers = [];

export function registerMarker(marker) {

    allMarkers.push(marker);

}

export function getMarkers() {

    return allMarkers;

}

const colors = {

    location: "#4da6ff",

    faction: "#3b82f6",

    mutant: "#d9534f",

    anomaly: "#ffb347",

    radiation: "#63d471",

    psi: "#b46bff"

};

export function createMarker(map, item) {

    const color = colors[item.type] || "#888";

    const icon = L.divIcon({

        className: "zone-marker",

        html: `
            <div
                class="marker-wrapper"
                style="
                    border-color:${color};
                    box-shadow:0 0 12px ${color}66;
                "
            >
                <img
                    class="marker-icon"
                    src="${item.icon}"
                    alt="${item.name}"
                >
            </div>
        `,

        iconSize: [44, 44],
        iconAnchor: [22, 22]

    });

    const marker = L.marker(
        [item.y, item.x],
        { icon }
    );

    marker.objectData = item;

    marker.bindTooltip(item.name, {

        direction: "top",

        offset: [0, -18]

    });

    marker.on("click", () => {

        if (activeMarker) {

            const oldElement = activeMarker.getElement();

            if (oldElement) {

                oldElement.classList.remove("marker-active");

            }

        }

        activeMarker = marker;

        requestAnimationFrame(() => {

            const element = marker.getElement();

            if (element) {

                element.classList.add("marker-active");

            }

        });

        // 🛠 Если включён редактор — открываем форму редактирования
        if (editorEnabled()) {

            openEditorForm(
                marker.objectData.x,
                marker.objectData.y,
                marker.objectData
            );

            return;

        }

        // 📖 Обычный режим
        showInfo(marker.objectData);

    });

    const layer = layers[item.type];

    if (layer) {

        marker.addTo(layer);

    } else {

        marker.addTo(map);

    }

    // сохраняем ссылку на маркер
    item.marker = marker;

    registerMarker(marker);

    return marker;

}

export function createMarkers(map, objects) {

    Object.values(layers).forEach(layer => {

        if (!map.hasLayer(layer)) {

            layer.addTo(map);

        }

    });

    objects.forEach(item => {

        createMarker(map, item);

    });

}