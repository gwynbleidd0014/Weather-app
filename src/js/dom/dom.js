import { parseDate, parseDaily, parseHourly } from "../utils/utils.js";
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
const hourlyWeather = document.querySelector(".hourly-weather");
const daily = document.querySelector(".daily");
const hourly = document.querySelector(".hourly");

const cel = String.fromCodePoint(8451);
let hourlyBool = false;

export { loadUi, getInputValue };

function loadUi(data) {
  loadSearchAndCurrent(data);

  loadExtraInfo(data);

  if (hourlyBool) {
    populateHourly(data);
  } else {
    populateDaily(data);
  }
  searchImg.src = searchI;
}

function loadSearchAndCurrent(data) {
  condition.textContent = data?.current?.condition?.text;
  city.textContent =
    data?.location?.name === "Gardabani" ? "Rustavi" : data?.location?.name;
  const dateObj = parseDate(data?.location?.localtime);
  date.textContent = `${dateObj.day}, ${dateObj.ord} ${dateObj.month}'${dateObj.year}`;
  time.textContent = dateObj.time;
  tempreture.textContent = data.current.temp_c + cel;
}

function loadExtraInfo(data) {
  feelsLike.firstElementChild.src = thermoI;
  feelsLike.querySelector(".info").textContent =
    data.current.feelslike_c + " " + cel;
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
  return input.value ? input.value.trim().toLowerCase() : "";
}

async function searchForWeather() {
  const data = await searchWeatherByCity(getInputValue());
  loadUi(data);
}

function populateDaily(data) {
  const week = parseDaily(data.forecast.forecastday);
  dailyWeather.innerHTML = "";
  hourlyWeather.innerHTML = "";
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
    maxTemp.textContent = `${dayInfo.maxTemp} ${cel}`;
    minTemp.textContent = `${dayInfo.minTemp} ${cel}`;
    icon.src = dayInfo.iconPath;
    icon.alt = dayInfo.condition;

    tempWrap.append(maxTemp, minTemp);
    divWrapper.append(weekDay, tempWrap, icon);
    dailyWeather.appendChild(divWrapper);
  });
}

function populateHourly(data, stage = 1) {
  const hours = parseHourly(
    data.forecast.forecastday[0].hour,
    data.location.localtime
  );
  dailyWeather.innerHTML = "";
  hourlyWeather.innerHTML = "";
  let start = null;
  let end = null;
  start = stage === 1 ? 0 : stage === 2 ? 8 : 15;
  end = stage === 1 ? 7 : stage === 2 ? 15 : hours.length - 1;

  for (let i = start; i <= end; i++) {
    const divWrapper = document.createElement("div");
    const hour = document.createElement("div");
    const temp = document.createElement("div");
    const icon = document.createElement("img");

    divWrapper.className = "hour-info-wrapper";
    hour.className = "hour";
    temp.className = "temp";
    icon.className = "weather-icon";

    hour.textContent = hours[i].time;
    temp.textContent = `${hours[i].temp} ${cel}`;
    icon.src = hours[i].iconPath;
    icon.alt = hours[i].condition;

    divWrapper.append(hour, temp, icon);
    hourlyWeather.appendChild(divWrapper);
  }
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

daily.addEventListener("click", (e) => {
  hourlyBool = false;
  searchForWeather();
});

hourly.addEventListener("click", (e) => {
  hourlyBool = true;
  searchForWeather();
});
