const objects = [];

export function addObject(item, marker) {
    objects.push({
        item,
        marker
    });
}

export function getObjects() {
    return objects;
}

export function findByMarker(marker) {
    return objects.find(obj => obj.marker === marker);
}

export function findByItem(item) {
    return objects.find(obj => obj.item === item);
}

export function removeObject(item) {
    const index = objects.findIndex(obj => obj.item === item);

    if (index !== -1) {
        objects.splice(index, 1);
    }
}