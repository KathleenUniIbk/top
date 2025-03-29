/*
Skript für Lieblingsorte Webmapping
*/

//Karte initalisieren
let map = L.map('map').setView([60.383333, 5.383333], 13);

// Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

 //Marker zeichnen
let marker = L.marker([60.383333, 5.383333]).addTo(map);

//Popup definieren und öffnen
marker.bindPopup(`
    <h2>Bergen</h2>
    <ul>
    <li>Geogr. Breite: ${lat.toFixed(5)}° </li>
    <li>Geogr. Länge: ${lng.toFixed(5)}° </li>
    </ul>
    `).openPopup();
