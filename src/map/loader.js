const FILES = [
    "locations",
    "factions",
    "mutants",
    "anomalies",
    "radiation",
    "psi"
];

export async function loadDatabase() {

    const database = [];

    const BASE = import.meta.env.BASE_URL;

    for (const file of FILES) {

        try {

            const response = await fetch(`${BASE}data/${file}.json`);

            if (!response.ok) {
                throw new Error(`${file}.json не найден`);
            }

            const data = await response.json();

            data.forEach(item => {

                database.push({
                    ...item,

                    type: item.type ?? file.slice(0, -1),

                    category: item.category ?? "",

                    visible: true

                });

            });

        } catch (error) {

            console.warn(`Не удалось загрузить ${file}.json`, error);

        }

    }

    return database;

}