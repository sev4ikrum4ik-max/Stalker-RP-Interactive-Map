import { getMap } from "../map/map.js";
import { createMarker } from "../map/markers.js";
import { addObject } from "./storage.js";

export function saveObject(object, x, y) {

    const data = {

        name: document.getElementById("editor-name").value,

        type: document.getElementById("editor-type").value,

        preset: document.getElementById("editor-preset")?.value || "",

        icon: document.getElementById("editor-icon").value,

        image: document.getElementById("editor-image").value,

        description: document.getElementById("editor-description").value,

        danger: Number(
            document.getElementById("editor-danger").value
        ),

        x: Math.round(x),

        y: Math.round(y)

    };

    if (!object) {

        addObject(data);

        createMarker(
            getMap(),
            data
        );

        return;

    }

    Object.assign(object, data);

    object.marker?.remove();

    createMarker(
        getMap(),
        object
    );

}