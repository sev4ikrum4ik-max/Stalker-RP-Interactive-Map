import { getMap } from "../map/map.js";

export function pickPosition(onPick) {

    const map = getMap();

    const overlay = document.querySelector(".editor-overlay");

    if (overlay) {

        overlay.style.opacity = "0.45";
        overlay.style.pointerEvents = "none";

    }

    map.getContainer().style.cursor = "crosshair";

    const info = document.createElement("div");

    info.id = "pick-position-info";

    info.innerHTML = "📍 Кликните по карте";

    Object.assign(info.style, {

        position: "fixed",
        top: "80px",
        left: "50%",
        transform: "translateX(-50%)",

        padding: "10px 18px",

        background: "#111",

        color: "#fff",

        borderRadius: "8px",

        zIndex: 99999,

        fontWeight: "600"

    });

    document.body.appendChild(info);

    map.once("click", e => {

        map.getContainer().style.cursor = "";

        info.remove();

        if (overlay) {

            overlay.style.opacity = "1";
            overlay.style.pointerEvents = "auto";

        }

        onPick(

            Math.round(e.latlng.lng),

            Math.round(e.latlng.lat)

        );

    });

}