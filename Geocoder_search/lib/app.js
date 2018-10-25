// TODO: Put your JS code in here
const api_key = "AIzaSyAJmoXsLZpDoVYaHxmZ0XZES8yHiC4ycO0";

const search_box = document.getElementById("form");

search_box.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("search").value;
  console.log(input);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=${api_key}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data.results[0].formatted_address);
      console.log(data.results[0].geometry.location.lat);
      console.log(data.results[0].geometry.location.lng);
  });
})
