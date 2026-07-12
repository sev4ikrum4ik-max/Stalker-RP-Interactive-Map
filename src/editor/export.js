import { isAdmin } from "../auth/admin.js";
import { getObjects } from "./storage.js";

const FILES = {
    locations: "location",
    factions: "faction",
    mutants: "mutant",
    anomalies: "anomaly",
    radiation: "radiation",
    psi: "psi"
};

export function exportObjects() {

    if (!isAdmin) return;

    const objects = getObjects();

    Object.entries(FILES).forEach(([file, type]) => {

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

        document.body.removeChild(link);

        URL.revokeObjectURL(url);

    });

}