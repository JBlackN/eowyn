(function() {
  points = [
    { coords: [6.6, 23.75], dist: 0.0, smooth: [[6.95, 25.5], [8, 25.9], [9, 25.8]] },
    { coords: [9.85, 25.45], dist: 11.0 },
    { coords: [12.045, 24.5], dist: 12.0 },
    { coords: [14.16, 24.4], dist: 11.0 },
    { coords: [16.2, 24.4], dist: 11.0, smooth: [[16.9, 24.2]] },
    { coords: [18.25, 23], dist: 10.0 },
    { coords: [20.7, 21.42], dist: 10.0 },
    { coords: [22.98, 20.7], dist: 10.0, smooth: [[24, 20.6]] },
    { coords: [25, 20.82], dist: 10.0 },
    { coords: [26.65, 21.64], dist: 6.0 },
    { coords: [28.62, 22.67], dist: 10.0 },
    { coords: [30.47, 23.87], dist: 12.0 },
    { coords: [32.65, 25.13], dist: 12.0 },
    { coords: [35, 26.25], dist: 12.0 },
    { coords: [37.27, 26.35], dist: 12.0 },
    { coords: [39.57, 25.73], dist: 11.0 },
    { coords: [41.45, 24.9], dist: 10.0 },
    { coords: [43.45, 23.7], dist: 10.0 },
    { coords: [45.4, 22.35], dist: 10.0 },
    { coords: [47, 20.9], dist: 10.0 },
    { coords: [48.5, 19.3], dist: 10.0, smooth: [[49, 18.7]] },
    { coords: [49.4, 17.8], dist: 9.0 },
    { coords: [50.5, 16.5], dist: 9.0 },
    { coords: [52.2, 14.8], dist: 9.0, smooth: [[53.3, 14]] },
    { coords: [54.1, 13.7], dist: 9.0 },
    { coords: [56.2, 14], dist: 9.0 },
    { coords: [58.1, 14.6], dist: 9.0 },
    { coords: [59.85, 15.2], dist: 9.0 },
    { coords: [61.57, 15.275], dist: 9.0 },
    { coords: [63.33, 15], dist: 9.0 },
    { coords: [65.15, 14.9], dist: 9.0 },
    { coords: [66.75, 15.85], dist: 9.0 },
    { coords: [68.15, 17.15], dist: 8.0, smooth: [[69.2, 18.85]] },
    { coords: [71.35, 19.2], dist: 15.0, smooth:[[71.7, 20.5], [71.7, 21.5], [71.4, 22.65]] },
    { coords: [73.35, 23.7], dist: 12.0, smooth: [[76, 24.4]] },
    { coords: [78, 24.4], dist: 16.0, smooth:[[80.8, 23.95], [81.7, 23.4]] },
    { coords: [82.8, 22.1], dist: 13.0, smooth: [[83.9, 20], [85, 19.8], [85.9, 18.4], [87.25, 18.75]] },
    { coords: [87.25, 19.2], dist: 16.0, smooth: [[87.5, 18.9], [88, 19.4], [88.5, 19.2], [89.8, 17]] },
    { coords: [91.28, 15.18], dist: 18.0 },
  ];

  var polylinePath = '';
  var containerWidth = parseFloat(document.getElementById('map-world').width.baseVal.value);
  var containerHeight = parseFloat(document.getElementById('map-world').height.baseVal.value);

  for (var i = 0; i < points.length; i++) {
    var point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    point.setAttributeNS(null, 'cx', points[i].coords[0] + '%');
    point.setAttributeNS(null, 'cy', points[i].coords[1] + '%');
    point.setAttributeNS(null, 'r', 2);
    point.setAttributeNS(null, 'stroke', 'red');
    point.setAttributeNS(null, 'stroke-width', 1);
    point.setAttributeNS(null, 'fill', 'red');

    polylinePath += (containerWidth * (points[i].coords[0] / 100));
    polylinePath += ',';
    polylinePath += (containerHeight * (points[i].coords[1] / 100));
    if (i != (points.length - 1)) polylinePath += ' ';

    if (typeof points[i].smooth !== 'undefined') {
      for (var j = 0; j < points[i].smooth.length; j++) {
        polylinePath += (containerWidth * (points[i].smooth[j][0] / 100));
        polylinePath += ',';
        polylinePath += (containerHeight * (points[i].smooth[j][1] / 100));
        polylinePath += ' ';
      }
    }
    
    document.getElementById('map-world').appendChild(point);
  }

  var polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
  polyline.setAttributeNS(null, 'points', polylinePath);
  polyline.setAttributeNS(null, 'stroke', 'red');
  polyline.setAttributeNS(null, 'stroke-width', 1);
  polyline.setAttributeNS(null, 'fill', 'none');

  document.getElementById('map-world').appendChild(polyline);
})();
