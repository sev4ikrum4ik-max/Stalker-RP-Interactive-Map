import { getMap } from "./map.js";
import { createMarker } from "./markers.js";
import { clearLayers } from "./layers.js";
import { getObjects } from "../editor/storage.js";

let filters = {};

export function setFilters(newFilters) {

    filters = newFilters;

    renderObjects();

}

export function renderObjects() {

    const map = getMap();

    if (!map) return;

    clearLayers();

    getObjects().forEach(object => {

        if (!isVisible(object)) {

            return;

        }

        createMarker(map, object);

    });

}

function isVisible(object) {

    if (!object.preset) {

        return true;

    }

    if (filters[object.preset] === false) {

        return false;

    }

    return true;

}