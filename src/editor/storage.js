import { isAdmin } from "../auth/admin.js";
let objects = [];

/**
 * Загрузить базу
 */
export function setObjects(data) {

    objects = [...data];

}

/**
 * Получить все объекты
 */
export function getObjects() {

    return objects;

}

/**
 * Найти объект по id
 */
export function getObject(id) {

    return objects.find(obj => obj.id === id);

}

/**
 * Добавить объект
 */
export function addObject(object) {

    if (!object.id) {

        object.id = crypto.randomUUID();

    }

    objects.push(object);

    return object;

}

/**
 * Обновить объект
 */
export function updateObject(id, data) {

    const object = getObject(id);

    if (!object) return null;

    Object.assign(object, data);

    return object;

}

/**
 * Удалить объект
 */
export function removeObject(id) {

    const index = objects.findIndex(obj => obj.id === id);

    if (index === -1) return;

    objects.splice(index, 1);

}

/**
 * Сохранить ссылку на маркер
 */
export function setMarker(id, marker) {

    const object = getObject(id);

    if (!object) return;

    object.marker = marker;

}

/**
 * Получить маркер
 */
export function getMarker(id) {

    const object = getObject(id);

    return object?.marker ?? null;

}

/**
 * Очистить
 */
export function clearObjects() {

    objects = [];

}