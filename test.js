(function() {
  var slider = document.getElementById('map-test-slider');
  var sliderInfo = document.getElementById('map-test-slider-info');
  slider.addEventListener('input', function() {
    sliderInfo.innerText = slider.value + ' kroků';
    drawPosition(slider.value);
  });

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
    { coords: [91.28, 15.18], dist: 8.0 },
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

  drawPosition(0); //2058

  function drawPosition(steps) {
    var distanceKm = (steps * 71) / 100000;
    var distanceMi = distanceKm * 0.621371192;
    var cumulativeDist = 0.0;
    var markerDisplayed = false;

    var oldMarker = document.getElementById('marker');
    if (oldMarker != null) oldMarker.parentNode.removeChild(oldMarker);

    for (var i = 0; i < points.length; i++) {
      cumulativeDist += points[i].dist;
      if (!markerDisplayed && cumulativeDist > distanceMi) {
        //console.log('distMi: ' + distanceMi);
        //console.log('cDist: ' + cumulativeDist);

        var segLen = 0.0;
        var subSegLens = [];

        var direction = {};
        var markerCoords = {};

        if (typeof points[i - 1].smooth !== 'undefined') {
          for (var j = 0; j < points[i - 1].smooth.length; j++) {
            if (j == 0) {
              segLen += Math.sqrt(Math.pow(Math.abs(points[i - 1].smooth[j][0] - points[i - 1].coords[0]), 2) + Math.pow(Math.abs(points[i - 1].smooth[j][1] - points[i - 1].coords[1]), 2));
              subSegLens.push(segLen);
            }
            else {
              segLen += Math.sqrt(Math.pow(Math.abs(points[i - 1].smooth[j][0] - points[i - 1].smooth[j - 1][0]), 2) + Math.pow(Math.abs(points[i - 1].smooth[j][1] - points[i - 1].smooth[j - 1][1]), 2));
              subSegLens.push(segLen);
            }
          }

          segLen += Math.sqrt(Math.pow(Math.abs(points[i].coords[0] - points[i - 1].smooth[points[i - 1].smooth.length - 1][0]), 2) + Math.pow(Math.abs(points[i].coords[1] - points[i - 1].smooth[points[i - 1].smooth.length - 1][1]), 2));
          subSegLens.push(segLen);

          //console.log(segLen);
          //console.log(subSegLens);

          var segNormRem = (cumulativeDist - distanceMi) / points[i].dist;
          var segNormDone = 1 - segNormRem;

          //console.log(segNormRem);
          //console.log(segNormDone);

          var targetSeg = 0;
          var subSegLenNorm = 0.0;
          var prevSubSegLens = 0.0;

          for (var j = 0; j < subSegLens.length; j++) {
            var cumulativeSubSegLenNorm = subSegLens[j] / segLen;
            if (segNormDone < cumulativeSubSegLenNorm) {
              var tmp = subSegLens[j];
              if (j > 0) {
                tmp -= subSegLens[j - 1]
                prevSubSegLens += subSegLens[j - 1]
              }
              subSegLenNorm = tmp / segLen;

              targetSeg = j;
              break;
            }
          }

          prevSubSegLens /= segLen;

          //console.log(targetSeg);

          var j = targetSeg;

          //console.log(j);
          //console.log(subSegLenNorm);
          //console.log(prevSubSegLens);
          //console.log('pt: ' + points[i-1].smooth.length);

          if (j == 0) {
            direction.x = points[i - 1].smooth[j][0] - points[i - 1].coords[0];
            direction.y = points[i - 1].smooth[j][1] - points[i - 1].coords[1];

            markerCoords.x = points[i - 1].coords[0] + (segNormDone * (1 / subSegLenNorm)) * direction.x;
            markerCoords.y = points[i - 1].coords[1] + (segNormDone * (1 / subSegLenNorm)) * direction.y;
          }
          else if (j >= points[i - 1].smooth.length) {
            j = points[i - 1].smooth.length;

            direction.x = points[i].coords[0] - points[i - 1].smooth[j - 1][0];
            direction.y = points[i].coords[1] - points[i - 1].smooth[j - 1][1];

            markerCoords.x = points[i - 1].smooth[j - 1][0] + ((segNormDone - prevSubSegLens) / subSegLenNorm) * direction.x;
            markerCoords.y = points[i - 1].smooth[j - 1][1] + ((segNormDone - prevSubSegLens) / subSegLenNorm) * direction.y;
          }
          else {
            direction.x = points[i - 1].smooth[j][0] - points[i - 1].smooth[j - 1][0];
            direction.y = points[i - 1].smooth[j][1] - points[i - 1].smooth[j - 1][1];

            markerCoords.x = points[i - 1].smooth[j - 1][0] + ((segNormDone - prevSubSegLens) / subSegLenNorm) * direction.x;
            markerCoords.y = points[i - 1].smooth[j - 1][1] + ((segNormDone - prevSubSegLens) / subSegLenNorm) * direction.y;
          }
        }
        else {
          segLen = Math.sqrt(Math.pow(Math.abs(points[i].coords[0] - points[i - 1].coords[0]), 2) + Math.pow(Math.abs(points[i].coords[1] - points[i - 1].coords[1]), 2));

          var segNormRem = (cumulativeDist - distanceMi) / points[i].dist;
          var segNormDone = 1 - segNormRem;

          direction.x = points[i].coords[0] - points[i - 1].coords[0];
          direction.y = points[i].coords[1] - points[i - 1].coords[1];

          markerCoords.x = points[i - 1].coords[0] + segNormDone * direction.x;
          markerCoords.y = points[i - 1].coords[1] + segNormDone * direction.y;
        }

        //markerCoords.x = points[i - 1].coords[0];
        //markerCoords.y = points[i - 1].coords[1];

        var marker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

        marker.setAttributeNS(null, 'id', 'marker');
        marker.setAttributeNS(null, 'cx', markerCoords.x + '%');
        marker.setAttributeNS(null, 'cy', markerCoords.y + '%');
        marker.setAttributeNS(null, 'r', 4);
        marker.setAttributeNS(null, 'stroke', 'green');
        marker.setAttributeNS(null, 'stroke-width', 1);
        marker.setAttributeNS(null, 'fill', 'green');

        document.getElementById('map-world').appendChild(marker);

        markerDisplayed = true;
      }
    }
  }
})();
