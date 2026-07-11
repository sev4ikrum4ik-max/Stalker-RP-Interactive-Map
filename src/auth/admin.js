const SECRET_KEY = "stalker-zone-2026-3f9a8b";

export function isAdmin() {
    const params = new URLSearchParams(window.location.search);
    return params.get("admin") === SECRET_KEY;
}