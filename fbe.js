(function() {
  // Path map description
  var points = [
    // Bag End to Rivendell (397 miles)
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
    { coords: [66.75, 15.7], dist: 9.0 },
    { coords: [68.2, 17.15], dist: 8.0, smooth: [[69.2, 18.85]] },
    { coords: [71.35, 19.2], dist: 15.0, smooth:[[71.7, 20.5], [71.7, 21.5], [71.4, 22.65]] },
    { coords: [73.35, 23.7], dist: 12.0, smooth: [[76, 24.4]] },
    { coords: [78, 24.4], dist: 16.0, smooth:[[80.8, 23.95], [81.7, 23.4]] },
    { coords: [82.8, 22.1], dist: 13.0, smooth: [[83.9, 20], [85, 19.8], [85.9, 18.4], [87.25, 18.75]] },
    { coords: [87.25, 19.2], dist: 16.0, smooth: [[87.5, 18.9], [88, 19.4], [88.5, 19.2], [89.8, 17]] },
    { coords: [91.28, 15.18], dist: 8.0 },
    // Rivendell to Erebor (555 miles)
    { coords: [9.05, 97.7], dist: 0.0, smooth: [[9.4, 97]], breakpoint: true },
    { coords: [9.25, 96.7], dist: 4.0, smooth: [[9.7, 96.7], [9.65, 96.1]] },
    { coords: [10.15, 95.75], dist: 4.0, smooth: [[10.3, 96.1], [10.5, 95.35]] },
    { coords: [10.95, 95.2], dist: 4.0, smooth: [[11.6, 94.6]] },
    { coords: [11.8, 94.7], dist: 4.0, smooth: [[12, 94.9], [12.2, 94.45]] },
    { coords: [12.75, 94.4], dist: 4.0, smooth: [[13.1, 94.1], [13.15, 94.5], [13.5, 93.9]] },
    { coords: [13.64, 94.15], dist: 4.0, smooth: [[14.25, 93.7], [14.25, 94.1]] },
    { coords: [14.58, 94.08], dist: 4.0, smooth: [[15.1, 93.55]] },
    { coords: [15.4, 93.65], dist: 4.0, smooth: [[15.5, 93.9], [15.8, 93.2]] },
    { coords: [16.15, 93.4], dist: 4.0, smooth: [[16.4, 93.5], [16.5, 92.9]] },
    { coords: [17, 93], dist: 4.0, smooth: [[17.35, 92.4], [17.4, 92.8]] },
    { coords: [17.85, 92.5], dist: 4.0, smooth: [[18.3, 92.45], [18.35, 91.8]] },
    { coords: [18.7, 91.75], dist: 4.0, smooth: [[19, 91.4], [19.4, 91.8]] },
    { coords: [19.4, 91.15], dist: 4.0, smooth: [[19.83, 91.17], [19.75, 90.65]] },
    { coords: [20.15, 90.35], dist: 4.0, smooth: [[20.6, 90.35], [20.55, 89.7], [20.7, 90]] },
    { coords: [20.92, 89.35], dist: 4.0, smooth: [[21.2, 89.35], [21.1, 88.7], [21.55, 88.6]] },
    { coords: [21.55, 88.25], dist: 4.0, smooth: [[21.9, 87.5], [22.23, 87.2]] },
    { coords: [22.23, 86.7], dist: 4.0, smooth: [[22.4, 86], [22.2, 85.7], [22.45, 85.4]] },
    { coords: [22.45, 84.9], dist: 4.0, smooth: [[22.9, 84.3], [22.7, 84], [23, 83.9], [23, 83.2], [23.55, 82.8]] },
    { coords: [23.88, 81.92], dist: 26.0, smooth: [[25.4, 81.4]] },
    { coords: [25.9, 81.1], dist: 11.0, smooth: [[26.3, 80.2], [26.25, 79.8], [26.85, 80.3], [27.1, 81.6], [27.6, 81.8], [28.1, 82.9]] },
    { coords: [28.7, 79.1], dist: 41.0, smooth: [[34, 79.6], [36, 80], [37, 80.5], [38, 81.45]] },
    { coords: [39.3, 81.3], dist: 58.0, smooth: [[39.7, 80.2], [39.85, 79.4]] },
    { coords: [39.83, 77.87], dist: 9.0, smooth: [[39.4, 75]] },
    { coords: [38.5, 71.4], dist: 20.0, smooth: [[37.1, 66]] },
    { coords: [36.6, 63.6], dist: 25.0, smooth: [[36.35, 61.5], [36.45, 60], [36.8, 58.2], [37.3, 57.45]] },
    { coords: [37.35, 57.65], dist: 18.0, smooth: [[37.4, 57.35], [38.5, 57]] },
    { coords: [38.6, 57.1], dist: 8.0, smooth: [[38.8, 57]] },
    { coords: [40.15, 57.35], dist: 7.0 },
    { coords: [41.74, 57.95], dist: 7.0 },
    { coords: [43.3, 58.65], dist: 7.0 },
    { coords: [45.1, 59.35], dist: 7.0, smooth: [[45.2, 59.45], [46.45, 59.8]] },
    { coords: [46.55, 59.75], dist: 7.0, smooth: [[47.3, 60]] },
    { coords: [47.8, 60.3], dist: 7.0 },
    { coords: [49.25, 60.9], dist: 7.0, smooth: [[49.7, 61.6]] },
    { coords: [50.15, 61.7], dist: 7.0 },
    { coords: [51.8, 62.25], dist: 7.0 },
    { coords: [53.4, 62.8], dist: 7.0 },
    { coords: [54.97, 63.25], dist: 7.0 },
    { coords: [56.45, 63.5], dist: 7.0 },
    { coords: [57.88, 63.75], dist: 7.0 },
    { coords: [59.2, 63.97], dist: 7.0 },
    { coords: [60.63, 63.75], dist: 7.0 },
    { coords: [62.12, 63.45], dist: 7.0 },
    { coords: [63.59, 63.19], dist: 7.0 },
    { coords: [65.1, 62.78], dist: 7.0 },
    { coords: [66.35, 62.1], dist: 7.0 },
    { coords: [67.7, 61.55], dist: 5.0 },
    { coords: [68.95, 60.85], dist: 6.0 },
    { coords: [70.3, 60.1], dist: 6.0 },
    { coords: [71.65, 59.25], dist: 6.0 },
    { coords: [73, 58.25], dist: 6.0 },
    { coords: [74.4, 57.1], dist: 6.0, smooth: [[75.05, 56.4], [75.2, 56], [75.3, 56.2], [75.5, 55.8]] },
    { coords: [75.9, 55.8], dist: 7.0, smooth: [[76.4, 55.5], [76.1, 55.3]] },
    { coords: [76.38, 54.75], dist: 4.0, smooth: [[76.7, 54.2]] },
    { coords: [76.85, 53.25], dist: 7.0, smooth: [[77.2, 53.8], [79.45, 54.5]] },
    { coords: [79.7, 54.25], dist: 14.0, smooth: [[80, 54.7], [83, 55.5], [86, 57]] },
    { coords: [86.47, 56.68], dist: 32.0, smooth: [[86.9, 56]] },
    { coords: [86.97, 55.2], dist: 5.0 },
    { coords: [87.25, 53.6], dist: 5.0, smooth: [[87.35, 52.6]] },
    { coords: [87, 52.15], dist: 5.0 },
    { coords: [85.2, 49.3], dist: 13.0, smooth: [[84.5, 48.4], [84.44, 48], [84.55, 47.55]] },
    { coords: [85.2, 47.2], dist: 7.0 },
  ];

  // Auth & API call
  var fitbitAccessToken;
  var steps;

  if (!window.location.hash) {
    window.location.replace('https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=***REMOVED***&redirect_uri=https%3A%2F%2F***REMOVED***%2F&scope=activity%20location%20profile%20settings%20social&expires_in=600');
  }
  else {
    var fragmentQueryParameters = {};
    window.location.hash.slice(1).replace(
      new RegExp("([^?=&]+)(=([^&]*))?", "g"),
      function($0, $1, $2, $3) { fragmentQueryParameters[$1] = $3; }
    );

    fitbitAccessToken = fragmentQueryParameters.access_token;
  }

  var processResponse = function(res) {
    if (!res.ok) {
      throw new Error('Fitbit API request failed: ' + res);
    }

    var contentType = res.headers.get('content-type')
    if (contentType && contentType.indexOf("application/json") !== -1) {
      return res.json();
    }
    else {
      throw new Error('JSON expected but received ' + contentType);
    }
  }

  var processSteps = function(data) {
    steps = parseInt(data.lifetime.total.steps);
    steps = steps <= 2157880 ? steps : 2157880;
    drawPaths(points);
    animatePath(0, Math.round(steps / 500), 1, steps);
    //drawPosition(steps);
  };

  fetch(
    'https://api.fitbit.com/1/user/-/activities.json',
    {
      headers: new Headers({
        'Authorization': 'Bearer ' + fitbitAccessToken
      }),
      mode: 'cors',
      method: 'GET'
    }
  ).then(processResponse)
  .then(processSteps)
  .catch(function(error) {
    console.log(error);
  });

  //
  // Setup etc.
  //

  window.addEventListener('resize', function() {
    clearMap();
    drawPaths(points);
    drawPosition(steps);
  });

  // 
  // Functions
  //

  function clearMap() {
    document.getElementById('map-world').innerHTML = '';
  }

  function drawPaths(points) {
    var polylines = [];
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

      if (typeof points[i].breakpoint !== 'undefined') {
        polylines.push(polylinePath);
        polylinePath = '';
      }

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

    polylines.push(polylinePath);

    for (var i = 0; i < polylines.length; i++) {
      var polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
      polyline.setAttributeNS(null, 'points', polylines[i]);
      polyline.setAttributeNS(null, 'stroke', 'red');
      polyline.setAttributeNS(null, 'stroke-width', 1);
      polyline.setAttributeNS(null, 'fill', 'none');

      document.getElementById('map-world').appendChild(polyline);
    }
  }

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

  function animatePath(initial, step, multiplier, steps) {
    if (steps > 2157880) steps = 2157880;

    drawPosition(initial);

    if (initial + step <= steps) initial += step;
    else initial = steps;

    step *= multiplier;

    if (initial < steps) setTimeout(function () { animatePath(initial, step, multiplier, steps); }, 1);
    if (initial == steps) drawPosition(initial);
  }
})();
