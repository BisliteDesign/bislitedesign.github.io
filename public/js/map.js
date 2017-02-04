define(['jquery', 'index',
    'async!https://maps.googleapis.com/maps/api/js?key=AIzaSyBFyXrsZRgYeE0DTSF-6kkmxrmbo3cspXg &callback=initMap'
], function initMap() {
  var myLatLng = {lat: 41.391391, lng: 2.180252};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: myLatLng
  });
  var image = '../images/marker.png';
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image,
  });

});

