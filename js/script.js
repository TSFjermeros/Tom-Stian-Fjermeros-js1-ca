//const weatherUrl =
//  "http://api.openweathermap.org/data/2.5/weather?q=Mandal&units=imperial&appid=";
//8c50608e1dd813e2851de6e2e6820cfb
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temp");
const descElement = document.querySelector(".temp-description");
const locationElement = document.querySelector(".location p");
const notifacationElement = document.querySelector(".error-notification");

const weather = {};

weather.temperature = {
	unit: "celsius",
};

const KELVIN = 273;

const key = "8c50608e1dd813e2851de6e2e6820cfb";

if ("geolocation" in navigator) {
	navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
	notificationElements.style.display = "block";
	notificationElements.innerHTML = "<p> Doesn't Suport geolocation</p>";
}

function setPosition(position) {
	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;

	getWeather(latitude, longitude);
}

function showError(error) {
	notificationElements.style.display = "block";
	notificationElements.innerHTML = `<p> ${error.message} </p>`;
}

function getWeather(latitude, longitude) {
	let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

	fetch(api)
		.then(function (response) {
			let data = response.json();
			return data;
		})
		.then(function (data) {
			weather.temperature.value = Math.floor(data.main.temp - KELVIN);
			weather.description = data.weather[0].description;
			weather.iconId = data.weather[0].icon;
			weather.city = data.name;
			weather.country = data.sys.country;
		})
		.then(function () {
			displayWeather();
		});
}

function displayWeather() {
	iconElement.innerHTML = `<img src="icon/${weather.iconID}.png"/>`;
	tempElement.innerHTML = `${weather.temperature.value}ª<span>C</span>`;
	descElement.innerHTML = weather.description;
	locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
