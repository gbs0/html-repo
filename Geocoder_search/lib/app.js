// TODO: Put your JS code in here
const apiKey = "AIzaSyAJmoXsLZpDoVYaHxmZ0XZES8yHiC4ycO0";

const searchBox = document.getElementById("form");

const google = window.google;

function myMap(lat, lng) {
  const mapCanvas = document.getElementById("map");
  const myCenter = new google.maps.LatLng(lat, lng);
  const mapOptions = { center: myCenter, zoom: 15 };
  const map = new google.maps.Map(mapCanvas, mapOptions);
  const marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE });
  marker.setMap(map);
}


searchBox.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("search").value;
  console.log(input);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const formatedAddress = data.results[0].formatted_address;
      // console.log(data.results[0].geometry.location.lat);
      // console.log(data.results[0].geometry.location.lng);
      const latitude = data.results[0].geometry.location.lat;
      const longitude = data.results[0].geometry.location.lng;
      myMap(latitude, longitude);
    });
});

