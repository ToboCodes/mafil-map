// Set map area and bounds
const coord1 = [-39.6711,-72.9415];
const coord2 = [-39.6517,-72.9614];
let view = [-39.66123, -72.95155];

// Create map and base tiles
let map = L.map('map', {
  maxZoom: 18,
  minZoom: 16,
  maxBounds: [
    coord1,
    coord2
  ],
}).setView(view, 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add custom layer
let imageUrl = 'mapa 09-22.png',
    imageBounds = [coord2, coord1];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Enable device GPS
map.locate({watch: true, enableHighAccuracy: true, maximumAge: 2000});

// Add location marker
let switcher = 0;

function onLocationFound(e) {
  if (switcher == 0) {
    L.marker(e.latlng).addTo(map);
    let radius = e.accuracy / 2;
    L.circle(e.latlng, radius).addTo(map);
    switcher++;
  } else {
    L.marker.remove();
    L.circle.remove();
    switcher = 0;
  }
}

map.on('locationfound', onLocationFound);

// On location error
function onLocationError(e) {
  alert(e.message);
}

map.on('locationerror', onLocationError);