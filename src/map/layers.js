import L from "leaflet";

export const layers = {

    location: L.layerGroup(),

    faction: L.layerGroup(),

    mutant: L.layerGroup(),

    anomaly: L.layerGroup(),

    radiation: L.layerGroup(),

    psi: L.layerGroup()

};

export function addLayers(map){

    Object.values(layers).forEach(layer=>{

        layer.addTo(map);

    });

}
export function clearLayers() {

    Object.values(layers).forEach(layer => {

        layer.clearLayers();

    });

}