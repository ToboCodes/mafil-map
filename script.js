let map = L.map('map', {
  maxZoom: 18,
  minZoom: 16,
  maxBounds: [
    [-39.6712,-72.9405],
    [-39.6523, -72.9625]
  ],
}).setView([-39.66123, -72.95155], 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let imageUrl = 'mapa 09-22.png',
    imageBounds = [[-39.6523, -72.9625], [-39.6712,-72.9405]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

map.locate({setView: true, watch: true, maxZoom: 17});

function onLocationFound(e) {
  let radius = e.accuracy / 2;

  L.marker(e.latlng).addTo(map);
  L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
  alert(e.message);
}

map.on('locationerror', onLocationError);