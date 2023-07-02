import parseDate from "../utils/utils.js";
import searchI from "../../assets/search.svg";
import thermoI from "../../assets/thermo.svg";
import humidityI from "../../assets/humidity.svg";
import rainyI from "../../assets/rainy.svg";
import windI from "../../assets/wind.svg";
import searchWeatherByCity from "../api/apiFunctions.js";

//DOM ELEMENTS
const condition = document.querySelector(".condition");
const city = document.querySelector(".city");
const date = document.querySelector(".date");
const time = document.querySelector(".time");
const tempreture = document.querySelector(".tempreture");
const searchImg = document.querySelector(".search-icon");
const feelsLike = document.querySelector(".feels-like");
const humidity = document.querySelector(".humidity");
const chanceOfRain = document.querySelector(".chance-of-rain");
const windSpeed = document.querySelector(".wind-speed");
const input = document.querySelector("input");

export { loadUi, getInputValue };

function loadUi(data) {
  loadSearchAndCurrent(data);
  loadExtraInfo(data);
  searchImg.src = searchI;
}

function loadSearchAndCurrent(data) {
  condition.textContent = data?.current?.condition?.text;
  city.textContent = data?.location?.name;
  const dateObj = parseDate(data);
  date.textContent = `${dateObj.day}, ${dateObj.ord} ${dateObj.month}'${dateObj.year}`;
  time.textContent = dateObj.time;
  tempreture.textContent = data.current.temp_c + String.fromCodePoint(8451);
}

function loadExtraInfo(data) {
  feelsLike.firstElementChild.src = thermoI;
  feelsLike.querySelector(".info").textContent =
    data.current.feelslike_c + " " + String.fromCodePoint(8451);
  humidity.firstElementChild.src = humidityI;
  humidity.querySelector(".info").textContent =
    data.current.humidity + " " + "%";
  chanceOfRain.firstElementChild.src = rainyI;
  chanceOfRain.querySelector(".info").textContent =
    data.forecast.forecastday[0].day.daily_chance_of_rain + " " + "%";
  windSpeed.firstElementChild.src = windI;
  windSpeed.querySelector(".info").textContent =
    data.current.wind_kph + " " + "km/h";
}

function getInputValue() {
  return input.value ? input.value.trim().toLowerCase() : "rustavi";
}

async function searchForWeather() {
  const data = await searchWeatherByCity(getInputValue());
  loadUi(data);
}

input.addEventListener("keydown", (e) => {
  if (e.key != "Enter") return;

  searchForWeather();
  input.value = "";
});
