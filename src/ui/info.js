export function showInfo(item) {

    const info = document.getElementById("info-content");

    if (!info) return;

    info.innerHTML = `

        <div class="object-card">

            <img
                class="object-image"
                src="${item.image}"
                alt="${item.name}"
                onerror="this.style.display='none'"
            >

            <div class="object-title">
                ${item.name}
            </div>

            <div class="object-type">
                ${getType(item.type)}
            </div>

            ${item.danger ? `

                <div class="object-divider"></div>

                <div class="object-section">

                    <span class="object-label">
                        ⚠ Опасность
                    </span>

                    <span class="object-value">
                        ${"★".repeat(item.danger)}
                    </span>

                </div>

            ` : ""}

            <div class="object-divider"></div>

            <div class="object-section">

                <span class="object-label">
                    📍 Координаты
                </span>

                <span class="object-value">
                    ${item.x} • ${item.y}
                </span>

            </div>

            <div class="object-divider"></div>

            <div class="object-description">

                ${item.description || "Описание отсутствует."}

            </div>

        </div>

    `;

}

function getType(type) {

    switch (type) {

        case "location":
            return "📍 Локация";

        case "faction":
            return "🏴 Группировка";

        case "mutant":
            return "👹 Мутант";

        case "anomaly":
            return "⚡ Аномалия";

        case "radiation":
            return "☢ Радиация";

        case "psi":
            return "🧠 ПСИ-излучение";

        default:
            return type;

    }

}