const status = document.getElementById('geoloc-status');

function onGeolocSuccess(position) {
  status.innerHTML = `lat : ${position.coords.latitude}, lng : ${position.coords.longitude}`;
}

function onGeolocError(error) {
  console.error(error);
}

document.getElementById('geoloc-button').addEventListener('click', function () {
  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(onGeolocSuccess, onGeolocError, {
      enableHighAccuracy: true,
      timeout: 3 * 1000,
    });
  }
});
