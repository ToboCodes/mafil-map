// Set map area and bounds
const coord1 = [-39.603457, -73.038868];
const coord2 = [-39.808016, -72.774131];
let view = [-39.66123, -72.95155];

// Create map and set base tiles
let map = L.map('map', {
  maxZoom: 19,
  minZoom: 15,
  maxBounds: [
    coord1,
    coord2
  ],
}).setView(view, 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


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


// Set custom zones
const zone1 = [[-39.66639, -72.95407], [-39.66637, -72.95282], [-39.66959,-72.95263], [-39.66961, -72.95397]];
const zone2 = [[-39.66593, -72.95787], [-39.66589, -72.95472], [-39.66569, -72.95471], [-39.66516, -72.95428],
[-39.66517, -72.95379], [-39.66567, -72.95417], [-39.66629, -72.95418], [-39.66792, -72.95409],
[-39.66968, -72.95407], [-39.66967, -72.95263], [-39.66998, -72.95263], [-39.66999, -72.95447],
[-39.67017, -72.95457], [-39.67053, -72.95430], [-39.67079, -72.95472], [-39.67014, -72.95530],
[-39.66791, -72.95453], [-39.66740, -72.95453], [-39.66740, -72.95491], [-39.66681, -72.95525],
[-39.66649, -72.95572], [-39.66658, -72.95646], [-39.66670, -72.95693], [-39.66674, -72.95768]];
const zone3 = [[-39.66637, -72.95274], [-39.66636, -72.95143], [-39.66754, -72.95119], [-39.66845, -72.95103],
[-39.66955, -72.95222], [-39.66960, -72.95229], [-39.66961, -72.95242], [-39.66960, -72.95256],
[-39.66760, -72.95265]];
const zone4 = [[-39.66635, -72.95136], [-39.66634, -72.95001], [-39.66719, -72.94963], [-39.66752, -72.94947],
[-39.66775, -72.94930], [-39.66835, -72.94867], [-39.66876, -72.94801], [-39.66902, -72.94750],
[-39.66960, -72.94751], [-39.66923, -72.94842], [-39.66876, -72.94917], [-39.66806, -72.94985],
[-39.66842, -72.95096], [-39.66758, -72.95112]];
const zone5 = [[-39.66432, -72.95282], [-39.66393, -72.95282], [-39.66393, -72.95160], [-39.66363, -72.95171],
[-39.66362, -72.95132], [-39.66625, -72.95007], [-39.66626, -72.95137], [-39.66512, -72.95185],
[-39.66512, -72.95281]];
const zone6 = [[-39.66591, -72.95787], [-39.66591, -72.95723], [-39.66333, -72.95819], [-39.66286, -72.95695],
[-39.66251, -72.95727], [-39.66312, -72.95891], [-39.66385, -72.96108], [-39.66428, -72.96233],
[-39.66510, -72.96194], [-39.66518, -72.96215], [-39.66597, -72.96173], [-39.66574, -72.96089],
[-39.66629, -72.96069], [-39.66605, -72.95976], [-39.66457, -72.96035], [-39.66423, -72.95926],
[-39.66527, -72.95889], [-39.66527, -72.95808]];
const zone7 = [[-39.66238, -72.95691], [-39.66323, -72.95618], [-39.66336, -72.95600], [-39.66366, -72.95572],
[-39.66308, -72.95468], [-39.66358, -72.95420], [-39.66386, -72.95467], [-39.66402, -72.95453],
[-39.66406, -72.95459], [-39.66429, -72.95436], [-39.66474, -72.95513], [-39.66249, -72.95724]];
const zone8 = [[-39.66257, -72.95663], [-39.66220, -72.95592], [-39.66229, -72.95584], [-39.66213, -72.95554],
[-39.66249, -72.95519], [-39.66265, -72.95550], [-39.66319, -72.95502], [-39.66357, -72.95570],
[-39.66329, -72.95595], [-39.66318, -72.95611]];
const zone9 = [[-39.66002, -72.95960], [-39.66076, -72.95952], [-39.66240, -72.95912], [-39.66294, -72.95894],
[-39.66197, -72.95622], [-39.66191, -72.95594], [-39.66187, -72.95569], [-39.66228, -72.95532],
[-39.66241, -72.95390], [-39.66199, -72.95399], [-39.66219, -72.95203], [-39.66223, -72.95184],
[-39.66161, -72.95163], [-39.65716, -72.95257], [-39.65735, -72.95318], [-39.65850, -72.95287],
[-39.65905, -72.95410], [-39.65967, -72.95355], [-39.65934, -72.95253], [-39.66140, -72.95223],
[-39.66174, -72.95302], [-39.66150, -72.95552], [-39.66153, -72.95599], [-39.66169, -72.95657],
[-39.66202, -72.95740], [-39.66136, -72.95780], [-39.66164, -72.95875],[-39.66070, -72.95900],
[-39.65999, -72.95908]];
const zone10A = [[-39.66246, -72.95027], [-39.66114, -72.95074], [-39.66090, -72.95071], [-39.66065, -72.95058],
[-39.66038, -72.95037], [-39.66016, -72.95004], [-39.65997, -72.94976], [-39.65988, -72.94968],
[-39.65984, -72.94966], [-39.66021, -72.94964], [-39.66057, -72.95016], [-39.66078, -72.95032],
[-39.66101, -72.95037], [-39.66127, -72.95035], [-39.66233, -72.94992]]
const zone10B = [[-39.66231, -72.94989], [-39.66206, -72.94929], [-39.66124, -72.94988], [-39.66121, -72.94982],
[-39.66204, -72.94922], [-39.66192, -72.94895], [-39.66095, -72.94965], [-39.66091, -72.94958],
[-39.66188, -72.94888], [-39.66159, -72.94826], [-39.66129, -72.94851], [-39.66152, -72.94899],
[-39.66146, -72.94903], [-39.66123, -72.94855], [-39.66101, -72.94871], [-39.66122, -72.94916],
[-39.66117, -72.94921], [-39.66095, -72.94876], [-39.66068, -72.94895], [-39.66039, -72.94920],
[-39.66010, -72.94942], [-39.65986, -72.94963], [-39.66021, -72.94961], [-39.66060, -72.94954],
[-39.66087, -72.94992], [-39.66120, -72.95013], [-39.66162, -72.94989], [-39.66194, -72.94973],
[-39.66204, -72.95000]]

const zone17 = [[-39.65977, -72.94962], [-39.65933, -72.94941], [-39.65927, -72.94934], [-39.65902, -72.94890],
[-39.65848, -72.94788], [-39.65887, -72.94750], [-39.65879, -72.94731], [-39.65926, -72.94686],
[-39.65992, -72.94811], [-39.65999, -72.94809], [-39.66019, -72.94792], [-39.66049, -72.94775],
[-39.66079, -72.94752], [-39.66121, -72.94849], [-39.66067, -72.94886], [-39.66007, -72.94934]];

// Set zone colors
const color1 = "#FE80A9";
const color2 = "#FCAA0C";
const color3 = "#FE7F26";
const color4 = "#B3A2E6";
const color5 = "#DA0022";
const color6 = "#888888";
const color7 = "#20B250";
const color8 = "#5CF4F1";
const color9 = "#77CDE8";
const color10 = "#FD76B8";

const color17 = "#EF00F1";

// Place custom zones
const terr1 = L.polygon(zone1, {color: color1, fillOpacity: 0.5, weight: 4}).addTo(map);
const terr2 = L.polygon(zone2, {color: color2, fillOpacity: 0.5, weight: 4}).addTo(map);
const terr3 = L.polygon(zone3, {color: color3, fillOpacity: 0.5, weight: 4}).addTo(map);
const terr4 = L.polygon(zone4, {color: color4, fillOpacity: 0.5, weight: 4}).addTo(map);
const terr5 = L.polygon(zone5, {color: color5, fillOpacity: 0.5, weight: 4}).addTo(map);
const terr6 = L.polygon(zone6, {color: color6, fillOpacity: 0.5, weight: 4}).addTo(map);
const terr7 = L.polygon(zone7, {color: color7, fillOpacity: 0.5, weight: 4}).addTo(map);
const terr8 = L.polygon(zone8, {color: color8, fillOpacity: 0.5, weight: 4}).addTo(map);
const terr9 = L.polygon(zone9, {color: color9, fillOpacity: 0.5, weight: 4}).addTo(map);
const terr10A = L.polygon(zone10A, {color: color10, fillOpacity: 0.5, weight: 4}).addTo(map);
const terr10B = L.polygon(zone10B, {color: color10, fillOpacity: 0.5, weight: 4}).addTo(map);
const terr17 = L.polygon(zone17, {color: color17, fillOpacity: 0.5, weight: 4}).addTo(map);


// Bård Romstad's pure css divIcon labels
data = [
  {state: 'number', content: '1', lat: -39.66712, lon: -72.95335},
  {state: 'square', content: 'A', lat: -39.66740, lon: -72.95298},
  {state: 'square', content: 'B', lat: -39.66835, lon: -72.95293},
  {state: 'square', content: 'C', lat: -39.66893, lon: -72.95288},
  {state: 'square', content: 'D', lat: -39.66947, lon: -72.95283},
  {state: 'number', content: '2', lat: -39.66681, lon: -72.95468},
  {state: 'square', content: 'A', lat: -39.66666, lon: -72.95730},
  {state: 'square', content: 'B', lat: -39.66624, lon: -72.95599},
  {state: 'square', content: 'C', lat: -39.66877, lon: -72.95457},
  {state: 'square', content: 'D', lat: -39.66960, lon: -72.95435},
  {state: 'square', content: 'E', lat: -39.66995, lon: -72.95330},
  {state: 'number', content: '3', lat: -39.66687, lon: -72.95182},
  {state: 'square', content: 'A', lat: -39.66743, lon: -72.95146},
  {state: 'square', content: 'B', lat: -39.66834, lon: -72.95126},
  {state: 'square', content: 'C', lat: -39.66902, lon: -72.95177},
  {state: 'number', content: '4', lat: -39.66705, lon: -72.95067},
  {state: 'square', content: 'A', lat: -39.66685, lon: -72.95024},
  {state: 'square', content: 'B', lat: -39.66771, lon: -72.94972},
  {state: 'square', content: 'C', lat: -39.66891, lon: -72.94851},
  {state: 'number', content: '5', lat: -39.66467, lon: -72.95136},
  {state: 'square', content: 'A', lat: -39.66413, lon: -72.95142},
  {state: 'square', content: 'B', lat: -39.66497, lon: -72.95226},
  {state: 'square', content: 'C', lat: -39.66504, lon: -72.95107},
  {state: 'square', content: 'D', lat: -39.66617, lon: -72.95058},
  {state: 'number', content: '6', lat: -39.66364, lon: -72.95855},
  {state: 'square', content: 'A', lat: -39.66514, lon: -72.96088},
  {state: 'square', content: 'B', lat: -39.66462, lon: -72.95827},
  {state: 'number', content: '7', lat: -39.66405, lon: -72.95521},
  {state: 'square', content: 'A', lat: -39.66377, lon: -72.95601},
  {state: 'square', content: 'B', lat: -39.66369, lon: -72.95517},
  {state: 'square', content: 'C', lat: -39.66423, lon: -72.95491},
  {state: 'square', content: 'D', lat: -39.66394, lon: -72.95476},
  {state: 'square', content: 'E', lat: -39.66366, lon: -72.95444},
  {state: 'number', content: '8', lat: -39.66264, lon: -72.95575},
  {state: 'square', content: 'A', lat: -39.66262, lon: -72.95627},
  {state: 'square', content: 'B', lat: -39.66282, lon: -72.95589},
  {state: 'square', content: 'C', lat: -39.66305, lon: -72.95560},
  {state: 'square', content: 'D', lat: -39.66330, lon: -72.95532},
  {state: 'square', content: 'E', lat: -39.66255, lon: -72.95548},
  {state: 'number', content: '9', lat: -39.66228, lon: -72.95862},
  {state: 'square', content: 'A', lat: -39.66175, lon: -72.95919},
  {state: 'square', content: 'B', lat: -39.66234, lon: -72.95760},
  {state: 'square', content: 'C', lat: -39.66179, lon: -72.95534},
  {state: 'square', content: 'D', lat: -39.66229, lon: -72.95455},
  {state: 'square', content: 'E', lat: -39.65986, lon: -72.95228},
  {state: 'number', content: '10', lat: -39.66083, lon: -72.94925},
  {state: 'square', content: 'A', lat: -39.66102, lon: -72.95055},
  {state: 'square', content: 'B', lat: -39.66201, lon: -72.94958},

  {state: 'number', content: '17', lat: -39.65926, lon: -72.94809},
  {state: 'square', content: 'A', lat: -39.65945, lon: -72.94743},
  {state: 'square', content: 'B', lat: -39.65983, lon: -72.94873},
  {state: 'square', content: 'C', lat: -39.66054, lon: -72.94886},
  {state: 'square', content: 'D', lat: -39.66033, lon: -72.94837},
  {state: 'square', content: 'E', lat: -39.66078, lon: -72.94851},
  {state: 'square', content: 'F', lat: -39.66094, lon: -72.94803},
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
  } else {
    gpsMarker.setLatLng(e.latlng);
  }
}

map.on('locationfound', onLocationFound);

// On location error
function onLocationError(e) {
  alert("No se pudo determinar su ubicación");
}

map.on('locationerror', onLocationError);