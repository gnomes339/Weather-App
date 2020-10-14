let now = new Date();

let currentDate = now.getDate();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

let month = months[now.getMonth()];

let today = `${day} ${currentDate} ${month} ${year}`;

let dateData = document.querySelector("#dayDate");
dateData.innerHTML = today;

let hours = now.getHours();
let minutes = now.getMinutes();

let timeData = document.querySelector("#time");
timeData.innerHTML = `${hours}:${minutes}`;

function showSearchTemperature(response) {
  console.log(response);

  let cityInput = document.querySelector("#cityInput");
  let newCity = document.querySelector("#searchResult");
  newCity.innerHTML = cityInput.value;

  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = `${temperature}℃`;

  let weather = response.data.weather[0].main;
  let weatherElement = document.querySelector("#weather");
  weatherElement.innerHTML = `${weather}`;

  let feelsLike = Math.round(response.data.main.feels_like);
  let feelsLikeElement = document.querySelector("#feelsLike");
  feelsLikeElement.innerHTML = `Feels like: ${feelsLike}℃ `;

  let minTemperature = Math.round(response.data.main.temp_min);
  let maxTemperature = Math.round(response.data.main.temp_max);
  let minMaxTemperatureElement = document.querySelector("#minMax");
  minMaxTemperatureElement.innerHTML = `Min: ${minTemperature}℃ Max: ${maxTemperature}℃`;

  let humidity = Math.round(response.data.main.humidity);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `Humidity: ${humidity}% `;

  let windSpeed = response.data.wind.speed;
  let windSpeedElement = document.querySelector("#windSpeed");
  windSpeedElement.innerHTML = `Wind Speed: ${windSpeed}m/s`;

  let cloudiness = response.data.clouds.all;
  let clouidnessElement = document.querySelector("#cloudiness");
  clouidnessElement.innerHTML = `Cloud cover: ${cloudiness}%`;

  let iconElement = document.querySelector("#icon"); 
  iconElement.setAttribute("src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`);
}

function search(event) {
  event.preventDefault();
  let apiKey = "ef7148424e5959aa978cb7999e701c33";
  let units = "metric";
  let city = document.querySelector("#cityInput").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showSearchTemperature);
}

let currentTemp = document.querySelector("#searchForm");
currentTemp.addEventListener("submit", search);


function showSearchImperialTemperature(response) {

  let cityInput = document.querySelector("#cityInput");
  let newCity = document.querySelector("#searchResult");
  newCity.innerHTML = cityInput.value;

  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = `${temperature}℉`;

  let weather = response.data.weather[0].main;
  let weatherElement = document.querySelector("#weather");
  weatherElement.innerHTML = `${weather}`;

  let feelsLike = Math.round(response.data.main.feels_like);
  let feelsLikeElement = document.querySelector("#feelsLike");
  feelsLikeElement.innerHTML = `Feels like: ${feelsLike}℉ `;

  let minTemperature = Math.round(response.data.main.temp_min);
  let maxTemperature = Math.round(response.data.main.temp_max);
  let minMaxTemperatureElement = document.querySelector("#minMax");
  minMaxTemperatureElement.innerHTML = `Min: ${minTemperature}℉ Max: ${maxTemperature}℉`;

  let humidity = Math.round(response.data.main.humidity);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `Humidity: ${humidity}% `;

  let windSpeed = response.data.wind.speed;
  let windSpeedElement = document.querySelector("#windSpeed");
  windSpeedElement.innerHTML = `Wind Speed: ${windSpeed}m/h`;

  let cloudiness = response.data.clouds.all;
  let clouidnessElement = document.querySelector("#cloudiness");
  clouidnessElement.innerHTML = `Cloud cover: ${cloudiness}%`;

  let iconElement = document.querySelector("#icon"); 
  iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`);

}

function showFahrenheitTemp(event) {
  event.preventDefault();
  let apiKey = "ef7148424e5959aa978cb7999e701c33";
  let units = "imperial";
  let city = document.querySelector("#cityInput").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showSearchImperialTemperature);

}

let fahrenheitLink = document.querySelector("#fahrenheitLink");
fahrenheitLink.addEventListener("click", showFahrenheitTemp);

let celsiusLink = document.querySelector("#celsiusLink");
celsiusLink.addEventListener("click", search);