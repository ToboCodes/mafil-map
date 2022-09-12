// Set map area and bounds
const coord1 = [-39.6711,-72.9415];
const coord2 = [-39.6517,-72.9614];
let view = [-39.66123, -72.95155];

// Create map and set base tiles
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
// let imageUrl = 'mapa 09-22.png',
//    imageBounds = [coord2, coord1];
// L.imageOverlay(imageUrl, imageBounds).addTo(map);

// ckpunmep's Get coordinates by click on a map
let xlng = 0.000096;
let xlat = 0.000075;

map.on('click', function(e) {
  L.polygon([
    [e.latlng.lat-xlat,e.latlng.lng-xlng],
    [e.latlng.lat+xlat,e.latlng.lng-xlng],
    [e.latlng.lat-xlat,e.latlng.lng+xlng],
    [e.latlng.lat+xlat,e.latlng.lng+xlng],
  ]).addTo(map);
  
  L.polyline([
    [e.latlng.lat,e.latlng.lng-xlng],
    [e.latlng.lat,e.latlng.lng+xlng]
  ]).addTo(map);

  let Lat = e.latlng.lat;
  let Lng = e.latlng.lng;
  console.log(Lat.toFixed(5) + ", " + Lng.toFixed(5));
});

// Define custom zones
const color1 = "#FEAEC9"
const color2 = "#FFC90D"
const zone1 = [[-39.66640,-72.95407], [-39.66637,-72.95281], [-39.66959,-72.95263], [-39.66961, -72.95397]];
const zone2 = [[-39.66593, -72.95787], [-39.66589, -72.95472], [-39.66569, -72.95471], [-39.66516, -72.95428],
[-39.66517, -72.95379], [-39.66567, -72.95417], [-39.66629, -72.95418], [-39.66792, -72.95409],
[-39.66968, -72.95407], [-39.66967, -72.95263], [-39.66998, -72.95263], [-39.66999, -72.95447],
[-39.67017, -72.95457], [-39.67053, -72.95430], [-39.67079, -72.95472], [-39.67014, -72.95530],
[-39.66791, -72.95453], [-39.66740, -72.95453], [-39.66740, -72.95491], [-39.66681, -72.95525],
[-39.66649, -72.95572], [-39.66658, -72.95646], [-39.66670, -72.95693], [-39.66674, -72.95768]];

// Add custom zones
const terr1 = L.polygon(zone1, {color: color1}).addTo(map);
const terr2 = L.polygon(zone2, {color: color2}).addTo(map);

// Bård Romstad's pure css divIcon labels
data = [
  {state: 'number', content: '1', lat: -39.66714, lon: -72.95342},
  {state: 'square', content: 'A', lat: -39.66740, lon: -72.95298},
  {state: 'square', content: 'B', lat: -39.66835, lon: -72.95293},
  {state: 'square', content: 'C', lat: -39.66893, lon: -72.95288},
  {state: 'square', content: 'D', lat: -39.66947, lon: -72.95283},
  {state: 'number', content: '2', lat: -39.66784, lon: -72.95430},
  {state: 'square', content: 'A', lat: -39.66666, lon: -72.95730},
  {state: 'square', content: 'B', lat: -39.66624, lon: -72.95599},
  {state: 'square', content: 'C', lat: -39.66877, lon: -72.95457},
  {state: 'square', content: 'D', lat: -39.66960, lon: -72.95435},
  {state: 'square', content: 'E', lat: -39.66995, lon: -72.95330},
];

data.forEach(function(row){
  var pos = new L.LatLng(row.lat,row.lon);
  var icontext = row.content;
  var instanceclass = row.state || '';

   var icon = L.divIcon({
     iconSize:null,
     html:'<div class="map-label '+instanceclass+'"><div class="map-label-content">'+icontext+'</div><div class="map-label-arrow"></div></div>'
   });

  L.marker(pos,{icon: icon}).addTo(map);

});

// Enable device GPS
map.locate({watch: true, enableHighAccuracy: true, maximumAge: 2000});

// Add location marker
let gpsMarker = null;

function onLocationFound(e) {
  if (gpsMarker == null) {
    gpsMarker = L.marker(e.latlng).addTo(map);
    let radius = e.accuracy / 2;
    L.circle(e.latlng, radius).addTo(map);
  } else {
    gpsMarker.setLatLng(e.latlng);
  }
}

map.on('locationfound', onLocationFound);

// On location error
function onLocationError(e) {
  alert(e.message);
}

map.on('locationerror', onLocationError);