/*
Skript für Lieblingsorte Webmapping
*/
let stop = {
    nr: 17,
    title: "Bergen",
    user: "Kathleenuniibk",
    lat: 60.383333,
    lng: 5.383333,
    zoom: 13,
  };
//Karte initalisieren
let map = L.map('map').setView([stop.lat, stop.lng], stop.zoom);

// Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

 //Marker zeichnen
 let marker = L.marker([stop.lat, stop.lng]).addTo(map);

//Popup definieren und öffnen
marker.bindPopup(`
    <h2>stop.title</h2>
    <ul>
    <li>Geogr. Breite: ${stop.lat.toFixed(5)}° </li>
    <li>Geogr. Länge: ${stop.lng.toFixed(5)}° </li>
    </ul>
    `).openPopup();
