const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feelsLike = document.getElementById("feelsLike");
const weatherIcon = document.getElementById("weatherIcon");
const errorMessage = document.getElementById("errorMessage");

const dateTime = document.getElementById("dateTime");

function updateDateTime() {
    const now = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    dateTime.textContent = now.toLocaleDateString("en-IN", options);
}

updateDateTime();

const weatherData = {
    patna: {
        temperature: "28°C",
        condition: "Partly Cloudy",
        humidity: "65%",
        wind: "12 km/h",
        feelsLike: "30°C",
        icon: "🌤️"
    },

    delhi: {
        temperature: "32°C",
        condition: "Sunny",
        humidity: "45%",
        wind: "10 km/h",
        feelsLike: "34°C",
        icon: "☀️"
    },

    mumbai: {
        temperature: "29°C",
        condition: "Cloudy",
        humidity: "78%",
        wind: "15 km/h",
        feelsLike: "31°C",
        icon: "☁️"
    },

    london: {
        temperature: "16°C",
        condition: "Rainy",
        humidity: "82%",
        wind: "18 km/h",
        feelsLike: "15°C",
        icon: "🌧️"
    },

    dubai: {
        temperature: "38°C",
        condition: "Sunny",
        humidity: "35%",
        wind: "14 km/h",
        feelsLike: "41°C",
        icon: "☀️"
    }
};

function searchWeather() {

    const city = cityInput.value.trim().toLowerCase();

    if (city === "") {
        errorMessage.textContent = "Please enter a city name.";
        return;
    }

    if (!weatherData[city]) {
        errorMessage.textContent =
            "Demo data not available for this city.";
        return;
    }

    const data = weatherData[city];

    cityName.textContent =
        city.charAt(0).toUpperCase() + city.slice(1);

    temperature.textContent = data.temperature;
    condition.textContent = data.condition;
    humidity.textContent = data.humidity;
    wind.textContent = data.wind;
    feelsLike.textContent = data.feelsLike;
    weatherIcon.textContent = data.icon;

    errorMessage.textContent = "";
}

searchBtn.addEventListener("click", searchWeather);

cityInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        searchWeather();
    }

});