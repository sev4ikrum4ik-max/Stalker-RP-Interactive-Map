import { getMap } from "../map/map.js";
import { showInfo } from "./info.js";
import { getObjects } from "../editor/storage.js";

export function setSearchData(data) {
    // Оставляем функцию для совместимости.
    // Теперь поиск всегда берет актуальные данные из storage.
}

export function initSearch() {

    const input = document.getElementById("search");
    const results = document.getElementById("search-results");

    if (!input || !results) return;

    input.addEventListener("input", () => {

        const text = input.value.trim().toLowerCase();

        results.innerHTML = "";

        if (!text) {

            results.style.display = "none";

            return;

        }

        // Всегда получаем актуальный список объектов
        const objects = getObjects();

        const found = objects.filter(item =>
            item.name.toLowerCase().includes(text)
        );

        if (!found.length) {

            results.style.display = "none";

            return;

        }

        found.forEach(item => {

            const div = document.createElement("div");

            div.className = "search-item";

            div.innerHTML = `
                <strong>${getIcon(item.type)}</strong>
                ${item.name}
            `;

            div.onclick = () => {

                const map = getMap();

                map.flyTo(
                    [item.y, item.x],
                    1,
                    {
                        animate: true,
                        duration: 1.2
                    }
                );

                showInfo(item);

                input.value = item.name;

                results.style.display = "none";

            };

            results.appendChild(div);

        });

        results.style.display = "block";

    });

    document.addEventListener("click", e => {

        if (!e.target.closest(".search-box")) {

            results.style.display = "none";

        }

    });

}

function getIcon(type) {

    switch (type) {

        case "location":
            return "📍";

        case "faction":
            return "🏴";

        case "mutant":
            return "👹";

        case "anomaly":
            return "⚡";

        case "radiation":
            return "☢";

        case "psi":
            return "🧠";

        default:
            return "•";

    }

}