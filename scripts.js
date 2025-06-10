
  // Initialize map
  var map = L.map('map').setView([34.5, 22.0], 6); // Center on tunisia

  // Add OpenStreetMap tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Add markers
  L.marker([36.811485785684454, 10.184532681633293]).addTo(map).bindPopup("Tunis").openPopup();//Tunis
  L.marker([34.7406, 10.7603]).addTo(map).bindPopup("Sfax");
  L.marker([33.148860923524225, 11.562069688770785]).addTo(map).bindPopup("Maaber ras jedir");
  L.marker([31.7683, 35.2137]).addTo(map).bindPopup("نقطة الوصول").openPopup(); // Jerusalem

var tunis = [36.8065, 10.1815];
var BebAlioua =[36.793631625342094, 10.179642106354343];
var JebalJloud =[36.7722538710233, 10.213180837255667];
var hammamet =[36.427786258883536, 10.57387087421142];
var Enfidha =[36.13344722043583, 10.379330718051479];
var Skhira = [34.297535284195234, 10.070014382566296];
var sfax = [34.7406, 10.7603];
var test =[34.16106578461322, 9.988309564362206];
var gabes =[33.893337433497585, 10.062568079280002];
var Benguerdene = [33.079575508663595, 11.309764384360648];
var rassjedir =[33.15136055585746, 11.548571421163167];
var Ezawia =[32.88306918366944, 12.061049763353658];
var test2 =[32.74204947045379, 12.651288151338482];
var Triploi=[32.85465070048412, 13.17902969436673];
var test3=[32.802250627801406, 13.53586148893811];
var test4=[32.70901865062443, 14.030113967018469];
var Misrata=[32.35178656050827, 15.049399749529856];
var test5 = [31.447033793265227, 15.267823755506381];
var test6=[31.186613017259404, 16.56396617672304];
var test7=[32.152863634448124, 20.08714844040725];


var road = L.polyline([tunis, BebAlioua, JebalJloud, hammamet, Enfidha, sfax, Skhira, test, gabes, Benguerdene, rassjedir, Ezawia,test2,Triploi,test3,test4,Misrata,test5,test6,test7], {
    color: 'red',        // Dark gray for road surface
    weight: 12,           // Wider base
    opacity: 0.2,
    lineCap: 'round',
    lineJoin: 'round'
}).addTo(map);

var roadBorders = L.polyline([tunis, BebAlioua, JebalJloud, hammamet, Enfidha, sfax, Skhira, test, gabes, Benguerdene, rassjedir, Ezawia], {
    color: 'red',
    weight: 14,
    opacity: 0.2,
    lineCap: 'round',
    lineJoin: 'round'
}).addTo(map);

