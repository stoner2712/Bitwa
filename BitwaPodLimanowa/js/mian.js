var map = L.map('image-map', {
    minZoom: -1.5,
    maxZoom: 2,
    center: [-1800, 2550],
    zoom: -1.5,
    crs: L.CRS.Simple
  });
  
  // MAP OPTIONS
  // Initial zoom
  map.setZoom(-1.4);
  // Limit bounds
  map.setMaxBounds(bounds);
  // Disable dragging animation
  map.on('drag', function() {
      map.panInsideBounds(bounds, { animate: false });
  });
  
  // dimensions of the image
  var w = 10402,
      h = 6712,
      url = 'img/mapa.jpg';
  
  // calculate the edges of the image, in coordinate space
  var southWest = map.unproject([0, h], map.getMaxZoom()-1);
  var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
  var bounds = new L.LatLngBounds(southWest, northEast);
  
  // markers and soldiers
  L.imageOverlay(url, bounds).addTo(map);