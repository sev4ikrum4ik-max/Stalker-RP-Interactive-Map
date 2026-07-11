export function createApp() {

    return `

        <div class="topbar">

            <div class="logo">

                ☢ STALKER MAP

            </div>

            <div class="toolbar">

                <div class="search-box">

                    <input
                        id="search"
                        type="text"
                        placeholder="Поиск объекта..."
                        autocomplete="off"
                    >

                    <div id="search-results"></div>

                </div>

                <button
                    id="editor-toggle"
                    class="editor-btn"
                >
                    🛠 Редактор
                </button>

                <button
                    id="export-json"
                    class="editor-btn"
                >
                    💾 Экспорт
                </button>

                <button id="export-json" class="editor-btn">
    💾 Экспорт
</button>

<button
    id="day-night-toggle"
    class="editor-btn"
>
    ☀ День
</button>

            </div>

        </div>

        <div class="layout">

            <aside class="sidebar">

                <h2>Слои</h2>

                <label>
                    <input
                        type="checkbox"
                        id="layer-location"
                        checked
                    >
                    📍 Локации
                </label>

                <label>
                    <input
                        type="checkbox"
                        id="layer-faction"
                        checked
                    >
                    🏴 Группировки
                </label>

                <label>

    <input
        type="checkbox"
        id="layer-mutant"
        checked
    >

    👹 Мутанты

</label>

<div
    id="mutant-filters"
    class="subfilters"
></div>

<label>

    <input
        type="checkbox"
        id="layer-anomaly"
        checked
    >

    ⚡ Аномалии

</label>

<div
    id="anomaly-filters"
    class="subfilters"
></div>

                <label>
                    <input
                        type="checkbox"
                        id="layer-radiation"
                        checked
                    >
                    ☢ Радиация
                </label>

                <label>
                    <input
                        type="checkbox"
                        id="layer-psi"
                        checked
                    >
                    🧠 ПСИ-излучение
                </label>

                <hr>

                <h3>Координаты</h3>

                <div id="coords">

                    X: --

                    <br>

                    Y: --

                </div>

            </aside>

            <main id="map"></main>

            <div id="night-overlay"></div>

            <aside class="info-panel">

                <h2>Информация</h2>

                <div id="info-content">

                    <p>
                        Выберите объект на карте
                    </p>

                </div>

            </aside>

        </div>

    `;

}