import { presets } from "../data/presets.js";

export function getPreset(type, id) {

    return presets[type]?.find(item => item.id === id);

}

export function getPresetFolder(type) {

    switch (type) {

        case "location":
            return "locations";

        case "mutant":
            return "mutants";

        case "anomaly":
            return "anomalies";

        default:
            return "";

    }

}

export function buildPresetList(type, select) {

    select.innerHTML =
        '<option value="">Выберите...</option>';

    if (!presets[type]) return;

    presets[type].forEach(item => {

        const option = document.createElement("option");

        option.value = item.id;

        option.textContent = item.name;

        select.appendChild(option);

    });

}

export function applyPreset(type, id) {

    const preset = getPreset(type, id);

    if (!preset) return;

    const folder = getPresetFolder(type);

    document.getElementById("editor-name").value =
        preset.name ?? "";

    document.getElementById("editor-description").value =
        preset.description ?? "";

    const dangerInput = document.getElementById("editor-danger");

    if (dangerInput) {

        dangerInput.value = preset.danger ?? 3;

    }

    document.getElementById("editor-icon").value =
        preset.icon ??
        `icons/${folder}/${preset.id}.png`;

    document.getElementById("editor-image").value =
        preset.image ??
        `images/${folder}/${preset.id}.webp`;

}
radiation: [

    {
        id: "low",
        name: "Низкая радиация",
        danger: 1,
        description: "Низкий уровень радиации. Длительное пребывание нежелательно."
    },

    {
        id: "medium",
        name: "Средняя радиация",
        danger: 3,
        description: "Опасная зона радиации. Рекомендуется использовать защитное снаряжение."
    },

    {
        id: "high",
        name: "Высокая радиация",
        danger: 5,
        description: "Крайне высокий уровень радиации. Без защиты смертельно опасно."
    }

],

psi: [

    {
        id: "weak",
        name: "Слабое ПСИ",
        danger: 2,
        description: "Слабое пси-излучение. Может вызывать лёгкие галлюцинации."
    },

    {
        id: "medium",
        name: "Среднее ПСИ",
        danger: 4,
        description: "Средний уровень пси-излучения. Без защиты опасно."
    },

    {
        id: "strong",
        name: "Сильное ПСИ",
        danger: 5,
        description: "Крайне сильное пси-излучение. Длительное пребывание смертельно опасно."
    }

],