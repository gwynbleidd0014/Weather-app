/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/api/apiFunctions.js":
/*!************************************!*\
  !*** ./src/js/api/apiFunctions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchWeatherByCity)
/* harmony export */ });
/* harmony import */ var _dom_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/dom.js */ "./src/js/dom/dom.js");

async function searchWeatherByCity(city) {
  city = city === "" ? document.querySelector(".city").textContent.toLowerCase() : city;
  if (city === "rustavi") city = "176.221.252.21";
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d409c877c1dc4a8f84d201629233006&q=${city}&days=7`, {
    mode: "cors"
  });
  const data = await response.json();
  return data;
}

/***/ }),

/***/ "./src/js/dom/dom.js":
/*!***************************!*\
  !*** ./src/js/dom/dom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInputValue: () => (/* binding */ getInputValue),
/* harmony export */   loadUi: () => (/* binding */ loadUi)
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/js/utils/utils.js");
/* harmony import */ var _assets_search_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/search.svg */ "./src/assets/search.svg");
/* harmony import */ var _assets_thermo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/thermo.svg */ "./src/assets/thermo.svg");
/* harmony import */ var _assets_humidity_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/humidity.svg */ "./src/assets/humidity.svg");
/* harmony import */ var _assets_rainy_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/rainy.svg */ "./src/assets/rainy.svg");
/* harmony import */ var _assets_wind_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/wind.svg */ "./src/assets/wind.svg");
/* harmony import */ var _api_apiFunctions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/apiFunctions.js */ "./src/js/api/apiFunctions.js");
/* harmony import */ var _assets_arrow_left_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/arrow_left.svg */ "./src/assets/arrow_left.svg");
/* harmony import */ var _assets_arrow_right_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/arrow_right.svg */ "./src/assets/arrow_right.svg");










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
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const sections = document.querySelector(".sections");
const cel = String.fromCodePoint(8451);
let hourlyBool = false;

function loadUi(data) {
  loadSearchAndCurrent(data);
  loadArrows();
  loadExtraInfo(data);
  if (hourlyBool) {
    populateHourly(data);
  } else {
    populateDaily(data);
  }
  searchImg.src = _assets_search_svg__WEBPACK_IMPORTED_MODULE_1__;
}
function loadArrows() {
  left.src = _assets_arrow_left_svg__WEBPACK_IMPORTED_MODULE_7__;
  right.src = _assets_arrow_right_svg__WEBPACK_IMPORTED_MODULE_8__;
}
function loadSearchAndCurrent(data) {
  var _data$current, _data$current$conditi, _data$location, _data$location2, _data$location3;
  condition.textContent = data === null || data === void 0 ? void 0 : (_data$current = data.current) === null || _data$current === void 0 ? void 0 : (_data$current$conditi = _data$current.condition) === null || _data$current$conditi === void 0 ? void 0 : _data$current$conditi.text;
  city.textContent = (data === null || data === void 0 ? void 0 : (_data$location = data.location) === null || _data$location === void 0 ? void 0 : _data$location.name) === "Gardabani" ? "Rustavi" : data === null || data === void 0 ? void 0 : (_data$location2 = data.location) === null || _data$location2 === void 0 ? void 0 : _data$location2.name;
  const dateObj = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.parseDate)(data === null || data === void 0 ? void 0 : (_data$location3 = data.location) === null || _data$location3 === void 0 ? void 0 : _data$location3.localtime);
  date.textContent = `${dateObj.day}, ${dateObj.ord} ${dateObj.month}'${dateObj.year}`;
  time.textContent = dateObj.time;
  tempreture.textContent = data.current.temp_c + cel;
}
function loadExtraInfo(data) {
  feelsLike.firstElementChild.src = _assets_thermo_svg__WEBPACK_IMPORTED_MODULE_2__;
  feelsLike.querySelector(".info").textContent = data.current.feelslike_c + " " + cel;
  humidity.firstElementChild.src = _assets_humidity_svg__WEBPACK_IMPORTED_MODULE_3__;
  humidity.querySelector(".info").textContent = data.current.humidity + " " + "%";
  chanceOfRain.firstElementChild.src = _assets_rainy_svg__WEBPACK_IMPORTED_MODULE_4__;
  chanceOfRain.querySelector(".info").textContent = data.forecast.forecastday[0].day.daily_chance_of_rain + " " + "%";
  windSpeed.firstElementChild.src = _assets_wind_svg__WEBPACK_IMPORTED_MODULE_5__;
  windSpeed.querySelector(".info").textContent = data.current.wind_kph + " " + "km/h";
}
function getInputValue() {
  return input.value ? input.value.trim().toLowerCase() : "";
}
async function searchForWeather() {
  const data = await (0,_api_apiFunctions_js__WEBPACK_IMPORTED_MODULE_6__["default"])(getInputValue());
  loadUi(data);
}
function populateDaily(data) {
  const week = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.parseDaily)(data.forecast.forecastday);
  dailyWeather.innerHTML = "";
  hourlyWeather.innerHTML = "";
  week.forEach(dayInfo => {
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
function populateHourly(data) {
  let stage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  const hours = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.parseHourly)(data.forecast.forecastday[0].hour, data.location.localtime);
  console.log(hours);
  dailyWeather.innerHTML = "";
  hourlyWeather.innerHTML = "";
  let start = null;
  let end = null;
  start = stage === 1 ? 0 : stage === 2 ? 8 : 15;
  end = stage === 1 ? 7 : stage === 2 ? 15 : hours.length - 2;
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
async function move(e) {
  const currentDot = document.querySelector(".active");
  const currentId = parseInt(currentDot.dataset.id);
  const arrow = e.target.classList.contains("left") ? "left" : "right";
  if (currentId === 1 && arrow === "left") return;
  if (currentId === 3 && arrow === "right") return;
  currentDot.classList.toggle("active");
  const nextId = arrow === "left" ? currentId - 1 : currentId + 1;
  document.querySelector(`[data-id="${nextId}"]`).classList.toggle("active");
  const data = await (0,_api_apiFunctions_js__WEBPACK_IMPORTED_MODULE_6__["default"])("");
  populateHourly(data, nextId);
}
input.addEventListener("keydown", e => {
  if (e.key != "Enter") return;
  searchForWeather();
  input.value = "";
});
searchImg.addEventListener("click", e => {
  searchForWeather();
  input.value = "";
});
daily.addEventListener("click", e => {
  hourlyBool = false;
  sections.classList.remove("visible");
  daily.className = "daily toggler chosen";
  hourly.className = "hourly toggler";
  searchForWeather();
});
hourly.addEventListener("click", e => {
  sections.classList.add("visible");
  daily.className = "daily toggler";
  hourly.className = "hourly toggler chosen";
  hourlyBool = true;
  searchForWeather();
});
left.addEventListener("click", move);
right.addEventListener("click", move);

/***/ }),

/***/ "./src/js/utils/utils.js":
/*!*******************************!*\
  !*** ./src/js/utils/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseDaily: () => (/* binding */ parseDaily),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   parseHourly: () => (/* binding */ parseHourly)
/* harmony export */ });
/* harmony import */ var _assets_cloud_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/cloud.svg */ "./src/assets/cloud.svg");
/* harmony import */ var _assets_cloudy_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/cloudy.svg */ "./src/assets/cloudy.svg");
/* harmony import */ var _assets_lightning_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/lightning.svg */ "./src/assets/lightning.svg");
/* harmony import */ var _assets_mist_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/mist.svg */ "./src/assets/mist.svg");
/* harmony import */ var _assets_moon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/moon.svg */ "./src/assets/moon.svg");
/* harmony import */ var _assets_rainy_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/rainy.svg */ "./src/assets/rainy.svg");
/* harmony import */ var _assets_snow_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/snow.svg */ "./src/assets/snow.svg");
/* harmony import */ var _assets_sun_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/sun.svg */ "./src/assets/sun.svg");









function parseDate(date) {
  const year = parseInt(date.split("-")[0]);
  const monthIndex = parseInt(date.split("-")[1]) - 1;
  const day = parseInt(date.split("-")[2].split(" ")[0]);
  const time = date.split(" ")[1];
  date = new Date(year, monthIndex, day);
  return {
    month: getMonth(date.getMonth()),
    day: getDay(date.getDay()),
    year: year.toString().slice(2),
    ord: getOrdinal(date.getDate()),
    time
  };
}
function getDay(day) {
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekday[day];
}
function getMonth(month) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  return months[month];
}
function getOrdinal(n) {
  let ord = "th";
  if (n % 10 === 1) {
    ord = "st";
  }
  if (n % 10 === 2) {
    ord = "nd";
  }
  if (n % 10 === 3) {
    ord = "rd";
  }
  return n + ord;
}
function parseDaily(data) {
  const weekInfo = [];
  if (!data) return;
  data.forEach(day => {
    weekInfo.push({
      weekDay: parseDate(day.date).day,
      maxTemp: day.day.maxtemp_c,
      minTemp: day.day.mintemp_c,
      iconPath: getIcon(day.day.condition.text),
      condition: day.day.condition.text
    });
  });
  return weekInfo;
}
function parseHourly(hours, localtime) {
  const hourly = [];
  hours.forEach(hour => {
    hourly.push({
      temp: hour.temp_c,
      time: parseDate(hour.time).time,
      iconPath: getIcon(hour.condition.text),
      condition: hour.condition.text
    });
  });
  return transformHourly(hourly, localtime);
}
function transformHourly(hourly, localtime) {
  const splited = localtime.split("");
  splited[splited.length - 1] = "0";
  splited[splited.length - 2] = "0";
  const time = splited.slice(-5).join("");
  const i = hourly.findIndex(hour => {
    return hour.time === time;
  });
  if (i === 0) return hourly;
  const secondPart = hourly.slice(i);
  const firstPart = hourly.slice(0, i);
  return [...secondPart, ...firstPart];
}
function getIcon(c) {
  let i = null;
  switch (c) {
    case "Sunny":
      i = _assets_sun_svg__WEBPACK_IMPORTED_MODULE_7__;
      break;
    case "Clear":
      i = _assets_moon_svg__WEBPACK_IMPORTED_MODULE_4__;
      break;
    case "Cloudy":
    case "Patchy sleet possible":
    case "Overcast":
    case "Partly cloudy":
      i = _assets_cloudy_svg__WEBPACK_IMPORTED_MODULE_1__;
      break;
    case "Mist":
    case "Fog":
    case "Freezing fog":
    case "Patchy light drizzle":
      i = _assets_mist_svg__WEBPACK_IMPORTED_MODULE_3__;
      break;
    case "Thundery outbreaks possible":
      i = _assets_lightning_svg__WEBPACK_IMPORTED_MODULE_2__;
      break;
    case "Patchy rain possible":
    case "Light drizzle":
    case "Freezing drizzle":
    case "Heavy freezing drizzle":
    case "Patchy light rain":
    case "Light rain":
    case "Moderate rain at times":
    case "Moderate rain":
    case "Heavy rain at times":
    case "Heavy rain":
    case "Light freezing rain":
    case "Moderate or heavy freezing rain":
    case "Light rain shower":
    case "Moderate or heavy rain shower":
    case "Torrential rain shower":
    case "Patchy light rain with thunder":
    case "Moderate or heavy rain with thunder":
      i = _assets_rainy_svg__WEBPACK_IMPORTED_MODULE_5__;
      break;
    case "Patchy snow possible":
    case "Blowing snow":
    case "Blizzard":
    case "Light sleet":
    case "Moderate or heavy sleet":
    case "Patchy light snow":
    case "Light snow":
    case "Patchy moderate snow":
    case "Moderate snow":
    case "Patchy heavy snow":
    case "Heavy snow":
    case "Ice pellets":
    case "Light sleet showers":
    case "Moderate or heavy sleet showers":
    case "Light snow showers":
    case "Moderate or heavy snow showers":
    case "Light showers of ice pellets":
    case "Moderate or heavy showers of ice pellets":
    case "Patchy light snow with thunder":
    case "Moderate or heavy snow with thunder":
      i = _assets_snow_svg__WEBPACK_IMPORTED_MODULE_6__;
      break;
    default:
      i = _assets_cloud_svg__WEBPACK_IMPORTED_MODULE_0__;
  }
  return i;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/display-weather.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/display-weather.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.daily-weather,
.hourly-weather {
  display: flex;
  justify-content: space-between;
  gap: 2em;
  white-space: nowrap;
}

.day-info-wrapper,
.hour-info-wrapper {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.weekday,
.hour {
  font-size: 1.5rem;
  margin-bottom: 1em;
  letter-spacing: 1.4px;
}

.max-temp,
.temp {
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 0.1em;
}

.min-temp {
  font-size: 1rem;
  margin-bottom: 1em;
}

.weather-icon {
  width: 50px;
}

@media screen and (max-width: 1050px) {
  /* .daily-weather {
      flex-direction: column;
    } */

  .weekday,
  .hour {
    font-size: 0.8rem;
    margin-bottom: 1em;
    letter-spacing: 1.4px;
  }
  .max-temp,
  .temp {
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 0.1em;
  }

  .min-temp {
    font-size: 0.6rem;
    margin-bottom: 1em;
  }

  .weather-icon {
    width: 30px;
  }
}

@media screen and (max-width: 1200px) {
  .weekday,
  .hour {
    margin-bottom: 1em;
  }
  .max-temp,
  .temp {
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 0.1em;
  }

  .min-temp {
    font-size: 0.8rem;
    margin-bottom: 1em;
  }

  .weather-icon {
    width: 40px;
  }
}

@media screen and (max-width: 960px) {
  .daily-weather,
  .hourly-weather {
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
  }

  .day-info-wrapper,
  .hour-info-wrapper {
    flex-direction: row;
    width: 100%;
    gap: 2em;
    justify-content: space-between;
  }

  .temp-wrap {
    margin-left: auto;
  }

  .weekday,
  .hour {
    font-size: 1.4rem;
    margin-bottom: 1em;
    letter-spacing: 1.4px;
  }
}

@media screen and (max-width: 600px) {
  .weekday,
  .hour {
    margin-bottom: 1em;
    font-size: 1rem;
  }

  .max-temp,
  .temp {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0.1em;
  }

  .min-temp {
    font-size: 0.7rem;
    margin-bottom: 1em;
  }

  .weather-icon {
    width: 30px;
  }
}

.hour,
.temp {
  margin-bottom: 0.5em;
}

.weather-display {
  min-height: 200px;
}
`, "",{"version":3,"sources":["webpack://./src/css/display-weather.css"],"names":[],"mappings":"AAAA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,QAAQ;EACR,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;;EAEE,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;;EAEE,gBAAgB;EAChB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE;;OAEK;;EAEL;;IAEE,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;EACvB;EACA;;IAEE,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;EACtB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,WAAW;EACb;AACF;;AAEA;EACE;;IAEE,kBAAkB;EACpB;EACA;;IAEE,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;EACtB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,WAAW;EACb;AACF;;AAEA;EACE;;IAEE,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,cAAc;EAChB;;EAEA;;IAEE,mBAAmB;IACnB,WAAW;IACX,QAAQ;IACR,8BAA8B;EAChC;;EAEA;IACE,iBAAiB;EACnB;;EAEA;;IAEE,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;EACvB;AACF;;AAEA;EACE;;IAEE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;;IAEE,gBAAgB;IAChB,eAAe;IACf,oBAAoB;EACtB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,WAAW;EACb;AACF;;AAEA;;EAEE,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":[".daily-weather,\n.hourly-weather {\n  display: flex;\n  justify-content: space-between;\n  gap: 2em;\n  white-space: nowrap;\n}\n\n.day-info-wrapper,\n.hour-info-wrapper {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n}\n\n.weekday,\n.hour {\n  font-size: 1.5rem;\n  margin-bottom: 1em;\n  letter-spacing: 1.4px;\n}\n\n.max-temp,\n.temp {\n  font-weight: 600;\n  font-size: 2rem;\n  margin-bottom: 0.1em;\n}\n\n.min-temp {\n  font-size: 1rem;\n  margin-bottom: 1em;\n}\n\n.weather-icon {\n  width: 50px;\n}\n\n@media screen and (max-width: 1050px) {\n  /* .daily-weather {\n      flex-direction: column;\n    } */\n\n  .weekday,\n  .hour {\n    font-size: 0.8rem;\n    margin-bottom: 1em;\n    letter-spacing: 1.4px;\n  }\n  .max-temp,\n  .temp {\n    font-weight: 600;\n    font-size: 1.2rem;\n    margin-bottom: 0.1em;\n  }\n\n  .min-temp {\n    font-size: 0.6rem;\n    margin-bottom: 1em;\n  }\n\n  .weather-icon {\n    width: 30px;\n  }\n}\n\n@media screen and (max-width: 1200px) {\n  .weekday,\n  .hour {\n    margin-bottom: 1em;\n  }\n  .max-temp,\n  .temp {\n    font-weight: 600;\n    font-size: 1.5rem;\n    margin-bottom: 0.1em;\n  }\n\n  .min-temp {\n    font-size: 0.8rem;\n    margin-bottom: 1em;\n  }\n\n  .weather-icon {\n    width: 40px;\n  }\n}\n\n@media screen and (max-width: 960px) {\n  .daily-weather,\n  .hourly-weather {\n    flex-direction: column;\n    align-items: center;\n    max-width: 400px;\n    margin: 0 auto;\n  }\n\n  .day-info-wrapper,\n  .hour-info-wrapper {\n    flex-direction: row;\n    width: 100%;\n    gap: 2em;\n    justify-content: space-between;\n  }\n\n  .temp-wrap {\n    margin-left: auto;\n  }\n\n  .weekday,\n  .hour {\n    font-size: 1.4rem;\n    margin-bottom: 1em;\n    letter-spacing: 1.4px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .weekday,\n  .hour {\n    margin-bottom: 1em;\n    font-size: 1rem;\n  }\n\n  .max-temp,\n  .temp {\n    font-weight: 600;\n    font-size: 1rem;\n    margin-bottom: 0.1em;\n  }\n\n  .min-temp {\n    font-size: 0.7rem;\n    margin-bottom: 1em;\n  }\n\n  .weather-icon {\n    width: 30px;\n  }\n}\n\n.hour,\n.temp {\n  margin-bottom: 0.5em;\n}\n\n.weather-display {\n  min-height: 200px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/extra.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/extra.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.extra {
  display: flex;
  align-items: flex-start;
  gap: 0.5em;
  margin-bottom: 2em;
  white-space: nowrap;
}

.icon {
  width: 25px;
}

.header {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.4px;
  margin-bottom: 0.5em;
}

.info {
  font-size: 1.5rem;
  font-weight: 400;
}

@media screen and (max-width: 600px) {
  .info {
    font-size: 1rem;
  }

  .header {
    font-size: 0.6rem;
  }

  .icon {
    width: 20px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/extra.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;EACV,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,WAAW;EACb;AACF","sourcesContent":[".extra {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5em;\n  margin-bottom: 2em;\n  white-space: nowrap;\n}\n\n.icon {\n  width: 25px;\n}\n\n.header {\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.4px;\n  margin-bottom: 0.5em;\n}\n\n.info {\n  font-size: 1.5rem;\n  font-weight: 400;\n}\n\n@media screen and (max-width: 600px) {\n  .info {\n    font-size: 1rem;\n  }\n\n  .header {\n    font-size: 0.6rem;\n  }\n\n  .icon {\n    width: 20px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/layout.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/layout.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/background.png */ "./src/assets/background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.app {
  width: 100vw;
  height: 100vh;
  display: grid;
  overflow-x: hidden;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-areas:
    "main"
    "..."
    "weather-display";
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center;
  background-size: cover;
  padding: 5em;
  color: white;
  row-gap: 4em;
}

.main {
  grid-area: main;
  display: flex;
  justify-content: space-between;
  gap: 1em;
}

.weather-display {
  grid-area: weather-display;
}

@media screen and (max-width: 600px) {
  .app {
    padding: 1em;
    padding-top: 4em;
    row-gap: 10em;
    grid-template-areas:
      "main"
      "weather-display"
      "weather-display";
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/layout.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,0BAA0B;EAC1B,+BAA+B;EAC/B;;;qBAGmB;EACnB,oEAA0D;EAC1D,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,QAAQ;AACV;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE;IACE,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb;;;uBAGmB;EACrB;AACF","sourcesContent":[".app {\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  overflow-x: hidden;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 2fr 1fr;\n  grid-template-areas:\n    \"main\"\n    \"...\"\n    \"weather-display\";\n  background: url(../assets/background.png) no-repeat center;\n  background-size: cover;\n  padding: 5em;\n  color: white;\n  row-gap: 4em;\n}\n\n.main {\n  grid-area: main;\n  display: flex;\n  justify-content: space-between;\n  gap: 1em;\n}\n\n.weather-display {\n  grid-area: weather-display;\n}\n\n@media screen and (max-width: 600px) {\n  .app {\n    padding: 1em;\n    padding-top: 4em;\n    row-gap: 10em;\n    grid-template-areas:\n      \"main\"\n      \"weather-display\"\n      \"weather-display\";\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/search-and-current.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/search-and-current.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.condition {
  font-size: 2.5rem;
  margin-bottom: 0.2em;
  white-space: nowrap;
}

.city {
  margin-bottom: 0.8em;
  font-size: 1.2rem;
}

.time {
  margin-bottom: 1em;
}

.tempreture {
  font-size: 4rem;
  margin-bottom: 0.2em;
  font-weight: 600;
}

.search-wrapper {
  padding: 0.2em 0.5em;
  border-bottom: 2px solid white;
  display: inline-flex;
}

input[type="text"] {
  appearance: none;
  border: none;
  outline: none;
  background: transparent;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  width: 170px;
}

input[type="text"]::placeholder {
  opacity: 1;
  color: white;
}

.search-icon {
  height: 1.5em;
  transform: rotate(270deg);
  flex: 1;
}

.search-icon:hover {
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .condition {
    font-size: 1.2rem;
    white-space: wrap;
    margin-bottom: 1em;
  }

  .city {
    font-size: 1rem;
  }

  .date-time {
    font-size: 0.7rem;
  }

  .tempreture {
    font-size: 2rem;
  }

  input[type="text"] {
    font-size: 0.6rem;
    width: 100px;
  }

  .search-icon {
    height: 1em;
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/search-and-current.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,8BAA8B;EAC9B,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,oBAAoB;EACpB,cAAc;EACd,YAAY;AACd;;AAEA;EACE,UAAU;EACV,YAAY;AACd;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,OAAO;AACT;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;IACE,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;IACjB,YAAY;EACd;;EAEA;IACE,WAAW;EACb;AACF","sourcesContent":[".condition {\n  font-size: 2.5rem;\n  margin-bottom: 0.2em;\n  white-space: nowrap;\n}\n\n.city {\n  margin-bottom: 0.8em;\n  font-size: 1.2rem;\n}\n\n.time {\n  margin-bottom: 1em;\n}\n\n.tempreture {\n  font-size: 4rem;\n  margin-bottom: 0.2em;\n  font-weight: 600;\n}\n\n.search-wrapper {\n  padding: 0.2em 0.5em;\n  border-bottom: 2px solid white;\n  display: inline-flex;\n}\n\ninput[type=\"text\"] {\n  appearance: none;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: inherit;\n  font-family: inherit;\n  color: inherit;\n  width: 170px;\n}\n\ninput[type=\"text\"]::placeholder {\n  opacity: 1;\n  color: white;\n}\n\n.search-icon {\n  height: 1.5em;\n  transform: rotate(270deg);\n  flex: 1;\n}\n\n.search-icon:hover {\n  cursor: pointer;\n}\n\n@media screen and (max-width: 600px) {\n  .condition {\n    font-size: 1.2rem;\n    white-space: wrap;\n    margin-bottom: 1em;\n  }\n\n  .city {\n    font-size: 1rem;\n  }\n\n  .date-time {\n    font-size: 0.7rem;\n  }\n\n  .tempreture {\n    font-size: 2rem;\n  }\n\n  input[type=\"text\"] {\n    font-size: 0.6rem;\n    width: 100px;\n  }\n\n  .search-icon {\n    height: 1em;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./layout.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/layout.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_search_and_current_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./search-and-current.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/search-and-current.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_extra_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./extra.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/extra.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_display_weather_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./display-weather.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/display-weather.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_weather_togglers_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./weather-togglers.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/weather-togglers.css");
// Imports







var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_search_and_current_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_extra_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_display_weather_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_weather_togglers_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAOA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,gCAAgC;EAChC,gBAAgB;AAClB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap\");\n@import \"./layout.css\";\n@import \"./search-and-current.css\";\n@import \"./extra.css\";\n@import \"./display-weather\";\n@import \"./weather-togglers.css\";\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 16px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 400;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/weather-togglers.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/weather-togglers.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.changer {
  display: flex;
  gap: 2em;
  margin-bottom: 2em;
  overflow: hidden;
}

.toggler {
  padding: 0.4em 0.8em;
  font-weight: 600;
  letter-spacing: 1px;
  border: 1px solid transparent;
  transition: border 300ms ease-in;
}

.toggler:hover {
  cursor: pointer;
}

.sections {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5em;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-100%);
  transition: opacity 300ms ease-in, transform 300ms ease-in;
}

.left,
.right {
  width: 10px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 2px solid white;
}

.left:hover,
.right:hover {
  cursor: pointer;
}

.dot.active {
  background-color: white;
}

@media screen and (max-width: 960px) {
  .changer {
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 2em;
  }
}

.visible {
  opacity: 1;
  pointer-events: auto;
  transform: none;
}

.chosen {
  border: 1px solid white;
}
`, "",{"version":3,"sources":["webpack://./src/css/weather-togglers.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,QAAQ;EACR,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,mBAAmB;EACnB,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,UAAU;EACV,UAAU;EACV,oBAAoB;EACpB,4BAA4B;EAC5B,0DAA0D;AAC5D;;AAEA;;EAEE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE;IACE,gBAAgB;IAChB,cAAc;IACd,kBAAkB;EACpB;AACF;;AAEA;EACE,UAAU;EACV,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB","sourcesContent":[".changer {\n  display: flex;\n  gap: 2em;\n  margin-bottom: 2em;\n  overflow: hidden;\n}\n\n.toggler {\n  padding: 0.4em 0.8em;\n  font-weight: 600;\n  letter-spacing: 1px;\n  border: 1px solid transparent;\n  transition: border 300ms ease-in;\n}\n\n.toggler:hover {\n  cursor: pointer;\n}\n\n.sections {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.5em;\n  opacity: 0;\n  pointer-events: none;\n  transform: translateY(-100%);\n  transition: opacity 300ms ease-in, transform 300ms ease-in;\n}\n\n.left,\n.right {\n  width: 10px;\n}\n\n.dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 2px solid white;\n}\n\n.left:hover,\n.right:hover {\n  cursor: pointer;\n}\n\n.dot.active {\n  background-color: white;\n}\n\n@media screen and (max-width: 960px) {\n  .changer {\n    max-width: 400px;\n    margin: 0 auto;\n    margin-bottom: 2em;\n  }\n}\n\n.visible {\n  opacity: 1;\n  pointer-events: auto;\n  transform: none;\n}\n\n.chosen {\n  border: 1px solid white;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/arrow_left.svg":
/*!***********************************!*\
  !*** ./src/assets/arrow_left.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e843e8cbfc94b8067320.svg";

/***/ }),

/***/ "./src/assets/arrow_right.svg":
/*!************************************!*\
  !*** ./src/assets/arrow_right.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58fc0ffff6953e095e4e.svg";

/***/ }),

/***/ "./src/assets/background.png":
/*!***********************************!*\
  !*** ./src/assets/background.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9c45e9986cf81edaee0.png";

/***/ }),

/***/ "./src/assets/cloud.svg":
/*!******************************!*\
  !*** ./src/assets/cloud.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8795803e9d41b3c21f53.svg";

/***/ }),

/***/ "./src/assets/cloudy.svg":
/*!*******************************!*\
  !*** ./src/assets/cloudy.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80f4af1de95b40c27d79.svg";

/***/ }),

/***/ "./src/assets/humidity.svg":
/*!*********************************!*\
  !*** ./src/assets/humidity.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1d6a408086ccf1129b6.svg";

/***/ }),

/***/ "./src/assets/lightning.svg":
/*!**********************************!*\
  !*** ./src/assets/lightning.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5bc842611ce79b04846a.svg";

/***/ }),

/***/ "./src/assets/mist.svg":
/*!*****************************!*\
  !*** ./src/assets/mist.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0039a884cb81127c76a0.svg";

/***/ }),

/***/ "./src/assets/moon.svg":
/*!*****************************!*\
  !*** ./src/assets/moon.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f006604f31313e2b544.svg";

/***/ }),

/***/ "./src/assets/rainy.svg":
/*!******************************!*\
  !*** ./src/assets/rainy.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbc8b172ed49247db355.svg";

/***/ }),

/***/ "./src/assets/search.svg":
/*!*******************************!*\
  !*** ./src/assets/search.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "14b1b3398be643cd3603.svg";

/***/ }),

/***/ "./src/assets/snow.svg":
/*!*****************************!*\
  !*** ./src/assets/snow.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "feace2d35ab8ffe46e30.svg";

/***/ }),

/***/ "./src/assets/sun.svg":
/*!****************************!*\
  !*** ./src/assets/sun.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d36b6cdde73516127067.svg";

/***/ }),

/***/ "./src/assets/thermo.svg":
/*!*******************************!*\
  !*** ./src/assets/thermo.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d80d9325f2a6a118da5f.svg";

/***/ }),

/***/ "./src/assets/wind.svg":
/*!*****************************!*\
  !*** ./src/assets/wind.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27b084f7dd0eb29b2c27.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/js/main/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/style.css */ "./src/css/style.css");
/* harmony import */ var _dom_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/dom */ "./src/js/dom/dom.js");
/* harmony import */ var _api_apiFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/apiFunctions.js */ "./src/js/api/apiFunctions.js");



(async function () {
  const data = await (0,_api_apiFunctions_js__WEBPACK_IMPORTED_MODULE_2__["default"])("tbilisi");
  (0,_dom_dom__WEBPACK_IMPORTED_MODULE_1__.loadUi)(data);
  console.log(data);
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFFL0IsZUFBZUMsbUJBQW1CQSxDQUFDQyxJQUFJLEVBQUU7RUFDdERBLElBQUksR0FDRkEsSUFBSSxLQUFLLEVBQUUsR0FDUEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUNDLFdBQVcsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsR0FDekRKLElBQUk7RUFDVixJQUFJQSxJQUFJLEtBQUssU0FBUyxFQUFFQSxJQUFJLEdBQUcsZ0JBQWdCO0VBQy9DLE1BQU1LLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQ3pCLHFGQUFvRk4sSUFBSyxTQUFRLEVBQ2xHO0lBQ0VPLElBQUksRUFBRTtFQUNSLENBQ0YsQ0FBQztFQUNELE1BQU1DLElBQUksR0FBRyxNQUFNSCxRQUFRLENBQUNJLElBQUksQ0FBQyxDQUFDO0VBQ2xDLE9BQU9ELElBQUk7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJ1RTtBQUN6QjtBQUNBO0FBQ0k7QUFDTjtBQUNGO0FBQ2U7QUFDVDtBQUNFOztBQUVsRDtBQUNBLE1BQU1ZLFNBQVMsR0FBR25CLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUN0RCxNQUFNRixJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUM1QyxNQUFNbUIsSUFBSSxHQUFHcEIsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0FBQzVDLE1BQU1vQixJQUFJLEdBQUdyQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDNUMsTUFBTXFCLFVBQVUsR0FBR3RCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUN4RCxNQUFNc0IsU0FBUyxHQUFHdkIsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0FBQ3hELE1BQU11QixTQUFTLEdBQUd4QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7QUFDdkQsTUFBTXdCLFFBQVEsR0FBR3pCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUNwRCxNQUFNeUIsWUFBWSxHQUFHMUIsUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7QUFDOUQsTUFBTTBCLFNBQVMsR0FBRzNCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUN2RCxNQUFNMkIsS0FBSyxHQUFHNUIsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0FBQzdDLE1BQU00QixZQUFZLEdBQUc3QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUM3RCxNQUFNNkIsYUFBYSxHQUFHOUIsUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7QUFDL0QsTUFBTThCLEtBQUssR0FBRy9CLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztBQUM5QyxNQUFNK0IsTUFBTSxHQUFHaEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0FBQ2hELE1BQU1nQyxJQUFJLEdBQUdqQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDNUMsTUFBTWlDLEtBQUssR0FBR2xDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztBQUM5QyxNQUFNa0MsUUFBUSxHQUFHbkMsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0FBRXBELE1BQU1tQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztBQUN0QyxJQUFJQyxVQUFVLEdBQUcsS0FBSztBQUVXO0FBRWpDLFNBQVNDLE1BQU1BLENBQUNqQyxJQUFJLEVBQUU7RUFDcEJrQyxvQkFBb0IsQ0FBQ2xDLElBQUksQ0FBQztFQUMxQm1DLFVBQVUsQ0FBQyxDQUFDO0VBRVpDLGFBQWEsQ0FBQ3BDLElBQUksQ0FBQztFQUVuQixJQUFJZ0MsVUFBVSxFQUFFO0lBQ2RLLGNBQWMsQ0FBQ3JDLElBQUksQ0FBQztFQUN0QixDQUFDLE1BQU07SUFDTHNDLGFBQWEsQ0FBQ3RDLElBQUksQ0FBQztFQUNyQjtFQUNBZ0IsU0FBUyxDQUFDdUIsR0FBRyxHQUFHbEMsK0NBQU87QUFDekI7QUFFQSxTQUFTOEIsVUFBVUEsQ0FBQSxFQUFHO0VBQ3BCVCxJQUFJLENBQUNhLEdBQUcsR0FBRzdCLG1EQUFLO0VBQ2hCaUIsS0FBSyxDQUFDWSxHQUFHLEdBQUc1QixvREFBTTtBQUNwQjtBQUVBLFNBQVN1QixvQkFBb0JBLENBQUNsQyxJQUFJLEVBQUU7RUFBQSxJQUFBd0MsYUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxjQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQTtFQUNsQ2hDLFNBQVMsQ0FBQ2pCLFdBQVcsR0FBR0ssSUFBSSxhQUFKQSxJQUFJLHdCQUFBd0MsYUFBQSxHQUFKeEMsSUFBSSxDQUFFNkMsT0FBTyxjQUFBTCxhQUFBLHdCQUFBQyxxQkFBQSxHQUFiRCxhQUFBLENBQWU1QixTQUFTLGNBQUE2QixxQkFBQSx1QkFBeEJBLHFCQUFBLENBQTBCSyxJQUFJO0VBQ3REdEQsSUFBSSxDQUFDRyxXQUFXLEdBQ2QsQ0FBQUssSUFBSSxhQUFKQSxJQUFJLHdCQUFBMEMsY0FBQSxHQUFKMUMsSUFBSSxDQUFFK0MsUUFBUSxjQUFBTCxjQUFBLHVCQUFkQSxjQUFBLENBQWdCTSxJQUFJLE1BQUssV0FBVyxHQUFHLFNBQVMsR0FBR2hELElBQUksYUFBSkEsSUFBSSx3QkFBQTJDLGVBQUEsR0FBSjNDLElBQUksQ0FBRStDLFFBQVEsY0FBQUosZUFBQSx1QkFBZEEsZUFBQSxDQUFnQkssSUFBSTtFQUN6RSxNQUFNQyxPQUFPLEdBQUcvQywwREFBUyxDQUFDRixJQUFJLGFBQUpBLElBQUksd0JBQUE0QyxlQUFBLEdBQUo1QyxJQUFJLENBQUUrQyxRQUFRLGNBQUFILGVBQUEsdUJBQWRBLGVBQUEsQ0FBZ0JNLFNBQVMsQ0FBQztFQUNwRHJDLElBQUksQ0FBQ2xCLFdBQVcsR0FBSSxHQUFFc0QsT0FBTyxDQUFDRSxHQUFJLEtBQUlGLE9BQU8sQ0FBQ0csR0FBSSxJQUFHSCxPQUFPLENBQUNJLEtBQU0sSUFBR0osT0FBTyxDQUFDSyxJQUFLLEVBQUM7RUFDcEZ4QyxJQUFJLENBQUNuQixXQUFXLEdBQUdzRCxPQUFPLENBQUNuQyxJQUFJO0VBQy9CQyxVQUFVLENBQUNwQixXQUFXLEdBQUdLLElBQUksQ0FBQzZDLE9BQU8sQ0FBQ1UsTUFBTSxHQUFHMUIsR0FBRztBQUNwRDtBQUVBLFNBQVNPLGFBQWFBLENBQUNwQyxJQUFJLEVBQUU7RUFDM0JpQixTQUFTLENBQUN1QyxpQkFBaUIsQ0FBQ2pCLEdBQUcsR0FBR2pDLCtDQUFPO0VBQ3pDVyxTQUFTLENBQUN2QixhQUFhLENBQUMsT0FBTyxDQUFDLENBQUNDLFdBQVcsR0FDMUNLLElBQUksQ0FBQzZDLE9BQU8sQ0FBQ1ksV0FBVyxHQUFHLEdBQUcsR0FBRzVCLEdBQUc7RUFDdENYLFFBQVEsQ0FBQ3NDLGlCQUFpQixDQUFDakIsR0FBRyxHQUFHaEMsaURBQVM7RUFDMUNXLFFBQVEsQ0FBQ3hCLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsV0FBVyxHQUN6Q0ssSUFBSSxDQUFDNkMsT0FBTyxDQUFDM0IsUUFBUSxHQUFHLEdBQUcsR0FBRyxHQUFHO0VBQ25DQyxZQUFZLENBQUNxQyxpQkFBaUIsQ0FBQ2pCLEdBQUcsR0FBRy9CLDhDQUFNO0VBQzNDVyxZQUFZLENBQUN6QixhQUFhLENBQUMsT0FBTyxDQUFDLENBQUNDLFdBQVcsR0FDN0NLLElBQUksQ0FBQzBELFFBQVEsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDUixHQUFHLENBQUNTLG9CQUFvQixHQUFHLEdBQUcsR0FBRyxHQUFHO0VBQ25FeEMsU0FBUyxDQUFDb0MsaUJBQWlCLENBQUNqQixHQUFHLEdBQUc5Qiw2Q0FBSztFQUN2Q1csU0FBUyxDQUFDMUIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxXQUFXLEdBQzFDSyxJQUFJLENBQUM2QyxPQUFPLENBQUNnQixRQUFRLEdBQUcsR0FBRyxHQUFHLE1BQU07QUFDeEM7QUFFQSxTQUFTdkUsYUFBYUEsQ0FBQSxFQUFHO0VBQ3ZCLE9BQU8rQixLQUFLLENBQUN5QyxLQUFLLEdBQUd6QyxLQUFLLENBQUN5QyxLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUNuRSxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUU7QUFDNUQ7QUFFQSxlQUFlb0UsZ0JBQWdCQSxDQUFBLEVBQUc7RUFDaEMsTUFBTWhFLElBQUksR0FBRyxNQUFNVCxnRUFBbUIsQ0FBQ0QsYUFBYSxDQUFDLENBQUMsQ0FBQztFQUN2RDJDLE1BQU0sQ0FBQ2pDLElBQUksQ0FBQztBQUNkO0FBRUEsU0FBU3NDLGFBQWFBLENBQUN0QyxJQUFJLEVBQUU7RUFDM0IsTUFBTWlFLElBQUksR0FBRzlELDJEQUFVLENBQUNILElBQUksQ0FBQzBELFFBQVEsQ0FBQ0MsV0FBVyxDQUFDO0VBQ2xEckMsWUFBWSxDQUFDNEMsU0FBUyxHQUFHLEVBQUU7RUFDM0IzQyxhQUFhLENBQUMyQyxTQUFTLEdBQUcsRUFBRTtFQUM1QkQsSUFBSSxDQUFDRSxPQUFPLENBQUVDLE9BQU8sSUFBSztJQUN4QixNQUFNQyxVQUFVLEdBQUc1RSxRQUFRLENBQUM2RSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ2hELE1BQU1DLE9BQU8sR0FBRzlFLFFBQVEsQ0FBQzZFLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDN0MsTUFBTUUsT0FBTyxHQUFHL0UsUUFBUSxDQUFDNkUsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUM3QyxNQUFNRyxPQUFPLEdBQUdoRixRQUFRLENBQUM2RSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzdDLE1BQU1JLFFBQVEsR0FBR2pGLFFBQVEsQ0FBQzZFLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDOUMsTUFBTUssSUFBSSxHQUFHbEYsUUFBUSxDQUFDNkUsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUUxQ0QsVUFBVSxDQUFDTyxTQUFTLEdBQUcsa0JBQWtCO0lBQ3pDTCxPQUFPLENBQUNLLFNBQVMsR0FBRyxTQUFTO0lBQzdCSixPQUFPLENBQUNJLFNBQVMsR0FBRyxVQUFVO0lBQzlCSCxPQUFPLENBQUNHLFNBQVMsR0FBRyxVQUFVO0lBQzlCRixRQUFRLENBQUNFLFNBQVMsR0FBRyxXQUFXO0lBQ2hDRCxJQUFJLENBQUNDLFNBQVMsR0FBRyxjQUFjO0lBRS9CTCxPQUFPLENBQUM1RSxXQUFXLEdBQUd5RSxPQUFPLENBQUNHLE9BQU87SUFDckNDLE9BQU8sQ0FBQzdFLFdBQVcsR0FBSSxHQUFFeUUsT0FBTyxDQUFDSSxPQUFRLElBQUczQyxHQUFJLEVBQUM7SUFDakQ0QyxPQUFPLENBQUM5RSxXQUFXLEdBQUksR0FBRXlFLE9BQU8sQ0FBQ0ssT0FBUSxJQUFHNUMsR0FBSSxFQUFDO0lBQ2pEOEMsSUFBSSxDQUFDcEMsR0FBRyxHQUFHNkIsT0FBTyxDQUFDUyxRQUFRO0lBQzNCRixJQUFJLENBQUNHLEdBQUcsR0FBR1YsT0FBTyxDQUFDeEQsU0FBUztJQUU1QjhELFFBQVEsQ0FBQ0ssTUFBTSxDQUFDUCxPQUFPLEVBQUVDLE9BQU8sQ0FBQztJQUNqQ0osVUFBVSxDQUFDVSxNQUFNLENBQUNSLE9BQU8sRUFBRUcsUUFBUSxFQUFFQyxJQUFJLENBQUM7SUFDMUNyRCxZQUFZLENBQUMwRCxXQUFXLENBQUNYLFVBQVUsQ0FBQztFQUN0QyxDQUFDLENBQUM7QUFDSjtBQUVBLFNBQVNoQyxjQUFjQSxDQUFDckMsSUFBSSxFQUFhO0VBQUEsSUFBWGlGLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQztFQUNyQyxNQUFNRyxLQUFLLEdBQUdqRiw0REFBVyxDQUN2QkosSUFBSSxDQUFDMEQsUUFBUSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMyQixJQUFJLEVBQ2pDdEYsSUFBSSxDQUFDK0MsUUFBUSxDQUFDRyxTQUNoQixDQUFDO0VBQ0RxQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDO0VBQ2xCL0QsWUFBWSxDQUFDNEMsU0FBUyxHQUFHLEVBQUU7RUFDM0IzQyxhQUFhLENBQUMyQyxTQUFTLEdBQUcsRUFBRTtFQUM1QixJQUFJdUIsS0FBSyxHQUFHLElBQUk7RUFDaEIsSUFBSUMsR0FBRyxHQUFHLElBQUk7RUFDZEQsS0FBSyxHQUFHUixLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBR0EsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtFQUM5Q1MsR0FBRyxHQUFHVCxLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBR0EsS0FBSyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUdJLEtBQUssQ0FBQ0YsTUFBTSxHQUFHLENBQUM7RUFFM0QsS0FBSyxJQUFJUSxDQUFDLEdBQUdGLEtBQUssRUFBRUUsQ0FBQyxJQUFJRCxHQUFHLEVBQUVDLENBQUMsRUFBRSxFQUFFO0lBQ2pDLE1BQU10QixVQUFVLEdBQUc1RSxRQUFRLENBQUM2RSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ2hELE1BQU1nQixJQUFJLEdBQUc3RixRQUFRLENBQUM2RSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzFDLE1BQU1zQixJQUFJLEdBQUduRyxRQUFRLENBQUM2RSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzFDLE1BQU1LLElBQUksR0FBR2xGLFFBQVEsQ0FBQzZFLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFFMUNELFVBQVUsQ0FBQ08sU0FBUyxHQUFHLG1CQUFtQjtJQUMxQ1UsSUFBSSxDQUFDVixTQUFTLEdBQUcsTUFBTTtJQUN2QmdCLElBQUksQ0FBQ2hCLFNBQVMsR0FBRyxNQUFNO0lBQ3ZCRCxJQUFJLENBQUNDLFNBQVMsR0FBRyxjQUFjO0lBRS9CVSxJQUFJLENBQUMzRixXQUFXLEdBQUcwRixLQUFLLENBQUNNLENBQUMsQ0FBQyxDQUFDN0UsSUFBSTtJQUNoQzhFLElBQUksQ0FBQ2pHLFdBQVcsR0FBSSxHQUFFMEYsS0FBSyxDQUFDTSxDQUFDLENBQUMsQ0FBQ0MsSUFBSyxJQUFHL0QsR0FBSSxFQUFDO0lBQzVDOEMsSUFBSSxDQUFDcEMsR0FBRyxHQUFHOEMsS0FBSyxDQUFDTSxDQUFDLENBQUMsQ0FBQ2QsUUFBUTtJQUM1QkYsSUFBSSxDQUFDRyxHQUFHLEdBQUdPLEtBQUssQ0FBQ00sQ0FBQyxDQUFDLENBQUMvRSxTQUFTO0lBRTdCeUQsVUFBVSxDQUFDVSxNQUFNLENBQUNPLElBQUksRUFBRU0sSUFBSSxFQUFFakIsSUFBSSxDQUFDO0lBQ25DcEQsYUFBYSxDQUFDeUQsV0FBVyxDQUFDWCxVQUFVLENBQUM7RUFDdkM7QUFDRjtBQUVBLGVBQWV3QixJQUFJQSxDQUFDQyxDQUFDLEVBQUU7RUFDckIsTUFBTUMsVUFBVSxHQUFHdEcsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBQ3BELE1BQU1zRyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0YsVUFBVSxDQUFDRyxPQUFPLENBQUNDLEVBQUUsQ0FBQztFQUNqRCxNQUFNQyxLQUFLLEdBQUdOLENBQUMsQ0FBQ08sTUFBTSxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLEdBQUcsT0FBTztFQUVwRSxJQUFJUCxTQUFTLEtBQUssQ0FBQyxJQUFJSSxLQUFLLEtBQUssTUFBTSxFQUFFO0VBQ3pDLElBQUlKLFNBQVMsS0FBSyxDQUFDLElBQUlJLEtBQUssS0FBSyxPQUFPLEVBQUU7RUFFMUNMLFVBQVUsQ0FBQ08sU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO0VBRXJDLE1BQU1DLE1BQU0sR0FBR0wsS0FBSyxLQUFLLE1BQU0sR0FBR0osU0FBUyxHQUFHLENBQUMsR0FBR0EsU0FBUyxHQUFHLENBQUM7RUFDL0R2RyxRQUFRLENBQUNDLGFBQWEsQ0FBRSxhQUFZK0csTUFBTyxJQUFHLENBQUMsQ0FBQ0gsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO0VBRTFFLE1BQU14RyxJQUFJLEdBQUcsTUFBTVQsZ0VBQW1CLENBQUMsRUFBRSxDQUFDO0VBQzFDOEMsY0FBYyxDQUFDckMsSUFBSSxFQUFFeUcsTUFBTSxDQUFDO0FBQzlCO0FBRUFwRixLQUFLLENBQUNxRixnQkFBZ0IsQ0FBQyxTQUFTLEVBQUdaLENBQUMsSUFBSztFQUN2QyxJQUFJQSxDQUFDLENBQUNhLEdBQUcsSUFBSSxPQUFPLEVBQUU7RUFFdEIzQyxnQkFBZ0IsQ0FBQyxDQUFDO0VBQ2xCM0MsS0FBSyxDQUFDeUMsS0FBSyxHQUFHLEVBQUU7QUFDbEIsQ0FBQyxDQUFDO0FBRUY5QyxTQUFTLENBQUMwRixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdaLENBQUMsSUFBSztFQUN6QzlCLGdCQUFnQixDQUFDLENBQUM7RUFDbEIzQyxLQUFLLENBQUN5QyxLQUFLLEdBQUcsRUFBRTtBQUNsQixDQUFDLENBQUM7QUFFRnRDLEtBQUssQ0FBQ2tGLGdCQUFnQixDQUFDLE9BQU8sRUFBR1osQ0FBQyxJQUFLO0VBQ3JDOUQsVUFBVSxHQUFHLEtBQUs7RUFDbEJKLFFBQVEsQ0FBQzBFLFNBQVMsQ0FBQ00sTUFBTSxDQUFDLFNBQVMsQ0FBQztFQUNwQ3BGLEtBQUssQ0FBQ29ELFNBQVMsR0FBRyxzQkFBc0I7RUFDeENuRCxNQUFNLENBQUNtRCxTQUFTLEdBQUcsZ0JBQWdCO0VBQ25DWixnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQztBQUVGdkMsTUFBTSxDQUFDaUYsZ0JBQWdCLENBQUMsT0FBTyxFQUFHWixDQUFDLElBQUs7RUFDdENsRSxRQUFRLENBQUMwRSxTQUFTLENBQUNPLEdBQUcsQ0FBQyxTQUFTLENBQUM7RUFDakNyRixLQUFLLENBQUNvRCxTQUFTLEdBQUcsZUFBZTtFQUNqQ25ELE1BQU0sQ0FBQ21ELFNBQVMsR0FBRyx1QkFBdUI7RUFDMUM1QyxVQUFVLEdBQUcsSUFBSTtFQUNqQmdDLGdCQUFnQixDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFDO0FBRUZ0QyxJQUFJLENBQUNnRixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUViLElBQUksQ0FBQztBQUNwQ2xFLEtBQUssQ0FBQytFLGdCQUFnQixDQUFDLE9BQU8sRUFBRWIsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TU07QUFDRTtBQUNNO0FBQ1Y7QUFDQTtBQUNFO0FBQ0Y7QUFDRjtBQUVPO0FBRTlDLFNBQVMzRixTQUFTQSxDQUFDVyxJQUFJLEVBQUU7RUFDdkIsTUFBTXlDLElBQUksR0FBRzJDLFFBQVEsQ0FBQ3BGLElBQUksQ0FBQ3lHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN6QyxNQUFNQyxVQUFVLEdBQUd0QixRQUFRLENBQUNwRixJQUFJLENBQUN5RyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ25ELE1BQU1uRSxHQUFHLEdBQUc4QyxRQUFRLENBQUNwRixJQUFJLENBQUN5RyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN0RCxNQUFNeEcsSUFBSSxHQUFHRCxJQUFJLENBQUN5RyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQy9CekcsSUFBSSxHQUFHLElBQUkyRyxJQUFJLENBQUNsRSxJQUFJLEVBQUVpRSxVQUFVLEVBQUVwRSxHQUFHLENBQUM7RUFDdEMsT0FBTztJQUNMRSxLQUFLLEVBQUVvRSxRQUFRLENBQUM1RyxJQUFJLENBQUM0RyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2hDdEUsR0FBRyxFQUFFdUUsTUFBTSxDQUFDN0csSUFBSSxDQUFDNkcsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMxQnBFLElBQUksRUFBRUEsSUFBSSxDQUFDcUUsUUFBUSxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM5QnhFLEdBQUcsRUFBRXlFLFVBQVUsQ0FBQ2hILElBQUksQ0FBQ2lILE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDL0JoSDtFQUNGLENBQUM7QUFDSDtBQUVBLFNBQVM0RyxNQUFNQSxDQUFDdkUsR0FBRyxFQUFFO0VBQ25CLE1BQU00RSxPQUFPLEdBQUcsQ0FDZCxRQUFRLEVBQ1IsUUFBUSxFQUNSLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixVQUFVLENBQ1g7RUFDRCxPQUFPQSxPQUFPLENBQUM1RSxHQUFHLENBQUM7QUFDckI7QUFFQSxTQUFTc0UsUUFBUUEsQ0FBQ3BFLEtBQUssRUFBRTtFQUN2QixNQUFNMkUsTUFBTSxHQUFHLENBQ2IsS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLEVBQ0wsS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLEVBQ0wsS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLENBQ047RUFFRCxPQUFPQSxNQUFNLENBQUMzRSxLQUFLLENBQUM7QUFDdEI7QUFFQSxTQUFTd0UsVUFBVUEsQ0FBQ0ksQ0FBQyxFQUFFO0VBQ3JCLElBQUk3RSxHQUFHLEdBQUcsSUFBSTtFQUVkLElBQUk2RSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRTtJQUNoQjdFLEdBQUcsR0FBRyxJQUFJO0VBQ1o7RUFFQSxJQUFJNkUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUU7SUFDaEI3RSxHQUFHLEdBQUcsSUFBSTtFQUNaO0VBRUEsSUFBSTZFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQ2hCN0UsR0FBRyxHQUFHLElBQUk7RUFDWjtFQUNBLE9BQU82RSxDQUFDLEdBQUc3RSxHQUFHO0FBQ2hCO0FBRUEsU0FBU2pELFVBQVVBLENBQUNILElBQUksRUFBRTtFQUN4QixNQUFNa0ksUUFBUSxHQUFHLEVBQUU7RUFDbkIsSUFBSSxDQUFDbEksSUFBSSxFQUFFO0VBQ1hBLElBQUksQ0FBQ21FLE9BQU8sQ0FBRWhCLEdBQUcsSUFBSztJQUNwQitFLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDO01BQ1o1RCxPQUFPLEVBQUVyRSxTQUFTLENBQUNpRCxHQUFHLENBQUN0QyxJQUFJLENBQUMsQ0FBQ3NDLEdBQUc7TUFDaENxQixPQUFPLEVBQUVyQixHQUFHLENBQUNBLEdBQUcsQ0FBQ2lGLFNBQVM7TUFDMUIzRCxPQUFPLEVBQUV0QixHQUFHLENBQUNBLEdBQUcsQ0FBQ2tGLFNBQVM7TUFDMUJ4RCxRQUFRLEVBQUV5RCxPQUFPLENBQUNuRixHQUFHLENBQUNBLEdBQUcsQ0FBQ3ZDLFNBQVMsQ0FBQ2tDLElBQUksQ0FBQztNQUN6Q2xDLFNBQVMsRUFBRXVDLEdBQUcsQ0FBQ0EsR0FBRyxDQUFDdkMsU0FBUyxDQUFDa0M7SUFDL0IsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0VBQ0YsT0FBT29GLFFBQVE7QUFDakI7QUFFQSxTQUFTOUgsV0FBV0EsQ0FBQ2lGLEtBQUssRUFBRW5DLFNBQVMsRUFBRTtFQUNyQyxNQUFNekIsTUFBTSxHQUFHLEVBQUU7RUFDakI0RCxLQUFLLENBQUNsQixPQUFPLENBQUVtQixJQUFJLElBQUs7SUFDdEI3RCxNQUFNLENBQUMwRyxJQUFJLENBQUM7TUFDVnZDLElBQUksRUFBRU4sSUFBSSxDQUFDL0IsTUFBTTtNQUNqQnpDLElBQUksRUFBRVosU0FBUyxDQUFDb0YsSUFBSSxDQUFDeEUsSUFBSSxDQUFDLENBQUNBLElBQUk7TUFDL0IrRCxRQUFRLEVBQUV5RCxPQUFPLENBQUNoRCxJQUFJLENBQUMxRSxTQUFTLENBQUNrQyxJQUFJLENBQUM7TUFDdENsQyxTQUFTLEVBQUUwRSxJQUFJLENBQUMxRSxTQUFTLENBQUNrQztJQUM1QixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7RUFDRixPQUFPeUYsZUFBZSxDQUFDOUcsTUFBTSxFQUFFeUIsU0FBUyxDQUFDO0FBQzNDO0FBRUEsU0FBU3FGLGVBQWVBLENBQUM5RyxNQUFNLEVBQUV5QixTQUFTLEVBQUU7RUFDMUMsTUFBTXNGLE9BQU8sR0FBR3RGLFNBQVMsQ0FBQ29FLEtBQUssQ0FBQyxFQUFFLENBQUM7RUFDbkNrQixPQUFPLENBQUNBLE9BQU8sQ0FBQ3JELE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHO0VBQ2pDcUQsT0FBTyxDQUFDQSxPQUFPLENBQUNyRCxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRztFQUNqQyxNQUFNckUsSUFBSSxHQUFHMEgsT0FBTyxDQUFDWixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ2EsSUFBSSxDQUFDLEVBQUUsQ0FBQztFQUV2QyxNQUFNOUMsQ0FBQyxHQUFHbEUsTUFBTSxDQUFDaUgsU0FBUyxDQUFFcEQsSUFBSSxJQUFLO0lBQ25DLE9BQU9BLElBQUksQ0FBQ3hFLElBQUksS0FBS0EsSUFBSTtFQUMzQixDQUFDLENBQUM7RUFFRixJQUFJNkUsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPbEUsTUFBTTtFQUUxQixNQUFNa0gsVUFBVSxHQUFHbEgsTUFBTSxDQUFDbUcsS0FBSyxDQUFDakMsQ0FBQyxDQUFDO0VBQ2xDLE1BQU1pRCxTQUFTLEdBQUduSCxNQUFNLENBQUNtRyxLQUFLLENBQUMsQ0FBQyxFQUFFakMsQ0FBQyxDQUFDO0VBQ3BDLE9BQU8sQ0FBQyxHQUFHZ0QsVUFBVSxFQUFFLEdBQUdDLFNBQVMsQ0FBQztBQUN0QztBQUVBLFNBQVNOLE9BQU9BLENBQUNPLENBQUMsRUFBRTtFQUNsQixJQUFJbEQsQ0FBQyxHQUFHLElBQUk7RUFDWixRQUFRa0QsQ0FBQztJQUNQLEtBQUssT0FBTztNQUNWbEQsQ0FBQyxHQUFHMEIsNENBQUc7TUFDUDtJQUNGLEtBQUssT0FBTztNQUNWMUIsQ0FBQyxHQUFHdUIsNkNBQUk7TUFDUjtJQUNGLEtBQUssUUFBUTtJQUNiLEtBQUssdUJBQXVCO0lBQzVCLEtBQUssVUFBVTtJQUNmLEtBQUssZUFBZTtNQUNsQnZCLENBQUMsR0FBR29CLCtDQUFNO01BQ1Y7SUFDRixLQUFLLE1BQU07SUFDWCxLQUFLLEtBQUs7SUFDVixLQUFLLGNBQWM7SUFDbkIsS0FBSyxzQkFBc0I7TUFDekJwQixDQUFDLEdBQUdzQiw2Q0FBSTtNQUNSO0lBQ0YsS0FBSyw2QkFBNkI7TUFDaEN0QixDQUFDLEdBQUdxQixrREFBUztNQUNiO0lBQ0YsS0FBSyxzQkFBc0I7SUFDM0IsS0FBSyxlQUFlO0lBQ3BCLEtBQUssa0JBQWtCO0lBQ3ZCLEtBQUssd0JBQXdCO0lBQzdCLEtBQUssbUJBQW1CO0lBQ3hCLEtBQUssWUFBWTtJQUNqQixLQUFLLHdCQUF3QjtJQUM3QixLQUFLLGVBQWU7SUFDcEIsS0FBSyxxQkFBcUI7SUFDMUIsS0FBSyxZQUFZO0lBQ2pCLEtBQUsscUJBQXFCO0lBQzFCLEtBQUssaUNBQWlDO0lBQ3RDLEtBQUssbUJBQW1CO0lBQ3hCLEtBQUssK0JBQStCO0lBQ3BDLEtBQUssd0JBQXdCO0lBQzdCLEtBQUssZ0NBQWdDO0lBQ3JDLEtBQUsscUNBQXFDO01BQ3hDckIsQ0FBQyxHQUFHd0IsOENBQUs7TUFDVDtJQUNGLEtBQUssc0JBQXNCO0lBQzNCLEtBQUssY0FBYztJQUNuQixLQUFLLFVBQVU7SUFDZixLQUFLLGFBQWE7SUFDbEIsS0FBSyx5QkFBeUI7SUFDOUIsS0FBSyxtQkFBbUI7SUFDeEIsS0FBSyxZQUFZO0lBQ2pCLEtBQUssc0JBQXNCO0lBQzNCLEtBQUssZUFBZTtJQUNwQixLQUFLLG1CQUFtQjtJQUN4QixLQUFLLFlBQVk7SUFDakIsS0FBSyxhQUFhO0lBQ2xCLEtBQUsscUJBQXFCO0lBQzFCLEtBQUssaUNBQWlDO0lBQ3RDLEtBQUssb0JBQW9CO0lBQ3pCLEtBQUssZ0NBQWdDO0lBQ3JDLEtBQUssOEJBQThCO0lBQ25DLEtBQUssMENBQTBDO0lBQy9DLEtBQUssZ0NBQWdDO0lBQ3JDLEtBQUsscUNBQXFDO01BQ3hDeEIsQ0FBQyxHQUFHeUIsNkNBQUk7TUFDUjtJQUNGO01BQ0V6QixDQUFDLEdBQUdtQiw4Q0FBSztFQUNiO0VBRUEsT0FBT25CLENBQUM7QUFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUxBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sK0ZBQStGLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtB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RUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0E2QjtBQUNPO0FBQ3FCO0FBRXpELENBQUMsa0JBQWtCO0VBQ2pCLE1BQU0zRixJQUFJLEdBQUcsTUFBTVQsZ0VBQW1CLENBQUMsU0FBUyxDQUFDO0VBQ2pEMEMsZ0RBQU0sQ0FBQ2pDLElBQUksQ0FBQztFQUNadUYsT0FBTyxDQUFDQyxHQUFHLENBQUN4RixJQUFJLENBQUM7QUFDbkIsQ0FBQyxFQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL2FwaS9hcGlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvanMvZG9tL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jc3MvZGlzcGxheS13ZWF0aGVyLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jc3MvZXh0cmEuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Nzcy9sYXlvdXQuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Nzcy9zZWFyY2gtYW5kLWN1cnJlbnQuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL3dlYXRoZXItdG9nZ2xlcnMuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL21haW4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0SW5wdXRWYWx1ZSB9IGZyb20gXCIuLi9kb20vZG9tLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFdlYXRoZXJCeUNpdHkoY2l0eSkge1xuICBjaXR5ID1cbiAgICBjaXR5ID09PSBcIlwiXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eVwiKS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpXG4gICAgICA6IGNpdHk7XG4gIGlmIChjaXR5ID09PSBcInJ1c3RhdmlcIikgY2l0eSA9IFwiMTc2LjIyMS4yNTIuMjFcIjtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZDQwOWM4NzdjMWRjNGE4Zjg0ZDIwMTYyOTIzMzAwNiZxPSR7Y2l0eX0mZGF5cz03YCxcbiAgICB7XG4gICAgICBtb2RlOiBcImNvcnNcIixcbiAgICB9XG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IHsgcGFyc2VEYXRlLCBwYXJzZURhaWx5LCBwYXJzZUhvdXJseSB9IGZyb20gXCIuLi91dGlscy91dGlscy5qc1wiO1xuaW1wb3J0IHNlYXJjaEkgZnJvbSBcIi4uLy4uL2Fzc2V0cy9zZWFyY2guc3ZnXCI7XG5pbXBvcnQgdGhlcm1vSSBmcm9tIFwiLi4vLi4vYXNzZXRzL3RoZXJtby5zdmdcIjtcbmltcG9ydCBodW1pZGl0eUkgZnJvbSBcIi4uLy4uL2Fzc2V0cy9odW1pZGl0eS5zdmdcIjtcbmltcG9ydCByYWlueUkgZnJvbSBcIi4uLy4uL2Fzc2V0cy9yYWlueS5zdmdcIjtcbmltcG9ydCB3aW5kSSBmcm9tIFwiLi4vLi4vYXNzZXRzL3dpbmQuc3ZnXCI7XG5pbXBvcnQgc2VhcmNoV2VhdGhlckJ5Q2l0eSBmcm9tIFwiLi4vYXBpL2FwaUZ1bmN0aW9ucy5qc1wiO1xuaW1wb3J0IGxlZnRJIGZyb20gXCIuLi8uLi9hc3NldHMvYXJyb3dfbGVmdC5zdmdcIjtcbmltcG9ydCByaWdodEkgZnJvbSBcIi4uLy4uL2Fzc2V0cy9hcnJvd19yaWdodC5zdmdcIjtcblxuLy9ET00gRUxFTUVOVFNcbmNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZGl0aW9uXCIpO1xuY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eVwiKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIik7XG5jb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lXCIpO1xuY29uc3QgdGVtcHJldHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcHJldHVyZVwiKTtcbmNvbnN0IHNlYXJjaEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWljb25cIik7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzLWxpa2VcIik7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIik7XG5jb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5jZS1vZi1yYWluXCIpO1xuY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kLXNwZWVkXCIpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG5jb25zdCBkYWlseVdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5LXdlYXRoZXJcIik7XG5jb25zdCBob3VybHlXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob3VybHktd2VhdGhlclwiKTtcbmNvbnN0IGRhaWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYWlseVwiKTtcbmNvbnN0IGhvdXJseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG91cmx5XCIpO1xuY29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdFwiKTtcbmNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodFwiKTtcbmNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uc1wiKTtcblxuY29uc3QgY2VsID0gU3RyaW5nLmZyb21Db2RlUG9pbnQoODQ1MSk7XG5sZXQgaG91cmx5Qm9vbCA9IGZhbHNlO1xuXG5leHBvcnQgeyBsb2FkVWksIGdldElucHV0VmFsdWUgfTtcblxuZnVuY3Rpb24gbG9hZFVpKGRhdGEpIHtcbiAgbG9hZFNlYXJjaEFuZEN1cnJlbnQoZGF0YSk7XG4gIGxvYWRBcnJvd3MoKTtcblxuICBsb2FkRXh0cmFJbmZvKGRhdGEpO1xuXG4gIGlmIChob3VybHlCb29sKSB7XG4gICAgcG9wdWxhdGVIb3VybHkoZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgcG9wdWxhdGVEYWlseShkYXRhKTtcbiAgfVxuICBzZWFyY2hJbWcuc3JjID0gc2VhcmNoSTtcbn1cblxuZnVuY3Rpb24gbG9hZEFycm93cygpIHtcbiAgbGVmdC5zcmMgPSBsZWZ0STtcbiAgcmlnaHQuc3JjID0gcmlnaHRJO1xufVxuXG5mdW5jdGlvbiBsb2FkU2VhcmNoQW5kQ3VycmVudChkYXRhKSB7XG4gIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGRhdGE/LmN1cnJlbnQ/LmNvbmRpdGlvbj8udGV4dDtcbiAgY2l0eS50ZXh0Q29udGVudCA9XG4gICAgZGF0YT8ubG9jYXRpb24/Lm5hbWUgPT09IFwiR2FyZGFiYW5pXCIgPyBcIlJ1c3RhdmlcIiA6IGRhdGE/LmxvY2F0aW9uPy5uYW1lO1xuICBjb25zdCBkYXRlT2JqID0gcGFyc2VEYXRlKGRhdGE/LmxvY2F0aW9uPy5sb2NhbHRpbWUpO1xuICBkYXRlLnRleHRDb250ZW50ID0gYCR7ZGF0ZU9iai5kYXl9LCAke2RhdGVPYmoub3JkfSAke2RhdGVPYmoubW9udGh9JyR7ZGF0ZU9iai55ZWFyfWA7XG4gIHRpbWUudGV4dENvbnRlbnQgPSBkYXRlT2JqLnRpbWU7XG4gIHRlbXByZXR1cmUudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQudGVtcF9jICsgY2VsO1xufVxuXG5mdW5jdGlvbiBsb2FkRXh0cmFJbmZvKGRhdGEpIHtcbiAgZmVlbHNMaWtlLmZpcnN0RWxlbWVudENoaWxkLnNyYyA9IHRoZXJtb0k7XG4gIGZlZWxzTGlrZS5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIikudGV4dENvbnRlbnQgPVxuICAgIGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyArIFwiIFwiICsgY2VsO1xuICBodW1pZGl0eS5maXJzdEVsZW1lbnRDaGlsZC5zcmMgPSBodW1pZGl0eUk7XG4gIGh1bWlkaXR5LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKS50ZXh0Q29udGVudCA9XG4gICAgZGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgXCIgXCIgKyBcIiVcIjtcbiAgY2hhbmNlT2ZSYWluLmZpcnN0RWxlbWVudENoaWxkLnNyYyA9IHJhaW55STtcbiAgY2hhbmNlT2ZSYWluLnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKS50ZXh0Q29udGVudCA9XG4gICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4gKyBcIiBcIiArIFwiJVwiO1xuICB3aW5kU3BlZWQuZmlyc3RFbGVtZW50Q2hpbGQuc3JjID0gd2luZEk7XG4gIHdpbmRTcGVlZC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIikudGV4dENvbnRlbnQgPVxuICAgIGRhdGEuY3VycmVudC53aW5kX2twaCArIFwiIFwiICsgXCJrbS9oXCI7XG59XG5cbmZ1bmN0aW9uIGdldElucHV0VmFsdWUoKSB7XG4gIHJldHVybiBpbnB1dC52YWx1ZSA/IGlucHV0LnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpIDogXCJcIjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2VhcmNoRm9yV2VhdGhlcigpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHNlYXJjaFdlYXRoZXJCeUNpdHkoZ2V0SW5wdXRWYWx1ZSgpKTtcbiAgbG9hZFVpKGRhdGEpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZURhaWx5KGRhdGEpIHtcbiAgY29uc3Qgd2VlayA9IHBhcnNlRGFpbHkoZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheSk7XG4gIGRhaWx5V2VhdGhlci5pbm5lckhUTUwgPSBcIlwiO1xuICBob3VybHlXZWF0aGVyLmlubmVySFRNTCA9IFwiXCI7XG4gIHdlZWsuZm9yRWFjaCgoZGF5SW5mbykgPT4ge1xuICAgIGNvbnN0IGRpdldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHdlZWtEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRlbXBXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgIGRpdldyYXBwZXIuY2xhc3NOYW1lID0gXCJkYXktaW5mby13cmFwcGVyXCI7XG4gICAgd2Vla0RheS5jbGFzc05hbWUgPSBcIndlZWtkYXlcIjtcbiAgICBtYXhUZW1wLmNsYXNzTmFtZSA9IFwibWF4LXRlbXBcIjtcbiAgICBtaW5UZW1wLmNsYXNzTmFtZSA9IFwibWluLXRlbXBcIjtcbiAgICB0ZW1wV3JhcC5jbGFzc05hbWUgPSBcInRlbXAtd3JhcFwiO1xuICAgIGljb24uY2xhc3NOYW1lID0gXCJ3ZWF0aGVyLWljb25cIjtcblxuICAgIHdlZWtEYXkudGV4dENvbnRlbnQgPSBkYXlJbmZvLndlZWtEYXk7XG4gICAgbWF4VGVtcC50ZXh0Q29udGVudCA9IGAke2RheUluZm8ubWF4VGVtcH0gJHtjZWx9YDtcbiAgICBtaW5UZW1wLnRleHRDb250ZW50ID0gYCR7ZGF5SW5mby5taW5UZW1wfSAke2NlbH1gO1xuICAgIGljb24uc3JjID0gZGF5SW5mby5pY29uUGF0aDtcbiAgICBpY29uLmFsdCA9IGRheUluZm8uY29uZGl0aW9uO1xuXG4gICAgdGVtcFdyYXAuYXBwZW5kKG1heFRlbXAsIG1pblRlbXApO1xuICAgIGRpdldyYXBwZXIuYXBwZW5kKHdlZWtEYXksIHRlbXBXcmFwLCBpY29uKTtcbiAgICBkYWlseVdlYXRoZXIuYXBwZW5kQ2hpbGQoZGl2V3JhcHBlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUhvdXJseShkYXRhLCBzdGFnZSA9IDEpIHtcbiAgY29uc3QgaG91cnMgPSBwYXJzZUhvdXJseShcbiAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXIsXG4gICAgZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWVcbiAgKTtcbiAgY29uc29sZS5sb2coaG91cnMpO1xuICBkYWlseVdlYXRoZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgaG91cmx5V2VhdGhlci5pbm5lckhUTUwgPSBcIlwiO1xuICBsZXQgc3RhcnQgPSBudWxsO1xuICBsZXQgZW5kID0gbnVsbDtcbiAgc3RhcnQgPSBzdGFnZSA9PT0gMSA/IDAgOiBzdGFnZSA9PT0gMiA/IDggOiAxNTtcbiAgZW5kID0gc3RhZ2UgPT09IDEgPyA3IDogc3RhZ2UgPT09IDIgPyAxNSA6IGhvdXJzLmxlbmd0aCAtIDI7XG5cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgY29uc3QgZGl2V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICBkaXZXcmFwcGVyLmNsYXNzTmFtZSA9IFwiaG91ci1pbmZvLXdyYXBwZXJcIjtcbiAgICBob3VyLmNsYXNzTmFtZSA9IFwiaG91clwiO1xuICAgIHRlbXAuY2xhc3NOYW1lID0gXCJ0ZW1wXCI7XG4gICAgaWNvbi5jbGFzc05hbWUgPSBcIndlYXRoZXItaWNvblwiO1xuXG4gICAgaG91ci50ZXh0Q29udGVudCA9IGhvdXJzW2ldLnRpbWU7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke2hvdXJzW2ldLnRlbXB9ICR7Y2VsfWA7XG4gICAgaWNvbi5zcmMgPSBob3Vyc1tpXS5pY29uUGF0aDtcbiAgICBpY29uLmFsdCA9IGhvdXJzW2ldLmNvbmRpdGlvbjtcblxuICAgIGRpdldyYXBwZXIuYXBwZW5kKGhvdXIsIHRlbXAsIGljb24pO1xuICAgIGhvdXJseVdlYXRoZXIuYXBwZW5kQ2hpbGQoZGl2V3JhcHBlcik7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbW92ZShlKSB7XG4gIGNvbnN0IGN1cnJlbnREb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcbiAgY29uc3QgY3VycmVudElkID0gcGFyc2VJbnQoY3VycmVudERvdC5kYXRhc2V0LmlkKTtcbiAgY29uc3QgYXJyb3cgPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJsZWZ0XCIpID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCI7XG5cbiAgaWYgKGN1cnJlbnRJZCA9PT0gMSAmJiBhcnJvdyA9PT0gXCJsZWZ0XCIpIHJldHVybjtcbiAgaWYgKGN1cnJlbnRJZCA9PT0gMyAmJiBhcnJvdyA9PT0gXCJyaWdodFwiKSByZXR1cm47XG5cbiAgY3VycmVudERvdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXG4gIGNvbnN0IG5leHRJZCA9IGFycm93ID09PSBcImxlZnRcIiA/IGN1cnJlbnRJZCAtIDEgOiBjdXJyZW50SWQgKyAxO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7bmV4dElkfVwiXWApLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHNlYXJjaFdlYXRoZXJCeUNpdHkoXCJcIik7XG4gIHBvcHVsYXRlSG91cmx5KGRhdGEsIG5leHRJZCk7XG59XG5cbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gIGlmIChlLmtleSAhPSBcIkVudGVyXCIpIHJldHVybjtcblxuICBzZWFyY2hGb3JXZWF0aGVyKCk7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbn0pO1xuXG5zZWFyY2hJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIHNlYXJjaEZvcldlYXRoZXIoKTtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufSk7XG5cbmRhaWx5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBob3VybHlCb29sID0gZmFsc2U7XG4gIHNlY3Rpb25zLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICBkYWlseS5jbGFzc05hbWUgPSBcImRhaWx5IHRvZ2dsZXIgY2hvc2VuXCI7XG4gIGhvdXJseS5jbGFzc05hbWUgPSBcImhvdXJseSB0b2dnbGVyXCI7XG4gIHNlYXJjaEZvcldlYXRoZXIoKTtcbn0pO1xuXG5ob3VybHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIHNlY3Rpb25zLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICBkYWlseS5jbGFzc05hbWUgPSBcImRhaWx5IHRvZ2dsZXJcIjtcbiAgaG91cmx5LmNsYXNzTmFtZSA9IFwiaG91cmx5IHRvZ2dsZXIgY2hvc2VuXCI7XG4gIGhvdXJseUJvb2wgPSB0cnVlO1xuICBzZWFyY2hGb3JXZWF0aGVyKCk7XG59KTtcblxubGVmdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbW92ZSk7XG5yaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbW92ZSk7XG4iLCJpbXBvcnQgY2xvdWQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9jbG91ZC5zdmdcIjtcbmltcG9ydCBjbG91ZHkgZnJvbSBcIi4uLy4uL2Fzc2V0cy9jbG91ZHkuc3ZnXCI7XG5pbXBvcnQgbGlnaHRuaW5nIGZyb20gXCIuLi8uLi9hc3NldHMvbGlnaHRuaW5nLnN2Z1wiO1xuaW1wb3J0IG1pc3QgZnJvbSBcIi4uLy4uL2Fzc2V0cy9taXN0LnN2Z1wiO1xuaW1wb3J0IG1vb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9tb29uLnN2Z1wiO1xuaW1wb3J0IHJhaW55IGZyb20gXCIuLi8uLi9hc3NldHMvcmFpbnkuc3ZnXCI7XG5pbXBvcnQgc25vdyBmcm9tIFwiLi4vLi4vYXNzZXRzL3Nub3cuc3ZnXCI7XG5pbXBvcnQgc3VuIGZyb20gXCIuLi8uLi9hc3NldHMvc3VuLnN2Z1wiO1xuXG5leHBvcnQgeyBwYXJzZURhdGUsIHBhcnNlRGFpbHksIHBhcnNlSG91cmx5IH07XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlKSB7XG4gIGNvbnN0IHllYXIgPSBwYXJzZUludChkYXRlLnNwbGl0KFwiLVwiKVswXSk7XG4gIGNvbnN0IG1vbnRoSW5kZXggPSBwYXJzZUludChkYXRlLnNwbGl0KFwiLVwiKVsxXSkgLSAxO1xuICBjb25zdCBkYXkgPSBwYXJzZUludChkYXRlLnNwbGl0KFwiLVwiKVsyXS5zcGxpdChcIiBcIilbMF0pO1xuICBjb25zdCB0aW1lID0gZGF0ZS5zcGxpdChcIiBcIilbMV07XG4gIGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aEluZGV4LCBkYXkpO1xuICByZXR1cm4ge1xuICAgIG1vbnRoOiBnZXRNb250aChkYXRlLmdldE1vbnRoKCkpLFxuICAgIGRheTogZ2V0RGF5KGRhdGUuZ2V0RGF5KCkpLFxuICAgIHllYXI6IHllYXIudG9TdHJpbmcoKS5zbGljZSgyKSxcbiAgICBvcmQ6IGdldE9yZGluYWwoZGF0ZS5nZXREYXRlKCkpLFxuICAgIHRpbWUsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldERheShkYXkpIHtcbiAgY29uc3Qgd2Vla2RheSA9IFtcbiAgICBcIlN1bmRheVwiLFxuICAgIFwiTW9uZGF5XCIsXG4gICAgXCJUdWVzZGF5XCIsXG4gICAgXCJXZWRuZXNkYXlcIixcbiAgICBcIlRodXJzZGF5XCIsXG4gICAgXCJGcmlkYXlcIixcbiAgICBcIlNhdHVyZGF5XCIsXG4gIF07XG4gIHJldHVybiB3ZWVrZGF5W2RheV07XG59XG5cbmZ1bmN0aW9uIGdldE1vbnRoKG1vbnRoKSB7XG4gIGNvbnN0IG1vbnRocyA9IFtcbiAgICBcIkphblwiLFxuICAgIFwiRmViXCIsXG4gICAgXCJNYXJcIixcbiAgICBcIkFwclwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5cIixcbiAgICBcIkp1bFwiLFxuICAgIFwiQXVnXCIsXG4gICAgXCJTZXB0XCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF07XG5cbiAgcmV0dXJuIG1vbnRoc1ttb250aF07XG59XG5cbmZ1bmN0aW9uIGdldE9yZGluYWwobikge1xuICBsZXQgb3JkID0gXCJ0aFwiO1xuXG4gIGlmIChuICUgMTAgPT09IDEpIHtcbiAgICBvcmQgPSBcInN0XCI7XG4gIH1cblxuICBpZiAobiAlIDEwID09PSAyKSB7XG4gICAgb3JkID0gXCJuZFwiO1xuICB9XG5cbiAgaWYgKG4gJSAxMCA9PT0gMykge1xuICAgIG9yZCA9IFwicmRcIjtcbiAgfVxuICByZXR1cm4gbiArIG9yZDtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYWlseShkYXRhKSB7XG4gIGNvbnN0IHdlZWtJbmZvID0gW107XG4gIGlmICghZGF0YSkgcmV0dXJuO1xuICBkYXRhLmZvckVhY2goKGRheSkgPT4ge1xuICAgIHdlZWtJbmZvLnB1c2goe1xuICAgICAgd2Vla0RheTogcGFyc2VEYXRlKGRheS5kYXRlKS5kYXksXG4gICAgICBtYXhUZW1wOiBkYXkuZGF5Lm1heHRlbXBfYyxcbiAgICAgIG1pblRlbXA6IGRheS5kYXkubWludGVtcF9jLFxuICAgICAgaWNvblBhdGg6IGdldEljb24oZGF5LmRheS5jb25kaXRpb24udGV4dCksXG4gICAgICBjb25kaXRpb246IGRheS5kYXkuY29uZGl0aW9uLnRleHQsXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gd2Vla0luZm87XG59XG5cbmZ1bmN0aW9uIHBhcnNlSG91cmx5KGhvdXJzLCBsb2NhbHRpbWUpIHtcbiAgY29uc3QgaG91cmx5ID0gW107XG4gIGhvdXJzLmZvckVhY2goKGhvdXIpID0+IHtcbiAgICBob3VybHkucHVzaCh7XG4gICAgICB0ZW1wOiBob3VyLnRlbXBfYyxcbiAgICAgIHRpbWU6IHBhcnNlRGF0ZShob3VyLnRpbWUpLnRpbWUsXG4gICAgICBpY29uUGF0aDogZ2V0SWNvbihob3VyLmNvbmRpdGlvbi50ZXh0KSxcbiAgICAgIGNvbmRpdGlvbjogaG91ci5jb25kaXRpb24udGV4dCxcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiB0cmFuc2Zvcm1Ib3VybHkoaG91cmx5LCBsb2NhbHRpbWUpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Ib3VybHkoaG91cmx5LCBsb2NhbHRpbWUpIHtcbiAgY29uc3Qgc3BsaXRlZCA9IGxvY2FsdGltZS5zcGxpdChcIlwiKTtcbiAgc3BsaXRlZFtzcGxpdGVkLmxlbmd0aCAtIDFdID0gXCIwXCI7XG4gIHNwbGl0ZWRbc3BsaXRlZC5sZW5ndGggLSAyXSA9IFwiMFwiO1xuICBjb25zdCB0aW1lID0gc3BsaXRlZC5zbGljZSgtNSkuam9pbihcIlwiKTtcblxuICBjb25zdCBpID0gaG91cmx5LmZpbmRJbmRleCgoaG91cikgPT4ge1xuICAgIHJldHVybiBob3VyLnRpbWUgPT09IHRpbWU7XG4gIH0pO1xuXG4gIGlmIChpID09PSAwKSByZXR1cm4gaG91cmx5O1xuXG4gIGNvbnN0IHNlY29uZFBhcnQgPSBob3VybHkuc2xpY2UoaSk7XG4gIGNvbnN0IGZpcnN0UGFydCA9IGhvdXJseS5zbGljZSgwLCBpKTtcbiAgcmV0dXJuIFsuLi5zZWNvbmRQYXJ0LCAuLi5maXJzdFBhcnRdO1xufVxuXG5mdW5jdGlvbiBnZXRJY29uKGMpIHtcbiAgbGV0IGkgPSBudWxsO1xuICBzd2l0Y2ggKGMpIHtcbiAgICBjYXNlIFwiU3VubnlcIjpcbiAgICAgIGkgPSBzdW47XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQ2xlYXJcIjpcbiAgICAgIGkgPSBtb29uO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkNsb3VkeVwiOlxuICAgIGNhc2UgXCJQYXRjaHkgc2xlZXQgcG9zc2libGVcIjpcbiAgICBjYXNlIFwiT3ZlcmNhc3RcIjpcbiAgICBjYXNlIFwiUGFydGx5IGNsb3VkeVwiOlxuICAgICAgaSA9IGNsb3VkeTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJNaXN0XCI6XG4gICAgY2FzZSBcIkZvZ1wiOlxuICAgIGNhc2UgXCJGcmVlemluZyBmb2dcIjpcbiAgICBjYXNlIFwiUGF0Y2h5IGxpZ2h0IGRyaXp6bGVcIjpcbiAgICAgIGkgPSBtaXN0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlRodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZVwiOlxuICAgICAgaSA9IGxpZ2h0bmluZztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiOlxuICAgIGNhc2UgXCJMaWdodCBkcml6emxlXCI6XG4gICAgY2FzZSBcIkZyZWV6aW5nIGRyaXp6bGVcIjpcbiAgICBjYXNlIFwiSGVhdnkgZnJlZXppbmcgZHJpenpsZVwiOlxuICAgIGNhc2UgXCJQYXRjaHkgbGlnaHQgcmFpblwiOlxuICAgIGNhc2UgXCJMaWdodCByYWluXCI6XG4gICAgY2FzZSBcIk1vZGVyYXRlIHJhaW4gYXQgdGltZXNcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgcmFpblwiOlxuICAgIGNhc2UgXCJIZWF2eSByYWluIGF0IHRpbWVzXCI6XG4gICAgY2FzZSBcIkhlYXZ5IHJhaW5cIjpcbiAgICBjYXNlIFwiTGlnaHQgZnJlZXppbmcgcmFpblwiOlxuICAgIGNhc2UgXCJNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluXCI6XG4gICAgY2FzZSBcIkxpZ2h0IHJhaW4gc2hvd2VyXCI6XG4gICAgY2FzZSBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyXCI6XG4gICAgY2FzZSBcIlRvcnJlbnRpYWwgcmFpbiBzaG93ZXJcIjpcbiAgICBjYXNlIFwiUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyXCI6XG4gICAgY2FzZSBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyXCI6XG4gICAgICBpID0gcmFpbnk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUGF0Y2h5IHNub3cgcG9zc2libGVcIjpcbiAgICBjYXNlIFwiQmxvd2luZyBzbm93XCI6XG4gICAgY2FzZSBcIkJsaXp6YXJkXCI6XG4gICAgY2FzZSBcIkxpZ2h0IHNsZWV0XCI6XG4gICAgY2FzZSBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0XCI6XG4gICAgY2FzZSBcIlBhdGNoeSBsaWdodCBzbm93XCI6XG4gICAgY2FzZSBcIkxpZ2h0IHNub3dcIjpcbiAgICBjYXNlIFwiUGF0Y2h5IG1vZGVyYXRlIHNub3dcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgc25vd1wiOlxuICAgIGNhc2UgXCJQYXRjaHkgaGVhdnkgc25vd1wiOlxuICAgIGNhc2UgXCJIZWF2eSBzbm93XCI6XG4gICAgY2FzZSBcIkljZSBwZWxsZXRzXCI6XG4gICAgY2FzZSBcIkxpZ2h0IHNsZWV0IHNob3dlcnNcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2Vyc1wiOlxuICAgIGNhc2UgXCJMaWdodCBzbm93IHNob3dlcnNcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyBzaG93ZXJzXCI6XG4gICAgY2FzZSBcIkxpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiOlxuICAgIGNhc2UgXCJQYXRjaHkgbGlnaHQgc25vdyB3aXRoIHRodW5kZXJcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcIjpcbiAgICAgIGkgPSBzbm93O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGkgPSBjbG91ZDtcbiAgfVxuXG4gIHJldHVybiBpO1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5kYWlseS13ZWF0aGVyLFxuLmhvdXJseS13ZWF0aGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmRheS1pbmZvLXdyYXBwZXIsXG4uaG91ci1pbmZvLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLndlZWtkYXksXG4uaG91ciB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbn1cblxuLm1heC10ZW1wLFxuLnRlbXAge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMWVtO1xufVxuXG4ubWluLXRlbXAge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLndlYXRoZXItaWNvbiB7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcbiAgLyogLmRhaWx5LXdlYXRoZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9ICovXG5cbiAgLndlZWtkYXksXG4gIC5ob3VyIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICB9XG4gIC5tYXgtdGVtcCxcbiAgLnRlbXAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XG4gIH1cblxuICAubWluLXRlbXAge1xuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuXG4gIC53ZWF0aGVyLWljb24ge1xuICAgIHdpZHRoOiAzMHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAud2Vla2RheSxcbiAgLmhvdXIge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuICAubWF4LXRlbXAsXG4gIC50ZW1wIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMWVtO1xuICB9XG5cbiAgLm1pbi10ZW1wIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cblxuICAud2VhdGhlci1pY29uIHtcbiAgICB3aWR0aDogNDBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuZGFpbHktd2VhdGhlcixcbiAgLmhvdXJseS13ZWF0aGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC5kYXktaW5mby13cmFwcGVyLFxuICAuaG91ci1pbmZvLXdyYXBwZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ2FwOiAyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnRlbXAtd3JhcCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cblxuICAud2Vla2RheSxcbiAgLmhvdXIge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLndlZWtkYXksXG4gIC5ob3VyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgLm1heC10ZW1wLFxuICAudGVtcCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XG4gIH1cblxuICAubWluLXRlbXAge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuXG4gIC53ZWF0aGVyLWljb24ge1xuICAgIHdpZHRoOiAzMHB4O1xuICB9XG59XG5cbi5ob3VyLFxuLnRlbXAge1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuLndlYXRoZXItZGlzcGxheSB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Rpc3BsYXktd2VhdGhlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFOztPQUVLOztFQUVMOztJQUVFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0VBQ0E7O0lBRUUsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTs7SUFFRSxrQkFBa0I7RUFDcEI7RUFDQTs7SUFFRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFOztJQUVFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxRQUFRO0lBQ1IsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBOztJQUVFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRTs7SUFFRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTs7RUFFRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmRhaWx5LXdlYXRoZXIsXFxuLmhvdXJseS13ZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5kYXktaW5mby13cmFwcGVyLFxcbi5ob3VyLWluZm8td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ud2Vla2RheSxcXG4uaG91ciB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcXG59XFxuXFxuLm1heC10ZW1wLFxcbi50ZW1wIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcXG59XFxuXFxuLm1pbi10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLndlYXRoZXItaWNvbiB7XFxuICB3aWR0aDogNTBweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XFxuICAvKiAuZGFpbHktd2VhdGhlciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfSAqL1xcblxcbiAgLndlZWtkYXksXFxuICAuaG91ciB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjRweDtcXG4gIH1cXG4gIC5tYXgtdGVtcCxcXG4gIC50ZW1wIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMWVtO1xcbiAgfVxcblxcbiAgLm1pbi10ZW1wIHtcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIH1cXG5cXG4gIC53ZWF0aGVyLWljb24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAud2Vla2RheSxcXG4gIC5ob3VyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgfVxcbiAgLm1heC10ZW1wLFxcbiAgLnRlbXAge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XFxuICB9XFxuXFxuICAubWluLXRlbXAge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgfVxcblxcbiAgLndlYXRoZXItaWNvbiB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLmRhaWx5LXdlYXRoZXIsXFxuICAuaG91cmx5LXdlYXRoZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG5cXG4gIC5kYXktaW5mby13cmFwcGVyLFxcbiAgLmhvdXItaW5mby13cmFwcGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAudGVtcC13cmFwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB9XFxuXFxuICAud2Vla2RheSxcXG4gIC5ob3VyIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLndlZWtkYXksXFxuICAuaG91ciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgLm1heC10ZW1wLFxcbiAgLnRlbXAge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMWVtO1xcbiAgfVxcblxcbiAgLm1pbi10ZW1wIHtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIH1cXG5cXG4gIC53ZWF0aGVyLWljb24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gIH1cXG59XFxuXFxuLmhvdXIsXFxuLnRlbXAge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi53ZWF0aGVyLWRpc3BsYXkge1xcbiAgbWluLWhlaWdodDogMjAwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmV4dHJhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMC41ZW07XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmljb24ge1xuICB3aWR0aDogMjVweDtcbn1cblxuLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG4uaW5mbyB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaW5mbyB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gIH1cblxuICAuaWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9leHRyYS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5leHRyYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmljb24ge1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi5pbmZvIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5pbmZvIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgfVxcblxcbiAgLmljb24ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvYmFja2dyb3VuZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5hcHAge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJtYWluXCJcbiAgICBcIi4uLlwiXG4gICAgXCJ3ZWF0aGVyLWRpc3BsYXlcIjtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIG5vLXJlcGVhdCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBhZGRpbmc6IDVlbTtcbiAgY29sb3I6IHdoaXRlO1xuICByb3ctZ2FwOiA0ZW07XG59XG5cbi5tYWluIHtcbiAgZ3JpZC1hcmVhOiBtYWluO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMWVtO1xufVxuXG4ud2VhdGhlci1kaXNwbGF5IHtcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyLWRpc3BsYXk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5hcHAge1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBwYWRkaW5nLXRvcDogNGVtO1xuICAgIHJvdy1nYXA6IDEwZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgIFwibWFpblwiXG4gICAgICBcIndlYXRoZXItZGlzcGxheVwiXG4gICAgICBcIndlYXRoZXItZGlzcGxheVwiO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbGF5b3V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsK0JBQStCO0VBQy9COzs7cUJBR21CO0VBQ25CLG9FQUEwRDtFQUMxRCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiOzs7dUJBR21CO0VBQ3JCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFwcCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJtYWluXFxcIlxcbiAgICBcXFwiLi4uXFxcIlxcbiAgICBcXFwid2VhdGhlci1kaXNwbGF5XFxcIjtcXG4gIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvYmFja2dyb3VuZC5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcGFkZGluZzogNWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcm93LWdhcDogNGVtO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi53ZWF0aGVyLWRpc3BsYXkge1xcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyLWRpc3BsYXk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuYXBwIHtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBwYWRkaW5nLXRvcDogNGVtO1xcbiAgICByb3ctZ2FwOiAxMGVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgIFxcXCJtYWluXFxcIlxcbiAgICAgIFxcXCJ3ZWF0aGVyLWRpc3BsYXlcXFwiXFxuICAgICAgXFxcIndlYXRoZXItZGlzcGxheVxcXCI7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNvbmRpdGlvbiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNpdHkge1xuICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi50aW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4udGVtcHJldHVyZSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zZWFyY2gtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB3aWR0aDogMTcwcHg7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgZmxleDogMTtcbn1cblxuLnNlYXJjaC1pY29uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29uZGl0aW9uIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB3aGl0ZS1zcGFjZTogd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cblxuICAuY2l0eSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgLmRhdGUtdGltZSB7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gIH1cblxuICAudGVtcHJldHVyZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuXG4gIC5zZWFyY2gtaWNvbiB7XG4gICAgaGVpZ2h0OiAxZW07XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zZWFyY2gtYW5kLWN1cnJlbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb25kaXRpb24ge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5jaXR5IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuOGVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50aW1lIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLnRlbXByZXR1cmUge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uc2VhcmNoLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMC4yZW0gMC41ZW07XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgd2lkdGg6IDE3MHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zZWFyY2gtaWNvbiB7XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5zZWFyY2gtaWNvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuY29uZGl0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHdoaXRlLXNwYWNlOiB3cmFwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxuXFxuICAuY2l0eSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC5kYXRlLXRpbWUge1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gIH1cXG5cXG4gIC50ZW1wcmV0dXJlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtaWNvbiB7XFxuICAgIGhlaWdodDogMWVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGF5b3V0LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaC1hbmQtY3VycmVudC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9leHRyYS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaXNwbGF5LXdlYXRoZXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2VhdGhlci10b2dnbGVycy5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJ1YmlrOndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT0E7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWs6d2dodEA0MDA7NjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbkBpbXBvcnQgXFxcIi4vbGF5b3V0LmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9zZWFyY2gtYW5kLWN1cnJlbnQuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2V4dHJhLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9kaXNwbGF5LXdlYXRoZXJcXFwiO1xcbkBpbXBvcnQgXFxcIi4vd2VhdGhlci10b2dnbGVycy5jc3NcXFwiO1xcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWtcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY2hhbmdlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMmVtO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50b2dnbGVyIHtcbiAgcGFkZGluZzogMC40ZW0gMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBib3JkZXIgMzAwbXMgZWFzZS1pbjtcbn1cblxuLnRvZ2dsZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVlbTtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbiwgdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW47XG59XG5cbi5sZWZ0LFxuLnJpZ2h0IHtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbi5kb3Qge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmxlZnQ6aG92ZXIsXG4ucmlnaHQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kb3QuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5jaGFuZ2VyIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgfVxufVxuXG4udmlzaWJsZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5jaG9zZW4ge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy93ZWF0aGVyLXRvZ2dsZXJzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLDBEQUEwRDtBQUM1RDs7QUFFQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2hhbmdlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyZW07XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udG9nZ2xlciB7XFxuICBwYWRkaW5nOiAwLjRlbSAwLjhlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMzAwbXMgZWFzZS1pbjtcXG59XFxuXFxuLnRvZ2dsZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNWVtO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbiwgdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW47XFxufVxcblxcbi5sZWZ0LFxcbi5yaWdodCB7XFxuICB3aWR0aDogMTBweDtcXG59XFxuXFxuLmRvdCB7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmxlZnQ6aG92ZXIsXFxuLnJpZ2h0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRvdC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuICAuY2hhbmdlciB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICB9XFxufVxcblxcbi52aXNpYmxlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLmNob3NlbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uLy4uL2Nzcy9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGxvYWRVaSB9IGZyb20gXCIuLi9kb20vZG9tXCI7XG5pbXBvcnQgc2VhcmNoV2VhdGhlckJ5Q2l0eSBmcm9tIFwiLi4vYXBpL2FwaUZ1bmN0aW9ucy5qc1wiO1xuXG4oYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgc2VhcmNoV2VhdGhlckJ5Q2l0eShcInRiaWxpc2lcIik7XG4gIGxvYWRVaShkYXRhKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG59KSgpO1xuIl0sIm5hbWVzIjpbImdldElucHV0VmFsdWUiLCJzZWFyY2hXZWF0aGVyQnlDaXR5IiwiY2l0eSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwidG9Mb3dlckNhc2UiLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsImRhdGEiLCJqc29uIiwicGFyc2VEYXRlIiwicGFyc2VEYWlseSIsInBhcnNlSG91cmx5Iiwic2VhcmNoSSIsInRoZXJtb0kiLCJodW1pZGl0eUkiLCJyYWlueUkiLCJ3aW5kSSIsImxlZnRJIiwicmlnaHRJIiwiY29uZGl0aW9uIiwiZGF0ZSIsInRpbWUiLCJ0ZW1wcmV0dXJlIiwic2VhcmNoSW1nIiwiZmVlbHNMaWtlIiwiaHVtaWRpdHkiLCJjaGFuY2VPZlJhaW4iLCJ3aW5kU3BlZWQiLCJpbnB1dCIsImRhaWx5V2VhdGhlciIsImhvdXJseVdlYXRoZXIiLCJkYWlseSIsImhvdXJseSIsImxlZnQiLCJyaWdodCIsInNlY3Rpb25zIiwiY2VsIiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsImhvdXJseUJvb2wiLCJsb2FkVWkiLCJsb2FkU2VhcmNoQW5kQ3VycmVudCIsImxvYWRBcnJvd3MiLCJsb2FkRXh0cmFJbmZvIiwicG9wdWxhdGVIb3VybHkiLCJwb3B1bGF0ZURhaWx5Iiwic3JjIiwiX2RhdGEkY3VycmVudCIsIl9kYXRhJGN1cnJlbnQkY29uZGl0aSIsIl9kYXRhJGxvY2F0aW9uIiwiX2RhdGEkbG9jYXRpb24yIiwiX2RhdGEkbG9jYXRpb24zIiwiY3VycmVudCIsInRleHQiLCJsb2NhdGlvbiIsIm5hbWUiLCJkYXRlT2JqIiwibG9jYWx0aW1lIiwiZGF5Iiwib3JkIiwibW9udGgiLCJ5ZWFyIiwidGVtcF9jIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJmZWVsc2xpa2VfYyIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJkYWlseV9jaGFuY2Vfb2ZfcmFpbiIsIndpbmRfa3BoIiwidmFsdWUiLCJ0cmltIiwic2VhcmNoRm9yV2VhdGhlciIsIndlZWsiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwiZGF5SW5mbyIsImRpdldyYXBwZXIiLCJjcmVhdGVFbGVtZW50Iiwid2Vla0RheSIsIm1heFRlbXAiLCJtaW5UZW1wIiwidGVtcFdyYXAiLCJpY29uIiwiY2xhc3NOYW1lIiwiaWNvblBhdGgiLCJhbHQiLCJhcHBlbmQiLCJhcHBlbmRDaGlsZCIsInN0YWdlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaG91cnMiLCJob3VyIiwiY29uc29sZSIsImxvZyIsInN0YXJ0IiwiZW5kIiwiaSIsInRlbXAiLCJtb3ZlIiwiZSIsImN1cnJlbnREb3QiLCJjdXJyZW50SWQiLCJwYXJzZUludCIsImRhdGFzZXQiLCJpZCIsImFycm93IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b2dnbGUiLCJuZXh0SWQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5IiwicmVtb3ZlIiwiYWRkIiwiY2xvdWQiLCJjbG91ZHkiLCJsaWdodG5pbmciLCJtaXN0IiwibW9vbiIsInJhaW55Iiwic25vdyIsInN1biIsInNwbGl0IiwibW9udGhJbmRleCIsIkRhdGUiLCJnZXRNb250aCIsImdldERheSIsInRvU3RyaW5nIiwic2xpY2UiLCJnZXRPcmRpbmFsIiwiZ2V0RGF0ZSIsIndlZWtkYXkiLCJtb250aHMiLCJuIiwid2Vla0luZm8iLCJwdXNoIiwibWF4dGVtcF9jIiwibWludGVtcF9jIiwiZ2V0SWNvbiIsInRyYW5zZm9ybUhvdXJseSIsInNwbGl0ZWQiLCJqb2luIiwiZmluZEluZGV4Iiwic2Vjb25kUGFydCIsImZpcnN0UGFydCIsImMiXSwic291cmNlUm9vdCI6IiJ9