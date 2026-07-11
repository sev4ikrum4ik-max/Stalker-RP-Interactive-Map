const SECRET_KEY = "stalker-zone-2026-3f9a8b";

const params = new URLSearchParams(window.location.search);

export const isAdmin =
    params.get("admin") === SECRET_KEY;