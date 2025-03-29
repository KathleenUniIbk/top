/*
Skript für Lieblingsorte Webmapping
*/

//Karte initalisieren
var map = L.map('map').setView([60.383333, 5.383333], 13);

// Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

 //Marker zeichnen
var marker = L.marker([60.383333, 5.383333]).addTo(map);

//Popup definieren und öffnen
marker.bindPopup("<b>Hello world!</b><br>I am Ulriken.").openPopup();
