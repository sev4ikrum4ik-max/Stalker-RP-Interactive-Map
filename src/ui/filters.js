import { getObjects } from "../editor/storage.js";
import { presets } from "../data/presets.js";

export function initFilters() {

    // Подфильтры оставляем только у мутантов и аномалий
    buildGroup("mutant", "mutant-filters");
    buildGroup("anomaly", "anomaly-filters");

    bindParentFilters();

}

function buildGroup(type, containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    presets[type].forEach(item => {

        const label = document.createElement("label");

        label.className = "subfilter";

        const input = document.createElement("input");

        input.type = "checkbox";
        input.checked = true;
        input.dataset.preset = item.id;

        input.addEventListener("change", () => {

            togglePreset(item.id, input.checked);

            updateParentCheckbox(type);

        });

        label.appendChild(input);

        label.append(" " + item.name);

        container.appendChild(label);

    });

}

function togglePreset(preset, visible) {

    getObjects().forEach(object => {

        if (object.preset !== preset) return;

        if (!object.marker) return;

        if (visible) {

            object.marker.addTo(window.zoneMap);

        } else {

            object.marker.remove();

        }

    });

}

function bindParentFilters() {

    bindParent("mutant");
    bindParent("anomaly");

}

function bindParent(type) {

    const parent = document.getElementById(`layer-${type}`);

    if (!parent) return;

    parent.addEventListener("change", () => {

        presets[type].forEach(item => {

            const input = document.querySelector(
                `[data-preset="${item.id}"]`
            );

            if (!input) return;

            input.checked = parent.checked;

            togglePreset(item.id, parent.checked);

        });

    });

}

function updateParentCheckbox(type) {

    const parent = document.getElementById(`layer-${type}`);

    if (!parent) return;

    const allChecked = presets[type].every(item => {

        const input = document.querySelector(
            `[data-preset="${item.id}"]`
        );

        return input && input.checked;

    });

    parent.checked = allChecked;

}