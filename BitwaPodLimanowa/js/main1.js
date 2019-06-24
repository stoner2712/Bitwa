///// FUNKCJE ////
function openNav() {
  document.getElementById("sidebar").style.height = "100%";
  document.getElementById("title").style.visibility = "visible";
  document.getElementById("lang").style.visibility = "visible";
  document.getElementById("lang").style.height = "100px";
  document.getElementById("lang").style.transition = "0.7s";
  document.getElementById("lang").style.transitionDelay = "0.2s";
  document.getElementById("sidebar-nav").style.visibility = "visible";
  document.getElementById("sidebar-img").style.height = "250px";
  document.getElementById("sidebar-text").style.transitionDelay = "0.3s";
  $('.sidebar-text').removeClass('displays');
}

function closeNav() {
  document.getElementById("sidebar").style.height = "0px";
  document.getElementById("title").style.visibility = "hidden";
  document.getElementById("lang").style.visibility = "hidden";
  document.getElementById("lang").style.height = "0px";
  document.getElementById("lang").style.transition = "0s";
  document.getElementById("sidebar-img").style.height = "0px";
  document.getElementById("sidebar-nav").style.visibility = "hidden";
  document.getElementById("sidebar-text").style.transitionDelay = "0s";
}

// create the slippy map
var map = L.map('image-map').setView([0,0],3.5);
     L.tileLayer('maps/{z}/{x}/{y}.png',{
       minZoom: 3.5,
       maxZoom: 7,
       zoomDelta: 0.25,
       continuousWorld: false,
       noWrap: true,
       crs: L.CRS.Simple,
     }).addTo(map);

var southWest = new L.LatLng(-56.9,-90),
    northEast = new L.LatLng(56.9,90),
    webkitSpeechRecognition
    bounds = new L.LatLngBounds(southWest, northEast);
    map.setMaxBounds(bounds);

    var overlay1 = new L.ImageOverlay("img/faza1.png", bounds, {
      opacity: 1
    });
    map.addLayer(overlay1);
    var overlay2 = new L.ImageOverlay("img/faza2.png", bounds, {
      opacity: 1
    });
    var overlay3 = new L.ImageOverlay("img/faza3.png", bounds, {
      opacity: 1
    });
    var overlay4 = new L.ImageOverlay("img/faza4.png", bounds, {
      opacity: 1
    });
//IKONY ///////////////////////////////////////////////////////

var LP = L.icon({
    iconUrl: 'sylwetki/LP.png',
    iconSize:     [33, 70], // size of the icon
});
var ZRl = L.icon({
  iconUrl: 'sylwetki/ZRl.png',
  iconSize:     [32, 70], // size of the icon
});
var ZR = L.icon({
  iconUrl: 'sylwetki/ZR.png',
  iconSize:     [25, 70], // size of the icon
});
var kozak2 = L.icon({
  iconUrl: 'sylwetki/kozak2.png',
  iconSize:     [63, 85], // size of the icon 
});
var DK = L.icon({
  iconUrl: 'sylwetki/6_10_11DK2.png',
  iconSize:     [31, 70], // size of the icon
});
var DP = L.icon({
  iconUrl: 'sylwetki/3_8_30_39DP.png',
  iconSize:     [31, 69], // size of the icon
});
var DR = L.icon({
  iconUrl: 'sylwetki/47_DR2.png',
  iconSize:     [29, 70], // size of the icon
});
var DL = L.icon({
  iconUrl: 'sylwetki/13_45DL.png',
  iconSize:     [34, 70], // size of the icon
});
var KUCAK = L.icon({
  iconUrl: 'sylwetki/5.png',
  iconSize:     [37, 55], // size of the icon
});

var DPblask = L.icon({
  iconUrl: 'sylwetki/DPblask.png',
  iconSize:     [31, 69],
});
var DKblask = L.icon({
  iconUrl: 'sylwetki/DKblask.png',
  iconSize:     [31, 70], // size of the icon
});
var LPblask = L.icon({
  iconUrl: 'sylwetki/LPblask.png',
  iconSize:     [33, 70], // size of the icon
});
// IKONY PUNKTOW NA MAPIE /////////////////////////////////////////

var marker1 = L.icon({
  iconUrl: 'img/scroll.png',
  iconSize:     [53.4, 60.5], // size of the icon  
});
var marker2 = L.icon({
  iconUrl: 'img/scroll.png',
  iconSize:     [53.4, 60.5], // size of the icon  
});
var marker3 = L.icon({
  iconUrl: 'img/scroll.png',
  iconSize:     [53.4, 60.5], // size of the icon  
});
var marker4 = L.icon({
  iconUrl: 'img/scroll.png',
  iconSize:     [53.4, 60.5], // size of the icon
});
var marker5 = L.icon({
  iconUrl: 'img/scroll.png',
  iconSize:     [53.4, 60.5], // size of the icon  
});
var marker6 = L.icon({
  iconUrl: 'img/scroll.png',
  iconSize:     [53.4, 60.5], // size of the icon  
});
var marker7 = L.icon({
  iconUrl: 'img/scroll.png',
  iconSize:     [53.4, 60.5], // size of the icon  
});
var marker8 = L.icon({
  iconUrl: 'img/scroll.png',
  iconSize:     [53.4, 60.5], // size of the icon  
});
var marker9 = L.icon({
  iconUrl: 'img/scroll.png',
  iconSize:     [53.4, 60.5], // size of the icon  
});
var marker10 = L.icon({
  iconUrl: 'img/scroll.png',
  iconSize:     [53.4, 60.5], // size of the icon  
});
//PUNKTY NA MAPIE OD 1-10 /////////////////////////////////////////  
L.marker([-17.5, 19.7], {
    icon:marker1
}).addTo(map).on('click', function(){
  openNav();
  przycisk1();
});

L.marker([-11.7, 15.3], {
  icon:marker2
}).addTo(map).on('click', function(){
openNav();
przycisk2();
});

L.marker([-5, -1.1], {
  icon:marker3
}).addTo(map).on('click', function(){
openNav();
przycisk3();
});

L.marker([15.75, -24.4], {
  icon:marker4
}).addTo(map).on('click', function(){
openNav();
przycisk4();
});

L.marker([28.25, 21.85], {
  icon:marker5
}).addTo(map).on('click', function(){
openNav();
przycisk5();
});

L.marker([-21.57, 15.84], {
  icon:marker6
}).addTo(map).on('click', function(){
openNav();
przycisk6();
});

L.marker([-22.16, 59.5], {
  icon:marker7
}).addTo(map).on('click', function(){
openNav();
przycisk7();
});

L.marker([-19.5, -12.1], {
  icon:marker8
}).addTo(map).on('click', function(){
openNav();
przycisk8();
});

L.marker([-32.3, 3.58], {
  icon:marker9
}).addTo(map).on('click', function(){
openNav();
przycisk9();
});

L.marker([-22.15, 31.94], {
  icon:marker10
}).addTo(map).on('click', function(){
openNav();
przycisk10();
});

//////////// TEST MARKER /////
var testMarker = L.marker([20, 20],{
    draggable: true
}).addTo(map).bindPopup('');

testMarker.on('dragend', function(e){
    testMarker.getPopup().setContent('Kordy: ' + testMarker.getLatLng().toString()+ '<br />'
    + 'Pixel: ' + map.project(testMarker.getLatLng(), map.getMaxZoom().toString()))
    .openOn(map);
});


var header = document.getElementById("menuFaz");
var btns = header.getElementsByTagName("img");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("activeFaz");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" activeFaz", "");
    }
    this.className += " activeFaz";
  });
}

var LPrush = [
  [-19.248922, -14.919434],
  [-17.539297, 2.900391],
  [-21.677848, 29.761963]
];

var MyPLrush = L.Marker.movingMarker(LPrush,
  [3000, 3000,], {
    icon:LPblask
  }).on('click', function(){
    openNav();
    przycisk13();
});

var ZRlrush0 = [
  [30.069094, -37.63916]
];

var MyZRlrush0  = L.Marker.movingMarker(ZRlrush0 ,
  [3000, 3000,], {
    icon:ZRl
  });

  var ZRlrush01 = [
    [23.765237, 25.334473]
  ];
  
  var MyZRlrush01  = L.Marker.movingMarker(ZRlrush01 ,
    [3000, 3000,], {
      icon:ZRl
});

var ZRlrush = [
  [-14.562318, 8.701172],
  [-14.563318, 8.702172],
  [-20.066251, 48.48266]
];

var MyZRlrush = L.Marker.movingMarker(ZRlrush,
  [3000, 3000,], {
    icon:ZRl
});

var ZRlrush2 = [
  [1.45004, -5.361328],
  [1.45104, -5.361428],
  [23.513626, 2.636719]
];

var MyZRlrush2 = L.Marker.movingMarker(ZRlrush2,
  [3000, 3000,], {
    icon:ZRl
});

var ZRlrush3 = [
  [4.289404, -19.67871],
  [4.289504, -19.67971],
  [19.149301, -16.26416]
];

var MyZRlrush3 = L.Marker.movingMarker(ZRlrush3,
  [3000, 3000,], {
    icon:ZRl
});

var ZRrushv0 = [
  [19.55979, -42.802734]
];

var MyZRrushv0 = L.Marker.movingMarker(ZRrushv0,
  [3000, 3000,], {
    icon:ZR
  });

var ZRrushv01 = [
  [25.482951, 51.218262]
];

var MyZRrushv01 = L.Marker.movingMarker(ZRrushv01,
  [3000, 3000,], {
    icon:ZR
});


var ZRrush = [
    [-23.493477, 12.359619],
    [-23.493577, 12.359719],
    [-24.557116, 43.868408]
];
  
var MyZRrush = L.Marker.movingMarker(ZRrush,
    [3000, 3000,], {
      icon:ZR
});

var ZR2rush = [
  [2.701635, -12.44751],
  [2.701735, -12.44851],
  [19.828726, -9.118653]
];

var MyZR2rush = L.Marker.movingMarker(ZR2rush,
  [3000, 3000,], {
    icon:ZR
});

var ZR3rush = [
  [5.208931, -24.5127],
  [5.209931, -24.5227],
  [15.9275, -22.317627]
];

var MyZR3rush = L.Marker.movingMarker(ZR3rush,
  [3000, 3000,], {
    icon:ZR
});

var kozak2v03rush = [
  [-36.809285, 20.917969]
];

var Mykozak2v03rush = L.Marker.movingMarker(kozak2v03rush,
  [3000, 3000,], {
    icon:kozak2
});


var kozak2v01rush = [
  [38.385913, -31.113281]
];

var Mykozak2v01rush = L.Marker.movingMarker(kozak2v01rush,
  [3000, 3000,], {
    icon:kozak2
});

var kozak2v0rush = [
  [8.624472, -36.958008]
];

var Mykozak2v0rush = L.Marker.movingMarker(kozak2v0rush,
  [3000, 3000,], {
    icon:kozak2
});

var kozak2rush = [
  [-10.5, 25.136719],
  [-10.501, 25.137719],
  [-16.325548, 50.659082]
];

var Mykozak2rush = L.Marker.movingMarker(kozak2rush,
  [3000, 3000,], {
    icon:kozak2
});

var kozak2v2rush = [
  [0.505365, 6.141357],
  [0.506365, 6.142357],
  [18.062312, 12.788086]
];

var Mykozak2v2rush = L.Marker.movingMarker(kozak2v2rush,
  [3500, 3000,], {
    icon:kozak2
});

var DKrush = [
  [-15.876809, -15.479736],
  [-11.016689, 15.205078],
  [13.496473, 18.94043],
  [21.555284, 54.151611]
];

var MyDKrush = L.Marker.movingMarker(DKrush,
  [3000, 3000, 2000], {
    icon:DK
});

var DKrush2 = [
  [-13.10088, -17.226563],
  [-4.882994, 14.490967],
  [14.349548, 14.974365]
];

var MyDKrush2 = L.Marker.movingMarker(DKrush2,
  [3000, 3000], {
    icon:DK
});

var DRrush1 = [
  [-20.848545, -44.857178],
  [-7.743651, -14.0625],
  [0.878872, 15.996094],
  [11.415418, 16.21582]
];
var MyDRrush1 = L.Marker.movingMarker(DRrush1,
  [3000, 3000, 2000], {
    icon:DR
});

var DPrush = [
  [-21.698265, -41.484375],
  [-8.90678, -14.523926],
  [-3.973861, 11.766357],
  [21.983801, -1.186523]
];

var MyDPrush = L.Marker.movingMarker(DPrush,
  [3000, 3000, 2000], {
    icon:DP
});  

var DPrush2 = [
  [-18.937464, -45.065918],
  [-1.58183, -18.544922],
  [11.049038, -12.348633]
];

var MyDPrush2 = L.Marker.movingMarker(DPrush2,
  [3000, 3000], {
    icon:DP
});

var DLrush = [
  [-17.193275, -42.253418],
  [1.625758, -27.685547],
  [13.539201, -24.620361]
];

var MyDLrush = L.Marker.movingMarker(DLrush,
  [3000, 3000], {
    icon:DL
});

var DLrush1 = [
  [-4.028659, -61.951904]
];

var MyDLrush1 = L.Marker.movingMarker(DLrush1,
  [3000, 3000], {
    icon:DL
});
var DLrush2 = [
  [19.487308, -63.797607]
];

var MyDLrush2 = L.Marker.movingMarker(DLrush2,
  [3000, 3000], {
    icon:DL
});

var KUCAKrush1 = [
[2.569939, -59.315186]
];

var MyKUCAKrush1 = L.Marker.movingMarker(KUCAKrush1,
[3000, 3000], {
  icon:KUCAK
});

var KUCAKrush2 = [
  [12.768946, -59.0625]
];

var MyKUCAKrush2 = L.Marker.movingMarker(KUCAKrush2,
  [3000, 3000], {
    icon:KUCAK
});
var ZnolnierzeFaza1 = L.layerGroup([MyDKrush, MyDKrush2, MyDLrush, 
  MyDLrush1, MyDLrush2, MyDPrush, MyDPrush2, MyDRrush1, MyKUCAKrush1, 
  MyKUCAKrush2, MyPLrush, MyZR2rush, MyZR3rush, MyZRlrush, MyZRlrush0,
  MyZRlrush01, MyZRlrush2, MyZRlrush3, MyZRrush, MyZRrushv0, MyZRrushv01,
  Mykozak2rush, Mykozak2v01rush, Mykozak2v03rush, Mykozak2v0rush,
  Mykozak2v2rush
]);
map.addLayer(ZnolnierzeFaza1);

//////////////  RUCH 2 JEDNOSTEK ////////////

var KucakMove2 = [
  [24.106647, -44.868164]
  ];
  
  var TyKucakMove2 = L.Marker.movingMarker(KucakMove2,
  [3000, 3000], {
    icon:KUCAK
});

var KucakMove21 = [
  [40.996484, -46.010742]
  ];
  
  var TyKucakMove21 = L.Marker.movingMarker(KucakMove21,
  [3000, 3000], {
    icon:KUCAK
});

var DLMove2 = [
  [33.137551, -45]
  ];
  
  var TyDLMove2 = L.Marker.movingMarker(DLMove2,
  [3000, 3000], {
    icon:DL
});

var DLMove21 = [
  [46.709736, -46.010742]
  ];
  
  var TyDLMove21 = L.Marker.movingMarker(DLMove21,
  [3000, 3000], {
    icon:DL
});

var ZRlMove2 = [
  [53.343993, -24.851074]
  ];
  
  var TyZRlMove2 = L.Marker.movingMarker(ZRlMove2,
  [3000, 3000], {
    icon:ZRl
});

var ZRMove2 = [
  [46.679594, -28.806152]
  ];
  
  var TyZRMove2 = L.Marker.movingMarker(ZRMove2,
  [3000, 3000], {
    icon:ZR
});

var KozakMove2 = [
  [38.873929, -29.970703]
  ];
  
  var TyKozakMove2 = L.Marker.movingMarker(KozakMove2,
  [3000, 3000], {
    icon:kozak2
});

var ZRMove21 = [
  [28.497661, -15.710449]
  ];
  
  var TyZRMove21 = L.Marker.movingMarker(ZRMove21,
  [3000, 3000], {
    icon:ZR
});

var ZRlMove21 = [
  [29.017748, -24.543457]
  ];
  
  var TyZRlMove21 = L.Marker.movingMarker(ZRlMove21,
  [3000, 3000], {
    icon:ZRl
});

var DLMove22 = [
  [13.410994, -25.686035],
  [24.557116, -24.180908]
  ];
  
  var TyDLMove22 = L.Marker.movingMarker(DLMove22,
  [3000, 3000], {
    icon:DL
});

var DPMove2 = [
  [9.362353, -10.898438],
  [18.083201, -17.402344],
  [24.846565, -17.907715]
  ];
  
  var TyDPMove2 = L.Marker.movingMarker(DPMove2,
  [1500, 1500], {
    icon:DP
});

var DPMove21 = [
  [20.457896, 0.175781],
  [25.770214, -2.845459]
  ];
  
  var TyDPMove21 = L.Marker.movingMarker(DPMove21,
  [3000, 3000], {
    icon:DP
});

var ZRlMove22 = [
  [28.981735, 0.021973]
  ];
  
  var TyZRlMove22 = L.Marker.movingMarker(ZRlMove22,
  [3000, 3000], {
    icon:ZRl
});

var ZRMove22 = [
  [30.448674, 13.117676]
  ];
  
  var TyZRMove22 = L.Marker.movingMarker(ZRMove22,
  [3000, 3000], {
    icon:ZR
});

var DRMove2 = [
  [13.496473, 14.80957],
  [27.586198, 21.005859]
  ];
  
  var TyZDRMove2 = L.Marker.movingMarker(DRMove2,
  [3000, 3000], {
    icon:DR
});

var ZRlMove23 = [
  [29.42046, 33.42041],
  [23.785345, 26.367188]
  ];
  
  var TyZRlMove23 = L.Marker.movingMarker(ZRlMove23,
  [3000, 3000], {
    icon:ZRl
});

var DKMove2 = [
  [16.930705, 19.555664],
  [18.354526, 37.924805],
  [1.01069, 42.275391],
  [15.24179, 27.158203]
  ];
  
  var TyDKMove2 = L.Marker.movingMarker(DKMove2,
  [3000, 2000, 1500], {
    icon:DK
});

var KozakMove21 = [
  [29.267233, 40.627441],
  [20.200346, 33.42041]
  ];
  
  var TyKozakMove21 = L.Marker.movingMarker(KozakMove21,
  [3000, 2000, 1500], {
    icon:kozak2
});

var ZRMove23 = [
  [27.780772, 50.29541],
  [16.709863, 42.736816]
  ];
  
  var TyZRMove23 = L.Marker.movingMarker(ZRMove23,
  [3000, 3000], {
    icon:ZR
});

var DKMove21 = [
  [22.654572, 52.283936],
  [9.308149, 41.638184]
  ];
  
  var TyDKMove21 = L.Marker.movingMarker(DKMove21,
  [3000, 2000, 1500], {
    icon:DK
});

var ZRlMove24 = [
  [26.02717, 62.698975],
  [9.394871, 51.339111]
  ];
  
  var TyZRlMove24 = L.Marker.movingMarker(ZRlMove24,
  [3000, 2000, 1500], {
    icon:ZRl
});

var DKMove22 = [
  [-50.903033, 13.007813],
  [-47.724545, 20.039063],
  [-52.160455, 32.519531],
  [-44.684277, 54.84375]
  ];
  
  var TyDKMove22 = L.Marker.movingMarker(DKMove22,
  [2000, 2000, 2000], {
    icon:DKblask
}).on('click', function(){
  openNav();
  przycisk11();
});

var LPMove2 = [
  [-23.825551, 31.442871],
  [-21.820708, 59.326172],
  [-20.95118, 33.618164]
  ];
  
  var TyLPMove2 = L.Marker.movingMarker(LPMove2,
  [3200, 3000], {
    icon:LPblask
}).on('click', function(){
  openNav();
  przycisk13();
});

var KozakMove22 = [
  [-12.125264, 67.587891],
  ];
  
  var TyKozakMove22 = L.Marker.movingMarker(KozakMove22,
  [3000,3000], {
    icon:kozak2
});

var KozakMove23 = [
  [-44.902578, 62.314453],
  ];
  
  var TyKozakMove23 = L.Marker.movingMarker(KozakMove23,
  [3000,3000], {
    icon:kozak2
});

var ZRMove24 = [
  [-26.784847, 84.155],
  [-26.39187, 65.390625],
  [-25.185059, 46.340332]
  ];
  
  var TyZRMove24 = L.Marker.movingMarker(ZRMove24,
  [3000,3000], {
    icon:ZR
});

var ZRlMove25 = [
  [-32.324276, 83.243408],
  [-31.54109, 63.94043],
  [-27.819645, 44.472656]
  ];
  
  var TyZRlMove25 = L.Marker.movingMarker(ZRlMove25,
  [3000,3000], {
    icon:ZRl
});

var ZRMove25 = [
  [-38.255436, 82.672119],
  [-36.738884, 63.204346],
  [-33.760882, 42.143555]
  ];
  
  var TyZRMove25 = L.Marker.movingMarker(ZRMove25,
  [3000,3000], {
    icon:ZR
});

var ZnolnierzeFaza2 = L.layerGroup([TyKucakMove2,TyKucakMove21,TyDLMove2,
  TyDLMove21,TyZRlMove2,TyZRMove2,TyKozakMove2,TyZRMove21,TyZRlMove21,
  TyDLMove22,TyDPMove2,TyDPMove21,TyZRlMove22,TyZRMove22,TyZDRMove2,
  TyZRlMove23,TyDKMove2,TyKozakMove21,TyZRMove23,TyDKMove21,TyZRlMove24,
  TyDKMove22,TyLPMove2,TyKozakMove22,TyKozakMove23,TyZRMove24,TyZRMove25,
  TyZRlMove25 ]);

var DLmove3 = [
    [51.590723, -44.406738],
    [51.991646, -21.544189]
    ];
    
    var WyDLmove3 = L.Marker.movingMarker(DLmove3,
    [3000,3000], {
      icon:DL
});

var KucakMove31 = [
  [47.070122, -43.901367],
  [48.545705, -21.489258]
  ];
  
  var WyKucakMove31 = L.Marker.movingMarker(KucakMove31,
  [3000,3000], {
    icon:KUCAK
});

var DPMove32 = [
  [40.63063, -44.34082],
  [42.488302, -20.126953]
  ];
  
  var WyDPMove32 = L.Marker.movingMarker(DPMove32,
  [3000,3000], {
    icon:DP
});

var KucakMove32 = [
  [30.675715, -45.615234],
  [36.5626, -28.619385]
  ];
  
  var WyKucakMove32 = L.Marker.movingMarker(KucakMove32,
  [3000,3000], {
    icon:KUCAK
});

var DPMove33 = [
  [25.403585, -43.791504],
  [19.352611, -22.390137],
  [21.637005, -7.163086],
  [32.194209, -8.789063],
  [36.580247, 3.317871]
  ];
  
  var WyDPMove33 = L.Marker.movingMarker(DPMove33,
  [1000,1000,1000,3000], {
    icon:DP
});

var DLMove31 = [
  [22.014361, -25.839844],
  [40.128491, -25.806885],
  [25.681137, 18.237305]
  ];
  
  var WyDLMove31 = L.Marker.movingMarker(DLMove31,
  [3000,3000], {
    icon:DL
});

var DPMove34 = [
  [24.926295, -15.79834],
  [42.326062, -6.37207],
  [40.613952, 2.438965]
  ];
  
  var WyDPMove34 = L.Marker.movingMarker(DPMove34,
  [3000,3000], {
    icon:DP
});

var DPMove35 = [
  [24.996016, -0.340576],
  [31.297328, 7.976074],
  ];
  
  var WyDPMove35 = L.Marker.movingMarker(DPMove35,
  [5000,3000], {
    icon:DP
});

var DRMove31 = [
  [29.313459, 23.437207],
  ];
  
  var WyDRMove31 = L.Marker.movingMarker(DRMove31,
  [5000,3000], {
    icon:DR
});

var DKMove31 = [
  [15.802825, 25.015869],
  [3.787522, 20.324707]
  ];
  
  var WyDKMove31 = L.Marker.movingMarker(DKMove31,
  [3000,3000], {
    icon:DK
});

var DKMove32 = [
  [7.885147, 38.562012],
  [11.372339, 26.081543]
  ];
  
  var WyDKMove32 = L.Marker.movingMarker(DKMove32,
  [3000,3000], {
    icon:DK
});

var DLMove32 = [
  [-4.127285, 0.087891],
  [-3.337954, 11.821289],
  [12.125264, 20.983887]
  ];
  
  var WyDLMove32 = L.Marker.movingMarker(DLMove32,
  [1500,1500], {
    icon:DL
});

var DPMove36 = [
  [-6.751896, 1.384277],
  [-7.580328, 12.348633],
  [-17.916023, 9.338379],
  [-18.958246, 14.172363]
  ];
  
  var WyDPMove36 = L.Marker.movingMarker(DPMove36,
  [1500,1500,1500], {
    icon:DPblask
}).on('click', function(){
  openNav();
  przycisk12();
});

var LPMove31 = [
  [-21.309846, 31.179199],
  [-21.319846, 31.189199],
  [-13.282719, 16.633301],
  [-28.401065, 2.351074],
  [-35.101934, 1.450195]
  ];
  
  var WyLPMove31 = L.Marker.movingMarker(LPMove31,
  [3000,1500,2000,1000], {
    icon:LPblask
}).on('click', function(){
  openNav();
  przycisk13();
});

var DKMove33 = [
  [-45.859412, 51.679688],
  [-39.504041, 35.683594],
  [-23.281719, 29.619141],
  [-16.930705, 17.314453]
  ];
  
  var WyDKMove33 = L.Marker.movingMarker(DKMove33,
  [1500,1500,1000], {
    icon:DKblask
}).on('click', function(){
  openNav();
  przycisk11();
});

var KozakMove31 = [
  [55.128649, -32.453613],
  [55.138649, -32.463613],
  [53.896432, -4.790039]
  ];
  
  var WyKozakMove31 = L.Marker.movingMarker(KozakMove31,
  [1000,3000], {
    icon:kozak2
});

var ZRMove31 = [
  [51.37178, -33.33252],
  [51.38178, -33.34252],
  [49.75288, -5.361328]
  ];
  
  var WyZRMove31 = L.Marker.movingMarker(ZRMove31,
  [1000,3000], {
    icon:ZR
});

var ZRlMove31 = [
  [42.55308, -33.310547],
  [42.55408, -33.311547],
  [47.338823, -5.273438]
  ];
  
  var WyZRlMove31 = L.Marker.movingMarker(ZRlMove31,
  [1000,3000], {
    icon:ZRl
});

var ZRlMove32 = [
  [27.916767, -15.820313],
  [46.679594, -3.120117]
  ];
  
  var WyZRlMove32 = L.Marker.movingMarker(ZRlMove32,
  [3000,3000], {
    icon:ZRl
});

var KozakMove32 = [
  [32.916485, -6.240234],
  [32.926485, -6.250234],
  [46.274886, 1.054688]
  ];
  
  var WyKozakMove32 = L.Marker.movingMarker(KozakMove32,
  [1000,3000], {
    icon:kozak2
});

var KozakMove33 = [
  [32.119801, -2.197266],
  [32.129801, -2.198266],
  [39.67337, 8.327637]
  ];
  
  var WyKozakMove33 = L.Marker.movingMarker(KozakMove33,
  [1000,3000], {
    icon:kozak2
});

var ZRlMove33 = [
  [29.22889, 1.054688],
  [35.692995, 9.997559]
  ];
  
  var WyZRlMove33 = L.Marker.movingMarker(ZRlMove33,
  [3000,3000], {
    icon:ZRl
});

var ZRlMove34 = [
  [29.22889, 1.054688],
  [25.878994, -2.834473],
  [35.692995, 9.997559]
  ];
  
  var WyZRlMove34 = L.Marker.movingMarker(ZRlMove34,
  [1000,3000], {
    icon:ZRl
});

var ZRMove35 = [
  [26.824071, 6.987305],
  [32.026706, 13.798828]
  ];
  
  var WyZRMove35 = L.Marker.movingMarker(ZRMove35,
  [3000,3000], {
    icon:ZR
});

var ZRMove36 = [
  [27.80021, 26.499023],
  ];
  
  var WyZRMove36 = L.Marker.movingMarker(ZRMove36,
  [3000,3000], {
    icon:ZR
});

var ZRlMove35 = [
  [21.371244, 27.949219],
  [16.972741, 20.874023]
  ];
  
  var WyZRlMove35 = L.Marker.movingMarker(ZRlMove35,
  [3000,3000], {
    icon:ZRl
});

var KozakMove34 = [
  [22.220966, 32.255859],
  ];
  
  var WyKozakMove34 = L.Marker.movingMarker(KozakMove34,
  [3000,3000], {
    icon:kozak2
});

var ZRMove37 = [
  [16.636192, 32.080078],
  [14.040673, 27.487793]
  ];
  
  var WyZRMove37 = L.Marker.movingMarker(ZRMove37,
  [3000,3000], {
    icon:ZR
});

var ZRlMove36 = [
  [12.039321, 40.693359],
  ];
  
  var WyZRlMove36 = L.Marker.movingMarker(ZRlMove36,
  [3000,3000], {
    icon:ZRl
});

var ZRMove38 = [
  [-42.714732, 54.316406],
  [-49.95122, 30.366211],
  [-42.940339, 3.208008]
  ];
  
  var WyZRMove38 = L.Marker.movingMarker(ZRMove38,
  [3000,3000], {
    icon:ZR
});

var ZRlMove37 = [
  [-46.286224, 58.359375],
  [-51.013755, 31.992188],
  [-43.572432, 0.516357]
  ];
  
  var WyZRlMove37 = L.Marker.movingMarker(ZRlMove37,
  [3000,3000], {
    icon:ZRl
});

var ZRlMove311 = [
  [-20.262197, 45.439453],
  [-17.895114, 35.727539],
  [-9.75237, 25.751953]
  ];
  
  var WyZRlMove311 = L.Marker.movingMarker(ZRlMove311,
  [3000,3000], {
    icon:ZRl
});

var KozakMove35 = [
  [-28.304381, 43.945313],
  [-23.966176, 33.925781],
  [-12.318536, 23.027344]
  ];
  
  var WyKozakMove35 = L.Marker.movingMarker(KozakMove35,
  [3000,3000], {
    icon:kozak2
});

var ZRMove39 = [
  [-35.603719, 38.144531],
  [-27.049342, 32.025146],
  [-22.43134, 17.709961]
  ];
  
  var WyZRMove39 = L.Marker.movingMarker(ZRMove39,
  [3000,3000], {
    icon:ZR
});

var ZRMove312 = [
  [28.149503, -29.794922],
  [40.363288, -11.865234],
  ];
  
  var WyZRMove312 = L.Marker.movingMarker(ZRMove312,
  [3000,3000], {
    icon:ZR
});

var KozakMove36 = [
  [37.788081, -32.958984],
  [43.389082, -10.546875],
  ];
  
  var WyKozakMove36 = L.Marker.movingMarker(KozakMove36,
  [3000,3000], {
    icon:kozak2
});

var ZnolnierzeFaza3 = L.layerGroup([WyDLmove3,WyKucakMove31,WyDPMove32,
  WyKucakMove32,WyDPMove33,WyDLMove31,WyDPMove34,WyDPMove35,WyDRMove31,
  WyDKMove31,WyDKMove32,WyDLMove32,WyDPMove36,WyLPMove31,WyDKMove33,
  WyKozakMove31,WyZRMove31,WyZRlMove31,WyZRlMove32,WyKozakMove32,WyKozakMove33,
  WyZRlMove34,WyZRMove35,WyZRMove36,WyZRlMove35,WyKozakMove34,WyZRMove37,
  WyZRlMove36,WyZRMove38,WyZRlMove37,WyKozakMove35,WyZRMove39,WyZRlMove311,
  WyZRMove312,WyKozakMove36
]);

var KucakMove41 = [
  [52.187405, -7.734375],
  [52.288323, 43.648682]
  ];
  
  var WyKucakMove41 = L.Marker.movingMarker(KucakMove41,
  [3000,3000], {
    icon:KUCAK
});

var DLMove41 = [
  [47.398349, -6.767578],
  [49.653405, 44.318848]
  ];
  
  var WyDLMove41 = L.Marker.movingMarker(DLMove41,
  [3000,3000], {
    icon:DL
});

var DPMove41 = [
  [42.455888, -6.503906],
  [46.286224, 45.219727]
  ];
  
  var WyDPMove41 = L.Marker.movingMarker(DPMove41,
  [3000,3000], {
    icon:DP
});

var ZRMove41 = [
  [54.72462, 6.569824],
  [53.094024, 56.645508]
  ];
  
  var WyZRMove41 = L.Marker.movingMarker(ZRMove41,
  [3000,3000], {
    icon:ZR
});

var ZRlMove41 = [
  [50.792047, 5.932617],
  [51.169283, 58.271484]
  ];
  
  var WyZRlMove41 = L.Marker.movingMarker(ZRlMove41,
  [3000,3000], {
    icon:ZRl
});

var KozakMove41 = [
  [45.120053, 5.493164],
  [48.632909, 56.865234]
  ];
  
  var WyKozakMove41 = L.Marker.movingMarker(KozakMove41,
  [3000,3000], {
    icon:kozak2
});

var DPMove42 = [
  [39.13006, 0.834961],
  [36.879621, -4.790039],
  [41.343825, 35.024414]
  ];
  
  var WyDPMove42 = L.Marker.movingMarker(DPMove42,
  [1000,3000], {
    icon:DP
});

var DPMove43 = [
  [34.597042, 5.185547],
  [33.063924, -4.042969],
  [37.753344, 38.342285]
  ];
  
  var WyDPMove43 = L.Marker.movingMarker(DPMove43,
  [1000,3000], {
    icon:DP
});

var DPMove44 = [
  [31.484893, 7.77832],
  [29.61167, -2.285156],
  [33.211116, 34.475098]
  ];
  
  var WyDPMove44 = L.Marker.movingMarker(DPMove44,
  [1000,3000], {
    icon:DP
});

var DLMove42 = [
  [26.214591, 14.919434],
  [22.105999, 11.777344],
  [31.128199, 27.597656]
  ];
  
  var WyDLMove42 = L.Marker.movingMarker(DLMove42,
  [1000,3000], {
    icon:DL
});

var DRMove41 = [
  [25.344026, 20.983887],
  [19.145168, 18.896484],
  [29.53523, 44.736328]
  ];
  
  var WyDRMove41 = L.Marker.movingMarker(DRMove41,
  [1000,3000], {
    icon:DR
});

var DLMove43 = [
  [19.47695, 19.863281],
  [26.352498, 42.912598]
  ];
  
  var WyDLMove43 = L.Marker.movingMarker(DLMove43,
  [4000,3000], {
    icon:DL
});

var DKMove41 = [
  [16.804541, 28.212891],
  [21.534847, 42.451172]
  ];
  
  var WyDKMove41 = L.Marker.movingMarker(DKMove41,
  [4000,3000], {
    icon:DK
});

var DKMove42 = [
  [13.154376, 32.34375],
  [20.96144, 46.933594]
  ];
  
  var WyDKMove42 = L.Marker.movingMarker(DKMove42,
  [4000,3000], {
    icon:DK
});

var ZRMove42 = [
  [39.774769, 8.4375],
  [36.102376, -0.483398],
  [46.437857, 57.832031]
  ];
  
  var WyZRMove42 = L.Marker.movingMarker(ZRMove42,
  [1000,3000], {
    icon:ZR
});

var ZRlMove42 = [
  [42.488302, 5.229492],
  [40.010787, -0.615234],
  [47.338823, 60.029297]
  ];
  
  var WyZRlMove42 = L.Marker.movingMarker(ZRlMove42,
  [1000,3000], {
    icon:ZRl
});

var ZRlMove43 = [
  [35.995785, 11.645508],
  [32.361403, 0.703125],
  [43.92955, 57.480469]
  ];
  
  var WyZRlMove43 = L.Marker.movingMarker(ZRlMove43,
  [1000,3000], {
    icon:ZRl
});

var ZRMove43 = [
  [30.372875, 13.886719],
  [29.017748, 2.636719],
  [43.181147, 60.842285]
  ];
  
  var WyZRMove43 = L.Marker.movingMarker(ZRMove43,
  [1000,3000], {
    icon:ZR
});

var KozakMove42 = [
  [30.902225, 20.808105],
  [23.865745, 16.918945],
  [42.016652, 56.030273]
  ];
  
  var WyKozakMove42 = L.Marker.movingMarker(KozakMove42,
  [1000,3000], {
    icon:kozak2
});

var ZRlMove44 = [
  [27.994401, 28.125],
  [20.632784, 24.609375],
  [40.12009, 59.47998]
  ];
  
  var WyZRlMove44 = L.Marker.movingMarker(ZRlMove44,
  [1000,3000], {
    icon:ZRl
});

var KozakMove43 = [
  [21.616579, 36.210938],
  [21.617579, 36.211938],
  [33.72434, 77.607422]
  ];
  
  var WyKozakMove43 = L.Marker.movingMarker(KozakMove43,
  [1000,3000], {
    icon:kozak2
});

var ZRlMove45 = [
  [14.85985, 40.166016],
  [14.85995, 40.166116],
  [31.503629, 80.683594]
  ];
  
  var WyZRlMove45 = L.Marker.movingMarker(ZRlMove45,
  [1000,3000], {
    icon:ZRl
});

var ZRMove44 = [
  [-10.401378, 27.773438],
  [-11.005904, 21.09375],
  [-30.675715, 87.363281]
  ];
  
  var WyZRMove44 = L.Marker.movingMarker(ZRMove44,
  [1000,4000], {
    icon:ZR
});

var ZRlMove46 = [
  [-14.689881, 23.730469],
  [-14.179186, 19.335938],
  [-32.305706, 84.462891]
  ];
  
  var WyZRlMove46 = L.Marker.movingMarker(ZRlMove46,
  [1000,4000], {
    icon:ZRl
});

var ZRMove45 = [
  [-19.352611, 19.951172],
  [-16.594081, 16.918945],
  [-35.675147, 86.396484]
  ];
  
  var WyZRMove45 = L.Marker.movingMarker(ZRMove45,
  [1000,4000], {
    icon:ZR
});

var KozakMove44 = [
  [-23.32208, 17.270508],
  [-23.32308, 17.271508],
  [-36.914764, 83.254395]
  ];
  
  var WyKozakMove44 = L.Marker.movingMarker(KozakMove44,
  [1000,4000], {
    icon:kozak2
});

var ZRlMove47 = [
  [-43.644026, 1.054688],
  [-48.748945, 14.501953],
  [-44.402392, 65.917969],
  [-39.504041, 85.12207]
  ];
  
  var WyZRlMove47 = L.Marker.movingMarker(ZRlMove47,
  [1000,3000,1000], {
    icon:ZRl
});

var ZRMove46 = [
  [-43.133061, 5.317383],
  [-47.931066, 16.962891],
  [-42.875964, 67.236328],
  [-39.095963, 87.978516]
  ];
  
  var WyZRMove46 = L.Marker.movingMarker(ZRMove46,
  [1000,3000,1000], {
    icon:ZR
});

var KozakMove45 = [
  [-44.39845, 73.652344],
  [-44.39745, 73.652444],
  [-41.228249, 87.1875],
  ];
  
  var WyKozakMove45 = L.Marker.movingMarker(KozakMove45,
  [4000,1000], {
    icon:kozak2
});

var DKMove43 = [
  [-13.795406, 16.105957],
  [-15.897942, 18.171387],
  [-29.382175, 63.017578],
  ];
  
  var WyDKMove43 = L.Marker.movingMarker(DKMove43,
  [1000,4000], {
    icon:DKblask
});

var DKMove43 = [
  [-13.795406, 16.105957],
  [-15.897942, 18.171387],
  [-29.382175, 63.017578],
  ];
  
  var WyDKMove43 = L.Marker.movingMarker(DKMove43,
  [1000,4000], {
    icon:DKblask
}).on('click', function(){
  openNav();
  przycisk11();
});

var DPMove45 = [
  [-15.982454, 11.381836],
  [-18.895893, 14.677734],
  [-28.690588, 8.415527],
  ];
  
  var WyDPMove45 = L.Marker.movingMarker(DPMove45,
  [1000,2000], {
    icon:DPblask
}).on('click', function(){
  openNav();
  przycisk12();
});

var LPMove41 = [
  [-35.155846, 3.691406],
  [-45.598666, 3.295898],
  [-50.680797, 39.550781],
  [-39.504041, 60.732422]
  ];
  
  var WyLPMove41 = L.Marker.movingMarker(LPMove41,
  [1000,2000,2000], {
    icon:LPblask
}).on('click', function(){
  openNav();
  przycisk13();
});

var DPMove46 = [
  [-50.680797, 77.695313],
  [-46.513516, 70.861816],
  [-46.514516, 70.862816],
  [-35.782171, 63.720703]
  ];
  
  var WyDPMove46 = L.Marker.movingMarker(DPMove46,
  [1000,3000,1500], {
    icon:DP
});

var DPMove47 = [
  [-49.21042, 80.595703],
  [-47.15984, 76.201172],
  [-47.16984, 76.202172],
  [-38.959409, 69.082031]
  ];
  
  var WyDPMove47 = L.Marker.movingMarker(DPMove47,
  [1000,3000,1500], {
    icon:DP
});

var ZnolnierzeFaza4 = L.layerGroup([WyKucakMove41,WyDLMove41,WyDPMove41,
  WyZRMove41,WyZRlMove41,WyKozakMove41,WyDPMove42,WyDPMove43,WyDPMove44,
  WyDLMove42,WyDRMove41,WyDLMove43,WyDKMove41,WyDKMove42,WyZRMove42,
  WyZRlMove42,WyZRlMove43,WyZRMove43,WyKozakMove42,WyZRlMove44,
  WyKozakMove43,WyZRlMove45,WyZRMove44,WyZRlMove46,WyZRMove45,
  WyKozakMove44,WyZRlMove47,WyZRMove46,WyKozakMove45,WyDKMove43,WyDPMove45,
  WyLPMove41,WyDPMove46,WyDPMove47
]);
//////////////////// START FAZY 1 ///////////////////////
function faza1start(){
if ( !$('.faza1').hasClass('activeFaz')){
  map.removeLayer(overlay2);
  map.removeLayer(ZnolnierzeFaza2);
  map.removeLayer(overlay3);
  map.removeLayer(ZnolnierzeFaza3);
  map.removeLayer(overlay4);
  map.removeLayer(ZnolnierzeFaza4);
  map.addLayer(overlay1);
  map.addLayer(ZnolnierzeFaza1);

      MyPLrush.start();
      MyZRlrush.start();
      MyZRlrush2.start();
      MyZRlrush3.start();
      MyZRrush.start();
      MyZR2rush.start();
      MyZR3rush.start();
      Mykozak2rush.start();
      Mykozak2v2rush.start();
      MyDKrush.start();
      MyDKrush2.start();
      MyDRrush1.start();
      MyDPrush.start();
      MyDPrush2.start();
      MyDLrush.start();
  }
}

function faza2start(){
  if (!$('.faza2').hasClass('activeFaz')){
    map.removeLayer(overlay1);
    map.removeLayer(ZnolnierzeFaza1);
    map.removeLayer(overlay3);
    map.removeLayer(ZnolnierzeFaza3);
    map.removeLayer(overlay4);
    map.removeLayer(ZnolnierzeFaza4);
    map.addLayer(overlay2);
    map.addLayer(ZnolnierzeFaza2);
    
    TyDLMove22.start();
    TyDPMove2.start();
    TyDPMove21.start();
    TyZDRMove2.start();
    TyZRlMove23.start();
    TyDKMove2.start();
    TyKozakMove21.start();
    TyZRMove23.start();
    TyDKMove21.start();
    TyZRlMove24.start();
    TyDKMove22.start();
    TyLPMove2.start();
    TyZRMove24.start();
    TyZRMove25.start();
    TyZRlMove25.start();
  }
}

function faza3start(){
  if (!$('.faza3').hasClass('activeFaz')){
    map.removeLayer(overlay1);
    map.removeLayer(ZnolnierzeFaza1);
    map.removeLayer(overlay2);
    map.removeLayer(ZnolnierzeFaza2);
    map.removeLayer(overlay4);
    map.removeLayer(ZnolnierzeFaza4);
    map.addLayer(overlay3);
    map.addLayer(ZnolnierzeFaza3);
    
    WyDLmove3.start();
    WyKucakMove31.start();
    WyDPMove32.start();
    WyKucakMove32.start();
    WyDPMove33.start();
    WyDLMove31.start();
    WyDPMove34.start();
    WyDPMove35.start();
    WyDKMove31.start();
    WyDKMove32.start();
    WyDLMove32.start();
    WyDPMove36.start();
    WyLPMove31.start();
    WyDKMove33.start();
    WyKozakMove31.start();
    WyZRMove31.start();
    WyZRlMove31.start();
    WyZRlMove32.start();
    WyKozakMove32.start();
    WyKozakMove33.start();
    WyZRlMove33.start();
    WyZRlMove34.start();
    WyZRMove35.start();
    WyZRlMove35.start();
    WyZRMove37.start();
    WyZRMove38.start();
    WyZRlMove37.start();
    WyKozakMove35.start();
    WyZRMove39.start();
    WyZRlMove311.start();
    WyZRMove312.start();
    WyKozakMove36.start();
  }
}

function faza4start(){
  if (!$('.faza4').hasClass('activeFaz')){
    map.removeLayer(overlay1);
    map.removeLayer(ZnolnierzeFaza1);
    map.removeLayer(overlay2);
    map.removeLayer(ZnolnierzeFaza2);
    map.removeLayer(overlay3);
    map.removeLayer(ZnolnierzeFaza3);
    map.addLayer(overlay4);
    map.addLayer(ZnolnierzeFaza4);

    WyKucakMove41.start();
    WyDLMove41.start();
    WyDPMove41.start();
    WyZRMove41.start();
    WyZRlMove41.start();
    WyKozakMove41.start();
    WyDPMove42.start();
    WyDPMove43.start();
    WyDPMove44.start();
    WyDLMove42.start();
    WyDRMove41.start();
    WyDLMove43.start();
    WyDKMove41.start();
    WyDKMove42.start();
    WyZRMove42.start();
    WyZRlMove42.start();
    WyZRlMove43.start();
    WyZRMove43.start();
    WyKozakMove42.start();
    WyZRlMove44.start();
    WyKozakMove43.start();
    WyZRlMove45.start();
    WyZRMove44.start();
    WyZRlMove46.start();
    WyZRMove45.start();
    WyKozakMove44.start();
    WyZRlMove47.start();
    WyZRMove46.start();
    WyKozakMove45.start();
    WyDKMove43.start();
    WyDPMove45.start();
    WyLPMove41.start();
    WyDPMove46.start();
    WyDPMove47.start();
  }
}


// Hide sidebar on map click
  map.on('click', function () {
    closeNav();
  });
  map.on('drag', function () {
    closeNav();
  });


//BAR//
// Aktywny jezyk 
var header = document.getElementById("sidebar-nav");
var btns = header.getElementsByClassName("sidebar-tabs");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}


$(document).ready(function(){
  if ( $('li.sidebar-tabs.pl-tab').hasClass('active') ) {
    $('.pl-side').addClass('sidebar-content-active');
    $('.sl-side').removeClass('sidebar-content-active');
  }
  else{
      $('.pl-side').addClass('sidebar-content-active');
      $('.sl-side').removeClass('sidebar-content-active');
  }
});
var activeSide = function () {
  $('.pl-tab').click(function () {
        $('.sidebar').find('.sidebar-content-active').removeClass('sidebar-content-active');
        $('.pl-side').addClass('sidebar-content-active');
    });
  $('.sl-tab').click(function () {
        $('.sidebar').find('.sidebar-content-active').removeClass('sidebar-content-active');
        $('.sl-side').addClass('sidebar-content-active');
    });
};
activeSide();

/// Teksty punktow ///
  function przycisk1() {
    $(".sidebar-text.pl-side").find("p").html("<b>Jabłoniec</b><br>Wzgórze Jabłoniec wraz z pobliskim Golcowem, stanowiły kluczowe punkty obrony prawego skrzydła grupy generała von Rotha przed nacierającym ze wschodu VIII korpusem rosyjskim. 7 grudnia w te okolice wycofały się jednostki 11 Dywizji Kawalerii generała Bissingena oraz 10 Dywizji Kawalerii, które wraz z rezerwistami landszturmu okopały się na wzniesieniu. 8 grudnia Rosjanie zdobyli część umocnień zmuszając do ucieczki landszturmistów, jednak popołudniu zostały one odbite przez huzarów z 9 pułku, którzy następnego dnia zostali wzmocnieni pułkami piechoty honwedu z 39 Dywizji Piechoty. 10 grudnia walki toczyły się pomiędzy Łysą Górą, Jabłońcem i Golcowem i pomimo trzykrotnych szturmów rosyjskich oddziałom austro-węgierskim udało się utrzymać pozycje. Poranny atak 11 grudnia carskiej 15 dywizji na Jabłoniec, zmusił do odwrotu żołnierzy honwedu, jednak kontratak 9 i 13 pułku huzarów pod dowództwem pułkownika Othmara Muhra (który zginął w walce wraz z 11 oficerami – m.in. hrabią Leonardem Thun-Hohensteinem ) odrzucił Rosjan, w trakcie walki wręcz, na pozycje wyjściowe. Pomimo 3-krotnych kontrataków rosyjskich Węgrzy wytrwali na pozycjach, a rosyjski VIII korpus rozpoczął odwrót w kierunku Nowego Sącza.");
    $(".sidebar-text.sl-side").find("p").html("<b>Jabłoniec</b><br>The Jabłoniec Hill together with nearby Golcow were the key defense points of the right wing of General von Roth's group against the Russian VIII advancing from the east. On December 7, units of the 11th General Bissingen Division of the 11th Cavalry Division and the 10th Cavalry Division withdrew with the reservoirs of the Landturian cluster on the rise. On December 8, the Russians gained a part of the fortifications, forcing the landwurmmen to flee, but in the afternoon they were defeated by the 9th regiment hussars who were reinforced with the infantry regiments of the 39th Infantry Division the next day. On December 10, fights were fought between Łysa Góra, Jablonec and Golcow, and despite the three-time assaults on the Russian Austro-Hungarian troops, the positions were maintained. The morning attack of the tsarist 15th division on Jabłoniec on 11 December forced the retreat of the honed soldiers, however, the counterattack of 9th and 13th Hussars under the command of colonel Othmar Muhr (who died in the fight with 11 officers - including count Leonard Thun-Hohenstein) rejected the Russians , during the melee, to starting positions. Despite three counterattacks, the Russian Hungarians persevered in positions, and the Russian VIII Corps began a retreat towards Nowy Sącz.");
    $('.sidebar-img').html('<img src="img/1.jpg"/>');
    $('.sidebar-lightbox').html('<img src="img/1.jpg"/>');
  };
  function przycisk2() {
    $(".sidebar-text.pl-side").find("p").html("<b>Limanowa</b><br>Limanowa została zajęta przez wojska carskie 21 listopada 1914 r. Dowodzący Rosjanami generał Dragomirov zakwaterował się na plebani, a mieszkańcy miasteczka padli ofiarą rabunków dokonywanych przez 10 dywizję kawalerii generała Kallera, którzy jednak już 3 dni później zostali wyparci przez dragonów austriackich i czołowe bataliony Legionów Polskich. W trakcie bitwy limanowskiej w dworze Marsów mieścił się sztab i stacja telegraficzna, artyleria zajęła stoki Łysej Góry, Lipowego i wzgórza sowlińskie, a główne linie obrony przebiegały ok. 3 km na wschód – wzgórza Jabłoniec i Golców. Działa rosyjskie umiejscowione na Raszówkach i w Kaninie dokonały licznych zniszczeń w południowej części Limanowej: spłonęły m.in. stajnie dworskie i plebańskie oraz słodownia browaru. Po bitwie, w obliczu groźby wybuchu epidemii, poległych żołnierzy grzebano w miejscach najzacieklejszych walk m.in. na wzgórzach Golców i Jabłoniec.");
    $(".sidebar-text.sl-side").find("p").html("<b>Limanowa</b><br>Limanowa was occupied by the tsarist army on November 21, 1914. The Russians commanding General Dragomirov lodged in the presbytery, and the inhabitants of the town fell victim to robberies carried out by the 10th division of General Kaller cavalry, who, however, were driven back by Austrian dragoons and leading battalions of Polish Legions three days later. .During the Limanowa battle in the Mars court there was a staff and a telegraph station, the artillery occupied the slopes of Łysa Góra, Lipowy and Sowlin Hills, and the main defense lines ran about 3 km to the east - the Jabłoniec and Golców hills.The Russian guns located in Raszówki and Kaninach have caused numerous damage in the southern part of Limanowa: burned, among others court and presbytery stables, and malt - house brewery.After the battle, in the face of the threat of an outbreak, the fallen soldiers were buried in places of the fiercest fights, among others on the Golców and Jabłoniec hills.");
    $('.sidebar-img').html('<img src="img/2.jpg"/>');
    $('.sidebar-lightbox').html('<img src="img/2.jpg"/>');
  };
  function przycisk3() {
    $(".sidebar-text.pl-side").find("p").html("<b>Tymbark</b><br>Tymbark stanowił kluczową pozycję w planie operacji limanowsko-łapanowskiej opracowanym przez generała von Rotha. To z tego rejonu dywizje piechoty miały zaatakować na północ, w kierunku Bochni, natomiast grupa dowodzona przez generała barona Gyula Nagy (6 i 11 Dywizja Kawalerii) miała w okolicach Tymbarku osłaniać prawą flankę natarcia wraz z Legionami Polskimi. Miejscowość została zajęta 3 grudnia przez węgierską jazdę zmierzającą do Limanowej i Łososiny Górnej – za nią nadciągnęły 8 Dywizja Piechoty i niemiecka 47 Dywizja Rezerwowa. W kluczowym momencie bitwy 7-8 grudnia, do Tymbarku – będącego zapleczem frontu, koleją przetransportowano 45 Dywizję Landwery i 39 Dywizję Piechoty Honwedu, które wsparły oddziały walczące pod Bytomskiem i Limanową. Po ustaniu walk 13 grudnia na miejscowym cmentarzu parafialnym pochowano oficerów poległych w walce na wzgórzu Jabłoniec (m.in. pułkownika Othmara Muhra).");
    $(".sidebar-text.sl-side").find("p").html("<b>Tymbark</b><br>Tymbark was a key position in the plan of the Limanowa - pawanska operation developed by General von Roth.It was from this area that the infantry divisions were to attack north towards Bochnia, while the group commanded by General Baron Gyula Nagy(6th and 11th Cavalry Division) had near the Tymbark to cover the right flank of attack along with the Polish Legions.The village was occupied on December 3 by a Hungarian cavalry heading for Limanowa and Łososina Górna - behind it came the 8th Infantry Division and the German 47th Reserve Division.At the crucial moment of the battle on 7 - 8 December, Tymbark, which is the backbone of the front, transported the 45th Division of the Landwer and the 39th Infantry Division of the Honved, supported by the units fighting at Bytomskie and Limanowa.After the end of the fighting on 13 December, officers killed in the fight on the Jablonec hill(including colonel Othmar Muhr) were buried at the local parish cemetery.");
    $('.sidebar-img').html('<img src="img/3.jpg"/>');
    $('.sidebar-lightbox').html('<img src="img/3.jpg"/>');
  };
  function przycisk4() {
    $(".sidebar-text.pl-side").find("p").html("<b>Góra Świętego Jana</b><br>Góra św. Jana była strategicznie położoną miejscowością w dolinie rzeki Stradomki, której umiejscowienie na wyniosłym wzgórzu, dawało możliwość kontrolowania skrajnego zachodniego teatru operacji limanowsko-łapanowskiej. Rosjanie zajęli i umocnili miejscowość 27 listopada 1914 r. tworząc sieć okopów, stanowisk artyleryjskich i wyznaczając tu miejsce koncentracji oddziałów walczących w okolicy. 4 grudnia z kierunku Skrzydlnej na Górę św. Jana uderzyła austriacka 13 Dywizja Landwery (2400 żołnierzy), stanowiąca lewo skrzydło grupy generała von Rotha, złożona głównie z żołnierzy austriackich i czeskich (25 i 26 brygada piechoty, a także 13 brygada artylerii). Zacięte walki o wieś trwały do 6 grudnia, w trakcie których zniszczeniu uległo większość zabudowań – w wyniku ostrzału austriackimi szrapnelami i granatami – nienaruszony pozostał jedynie murowany kościół. Ostatecznie Rosjanie z dużymi stratami wycofali się na północ.");
    $(".sidebar-text.sl-side").find("p").html("<b>Saint John Mountain</b><br>Mount of St.John was a strategically located town in the Stradomka river valley, whose location on a lofty hill gave the opportunity to control the extreme western theater of the Limanowa - Pawanska operation.The Russians occupied and strengthened the town on November 27, 1914, creating a network of trenches, artillery posts and marking here the place of concentration of units fighting in the area.December 4 from the direction of Skrzydlna to St. John Mountain was struck by the Austrian 13th Landwery Division(2, 400 soldiers), which was the left wing of General von Roth's group, composed mainly of Austrian and Czech soldiers (25th and 26th Infantry Brigade, as well as 13th artillery brigade). Fierce battles for the village lasted until December 6, during which most of the buildings were destroyed - as a result of Austrian fire shrapnel and grenades - only the brick church remained intact. Eventually, the Russians withdrew to the north with heavy losses.");
    $('.sidebar-img').html('<img src="img/4.jpg"/>');
    $('.sidebar-lightbox').html('<img src="img/4.jpg"/>');
  };
  function przycisk5() {
    $(".sidebar-text.pl-side").find("p").html("<b>Muchówka</b><br>W okolicach Muchówki w dniach 5-11 grudnia 1914 r. toczyła ciężkie walki niemiecka 47 Dywizja Rezerwowa licząca 12 000 żołnierzy, przeciwko której zwrócone były 32, 33 i 13 dywizje rosyjskie wchodzące w skład 3 Armii. Początkowo Niemcom udało się dotrzeć do linii Muchówka – Łapanów, gdzie 6 grudnia napotkali wyjątkowo silny opór, natomiast osłaniająca jej skrzydło od wschodu 6 Dywizja Kawalerii została odrzucona na południe. 7-9 grudnia dywizja utrzymywała linię Leszczyna – Bytomsko, jednak w wyniku rosyjskiej ofensywy 10 grudnia została odrzucona na zachód. Ostatecznie dzień później armia carska rozpoczęła odwrót. Straty 47 Dywizji Rezerwowej, dowodzonej przez generała porucznika Alfreda von Bessera wyniosły 1437 żołnierzy. Pruscy żołnierze (wśród których było wielu Polaków) zostali pochowani na cmentarzach nr 300 – 309.");
    $(".sidebar-text.sl-side").find("p").html("<b>Muchówka</b><br>In the vicinity of Muchówka on 5 - 11 December 1914, heavy fighting was fought by the German 47th Reserve Division, numbering 12, 000 soldiers, against whom were returned 32, 33 and 13 Russian divisions that are part of the Third Army.Initially, the Germans managed to reach the Muchówka - Łapanów line, where they met an extremely strong resistance on 6 December, while the 6th Cavalry Division, protecting its wing from the east, was rejected to the south.On 7 - 9 December, the division maintained the Leszczyna - Bytomsko line, however, as a result of the Russian offensive, December 10 was rejected west.Eventually, the tsarist army began a retreat day later.Losses of the 47th Reserve Division, commanded by Lieutenant General Alfred von Besser, amounted to 1, 437 soldiers.Prussian soldiers(of whom there were many Poles) were buried in cemeteries No. 300 - 309.");
    $('.sidebar-img').html('<img src="img/5.jpg"/>');
    $('.sidebar-lightbox').html('<img src="img/5.jpg"/>');
  };
  function przycisk6() {
    $(".sidebar-text.pl-side").find("p").html("<b>Golców</b><br>Wzgórze Golców wznoszące się na wysokość 752 m. n.p.m. osłaniało od prawej strony stanowisko na Jabłońcu. Jego strome stoki stały się areną zaciekłych walk 9-11 grudnia. Po wycofaniu się z okolic Kaniny wzniesienie zostało zajęte przez część 9 Pułku Huzarów, który jednak szybko je opuścił w obliczu natarcia lewego skrzydła rosyjskiej 15 Dywizji Piechoty. Armia carska umocniła teren i z powodzeniem odparła następnego dnia dzienny atak 16 Pułku Honwedu (wchodzącego w skład 39 Dywizji Piechoty Honwedu), który nacierał z kierunku zachodniego. Węgierski pułk poniósł niewielkie straty: 26 zabitych, 37 rannych i 127 zaginionych (z których większość można uznać za zmarłych), jednak Golców nie został odbity. Ponowny atak nocny przeprowadził od północy 10 Pułk Honwedu, który także okazał się nieskuteczny. Rosjanie opuścili wzgórze dopiero w trakcie odwrotu całego VIII Korpusu 11 grudnia.");
    $(".sidebar-text.sl-side").find("p").html("<b>Golców</b><br>Golców Hill rising 752 m above sea level. it protected the position on Jabłońiec from the right side. His steep slopes became the arena of fierce fighting on December 9-11. After retreating from the vicinity of the Kanina, the elevation was occupied by part 9 of the Hussars Regiment, which, however, quickly left it in the face of the attack of the left wing of the Russian 15th Infantry Division. The tsarist army strengthened the area and successfully replied the next day with the daily attack of the 16th Regiment of the Honorable (part of the 39th Infantry Division of the Honor), which was advancing from the west. The Hungarian regiment suffered minor losses: 26 killed, 37 wounded and 127 missing (most of whom could be considered dead), but the Golcers were not recovered. The re-night attack carried out from the north the 10th Honor Regiment, which also proved to be ineffective. The Russians left the hill only during the retreat of the entire VIII Corps on December 11.");
    $('.sidebar-img').html('<img src="img/6.jpg"/>');
    $('.sidebar-lightbox').html('<img src="img/6.jpg"/>');
  };
  function przycisk7() {
    $(".sidebar-text.pl-side").find("p").html("<b>Marcinkowice</b><br>Pod Marcinkowice 5 grudnia dotarł I Brygada Legionów Polskich, dowodzona przez Józefa Piłsudskiego (w sile ok. 1000 żołnierzy i 12 dział), który planował zdobyć Nowy Sącz – w jego przekonaniu słabo broniony. Tymczasem do miasta dotarł właśnie rosyjski VIII Korpus. Artyleria legionowa ostrzeliwała szosę po przeciwnej stronie Dunajca , natomiast kawaleria przeprawiła się nocą na drugi brzeg, jednak wzrastający opór Rosjan zmusił legionistów do wycofania się i przejścia do walki obronnej, również na wschodnim brzegu, a w konsekwencji odwrotu do Pisarzowej. W walce zginęło, zostało rannych lub zaginęło 58 legionistów.  Starcie pod Marcinkowicami miało decydujące znaczenie dla przebiegu całej bitwy limanowskiej, gdyż działania I Brygady opóźniły o kilkanaście godzin atak VIII Korpusu w kierunku zachodnim, dając obrońcom czas na przygotowanie stanowisk pod Limanową.");
    $(".sidebar-text.sl-side").find("p").html("<b>Marcinkowice</b><br>On March 5, the First Brigade of Polish Legions arrived at Marcinkowice, commanded by Józef Piłsudski(in the strength of about 1000 soldiers and 12 guns), who planned to conquer Nowy Sącz - in his opinion, poorly defended.Meanwhile, the Russian VIII Corps reached the city.Legionary artillery shelled the road on the opposite side of the Dunajec, while the cavalry crossed the night on the other bank, but the increasing resistance of the Russians forced the legionaries to retreat and move to a defensive battle, also on the east bank, and consequently retreat to Pisarzowa.In the fight, 58 legionaries were killed or lost or missing.The clash at Marcinkowice was of decisive importance for the course of the entire Limanowa battle, as the actions of the I Brigades delayed the attack of the VIII Corps westward for several hours, giving the defenders time to prepare positions near Limanowa.");
    $('.sidebar-img').html('<img src="img/7.jpg"/>');
    $('.sidebar-lightbox').html('<img src="img/7.jpg"/>');
  };
  function przycisk8() {
    $(".sidebar-text.pl-side").find("p").html("<b>Chyszówki</b><br>Wieś Chyszówki została zajęta przez Rosjan już w listopadzie 1914 r. W tym rejonie operowały jednostki kawalerii z 14 Dywizji Kawalerii dowodzonej przez generała Dragomirowa, których celem było zajęcie lub zniszczenie węzła kolejowego w Chabówce. 23 listopada w nocnym ataku miejscowość została zdobyta przez polskich legionistów pod dowództwem majora Edwarda Rydza-Śmigłego, którzy szukali noclegu przy 20 stopniowym mrozie. Po zlikwidowaniu czujek Polacy wzięli do niewoli cały szwadron jazdy kozackiej w tym 5 oficerów i 86 szeregowych, a także zdobyli 70 koni. Po tym sukcesie głównodowodzący odcinkiem generał Nagy przyjechał do Jurkowa z gratulacjami dla Józefa Piłsudskiego, a legioniści zostali doposażeni węgierskimi karabinami maszynowymi i armatami górskimi.");
    $(".sidebar-text.sl-side").find("p").html("<b>Chyszówki</b><br>Chyszówki was occupied by the Russians as early as November 1914. In this area, cavalry units from the 14th Cavalry Division commanded by General Dragomirov operated, whose aim was to occupy or destroy the railway junction in Chabówka.On November 23, in the night attack, the town was conquered by Polish legionaries under the command of Major Edward Rydz - Śmigły, who sought accommodation at a 20 - degree cold.After the liquidation of the detectors, the Poles captured the entire Cossack cavalry squadron, including 5 officers and 86 private, and also captured 70 horses.After this success, General Naga's commander-in-chief came to Jurkov with congratulations for Józef Piłsudski, and the legionnaires were retrofitted with Hungarian machine guns and mountain cannons. ");
    $('.sidebar-img').html('<img src="img/8.jpg"/>');
    $('.sidebar-lightbox').html('<img src="img/8.jpg"/>');
  };
  function przycisk9() {
    $(".sidebar-text.pl-side").find("p").html("<b>Zalesie</b><br>Zalesie znajdowało się na trasie przemarszu Legionów Polskich 8 grudnia, kiedy generał Herberstein wydał rozkaz obejścia nacierających na Limanową Rosjan od południa, a także dokonania rozpoznania w dolinie Dunajca i w razie konieczności zatrzymać rosyjskie natarcie z kierunku Kamienicy. Legioniści zajęli miejscowość w sile około 1000 żołnierzy i 80 kawalerzystów i stąd został wysłany zwiad w stronę Zbludzy i Kamienicy, a także planowano marsz na Jeżową Wodę w celu uderzenia na lewo skrzydło VIII Korpusu stojącego pod Limanową. 9 grudnia batalion legionów zajął Kamienicę, a także dokonał rozpoznania w kierunku Zabrzeży, gdzie stał silny oddział rosyjskiej kawalerii. ");
    $(".sidebar-text.sl-side").find("p").html("<b>Zalesie</b><br>Zalesie was on the route of the march of Polish Legions on December 8, when General Herberstein issued an order to circumvent advancing to Limanowa Russians from the south, and to make a reconnaissance in the Dunajec Valley and, if necessary, stop the Russian attack from the Kamienica direction. The legionaries occupied the town with the strength of about 1,000 soldiers and 80 cavalry, and hence a reconnaissance was sent to Zbludza and Kamienica, and a march on Jeżowa Woda was planned to hit the left wing of the VIII Corps at Limanowa. On December 9, the battalion of the legions occupied Kamienica, and also made a reconnaissance in the direction of Zabrzeża, where there was a strong branch of the Russian cavalry. ");
    $('.sidebar-img').html('<img src="img/9.jpg"/>');
    $('.sidebar-lightbox').html('<img src="img/9.jpg"/>');
  };
  function przycisk10() {
    $(".sidebar-text.pl-side").find("p").html("<b>Kanina</b><br>Kanina stała się 7 grudnia polem bitwy pomiędzy 10 Dywizją Kawalerii i grupą hrabiego Bissingena, a nacierającym rosyjskim VIII Korpusem. Od północy węgierskie pozycje osłaniały Legiony Polskie broniące linii kolejowej na wschód od Pisarzowej. Rosjanie ulokowani w Męcinie i atakujący od strony Trzetrzewiny ostrzeliwali wieś przy użyciu ciężkich dział, a także granatów i szrapneli (zniszczeniu uległa m.in. plebania). Eksponowane stanowisko – stanowiące łatwy cel dla artylerii - zostało więc porzucone, a jednostki austro-węgierskie wycofały się do Limanowej. Następnie Kanina stała się siedzibą sztabu rosyjskiego VIII Korpusu,  także tutaj ulokowano baterie ciężkich dział, które w dniach 9-11 grudnia ostrzeliwały Limanową i stanowiska obronne na Jabłońcu. ");
    $(".sidebar-text.sl-side").find("p").html("<b>Kania</b><br>The Kanina became December 7 in the battlefield between the 10th Cavalry Division and the Count Bissingen group, and the advancing Russian VIII Corps. From the north, Hungarian positions were guarded by the Polish Legions defending the railway line east of Pisarzowa. Russians located in Męcin and attackers from the side of Trzetrzewina shelled the village using heavy guns, as well as grenades and shrapnel (the presbytery was destroyed, among others). The exhibited stand - an easy target for the artillery - was therefore abandoned, and the Austro-Hungarian units retreated to Limanowa. Then Kanina became the headquarters of the staff of the Russian VIII Corps, also here the batteries of heavy cannons were located, which on December 9-11 were firing Limanowa and defensive positions at Jabłoniec.");
    $('.sidebar-img').html('<img src="img/10.jpg"/>');
    $('.sidebar-lightbox').html('<img src="img/10.jpg"/>');
  };
  function przycisk11() {
    $(".sidebar-text.pl-side").find("p").html("<b>10 Dywizja Kawalerii</b><br>10 Dywizja Kawalerii była wielką jednostką cesarsko-królewskiej kawalerii armii Austro-Węgier. Składała się z 4 Brygady (10 i 13 pułk huzarów), 8 Brygady (9 pułk huzarów i 12 pułk ułanów), a także 4 dywizjonu artylerii konnej (3 baterie, 12 dział). Łącznie w jej składzie walczyło 475 żołnierzy w pieszym batalionie, a także 1600 kawalerzystów w 16 szwadronach. W operacji limanowsko-łapanowskiej dywizja początkowo poprzez Nowy Targ, doliną Dunajca, udała się w kierunku Nowego Sącza, a następnie po zdobyciu Starego Sącza wycofała się na stanowiska na wschód od Limanowej. Jej pododdziały wzięły udział w walkach na wzgórzu Jabłoniec, gdzie zginął dowodzący 9 pułkiem pułkownik Othmar Muhr – pomimo znacznej przewagi liczebnej przeciwnika huzarzy z 9 i 13 pułku utrzymali swoje pozycje.");
    $(".sidebar-text.sl-side").find("p").html("<b>The 10th Cavalry Division</b><br>The 10th Cavalry Division was a large unit of the imperial - royal cavalry of the Austro - Hungarian army.It consisted of 4 Brigades(10th and 13th Hussars Regiment), 8 Brigades(9th Hussars Regiment and 12 Lancers Regiment), and 4 Horse Artillery Squadron(3 batteries, 12 guns).In total, 475 soldiers in the pedestrian battalion fought in its composition, as well as 1, 600 cavalry in 16 squadrons.In the Limanowa - Pawanska operation, the division initially through Nowy Targ, the Dunajec Valley, went towards Nowy Sącz, and then after the capture of Stary Sącz, it retired to the positions east of Limanowa.Her sub - units took part in the battles on Jablonec Hill, where Colonel Othmar Muhr, who commanded the 9th regiment, was killed - despite the significant number of opponents of the Hussars, the 9th and 13th regiments maintained their positions.");
    $('.sidebar-img').html('<img src="img/11.jpg"/>');
    $('.sidebar-lightbox').html('<img src="img/11.jpg"/>');
  };
  function przycisk12() {
    $(".sidebar-text.pl-side").find("p").html("<b>39 Dywizja Piechoty Honwedu</b><br>39 Dywizja Piechoty Honwedu była jednostką węgierskiej obrony krajowej wchodzącą w skład VI Korpusu, dowodzoną przez generała Hadfyego. W jej skład wchodziła 77 Brygada (9 i 11 pułk piechoty, liczący po 3 bataliony), 78 Brygada (10 i 16 pułk piechoty, liczący po 3 bataliony), 15 pułk huzarów, i 39 Brygada Artylerii Polowej (57 dział). Łącznie w szeregach dywizji walczyło 6713 żołnierzy. Czołowe oddziały (78 Brygada) zostały przetransportowane koleją z Krakowa do Tymbarku 8 grudnia i stamtąd podjęły atak na pozycje rosyjskie na wzgórzu Golców. 16 pułk piechoty, którego stan bojowy wynosił 2325 żołnierzy składał się w 41% ze Słowaków, natomiast w ramach 11 pułku Słowacy stanowili 40% stanu osobowego.");
    $(".sidebar-text.sl-side").find("p").html("<b>The 39th Infantry Division</b><br>The 39th Infantry Division of the Honved was a unit of Hungarian national defense, part of the 6th Corps, commanded by General Hadfy.It consisted of 77 Brigade(9 and 11 infantry regiment, numbering 3 battalions), 78 Brigade(10 and 16 infantry regiment, numbering 3 battalions), 15 regiment of hussars, and 39 Field Artillery Brigade(57 department).In total 6713 soldiers fought in the ranks of the division.The leading units(78 Brigade) were transported by train from Kraków to Tymbark on December 8 and from there they attacked the Russian positions on the Golców hill.The 16th Infantry Regiment, whose combat status amounted to 2325 soldiers, comprised 41 % of Slovaks, while under the 11th Regiment, Slovaks constituted 40 % of the state.");
    $('.sidebar-img').html('<img src="img/12.jpg"/>');
    $('.sidebar-lightbox').html('<img src="img/12.jpg"/>');
  };

  function przycisk13() {
    $(".sidebar-text.pl-side").find("p").html("<b>Legiony Polskie</b><br>Legiony Polskie, powołane do istnienia 16 sierpnia 1914 r. przez Naczelny Komitet Narodowy, stanowiły oddzielną formację armii austro-węgierskiej, pod dowództwem Józefa Piłsudskiego. W operacji limanowsko-łapanowskiej wzięła udział I Brygada, której zadaniem w listopadzie, było osłanianie miejsca koncentracji XIV Korpusu generała von Rotha w Chabówce, a następnie działanie na prawym skrzydle nacierającego na północ zgrupowania. Legioniści stoczyli zwycięską potyczkę z rosyjską jazdą w Chyszówkach 23 listopada, następnie zajęli Limanową i z powodzeniem opóźnili marsz VIII Korpusu rosyjskiego w bitwie pod Marcinkowicami. Prowadzili działania opóźniające w rejonie Pisarzowej, a po przejściu na tyły frontu wzięli udział w walkach na południe od Limanowej i w dolinie Dunajca. Liczebność I Brygady w trakcie operacji wynosiła około 1000 żołnierzy, 80 jeźdźców i 12 dział. ");
    $(".sidebar-text.sl-side").find("p").html("<b>The Polish Legions</b><br>The Polish Legions, established on August 16, 1914 by the Supreme National Committee, formed a separate formation of the Austro - Hungarian army, under the command of Józef Piłsudski.The I Brigade took part in the Limanowa - Bratowa operation, whose task in November was to cover the place of concentration of the XIV Corps of General von Roth in Chabówka, and then operate on the right wing of the group heading north.The legionaries fought a victorious skirmish with Russian riding in Chyszówki on November 23, then they occupied Limanowa and successfully delayed the march of the VIII Russian Corps in the Battle of Marcinkowice.They carried out delayed activities in the area of ​​Pisarzowa, and after going to the rear of the front, they took part in the fighting south of Limanowa and in the Dunajec Valley.The number of the 1st Brigade during the operation was about 1, 000 soldiers, 80 riders and 12 guns.");
    $('.sidebar-img').html('<img src="img/13.jpg"/>');
    $('.sidebar-lightbox').html('<img src="img/13.jpg"/>');
  };
  function przycisk14() {
    $(".sidebar-text.pl-side").find("p").html("<b>Generał Józef Roth</b><br>Józef Roth był oficerem austriackim z wieloletnim stażem (w 1879 r. otrzymał awans na podporucznika), który w 1912 r. awansował do stopnia generała porucznika. W czasie I wojny światowej początkowo dowodził 3 Dywizją Piechoty w XIV Korpusie, a następnie całym Korpusem. W listopadzie 1914 r. otrzymał zadanie powstrzymania rosyjskiej 3 Armii nacierającej na Kraków – ostatecznie pokonując armię carską w operacji limanowsko-łapanowskiej. Po walkach w Galicji został przeniesiony do Tyrolu i otrzymał nobilitację szlachecką na barona oraz tytuł von Limanowa-Lapanow.");
    $(".sidebar-text.sl-side").find("p").html("<b>General Josef Roth</b><br> Józef Roth was an Austrian officer with many years of experience (in 1879 he was promoted to second lieutenant), who in 1912 was promoted to the rank of lieutenant general. During World War I, he initially commanded the 3rd Infantry Division in the 14th Corps, and then the entire Corps. In November 1914, he was tasked with stopping the Russian Third Army from invading Kraków - eventually defeating the tsarist army in the Limanowa-Bratanów operation. After the battles in Galicia, he was transferred to Tyrol and received the noblemen's honor for the baron and the title of von Limanow-Lapanow.");
    $('.sidebar-img').html('<img src="img/14.jpg"/>');
    $('.sidebar-lightbox').html('<img src="img/14.jpg"/>');
  };
  function przycisk15() {
      $(".sidebar-text.pl-side").find("p").html("<b>Generał Radko Dimitriew</b><br>Radko Dimitriew był bułgarskim oficerem, pełniącym w latach 1904-1907 funkcję szefa sztabu armii bułgarskiej. W czasie wojen bałkańskich dowodził 3 Armią, która pokonała turecką armię wschodnią. Od sierpnia 1914 r. służył w armii rosyjskiej, dowodząc VIII Korpusem, a w trakcie operacji limanowsko-łapanowskiej 3 Armią, nacierającą na Kraków, którą od południa zaatakowało zgrupowanie von Rotha. W 1918 r. przeszedł w stan spoczynku, jednak 18 października został rozstrzelany na rozkaz dowódcy Północnokaukaskiej Armii Czerwonej.");
      $(".sidebar-text.sl-side").find("p").html("<b>General Radko Dimitriev</b><br>Radko Dimitriew was a Bulgarian officer, in the years 1904 - 1907 he was the Chief of Staff of the Bulgarian Army. During the Balkan Wars he commanded the 3rd Army, which defeated the Turkish eastern army. From August 1914 he served in the Russian army, commanding the VIII Corps and during the Limanowsko - Łapanowska military operation, the 3rd Army, attacking Krakow, which von Roth's group attacked from the south. In 1918, he retired, but on 18 October he was shot on the orders of the commander of the North Caucasian Red Army.");
      $('.sidebar-img').html('<img src="img/15.jpg"/>');
      $('.sidebar-lightbox').html('<img src="img/15.jpg"/>');
    };