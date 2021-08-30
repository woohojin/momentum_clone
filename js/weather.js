function onGeoSuccess(position) {
  console.log(position);
}

function onGeoError() {
  alert("We can't Find your location Try Again.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
