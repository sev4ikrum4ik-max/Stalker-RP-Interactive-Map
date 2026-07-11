import { setSearchData } from "../ui/search.js";
import { setObjects } from "../editor/storage.js";
import L from "leaflet";

import { loadDatabase } from "./loader.js";
import { createMarkers } from "./markers.js";

let map = null;

export function getMap() {
    return map;
}

export async function initMap() {

    const img = new Image();
    img.src = `${import.meta.env.BASE_URL}maps/map.webp`;

    await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
    });

    const width = img.naturalWidth;
    const height = img.naturalHeight;

    // Размер карты, под который создавались координаты
    const ORIGINAL_WIDTH = 4096;
    const ORIGINAL_HEIGHT = 4096;

    const scaleX = width / ORIGINAL_WIDTH;
    const scaleY = height / ORIGINAL_HEIGHT;

    const bounds = [
        [0, 0],
        [height, width]
    ];

    map = L.map("map", {

        crs: L.CRS.Simple,

        attributionControl: false,

        zoomControl: true,

        minZoom: -5,

        maxZoom: 5,

        zoomSnap: 0.25,

        zoomDelta: 0.25

    });

    L.imageOverlay(img.src, bounds).addTo(map);

    map.fitBounds(bounds);

    map.setMaxBounds(bounds);
    map.options.maxBoundsViscosity = 1;

    map.on("mousemove", e => {

        const x = Math.round(e.latlng.lng);
        const y = Math.round(e.latlng.lat);

        const coords = document.getElementById("coords");

        if (coords) {

            coords.innerHTML = `
                X: ${x}
                <br>
                Y: ${y}
            `;

        }

    });

    window.zoneMap = map;

    const data = await loadDatabase();

    console.log("DATABASE:", data);

    const scaledData = data.map((item) => ({

        // Уникальный идентификатор объекта
        id: item.id ?? crypto.randomUUID(),

        ...item,

        x: item.x * scaleX,
        y: item.y * scaleY

    }));

    // Передаём все объекты редактору
    setObjects(scaledData);

    // Создаём маркеры
    createMarkers(map, scaledData);

    // Передаём данные поиску
    setSearchData(scaledData);

    return map;

}