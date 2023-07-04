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
    populateHourly(data, parseInt(document.querySelector(".active").dataset.id));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtGQUErRixVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUss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V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBNkI7QUFDTztBQUNxQjtBQUV6RCxDQUFDLGtCQUFrQjtFQUNqQixNQUFNOUYsSUFBSSxHQUFHLE1BQU1ULGdFQUFtQixDQUFDLFNBQVMsQ0FBQztFQUNqRDBDLGdEQUFNLENBQUNqQyxJQUFJLENBQUM7RUFDWjBGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDM0YsSUFBSSxDQUFDO0FBQ25CLENBQUMsRUFBRSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9hcGkvYXBpRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL2RvbS9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvanMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL2Rpc3BsYXktd2VhdGhlci5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL2V4dHJhLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jc3MvbGF5b3V0LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jc3Mvc2VhcmNoLWFuZC1jdXJyZW50LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Nzcy93ZWF0aGVyLXRvZ2dsZXJzLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9tYWluL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldElucHV0VmFsdWUgfSBmcm9tIFwiLi4vZG9tL2RvbS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZWFyY2hXZWF0aGVyQnlDaXR5KGNpdHkpIHtcbiAgY2l0eSA9XG4gICAgY2l0eSA9PT0gXCJcIlxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHlcIikudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKVxuICAgICAgOiBjaXR5O1xuICBpZiAoY2l0eSA9PT0gXCJydXN0YXZpXCIpIGNpdHkgPSBcIjE3Ni4yMjEuMjUyLjIxXCI7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWQ0MDljODc3YzFkYzRhOGY4NGQyMDE2MjkyMzMwMDYmcT0ke2NpdHl9JmRheXM9N2AsXG4gICAge1xuICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgfVxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCB7IHBhcnNlRGF0ZSwgcGFyc2VEYWlseSwgcGFyc2VIb3VybHkgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHMuanNcIjtcbmltcG9ydCBzZWFyY2hJIGZyb20gXCIuLi8uLi9hc3NldHMvc2VhcmNoLnN2Z1wiO1xuaW1wb3J0IHRoZXJtb0kgZnJvbSBcIi4uLy4uL2Fzc2V0cy90aGVybW8uc3ZnXCI7XG5pbXBvcnQgaHVtaWRpdHlJIGZyb20gXCIuLi8uLi9hc3NldHMvaHVtaWRpdHkuc3ZnXCI7XG5pbXBvcnQgcmFpbnlJIGZyb20gXCIuLi8uLi9hc3NldHMvcmFpbnkuc3ZnXCI7XG5pbXBvcnQgd2luZEkgZnJvbSBcIi4uLy4uL2Fzc2V0cy93aW5kLnN2Z1wiO1xuaW1wb3J0IHNlYXJjaFdlYXRoZXJCeUNpdHkgZnJvbSBcIi4uL2FwaS9hcGlGdW5jdGlvbnMuanNcIjtcbmltcG9ydCBsZWZ0SSBmcm9tIFwiLi4vLi4vYXNzZXRzL2Fycm93X2xlZnQuc3ZnXCI7XG5pbXBvcnQgcmlnaHRJIGZyb20gXCIuLi8uLi9hc3NldHMvYXJyb3dfcmlnaHQuc3ZnXCI7XG5cbi8vRE9NIEVMRU1FTlRTXG5jb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmRpdGlvblwiKTtcbmNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHlcIik7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlXCIpO1xuY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZVwiKTtcbmNvbnN0IHRlbXByZXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXByZXR1cmVcIik7XG5jb25zdCBzZWFyY2hJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1pY29uXCIpO1xuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVscy1saWtlXCIpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5XCIpO1xuY29uc3QgY2hhbmNlT2ZSYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFuY2Utb2YtcmFpblwiKTtcbmNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZC1zcGVlZFwiKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuY29uc3QgZGFpbHlXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYWlseS13ZWF0aGVyXCIpO1xuY29uc3QgaG91cmx5V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG91cmx5LXdlYXRoZXJcIik7XG5jb25zdCBkYWlseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFpbHlcIik7XG5jb25zdCBob3VybHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvdXJseVwiKTtcbmNvbnN0IGxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnRcIik7XG5jb25zdCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmlnaHRcIik7XG5jb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvbnNcIik7XG5cbmNvbnN0IGNlbCA9IFN0cmluZy5mcm9tQ29kZVBvaW50KDg0NTEpO1xubGV0IGhvdXJseUJvb2wgPSBmYWxzZTtcblxuZXhwb3J0IHsgbG9hZFVpLCBnZXRJbnB1dFZhbHVlIH07XG5cbmZ1bmN0aW9uIGxvYWRVaShkYXRhKSB7XG4gIGxvYWRTZWFyY2hBbmRDdXJyZW50KGRhdGEpO1xuICBsb2FkQXJyb3dzKCk7XG5cbiAgbG9hZEV4dHJhSW5mbyhkYXRhKTtcblxuICBpZiAoaG91cmx5Qm9vbCkge1xuICAgIHBvcHVsYXRlSG91cmx5KFxuICAgICAgZGF0YSxcbiAgICAgIHBhcnNlSW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpLmRhdGFzZXQuaWQpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBwb3B1bGF0ZURhaWx5KGRhdGEpO1xuICB9XG4gIHNlYXJjaEltZy5zcmMgPSBzZWFyY2hJO1xufVxuXG5mdW5jdGlvbiBsb2FkQXJyb3dzKCkge1xuICBsZWZ0LnNyYyA9IGxlZnRJO1xuICByaWdodC5zcmMgPSByaWdodEk7XG59XG5cbmZ1bmN0aW9uIGxvYWRTZWFyY2hBbmRDdXJyZW50KGRhdGEpIHtcbiAgY29uZGl0aW9uLnRleHRDb250ZW50ID0gZGF0YT8uY3VycmVudD8uY29uZGl0aW9uPy50ZXh0O1xuICBjaXR5LnRleHRDb250ZW50ID1cbiAgICBkYXRhPy5sb2NhdGlvbj8ubmFtZSA9PT0gXCJHYXJkYWJhbmlcIiA/IFwiUnVzdGF2aVwiIDogZGF0YT8ubG9jYXRpb24/Lm5hbWU7XG4gIGNvbnN0IGRhdGVPYmogPSBwYXJzZURhdGUoZGF0YT8ubG9jYXRpb24/LmxvY2FsdGltZSk7XG4gIGRhdGUudGV4dENvbnRlbnQgPSBgJHtkYXRlT2JqLmRheX0sICR7ZGF0ZU9iai5vcmR9ICR7ZGF0ZU9iai5tb250aH0nJHtkYXRlT2JqLnllYXJ9YDtcbiAgdGltZS50ZXh0Q29udGVudCA9IGRhdGVPYmoudGltZTtcbiAgdGVtcHJldHVyZS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC50ZW1wX2MgKyBjZWw7XG59XG5cbmZ1bmN0aW9uIGxvYWRFeHRyYUluZm8oZGF0YSkge1xuICBmZWVsc0xpa2UuZmlyc3RFbGVtZW50Q2hpbGQuc3JjID0gdGhlcm1vSTtcbiAgZmVlbHNMaWtlLnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKS50ZXh0Q29udGVudCA9XG4gICAgZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jICsgXCIgXCIgKyBjZWw7XG4gIGh1bWlkaXR5LmZpcnN0RWxlbWVudENoaWxkLnNyYyA9IGh1bWlkaXR5STtcbiAgaHVtaWRpdHkucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpLnRleHRDb250ZW50ID1cbiAgICBkYXRhLmN1cnJlbnQuaHVtaWRpdHkgKyBcIiBcIiArIFwiJVwiO1xuICBjaGFuY2VPZlJhaW4uZmlyc3RFbGVtZW50Q2hpbGQuc3JjID0gcmFpbnlJO1xuICBjaGFuY2VPZlJhaW4ucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpLnRleHRDb250ZW50ID1cbiAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbiArIFwiIFwiICsgXCIlXCI7XG4gIHdpbmRTcGVlZC5maXJzdEVsZW1lbnRDaGlsZC5zcmMgPSB3aW5kSTtcbiAgd2luZFNwZWVkLnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKS50ZXh0Q29udGVudCA9XG4gICAgZGF0YS5jdXJyZW50LndpbmRfa3BoICsgXCIgXCIgKyBcImttL2hcIjtcbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZSgpIHtcbiAgcmV0dXJuIGlucHV0LnZhbHVlID8gaW5wdXQudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCkgOiBcIlwiO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZWFyY2hGb3JXZWF0aGVyKCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgc2VhcmNoV2VhdGhlckJ5Q2l0eShnZXRJbnB1dFZhbHVlKCkpO1xuICBsb2FkVWkoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRGFpbHkoZGF0YSkge1xuICBjb25zdCB3ZWVrID0gcGFyc2VEYWlseShkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5KTtcbiAgZGFpbHlXZWF0aGVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGhvdXJseVdlYXRoZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgd2Vlay5mb3JFYWNoKChkYXlJbmZvKSA9PiB7XG4gICAgY29uc3QgZGl2V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgd2Vla0RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGVtcFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgZGl2V3JhcHBlci5jbGFzc05hbWUgPSBcImRheS1pbmZvLXdyYXBwZXJcIjtcbiAgICB3ZWVrRGF5LmNsYXNzTmFtZSA9IFwid2Vla2RheVwiO1xuICAgIG1heFRlbXAuY2xhc3NOYW1lID0gXCJtYXgtdGVtcFwiO1xuICAgIG1pblRlbXAuY2xhc3NOYW1lID0gXCJtaW4tdGVtcFwiO1xuICAgIHRlbXBXcmFwLmNsYXNzTmFtZSA9IFwidGVtcC13cmFwXCI7XG4gICAgaWNvbi5jbGFzc05hbWUgPSBcIndlYXRoZXItaWNvblwiO1xuXG4gICAgd2Vla0RheS50ZXh0Q29udGVudCA9IGRheUluZm8ud2Vla0RheTtcbiAgICBtYXhUZW1wLnRleHRDb250ZW50ID0gYCR7ZGF5SW5mby5tYXhUZW1wfSAke2NlbH1gO1xuICAgIG1pblRlbXAudGV4dENvbnRlbnQgPSBgJHtkYXlJbmZvLm1pblRlbXB9ICR7Y2VsfWA7XG4gICAgaWNvbi5zcmMgPSBkYXlJbmZvLmljb25QYXRoO1xuICAgIGljb24uYWx0ID0gZGF5SW5mby5jb25kaXRpb247XG5cbiAgICB0ZW1wV3JhcC5hcHBlbmQobWF4VGVtcCwgbWluVGVtcCk7XG4gICAgZGl2V3JhcHBlci5hcHBlbmQod2Vla0RheSwgdGVtcFdyYXAsIGljb24pO1xuICAgIGRhaWx5V2VhdGhlci5hcHBlbmRDaGlsZChkaXZXcmFwcGVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlSG91cmx5KGRhdGEsIHN0YWdlID0gMSkge1xuICBjb25zdCBob3VycyA9IHBhcnNlSG91cmx5KFxuICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cixcbiAgICBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZVxuICApO1xuICBjb25zb2xlLmxvZyhob3Vycyk7XG4gIGRhaWx5V2VhdGhlci5pbm5lckhUTUwgPSBcIlwiO1xuICBob3VybHlXZWF0aGVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGxldCBzdGFydCA9IG51bGw7XG4gIGxldCBlbmQgPSBudWxsO1xuICBzdGFydCA9IHN0YWdlID09PSAxID8gMCA6IHN0YWdlID09PSAyID8gOCA6IDE1O1xuICBlbmQgPSBzdGFnZSA9PT0gMSA/IDcgOiBzdGFnZSA9PT0gMiA/IDE1IDogaG91cnMubGVuZ3RoIC0gMjtcblxuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICBjb25zdCBkaXZXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBob3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgIGRpdldyYXBwZXIuY2xhc3NOYW1lID0gXCJob3VyLWluZm8td3JhcHBlclwiO1xuICAgIGhvdXIuY2xhc3NOYW1lID0gXCJob3VyXCI7XG4gICAgdGVtcC5jbGFzc05hbWUgPSBcInRlbXBcIjtcbiAgICBpY29uLmNsYXNzTmFtZSA9IFwid2VhdGhlci1pY29uXCI7XG5cbiAgICBob3VyLnRleHRDb250ZW50ID0gaG91cnNbaV0udGltZTtcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7aG91cnNbaV0udGVtcH0gJHtjZWx9YDtcbiAgICBpY29uLnNyYyA9IGhvdXJzW2ldLmljb25QYXRoO1xuICAgIGljb24uYWx0ID0gaG91cnNbaV0uY29uZGl0aW9uO1xuXG4gICAgZGl2V3JhcHBlci5hcHBlbmQoaG91ciwgdGVtcCwgaWNvbik7XG4gICAgaG91cmx5V2VhdGhlci5hcHBlbmRDaGlsZChkaXZXcmFwcGVyKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBtb3ZlKGUpIHtcbiAgY29uc3QgY3VycmVudERvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpO1xuICBjb25zdCBjdXJyZW50SWQgPSBwYXJzZUludChjdXJyZW50RG90LmRhdGFzZXQuaWQpO1xuICBjb25zdCBhcnJvdyA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImxlZnRcIikgPyBcImxlZnRcIiA6IFwicmlnaHRcIjtcblxuICBpZiAoY3VycmVudElkID09PSAxICYmIGFycm93ID09PSBcImxlZnRcIikgcmV0dXJuO1xuICBpZiAoY3VycmVudElkID09PSAzICYmIGFycm93ID09PSBcInJpZ2h0XCIpIHJldHVybjtcblxuICBjdXJyZW50RG90LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgY29uc3QgbmV4dElkID0gYXJyb3cgPT09IFwibGVmdFwiID8gY3VycmVudElkIC0gMSA6IGN1cnJlbnRJZCArIDE7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtuZXh0SWR9XCJdYCkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgc2VhcmNoV2VhdGhlckJ5Q2l0eShcIlwiKTtcbiAgcG9wdWxhdGVIb3VybHkoZGF0YSwgbmV4dElkKTtcbn1cblxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgaWYgKGUua2V5ICE9IFwiRW50ZXJcIikgcmV0dXJuO1xuXG4gIHNlYXJjaEZvcldlYXRoZXIoKTtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufSk7XG5cbnNlYXJjaEltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgc2VhcmNoRm9yV2VhdGhlcigpO1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG59KTtcblxuZGFpbHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGhvdXJseUJvb2wgPSBmYWxzZTtcbiAgc2VjdGlvbnMuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gIGRhaWx5LmNsYXNzTmFtZSA9IFwiZGFpbHkgdG9nZ2xlciBjaG9zZW5cIjtcbiAgaG91cmx5LmNsYXNzTmFtZSA9IFwiaG91cmx5IHRvZ2dsZXJcIjtcbiAgc2VhcmNoRm9yV2VhdGhlcigpO1xufSk7XG5cbmhvdXJseS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgc2VjdGlvbnMuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gIGRhaWx5LmNsYXNzTmFtZSA9IFwiZGFpbHkgdG9nZ2xlclwiO1xuICBob3VybHkuY2xhc3NOYW1lID0gXCJob3VybHkgdG9nZ2xlciBjaG9zZW5cIjtcbiAgaG91cmx5Qm9vbCA9IHRydWU7XG4gIHNlYXJjaEZvcldlYXRoZXIoKTtcbn0pO1xuXG5sZWZ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtb3ZlKTtcbnJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtb3ZlKTtcbiIsImltcG9ydCBjbG91ZCBmcm9tIFwiLi4vLi4vYXNzZXRzL2Nsb3VkLnN2Z1wiO1xuaW1wb3J0IGNsb3VkeSBmcm9tIFwiLi4vLi4vYXNzZXRzL2Nsb3VkeS5zdmdcIjtcbmltcG9ydCBsaWdodG5pbmcgZnJvbSBcIi4uLy4uL2Fzc2V0cy9saWdodG5pbmcuc3ZnXCI7XG5pbXBvcnQgbWlzdCBmcm9tIFwiLi4vLi4vYXNzZXRzL21pc3Quc3ZnXCI7XG5pbXBvcnQgbW9vbiBmcm9tIFwiLi4vLi4vYXNzZXRzL21vb24uc3ZnXCI7XG5pbXBvcnQgcmFpbnkgZnJvbSBcIi4uLy4uL2Fzc2V0cy9yYWlueS5zdmdcIjtcbmltcG9ydCBzbm93IGZyb20gXCIuLi8uLi9hc3NldHMvc25vdy5zdmdcIjtcbmltcG9ydCBzdW4gZnJvbSBcIi4uLy4uL2Fzc2V0cy9zdW4uc3ZnXCI7XG5cbmV4cG9ydCB7IHBhcnNlRGF0ZSwgcGFyc2VEYWlseSwgcGFyc2VIb3VybHkgfTtcblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGUpIHtcbiAgY29uc3QgeWVhciA9IHBhcnNlSW50KGRhdGUuc3BsaXQoXCItXCIpWzBdKTtcbiAgY29uc3QgbW9udGhJbmRleCA9IHBhcnNlSW50KGRhdGUuc3BsaXQoXCItXCIpWzFdKSAtIDE7XG4gIGNvbnN0IGRheSA9IHBhcnNlSW50KGRhdGUuc3BsaXQoXCItXCIpWzJdLnNwbGl0KFwiIFwiKVswXSk7XG4gIGNvbnN0IHRpbWUgPSBkYXRlLnNwbGl0KFwiIFwiKVsxXTtcbiAgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoSW5kZXgsIGRheSk7XG4gIHJldHVybiB7XG4gICAgbW9udGg6IGdldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSksXG4gICAgZGF5OiBnZXREYXkoZGF0ZS5nZXREYXkoKSksXG4gICAgeWVhcjogeWVhci50b1N0cmluZygpLnNsaWNlKDIpLFxuICAgIG9yZDogZ2V0T3JkaW5hbChkYXRlLmdldERhdGUoKSksXG4gICAgdGltZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF5KGRheSkge1xuICBjb25zdCB3ZWVrZGF5ID0gW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgXTtcbiAgcmV0dXJuIHdlZWtkYXlbZGF5XTtcbn1cblxuZnVuY3Rpb24gZ2V0TW9udGgobW9udGgpIHtcbiAgY29uc3QgbW9udGhzID0gW1xuICAgIFwiSmFuXCIsXG4gICAgXCJGZWJcIixcbiAgICBcIk1hclwiLFxuICAgIFwiQXByXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1blwiLFxuICAgIFwiSnVsXCIsXG4gICAgXCJBdWdcIixcbiAgICBcIlNlcHRcIixcbiAgICBcIk9jdFwiLFxuICAgIFwiTm92XCIsXG4gICAgXCJEZWNcIixcbiAgXTtcblxuICByZXR1cm4gbW9udGhzW21vbnRoXTtcbn1cblxuZnVuY3Rpb24gZ2V0T3JkaW5hbChuKSB7XG4gIGxldCBvcmQgPSBcInRoXCI7XG5cbiAgaWYgKG4gJSAxMCA9PT0gMSkge1xuICAgIG9yZCA9IFwic3RcIjtcbiAgfVxuXG4gIGlmIChuICUgMTAgPT09IDIpIHtcbiAgICBvcmQgPSBcIm5kXCI7XG4gIH1cblxuICBpZiAobiAlIDEwID09PSAzKSB7XG4gICAgb3JkID0gXCJyZFwiO1xuICB9XG4gIHJldHVybiBuICsgb3JkO1xufVxuXG5mdW5jdGlvbiBwYXJzZURhaWx5KGRhdGEpIHtcbiAgY29uc3Qgd2Vla0luZm8gPSBbXTtcbiAgaWYgKCFkYXRhKSByZXR1cm47XG4gIGRhdGEuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgd2Vla0luZm8ucHVzaCh7XG4gICAgICB3ZWVrRGF5OiBwYXJzZURhdGUoZGF5LmRhdGUpLmRheSxcbiAgICAgIG1heFRlbXA6IGRheS5kYXkubWF4dGVtcF9jLFxuICAgICAgbWluVGVtcDogZGF5LmRheS5taW50ZW1wX2MsXG4gICAgICBpY29uUGF0aDogZ2V0SWNvbihkYXkuZGF5LmNvbmRpdGlvbi50ZXh0KSxcbiAgICAgIGNvbmRpdGlvbjogZGF5LmRheS5jb25kaXRpb24udGV4dCxcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiB3ZWVrSW5mbztcbn1cblxuZnVuY3Rpb24gcGFyc2VIb3VybHkoaG91cnMsIGxvY2FsdGltZSkge1xuICBjb25zdCBob3VybHkgPSBbXTtcbiAgaG91cnMuZm9yRWFjaCgoaG91cikgPT4ge1xuICAgIGhvdXJseS5wdXNoKHtcbiAgICAgIHRlbXA6IGhvdXIudGVtcF9jLFxuICAgICAgdGltZTogcGFyc2VEYXRlKGhvdXIudGltZSkudGltZSxcbiAgICAgIGljb25QYXRoOiBnZXRJY29uKGhvdXIuY29uZGl0aW9uLnRleHQpLFxuICAgICAgY29uZGl0aW9uOiBob3VyLmNvbmRpdGlvbi50ZXh0LFxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHRyYW5zZm9ybUhvdXJseShob3VybHksIGxvY2FsdGltZSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUhvdXJseShob3VybHksIGxvY2FsdGltZSkge1xuICBjb25zdCBzcGxpdGVkID0gbG9jYWx0aW1lLnNwbGl0KFwiXCIpO1xuICBzcGxpdGVkW3NwbGl0ZWQubGVuZ3RoIC0gMV0gPSBcIjBcIjtcbiAgc3BsaXRlZFtzcGxpdGVkLmxlbmd0aCAtIDJdID0gXCIwXCI7XG4gIGNvbnN0IHRpbWUgPSBzcGxpdGVkLnNsaWNlKC01KS5qb2luKFwiXCIpO1xuXG4gIGNvbnN0IGkgPSBob3VybHkuZmluZEluZGV4KChob3VyKSA9PiB7XG4gICAgcmV0dXJuIGhvdXIudGltZSA9PT0gdGltZTtcbiAgfSk7XG5cbiAgaWYgKGkgPT09IDApIHJldHVybiBob3VybHk7XG5cbiAgY29uc3Qgc2Vjb25kUGFydCA9IGhvdXJseS5zbGljZShpKTtcbiAgY29uc3QgZmlyc3RQYXJ0ID0gaG91cmx5LnNsaWNlKDAsIGkpO1xuICByZXR1cm4gWy4uLnNlY29uZFBhcnQsIC4uLmZpcnN0UGFydF07XG59XG5cbmZ1bmN0aW9uIGdldEljb24oYykge1xuICBsZXQgaSA9IG51bGw7XG4gIHN3aXRjaCAoYykge1xuICAgIGNhc2UgXCJTdW5ueVwiOlxuICAgICAgaSA9IHN1bjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJDbGVhclwiOlxuICAgICAgaSA9IG1vb247XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQ2xvdWR5XCI6XG4gICAgY2FzZSBcIlBhdGNoeSBzbGVldCBwb3NzaWJsZVwiOlxuICAgIGNhc2UgXCJPdmVyY2FzdFwiOlxuICAgIGNhc2UgXCJQYXJ0bHkgY2xvdWR5XCI6XG4gICAgICBpID0gY2xvdWR5O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIk1pc3RcIjpcbiAgICBjYXNlIFwiRm9nXCI6XG4gICAgY2FzZSBcIkZyZWV6aW5nIGZvZ1wiOlxuICAgIGNhc2UgXCJQYXRjaHkgbGlnaHQgZHJpenpsZVwiOlxuICAgICAgaSA9IG1pc3Q7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiVGh1bmRlcnkgb3V0YnJlYWtzIHBvc3NpYmxlXCI6XG4gICAgICBpID0gbGlnaHRuaW5nO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBhdGNoeSByYWluIHBvc3NpYmxlXCI6XG4gICAgY2FzZSBcIkxpZ2h0IGRyaXp6bGVcIjpcbiAgICBjYXNlIFwiRnJlZXppbmcgZHJpenpsZVwiOlxuICAgIGNhc2UgXCJIZWF2eSBmcmVlemluZyBkcml6emxlXCI6XG4gICAgY2FzZSBcIlBhdGNoeSBsaWdodCByYWluXCI6XG4gICAgY2FzZSBcIkxpZ2h0IHJhaW5cIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiOlxuICAgIGNhc2UgXCJNb2RlcmF0ZSByYWluXCI6XG4gICAgY2FzZSBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIjpcbiAgICBjYXNlIFwiSGVhdnkgcmFpblwiOlxuICAgIGNhc2UgXCJMaWdodCBmcmVlemluZyByYWluXCI6XG4gICAgY2FzZSBcIk1vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW5cIjpcbiAgICBjYXNlIFwiTGlnaHQgcmFpbiBzaG93ZXJcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXJcIjpcbiAgICBjYXNlIFwiVG9ycmVudGlhbCByYWluIHNob3dlclwiOlxuICAgIGNhc2UgXCJQYXRjaHkgbGlnaHQgcmFpbiB3aXRoIHRodW5kZXJcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXJcIjpcbiAgICAgIGkgPSByYWlueTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQYXRjaHkgc25vdyBwb3NzaWJsZVwiOlxuICAgIGNhc2UgXCJCbG93aW5nIHNub3dcIjpcbiAgICBjYXNlIFwiQmxpenphcmRcIjpcbiAgICBjYXNlIFwiTGlnaHQgc2xlZXRcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXRcIjpcbiAgICBjYXNlIFwiUGF0Y2h5IGxpZ2h0IHNub3dcIjpcbiAgICBjYXNlIFwiTGlnaHQgc25vd1wiOlxuICAgIGNhc2UgXCJQYXRjaHkgbW9kZXJhdGUgc25vd1wiOlxuICAgIGNhc2UgXCJNb2RlcmF0ZSBzbm93XCI6XG4gICAgY2FzZSBcIlBhdGNoeSBoZWF2eSBzbm93XCI6XG4gICAgY2FzZSBcIkhlYXZ5IHNub3dcIjpcbiAgICBjYXNlIFwiSWNlIHBlbGxldHNcIjpcbiAgICBjYXNlIFwiTGlnaHQgc2xlZXQgc2hvd2Vyc1wiOlxuICAgIGNhc2UgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzXCI6XG4gICAgY2FzZSBcIkxpZ2h0IHNub3cgc2hvd2Vyc1wiOlxuICAgIGNhc2UgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHNob3dlcnNcIjpcbiAgICBjYXNlIFwiTGlnaHQgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiOlxuICAgIGNhc2UgXCJNb2RlcmF0ZSBvciBoZWF2eSBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCI6XG4gICAgY2FzZSBcIlBhdGNoeSBsaWdodCBzbm93IHdpdGggdGh1bmRlclwiOlxuICAgIGNhc2UgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHdpdGggdGh1bmRlclwiOlxuICAgICAgaSA9IHNub3c7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaSA9IGNsb3VkO1xuICB9XG5cbiAgcmV0dXJuIGk7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmRhaWx5LXdlYXRoZXIsXG4uaG91cmx5LXdlYXRoZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGF5LWluZm8td3JhcHBlcixcbi5ob3VyLWluZm8td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ud2Vla2RheSxcbi5ob3VyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xufVxuXG4ubWF4LXRlbXAsXG4udGVtcCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4xZW07XG59XG5cbi5taW4tdGVtcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4ud2VhdGhlci1pY29uIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xuICAvKiAuZGFpbHktd2VhdGhlciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH0gKi9cblxuICAud2Vla2RheSxcbiAgLmhvdXIge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIH1cbiAgLm1heC10ZW1wLFxuICAudGVtcCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcbiAgfVxuXG4gIC5taW4tdGVtcCB7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG5cbiAgLndlYXRoZXItaWNvbiB7XG4gICAgd2lkdGg6IDMwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC53ZWVrZGF5LFxuICAuaG91ciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG4gIC5tYXgtdGVtcCxcbiAgLnRlbXAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XG4gIH1cblxuICAubWluLXRlbXAge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuXG4gIC53ZWF0aGVyLWljb24ge1xuICAgIHdpZHRoOiA0MHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5kYWlseS13ZWF0aGVyLFxuICAuaG91cmx5LXdlYXRoZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLmRheS1pbmZvLXdyYXBwZXIsXG4gIC5ob3VyLWluZm8td3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBnYXA6IDJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAudGVtcC13cmFwIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuXG4gIC53ZWVrZGF5LFxuICAuaG91ciB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAud2Vla2RheSxcbiAgLmhvdXIge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAubWF4LXRlbXAsXG4gIC50ZW1wIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcbiAgfVxuXG4gIC5taW4tdGVtcCB7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG5cbiAgLndlYXRoZXItaWNvbiB7XG4gICAgd2lkdGg6IDMwcHg7XG4gIH1cbn1cblxuLmhvdXIsXG4udGVtcCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG4ud2VhdGhlci1kaXNwbGF5IHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZGlzcGxheS13ZWF0aGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFFBQVE7RUFDUixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0U7O09BRUs7O0VBRUw7O0lBRUUsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7RUFDQTs7SUFFRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFOztJQUVFLGtCQUFrQjtFQUNwQjtFQUNBOztJQUVFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7O0lBRUUsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7RUFFQTs7SUFFRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFFBQVE7SUFDUiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFOztJQUVFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBOztJQUVFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBOztFQUVFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZGFpbHktd2VhdGhlcixcXG4uaG91cmx5LXdlYXRoZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmRheS1pbmZvLXdyYXBwZXIsXFxuLmhvdXItaW5mby13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi53ZWVrZGF5LFxcbi5ob3VyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xcbn1cXG5cXG4ubWF4LXRlbXAsXFxuLnRlbXAge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuMWVtO1xcbn1cXG5cXG4ubWluLXRlbXAge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4ud2VhdGhlci1pY29uIHtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcXG4gIC8qIC5kYWlseS13ZWF0aGVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9ICovXFxuXFxuICAud2Vla2RheSxcXG4gIC5ob3VyIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xcbiAgfVxcbiAgLm1heC10ZW1wLFxcbiAgLnRlbXAge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XFxuICB9XFxuXFxuICAubWluLXRlbXAge1xcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgfVxcblxcbiAgLndlYXRoZXItaWNvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gIC53ZWVrZGF5LFxcbiAgLmhvdXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxuICAubWF4LXRlbXAsXFxuICAudGVtcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcXG4gIH1cXG5cXG4gIC5taW4tdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxuXFxuICAud2VhdGhlci1pY29uIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuICAuZGFpbHktd2VhdGhlcixcXG4gIC5ob3VybHktd2VhdGhlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcblxcbiAgLmRheS1pbmZvLXdyYXBwZXIsXFxuICAuaG91ci1pbmZvLXdyYXBwZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC50ZW1wLXdyYXAge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIH1cXG5cXG4gIC53ZWVrZGF5LFxcbiAgLmhvdXIge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAud2Vla2RheSxcXG4gIC5ob3VyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAubWF4LXRlbXAsXFxuICAudGVtcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XFxuICB9XFxuXFxuICAubWluLXRlbXAge1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgfVxcblxcbiAgLndlYXRoZXItaWNvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgfVxcbn1cXG5cXG4uaG91cixcXG4udGVtcCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLndlYXRoZXItZGlzcGxheSB7XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZXh0cmEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAwLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4uaGVhZGVyIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbi5pbmZvIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5pbmZvIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgfVxuXG4gIC5pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2V4dHJhLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmV4dHJhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uaWNvbiB7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLmluZm8ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmluZm8ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxuICB9XFxuXFxuICAuaWNvbiB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmFwcCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcIm1haW5cIlxuICAgIFwiLi4uXCJcbiAgICBcIndlYXRoZXItZGlzcGxheVwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZzogNWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHJvdy1nYXA6IDRlbTtcbn1cblxuLm1haW4ge1xuICBncmlkLWFyZWE6IG1haW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxZW07XG59XG5cbi53ZWF0aGVyLWRpc3BsYXkge1xuICBncmlkLWFyZWE6IHdlYXRoZXItZGlzcGxheTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmFwcCB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIHBhZGRpbmctdG9wOiA0ZW07XG4gICAgcm93LWdhcDogMTBlbTtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgXCJtYWluXCJcbiAgICAgIFwid2VhdGhlci1kaXNwbGF5XCJcbiAgICAgIFwid2VhdGhlci1kaXNwbGF5XCI7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9sYXlvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0I7OztxQkFHbUI7RUFDbkIsb0VBQTBEO0VBQzFELHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2I7Ozt1QkFHbUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYXBwIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIm1haW5cXFwiXFxuICAgIFxcXCIuLi5cXFwiXFxuICAgIFxcXCJ3ZWF0aGVyLWRpc3BsYXlcXFwiO1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwYWRkaW5nOiA1ZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICByb3ctZ2FwOiA0ZW07XFxufVxcblxcbi5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLndlYXRoZXItZGlzcGxheSB7XFxuICBncmlkLWFyZWE6IHdlYXRoZXItZGlzcGxheTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5hcHAge1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIHBhZGRpbmctdG9wOiA0ZW07XFxuICAgIHJvdy1nYXA6IDEwZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgXFxcIm1haW5cXFwiXFxuICAgICAgXFxcIndlYXRoZXItZGlzcGxheVxcXCJcXG4gICAgICBcXFwid2VhdGhlci1kaXNwbGF5XFxcIjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY29uZGl0aW9uIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY2l0eSB7XG4gIG1hcmdpbi1ib3R0b206IDAuOGVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnRpbWUge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi50ZW1wcmV0dXJlIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnNlYXJjaC13cmFwcGVyIHtcbiAgcGFkZGluZzogMC4yZW0gMC41ZW07XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHdpZHRoOiAxNzBweDtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl06OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VhcmNoLWljb24ge1xuICBoZWlnaHQ6IDEuNWVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICBmbGV4OiAxO1xufVxuXG4uc2VhcmNoLWljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb25kaXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHdoaXRlLXNwYWNlOiB3cmFwO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuXG4gIC5jaXR5IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAuZGF0ZS10aW1lIHtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgfVxuXG4gIC50ZW1wcmV0dXJlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cblxuICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG5cbiAgLnNlYXJjaC1pY29uIHtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3NlYXJjaC1hbmQtY3VycmVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbmRpdGlvbiB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmNpdHkge1xcbiAgbWFyZ2luLWJvdHRvbTogMC44ZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRpbWUge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4udGVtcHJldHVyZSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5zZWFyY2gtd3JhcHBlciB7XFxuICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB3aWR0aDogMTcwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNlYXJjaC1pY29uIHtcXG4gIGhlaWdodDogMS41ZW07XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnNlYXJjaC1pY29uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5jb25kaXRpb24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgd2hpdGUtc3BhY2U6IHdyYXA7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIH1cXG5cXG4gIC5jaXR5IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgLmRhdGUtdGltZSB7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgfVxcblxcbiAgLnRlbXByZXR1cmUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgfVxcblxcbiAgLnNlYXJjaC1pY29uIHtcXG4gICAgaGVpZ2h0OiAxZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sYXlvdXQuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VhcmNoLWFuZC1jdXJyZW50LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2V4dHJhLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rpc3BsYXktd2VhdGhlci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyLXRvZ2dsZXJzLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWs6d2dodEA0MDA7NjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFPQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpazp3Z2h0QDQwMDs2MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuQGltcG9ydCBcXFwiLi9sYXlvdXQuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL3NlYXJjaC1hbmQtY3VycmVudC5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vZXh0cmEuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2Rpc3BsYXktd2VhdGhlclxcXCI7XFxuQGltcG9ydCBcXFwiLi93ZWF0aGVyLXRvZ2dsZXJzLmNzc1xcXCI7XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSdWJpa1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jaGFuZ2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyZW07XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRvZ2dsZXIge1xuICBwYWRkaW5nOiAwLjRlbSAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGJvcmRlciAzMDBtcyBlYXNlLWluO1xufVxuXG4udG9nZ2xlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNWVtO1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLCB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbjtcbn1cblxuLmxlZnQsXG4ucmlnaHQge1xuICB3aWR0aDogMTBweDtcbn1cblxuLmRvdCB7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG4ubGVmdDpob3Zlcixcbi5yaWdodDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRvdC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmNoYW5nZXIge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICB9XG59XG5cbi52aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmNob3NlbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3dlYXRoZXItdG9nZ2xlcnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsMERBQTBEO0FBQzVEOztBQUVBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jaGFuZ2VyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50b2dnbGVyIHtcXG4gIHBhZGRpbmc6IDAuNGVtIDAuOGVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IGJvcmRlciAzMDBtcyBlYXNlLWluO1xcbn1cXG5cXG4udG9nZ2xlcjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLCB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmxlZnQsXFxuLnJpZ2h0IHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4uZG90IHtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4ubGVmdDpob3ZlcixcXG4ucmlnaHQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZG90LmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5jaGFuZ2VyIHtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcXG4gIH1cXG59XFxuXFxuLnZpc2libGUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4uY2hvc2VuIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vLi4vY3NzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgbG9hZFVpIH0gZnJvbSBcIi4uL2RvbS9kb21cIjtcbmltcG9ydCBzZWFyY2hXZWF0aGVyQnlDaXR5IGZyb20gXCIuLi9hcGkvYXBpRnVuY3Rpb25zLmpzXCI7XG5cbihhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBzZWFyY2hXZWF0aGVyQnlDaXR5KFwidGJpbGlzaVwiKTtcbiAgbG9hZFVpKGRhdGEpO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbn0pKCk7XG4iXSwibmFtZXMiOlsiZ2V0SW5wdXRWYWx1ZSIsInNlYXJjaFdlYXRoZXJCeUNpdHkiLCJjaXR5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJ0b0xvd2VyQ2FzZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtb2RlIiwiZGF0YSIsImpzb24iLCJwYXJzZURhdGUiLCJwYXJzZURhaWx5IiwicGFyc2VIb3VybHkiLCJzZWFyY2hJIiwidGhlcm1vSSIsImh1bWlkaXR5SSIsInJhaW55SSIsIndpbmRJIiwibGVmdEkiLCJyaWdodEkiLCJjb25kaXRpb24iLCJkYXRlIiwidGltZSIsInRlbXByZXR1cmUiLCJzZWFyY2hJbWciLCJmZWVsc0xpa2UiLCJodW1pZGl0eSIsImNoYW5jZU9mUmFpbiIsIndpbmRTcGVlZCIsImlucHV0IiwiZGFpbHlXZWF0aGVyIiwiaG91cmx5V2VhdGhlciIsImRhaWx5IiwiaG91cmx5IiwibGVmdCIsInJpZ2h0Iiwic2VjdGlvbnMiLCJjZWwiLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50IiwiaG91cmx5Qm9vbCIsImxvYWRVaSIsImxvYWRTZWFyY2hBbmRDdXJyZW50IiwibG9hZEFycm93cyIsImxvYWRFeHRyYUluZm8iLCJwb3B1bGF0ZUhvdXJseSIsInBhcnNlSW50IiwiZGF0YXNldCIsImlkIiwicG9wdWxhdGVEYWlseSIsInNyYyIsIl9kYXRhJGN1cnJlbnQiLCJfZGF0YSRjdXJyZW50JGNvbmRpdGkiLCJfZGF0YSRsb2NhdGlvbiIsIl9kYXRhJGxvY2F0aW9uMiIsIl9kYXRhJGxvY2F0aW9uMyIsImN1cnJlbnQiLCJ0ZXh0IiwibG9jYXRpb24iLCJuYW1lIiwiZGF0ZU9iaiIsImxvY2FsdGltZSIsImRheSIsIm9yZCIsIm1vbnRoIiwieWVhciIsInRlbXBfYyIsImZpcnN0RWxlbWVudENoaWxkIiwiZmVlbHNsaWtlX2MiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiZGFpbHlfY2hhbmNlX29mX3JhaW4iLCJ3aW5kX2twaCIsInZhbHVlIiwidHJpbSIsInNlYXJjaEZvcldlYXRoZXIiLCJ3ZWVrIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsImRheUluZm8iLCJkaXZXcmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsIndlZWtEYXkiLCJtYXhUZW1wIiwibWluVGVtcCIsInRlbXBXcmFwIiwiaWNvbiIsImNsYXNzTmFtZSIsImljb25QYXRoIiwiYWx0IiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJzdGFnZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImhvdXJzIiwiaG91ciIsImNvbnNvbGUiLCJsb2ciLCJzdGFydCIsImVuZCIsImkiLCJ0ZW1wIiwibW92ZSIsImUiLCJjdXJyZW50RG90IiwiY3VycmVudElkIiwiYXJyb3ciLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInRvZ2dsZSIsIm5leHRJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXkiLCJyZW1vdmUiLCJhZGQiLCJjbG91ZCIsImNsb3VkeSIsImxpZ2h0bmluZyIsIm1pc3QiLCJtb29uIiwicmFpbnkiLCJzbm93Iiwic3VuIiwic3BsaXQiLCJtb250aEluZGV4IiwiRGF0ZSIsImdldE1vbnRoIiwiZ2V0RGF5IiwidG9TdHJpbmciLCJzbGljZSIsImdldE9yZGluYWwiLCJnZXREYXRlIiwid2Vla2RheSIsIm1vbnRocyIsIm4iLCJ3ZWVrSW5mbyIsInB1c2giLCJtYXh0ZW1wX2MiLCJtaW50ZW1wX2MiLCJnZXRJY29uIiwidHJhbnNmb3JtSG91cmx5Iiwic3BsaXRlZCIsImpvaW4iLCJmaW5kSW5kZXgiLCJzZWNvbmRQYXJ0IiwiZmlyc3RQYXJ0IiwiYyJdLCJzb3VyY2VSb290IjoiIn0=