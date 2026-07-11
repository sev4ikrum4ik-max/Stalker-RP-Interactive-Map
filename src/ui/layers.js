import { layers } from "../map/layers.js";

export function initLayers() {

    document.querySelectorAll("[id^='layer-']").forEach(input => {

        input.addEventListener("change", () => {

            const type = input.id.replace("layer-", "");

            const layer = layers[type];

            if (!layer) return;

            if (input.checked) {

                layer.addTo(window.zoneMap);

            } else {

                window.zoneMap.removeLayer(layer);

            }

        });

    });

}