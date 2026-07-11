import { isAdmin } from "../auth/admin.js";
import { getObjects } from "./storage.js";

const FILES = [
    "locations",
    "factions",
    "mutants",
    "anomalies",
    "radiation",
    "psi"
];

export function exportObjects() {

    if (!isAdmin) return;

    const objects = getObjects();

    FILES.forEach(file => {

        const type = file.slice(0, -1);

        const data = objects
            .filter(object => object.type === type)
            .map(object => {

                const copy = { ...object };

                delete copy.marker;

                return copy;

            });

        const blob = new Blob(
            [JSON.stringify(data, null, 4)],
            {
                type: "application/json"
            }
        );

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download = `${file}.json`;

        document.body.appendChild(link);

        link.click();

        link.remove();

        URL.revokeObjectURL(url);

    });

}