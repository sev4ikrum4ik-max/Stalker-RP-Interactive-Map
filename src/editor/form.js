import { isAdmin } from "../auth/admin.js";
import { getMap } from "../map/map.js";
import { renderObjects } from "../map/render.js";
import { addObject, removeObject } from "./storage.js";
import { pickPosition } from "./pickPosition.js";
import {
    buildPresetList,
    applyPreset
} from "./presets.js";

let overlay = null;


export function openEditorForm(x, y, object = null) {

    if (!isAdmin) return;

    closeEditorForm();

    overlay = document.createElement("div");
    overlay.className = "editor-overlay";

  overlay.innerHTML = `

<div class="editor-window">

    <h2>${object ? "✏️ Редактирование объекта" : "🛠 Новый объект"}</h2>

    <div class="editor-field">

        <label>Тип</label>

        <select id="editor-type">

            <option value="location">📍 Локация</option>
            <option value="faction">🏴 Группировка</option>
            <option value="mutant">👹 Мутант</option>
            <option value="anomaly">⚡ Аномалия</option>
            <option value="radiation">☢ Радиация</option>
            <option value="psi">🧠 ПСИ</option>

        </select>

    </div>

    <div
        id="preset-field"
        class="editor-field"
        style="display:none"
    >

        <label>Вид</label>

        <select id="editor-preset">

            <option value="">Выберите...</option>

        </select>

    </div>

    <div class="editor-field">

        <label>Название</label>

        <input
            id="editor-name"
            value="${object?.name ?? ""}"
        >

    </div>

    <div class="editor-field">

        <label>Иконка</label>

        <input
            id="editor-icon"
            value="${object?.icon ?? ""}"
        >

    </div>

    <div class="editor-field">

        <label>Изображение</label>

        <input
            id="editor-image"
            value="${object?.image ?? ""}"
        >

    </div>

    <div class="editor-field">

        <label>Описание</label>

        <textarea id="editor-description">${object?.description ?? ""}</textarea>

    </div>

    <div class="editor-field">

        <label>Опасность</label>

        <input
            id="editor-danger"
            type="number"
            min="1"
            max="5"
            value="${object?.danger ?? 3}"
        >

    </div>

    <p>

        X: ${Math.round(x)}

        <br>

        Y: ${Math.round(y)}

    </p>

    <div
    id="night-coords"
    style="display:none;"
>

    <div class="editor-field">

        <label>Ночные X</label>

        <input
            id="editor-night-x"
            type="number"
            value="${object?.nightX ?? Math.round(x)}"
        >

    </div>

    <div class="editor-field">

        <label>Ночные Y</label>
        <div class="editor-field">

        <div id="day-night-visible">

<div id="day-night-visible">

    <label>Активность</label>

    <div class="activity-buttons">

        <button
            type="button"
            class="activity-btn"
            data-mode="day"
        >
            ☀ День
        </button>

        <button
            type="button"
            class="activity-btn"
            data-mode="night"
        >
            🌙 Ночь
        </button>

        <button
            type="button"
            class="activity-btn"
            data-mode="both"
        >
            ☀🌙 Оба
        </button>

    </div>

</div>

    <div class="editor-field">

        <label>

            <input
                id="editor-show-night"
                type="checkbox"
                ${object?.showNight !== false ? "checked" : ""}
            >

            Показывать ночью

        </label>

    </div>

</div>

    <button
        type="button"
        id="pick-night-position"
        class="editor-save"
    >
        📍 Выбрать ночную позицию
    </button>

</div>

        <input
            id="editor-night-y"
            type="number"
            value="${object?.nightY ?? Math.round(y)}"
        >

    </div>

</div>

    <div class="editor-actions">

        ${
            object
                ? `
<button
    id="editor-delete"
    class="editor-delete"
>
    🗑 Удалить
</button>
`
                : ""
        }

        <button
            id="editor-close"
            class="editor-cancel"
        >
            Отмена
        </button>

        <button
            id="editor-save"
            class="editor-save"
        >
            Сохранить
        </button>

    </div>

</div>

`;

    document.body.appendChild(overlay);

    const typeSelect = document.getElementById("editor-type");
const presetField = document.getElementById("preset-field");
const presetSelect = document.getElementById("editor-preset");

function updatePresets() {

    const type = typeSelect.value;

    if (
    type !== "location" &&
    type !== "mutant" &&
    type !== "anomaly"
) {

    presetField.style.display = "none";
    return;

    }

    presetField.style.display = "block";

    buildPresetList(type, presetSelect);

}

typeSelect.addEventListener("change", updatePresets);

presetSelect.addEventListener("change", () => {

    applyPreset(
        typeSelect.value,
        presetSelect.value
    );

    const locked = presetSelect.value !== "";

    document.getElementById("editor-name").readOnly = locked;
    document.getElementById("editor-description").readOnly = locked;
    document.getElementById("editor-icon").readOnly = locked;
    document.getElementById("editor-image").readOnly = locked;

});

updatePresets();

presetSelect.dispatchEvent(new Event("change"));

    if (object) {

        document.getElementById("editor-type").value = object.type;

    }

    updatePresets();

    const nightBlock = document.getElementById("night-coords");

function updateNightFields() {

    if (!nightBlock) return;

    nightBlock.style.display =
        typeSelect.value === "mutant"
            ? "block"
            : "none";

}

typeSelect.addEventListener("change", updateNightFields);

updateNightFields();

const activityButtons = document.querySelectorAll(".activity-btn");

let activityMode = "both";

// Если редактируем существующий объект
if (object) {

    if (object.showDay && object.showNight) {

        activityMode = "both";

    } else if (object.showDay) {

        activityMode = "day";

    } else if (object.showNight) {

        activityMode = "night";

    }

}

function updateActivityButtons() {

    activityButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.mode === activityMode
        );

    });

}

activityButtons.forEach(button => {

    button.addEventListener("click", () => {

        activityMode = button.dataset.mode;

        updateActivityButtons();

    });

});

updateActivityButtons();

const pickNightButton = document.getElementById("pick-night-position");

if (pickNightButton) {

    pickNightButton.onclick = () => {

        pickPosition((x, y) => {

            document.getElementById("editor-night-x").value = x;

            document.getElementById("editor-night-y").value = y;

        });

    };

}

    document
        .getElementById("editor-close")
        .onclick = closeEditorForm;

        if (object) {

    document
        .getElementById("editor-delete")
        .onclick = () => {

            if (!confirm(`Удалить "${object.name}"?`)) {

                return;

            }

            // удалить маркер с карты
            if (object.marker) {

                object.marker.remove();

            }

            // удалить объект из памяти
            removeObject(object.id);

            renderObjects();

            closeEditorForm();

        };

}

    document
        .getElementById("editor-save")
        .onclick = () => {

            const name = document.getElementById("editor-name");
const type = document.getElementById("editor-type");
const icon = document.getElementById("editor-icon");
const image = document.getElementById("editor-image");
const description = document.getElementById("editor-description");
const danger = document.getElementById("editor-danger");

console.log({
    name,
    type,
    icon,
    image,
    description,
    danger
});

const data = {

    name: name?.value,

    type: type?.value,

    icon: icon?.value,

    image: image?.value,

    description: description?.value,

    danger: Number(danger?.value),

    x: Math.round(x),

    y: Math.round(y),

    nightX: Number(
        document.getElementById("editor-night-x")?.value
    ),

    nightY: Number(
        document.getElementById("editor-night-y")?.value
    ),

    showDay:
    activityMode === "day" ||
    activityMode === "both",

showNight:
    activityMode === "night" ||
    activityMode === "both",

};

            // Новый объект
            if (!object) {
                console.log("SAVE", data);

                addObject(data);

                renderObjects();

            }

            // Редактирование
            else {

                Object.assign(object, data);

renderObjects();

            }

            closeEditorForm();

        };

}

export function closeEditorForm() {

    if (overlay) {

        overlay.remove();

        overlay = null;

    }

}