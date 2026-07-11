import { isAdmin } from "../auth/admin.js";
import { getMap } from "../map/map.js";
import { openEditorForm } from "./form.js";

let enabled = false;
let map = null;

export function initEditor() {

    if (!isAdmin) return;

    const button = document.getElementById("editor-toggle");

    if (!button) return;

    button.addEventListener("click", () => {

        enabled = !enabled;

        button.classList.toggle("active", enabled);

    });

    const waitMap = setInterval(() => {

        map = getMap();

        if (!map) return;

        clearInterval(waitMap);

        map.on("click", onMapClick);

    }, 100);

}

function onMapClick(e) {

    if (!enabled) return;

    openEditorForm(
        e.latlng.lng,
        e.latlng.lat
    );

}

export function editorEnabled() {

    return enabled;

}

export function getEditorMap() {

    return map;

}