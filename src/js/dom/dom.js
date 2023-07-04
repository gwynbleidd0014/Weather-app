import { parseDate, parseDaily } from "../utils/utils.js";
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
const dailyWeather = document.querySelector(".daily-weather");

export { loadUi, getInputValue };

function loadUi(data) {
  loadSearchAndCurrent(data);
  console.log("doneone");
  loadExtraInfo(data);
  console.log("donetwo");
  populateDaily(data);
  console.log("donetree");
  searchImg.src = searchI;
}

function loadSearchAndCurrent(data) {
  condition.textContent = data?.current?.condition?.text;
  city.textContent = data?.location?.name;
  const dateObj = parseDate(data?.location?.localtime);
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

function populateDaily(data) {
  const week = parseDaily(data.forecast.forecastday);
  dailyWeather.innerHTML = "";
  week.forEach((dayInfo) => {
    const divWrapper = document.createElement("div");
    const weekDay = document.createElement("div");
    const maxTemp = document.createElement("div");
    const minTemp = document.createElement("div");
    const tempWrap = document.createElement("div");
    const icon = document.createElement("img");

    divWrapper.className = "day-info-wrapper";
    weekDay.className = "weekday";
    maxTemp.className = "max-temp";
    minTemp.className = "min-temp";
    tempWrap.className = "temp-wrap";
    icon.className = "weather-icon";

    weekDay.textContent = dayInfo.weekDay;
    maxTemp.textContent = `${dayInfo.maxTemp} ${String.fromCodePoint(8451)}`;
    minTemp.textContent = `${dayInfo.minTemp} ${String.fromCodePoint(8451)}`;
    icon.src = dayInfo.iconPath;
    icon.alt = dayInfo.condition;

    tempWrap.append(maxTemp, minTemp);
    divWrapper.append(weekDay, tempWrap, icon);
    dailyWeather.appendChild(divWrapper);
  });
}

input.addEventListener("keydown", (e) => {
  if (e.key != "Enter") return;

  searchForWeather();
  input.value = "";
});

searchImg.addEventListener("click", (e) => {
  searchForWeather();
  input.value = "";
});

function productOfArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr[arr.length - 1] + productOfArray(arr.slice(arr.length - 1));
  }
}

productOfArray([1, 2, 3]);

function totalInt(times, n) {
  if (times === 1) {
    return [n];
  } else {
    return [n, ...totalInt(times - 1, n)];
  }
}

console.log(totalInt(4, 5));
