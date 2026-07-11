import "leaflet/dist/leaflet.css";

import "./css/style.css";
import "./css/layout.css";
import "./css/sidebar.css";
import "./css/popup.css";
import "./editor/editor.css";

import { createApp } from "./app.js";

import { initMap } from "./map/map.js";
import { initLayers } from "./ui/layers.js";
import { initSearch } from "./ui/search.js";
import { initFilters } from "./ui/filters.js";
import { initEditor } from "./editor/editor.js";
import { initDayNight } from "./map/dayNight.js";
import { isAdmin } from "./auth/admin.js";


import { exportObjects } from "./editor/export.js";

document.querySelector("#app").innerHTML = createApp();

if (!isAdmin) {

    document.getElementById("editor-toggle")?.remove();

    document.getElementById("export-json")?.remove();

}


// ======= Скрываем редактор обычным пользователям =======

if (!isAdmin) {

    document.getElementById("editor-toggle")?.remove();

    document.getElementById("export-json")?.remove();

}


// =======================================================


await initMap();

initDayNight();

initLayers();

initFilters();

initSearch();


// ======= Редактор запускается только у администратора =======

if (isAdmin) {

    if (isAdmin) {
    initEditor();
}

    if (isAdmin) {

    const exportButton = document.getElementById("export-json");

    if (exportButton) {

        exportButton.addEventListener("click", exportObjects);

    }

}

}