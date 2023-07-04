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
  height: max-content;
  margin-bottom: 2em;
}
`, "",{"version":3,"sources":["webpack://./src/css/display-weather.css"],"names":[],"mappings":"AAAA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,QAAQ;EACR,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;;EAEE,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;;EAEE,gBAAgB;EAChB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE;;OAEK;;EAEL;;IAEE,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;EACvB;EACA;;IAEE,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;EACtB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,WAAW;EACb;AACF;;AAEA;EACE;;IAEE,kBAAkB;EACpB;EACA;;IAEE,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;EACtB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,WAAW;EACb;AACF;;AAEA;EACE;;IAEE,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,cAAc;EAChB;;EAEA;;IAEE,mBAAmB;IACnB,WAAW;IACX,QAAQ;IACR,8BAA8B;EAChC;;EAEA;IACE,iBAAiB;EACnB;;EAEA;;IAEE,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;EACvB;AACF;;AAEA;EACE;;IAEE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;;IAEE,gBAAgB;IAChB,eAAe;IACf,oBAAoB;EACtB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,WAAW;EACb;AACF;;AAEA;;EAEE,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;AACpB","sourcesContent":[".daily-weather,\n.hourly-weather {\n  display: flex;\n  justify-content: space-between;\n  gap: 2em;\n  white-space: nowrap;\n}\n\n.day-info-wrapper,\n.hour-info-wrapper {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n}\n\n.weekday,\n.hour {\n  font-size: 1.5rem;\n  margin-bottom: 1em;\n  letter-spacing: 1.4px;\n}\n\n.max-temp,\n.temp {\n  font-weight: 600;\n  font-size: 2rem;\n  margin-bottom: 0.1em;\n}\n\n.min-temp {\n  font-size: 1rem;\n  margin-bottom: 1em;\n}\n\n.weather-icon {\n  width: 50px;\n}\n\n@media screen and (max-width: 1050px) {\n  /* .daily-weather {\n      flex-direction: column;\n    } */\n\n  .weekday,\n  .hour {\n    font-size: 0.8rem;\n    margin-bottom: 1em;\n    letter-spacing: 1.4px;\n  }\n  .max-temp,\n  .temp {\n    font-weight: 600;\n    font-size: 1.2rem;\n    margin-bottom: 0.1em;\n  }\n\n  .min-temp {\n    font-size: 0.6rem;\n    margin-bottom: 1em;\n  }\n\n  .weather-icon {\n    width: 30px;\n  }\n}\n\n@media screen and (max-width: 1200px) {\n  .weekday,\n  .hour {\n    margin-bottom: 1em;\n  }\n  .max-temp,\n  .temp {\n    font-weight: 600;\n    font-size: 1.5rem;\n    margin-bottom: 0.1em;\n  }\n\n  .min-temp {\n    font-size: 0.8rem;\n    margin-bottom: 1em;\n  }\n\n  .weather-icon {\n    width: 40px;\n  }\n}\n\n@media screen and (max-width: 960px) {\n  .daily-weather,\n  .hourly-weather {\n    flex-direction: column;\n    align-items: center;\n    max-width: 400px;\n    margin: 0 auto;\n  }\n\n  .day-info-wrapper,\n  .hour-info-wrapper {\n    flex-direction: row;\n    width: 100%;\n    gap: 2em;\n    justify-content: space-between;\n  }\n\n  .temp-wrap {\n    margin-left: auto;\n  }\n\n  .weekday,\n  .hour {\n    font-size: 1.4rem;\n    margin-bottom: 1em;\n    letter-spacing: 1.4px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .weekday,\n  .hour {\n    margin-bottom: 1em;\n    font-size: 1rem;\n  }\n\n  .max-temp,\n  .temp {\n    font-weight: 600;\n    font-size: 1rem;\n    margin-bottom: 0.1em;\n  }\n\n  .min-temp {\n    font-size: 0.7rem;\n    margin-bottom: 1em;\n  }\n\n  .weather-icon {\n    width: 30px;\n  }\n}\n\n.hour,\n.temp {\n  margin-bottom: 0.5em;\n}\n\n.weather-display {\n  min-height: 200px;\n  height: max-content;\n  margin-bottom: 2em;\n}\n"],"sourceRoot":""}]);
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg.png */ "./src/assets/bg.png"), __webpack_require__.b);
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
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.253),
      rgba(0, 0, 0, 0.219)
    ),
    url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center;
  background-size: cover;
  padding: 5em;
  color: white;
  row-gap: 4em;
  padding-bottom: 4em;
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
`, "",{"version":3,"sources":["webpack://./src/css/layout.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,0BAA0B;EAC1B,+BAA+B;EAC/B;;;qBAGmB;EACnB;;;;;4DAKwC;EACxC,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,QAAQ;AACV;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE;IACE,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb;;;uBAGmB;EACrB;AACF","sourcesContent":[".app {\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  overflow-x: hidden;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 2fr 1fr;\n  grid-template-areas:\n    \"main\"\n    \"...\"\n    \"weather-display\";\n  background: linear-gradient(\n      to right,\n      rgba(0, 0, 0, 0.253),\n      rgba(0, 0, 0, 0.219)\n    ),\n    url(../assets/bg.png) no-repeat center;\n  background-size: cover;\n  padding: 5em;\n  color: white;\n  row-gap: 4em;\n  padding-bottom: 4em;\n}\n\n.main {\n  grid-area: main;\n  display: flex;\n  justify-content: space-between;\n  gap: 1em;\n}\n\n.weather-display {\n  grid-area: weather-display;\n}\n\n@media screen and (max-width: 600px) {\n  .app {\n    padding: 1em;\n    padding-top: 4em;\n    row-gap: 10em;\n    grid-template-areas:\n      \"main\"\n      \"weather-display\"\n      \"weather-display\";\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/bg.png":
/*!***************************!*\
  !*** ./src/assets/bg.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b98f76ab31a3053b24a.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrRkFBK0YsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEs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Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ087QUFDcUI7QUFFekQsQ0FBQyxrQkFBa0I7RUFDakIsTUFBTTlGLElBQUksR0FBRyxNQUFNVCxnRUFBbUIsQ0FBQyxTQUFTLENBQUM7RUFDakQwQyxnREFBTSxDQUFDakMsSUFBSSxDQUFDO0VBQ1owRixPQUFPLENBQUNDLEdBQUcsQ0FBQzNGLElBQUksQ0FBQztBQUNuQixDQUFDLEVBQUUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvanMvYXBpL2FwaUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9kb20vZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Nzcy9kaXNwbGF5LXdlYXRoZXIuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Nzcy9leHRyYS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL2xheW91dC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL3NlYXJjaC1hbmQtY3VycmVudC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jc3Mvd2VhdGhlci10b2dnbGVycy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvanMvbWFpbi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRJbnB1dFZhbHVlIH0gZnJvbSBcIi4uL2RvbS9kb20uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoV2VhdGhlckJ5Q2l0eShjaXR5KSB7XG4gIGNpdHkgPVxuICAgIGNpdHkgPT09IFwiXCJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5XCIpLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKClcbiAgICAgIDogY2l0eTtcbiAgaWYgKGNpdHkgPT09IFwicnVzdGF2aVwiKSBjaXR5ID0gXCIxNzYuMjIxLjI1Mi4yMVwiO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1kNDA5Yzg3N2MxZGM0YThmODRkMjAxNjI5MjMzMDA2JnE9JHtjaXR5fSZkYXlzPTdgLFxuICAgIHtcbiAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgIH1cbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgeyBwYXJzZURhdGUsIHBhcnNlRGFpbHksIHBhcnNlSG91cmx5IH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzLmpzXCI7XG5pbXBvcnQgc2VhcmNoSSBmcm9tIFwiLi4vLi4vYXNzZXRzL3NlYXJjaC5zdmdcIjtcbmltcG9ydCB0aGVybW9JIGZyb20gXCIuLi8uLi9hc3NldHMvdGhlcm1vLnN2Z1wiO1xuaW1wb3J0IGh1bWlkaXR5SSBmcm9tIFwiLi4vLi4vYXNzZXRzL2h1bWlkaXR5LnN2Z1wiO1xuaW1wb3J0IHJhaW55SSBmcm9tIFwiLi4vLi4vYXNzZXRzL3JhaW55LnN2Z1wiO1xuaW1wb3J0IHdpbmRJIGZyb20gXCIuLi8uLi9hc3NldHMvd2luZC5zdmdcIjtcbmltcG9ydCBzZWFyY2hXZWF0aGVyQnlDaXR5IGZyb20gXCIuLi9hcGkvYXBpRnVuY3Rpb25zLmpzXCI7XG5pbXBvcnQgbGVmdEkgZnJvbSBcIi4uLy4uL2Fzc2V0cy9hcnJvd19sZWZ0LnN2Z1wiO1xuaW1wb3J0IHJpZ2h0SSBmcm9tIFwiLi4vLi4vYXNzZXRzL2Fycm93X3JpZ2h0LnN2Z1wiO1xuXG4vL0RPTSBFTEVNRU5UU1xuY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25kaXRpb25cIik7XG5jb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5XCIpO1xuY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZVwiKTtcbmNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVcIik7XG5jb25zdCB0ZW1wcmV0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wcmV0dXJlXCIpO1xuY29uc3Qgc2VhcmNoSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtaWNvblwiKTtcbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHMtbGlrZVwiKTtcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVwiKTtcbmNvbnN0IGNoYW5jZU9mUmFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhbmNlLW9mLXJhaW5cIik7XG5jb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmQtc3BlZWRcIik7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbmNvbnN0IGRhaWx5V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFpbHktd2VhdGhlclwiKTtcbmNvbnN0IGhvdXJseVdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvdXJseS13ZWF0aGVyXCIpO1xuY29uc3QgZGFpbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5XCIpO1xuY29uc3QgaG91cmx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob3VybHlcIik7XG5jb25zdCBsZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0XCIpO1xuY29uc3QgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0XCIpO1xuY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb25zXCIpO1xuXG5jb25zdCBjZWwgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCg4NDUxKTtcbmxldCBob3VybHlCb29sID0gZmFsc2U7XG5cbmV4cG9ydCB7IGxvYWRVaSwgZ2V0SW5wdXRWYWx1ZSB9O1xuXG5mdW5jdGlvbiBsb2FkVWkoZGF0YSkge1xuICBsb2FkU2VhcmNoQW5kQ3VycmVudChkYXRhKTtcbiAgbG9hZEFycm93cygpO1xuXG4gIGxvYWRFeHRyYUluZm8oZGF0YSk7XG5cbiAgaWYgKGhvdXJseUJvb2wpIHtcbiAgICBwb3B1bGF0ZUhvdXJseShcbiAgICAgIGRhdGEsXG4gICAgICBwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKS5kYXRhc2V0LmlkKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcG9wdWxhdGVEYWlseShkYXRhKTtcbiAgfVxuICBzZWFyY2hJbWcuc3JjID0gc2VhcmNoSTtcbn1cblxuZnVuY3Rpb24gbG9hZEFycm93cygpIHtcbiAgbGVmdC5zcmMgPSBsZWZ0STtcbiAgcmlnaHQuc3JjID0gcmlnaHRJO1xufVxuXG5mdW5jdGlvbiBsb2FkU2VhcmNoQW5kQ3VycmVudChkYXRhKSB7XG4gIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGRhdGE/LmN1cnJlbnQ/LmNvbmRpdGlvbj8udGV4dDtcbiAgY2l0eS50ZXh0Q29udGVudCA9XG4gICAgZGF0YT8ubG9jYXRpb24/Lm5hbWUgPT09IFwiR2FyZGFiYW5pXCIgPyBcIlJ1c3RhdmlcIiA6IGRhdGE/LmxvY2F0aW9uPy5uYW1lO1xuICBjb25zdCBkYXRlT2JqID0gcGFyc2VEYXRlKGRhdGE/LmxvY2F0aW9uPy5sb2NhbHRpbWUpO1xuICBkYXRlLnRleHRDb250ZW50ID0gYCR7ZGF0ZU9iai5kYXl9LCAke2RhdGVPYmoub3JkfSAke2RhdGVPYmoubW9udGh9JyR7ZGF0ZU9iai55ZWFyfWA7XG4gIHRpbWUudGV4dENvbnRlbnQgPSBkYXRlT2JqLnRpbWU7XG4gIHRlbXByZXR1cmUudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQudGVtcF9jICsgY2VsO1xufVxuXG5mdW5jdGlvbiBsb2FkRXh0cmFJbmZvKGRhdGEpIHtcbiAgZmVlbHNMaWtlLmZpcnN0RWxlbWVudENoaWxkLnNyYyA9IHRoZXJtb0k7XG4gIGZlZWxzTGlrZS5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIikudGV4dENvbnRlbnQgPVxuICAgIGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyArIFwiIFwiICsgY2VsO1xuICBodW1pZGl0eS5maXJzdEVsZW1lbnRDaGlsZC5zcmMgPSBodW1pZGl0eUk7XG4gIGh1bWlkaXR5LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKS50ZXh0Q29udGVudCA9XG4gICAgZGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgXCIgXCIgKyBcIiVcIjtcbiAgY2hhbmNlT2ZSYWluLmZpcnN0RWxlbWVudENoaWxkLnNyYyA9IHJhaW55STtcbiAgY2hhbmNlT2ZSYWluLnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKS50ZXh0Q29udGVudCA9XG4gICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4gKyBcIiBcIiArIFwiJVwiO1xuICB3aW5kU3BlZWQuZmlyc3RFbGVtZW50Q2hpbGQuc3JjID0gd2luZEk7XG4gIHdpbmRTcGVlZC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIikudGV4dENvbnRlbnQgPVxuICAgIGRhdGEuY3VycmVudC53aW5kX2twaCArIFwiIFwiICsgXCJrbS9oXCI7XG59XG5cbmZ1bmN0aW9uIGdldElucHV0VmFsdWUoKSB7XG4gIHJldHVybiBpbnB1dC52YWx1ZSA/IGlucHV0LnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpIDogXCJcIjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2VhcmNoRm9yV2VhdGhlcigpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHNlYXJjaFdlYXRoZXJCeUNpdHkoZ2V0SW5wdXRWYWx1ZSgpKTtcbiAgbG9hZFVpKGRhdGEpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZURhaWx5KGRhdGEpIHtcbiAgY29uc3Qgd2VlayA9IHBhcnNlRGFpbHkoZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheSk7XG4gIGRhaWx5V2VhdGhlci5pbm5lckhUTUwgPSBcIlwiO1xuICBob3VybHlXZWF0aGVyLmlubmVySFRNTCA9IFwiXCI7XG4gIHdlZWsuZm9yRWFjaCgoZGF5SW5mbykgPT4ge1xuICAgIGNvbnN0IGRpdldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHdlZWtEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRlbXBXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgIGRpdldyYXBwZXIuY2xhc3NOYW1lID0gXCJkYXktaW5mby13cmFwcGVyXCI7XG4gICAgd2Vla0RheS5jbGFzc05hbWUgPSBcIndlZWtkYXlcIjtcbiAgICBtYXhUZW1wLmNsYXNzTmFtZSA9IFwibWF4LXRlbXBcIjtcbiAgICBtaW5UZW1wLmNsYXNzTmFtZSA9IFwibWluLXRlbXBcIjtcbiAgICB0ZW1wV3JhcC5jbGFzc05hbWUgPSBcInRlbXAtd3JhcFwiO1xuICAgIGljb24uY2xhc3NOYW1lID0gXCJ3ZWF0aGVyLWljb25cIjtcblxuICAgIHdlZWtEYXkudGV4dENvbnRlbnQgPSBkYXlJbmZvLndlZWtEYXk7XG4gICAgbWF4VGVtcC50ZXh0Q29udGVudCA9IGAke2RheUluZm8ubWF4VGVtcH0gJHtjZWx9YDtcbiAgICBtaW5UZW1wLnRleHRDb250ZW50ID0gYCR7ZGF5SW5mby5taW5UZW1wfSAke2NlbH1gO1xuICAgIGljb24uc3JjID0gZGF5SW5mby5pY29uUGF0aDtcbiAgICBpY29uLmFsdCA9IGRheUluZm8uY29uZGl0aW9uO1xuXG4gICAgdGVtcFdyYXAuYXBwZW5kKG1heFRlbXAsIG1pblRlbXApO1xuICAgIGRpdldyYXBwZXIuYXBwZW5kKHdlZWtEYXksIHRlbXBXcmFwLCBpY29uKTtcbiAgICBkYWlseVdlYXRoZXIuYXBwZW5kQ2hpbGQoZGl2V3JhcHBlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUhvdXJseShkYXRhLCBzdGFnZSA9IDEpIHtcbiAgY29uc3QgaG91cnMgPSBwYXJzZUhvdXJseShcbiAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXIsXG4gICAgZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWVcbiAgKTtcbiAgY29uc29sZS5sb2coaG91cnMpO1xuICBkYWlseVdlYXRoZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgaG91cmx5V2VhdGhlci5pbm5lckhUTUwgPSBcIlwiO1xuICBsZXQgc3RhcnQgPSBudWxsO1xuICBsZXQgZW5kID0gbnVsbDtcbiAgc3RhcnQgPSBzdGFnZSA9PT0gMSA/IDAgOiBzdGFnZSA9PT0gMiA/IDggOiAxNTtcbiAgZW5kID0gc3RhZ2UgPT09IDEgPyA3IDogc3RhZ2UgPT09IDIgPyAxNSA6IGhvdXJzLmxlbmd0aCAtIDI7XG5cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgY29uc3QgZGl2V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICBkaXZXcmFwcGVyLmNsYXNzTmFtZSA9IFwiaG91ci1pbmZvLXdyYXBwZXJcIjtcbiAgICBob3VyLmNsYXNzTmFtZSA9IFwiaG91clwiO1xuICAgIHRlbXAuY2xhc3NOYW1lID0gXCJ0ZW1wXCI7XG4gICAgaWNvbi5jbGFzc05hbWUgPSBcIndlYXRoZXItaWNvblwiO1xuXG4gICAgaG91ci50ZXh0Q29udGVudCA9IGhvdXJzW2ldLnRpbWU7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke2hvdXJzW2ldLnRlbXB9ICR7Y2VsfWA7XG4gICAgaWNvbi5zcmMgPSBob3Vyc1tpXS5pY29uUGF0aDtcbiAgICBpY29uLmFsdCA9IGhvdXJzW2ldLmNvbmRpdGlvbjtcblxuICAgIGRpdldyYXBwZXIuYXBwZW5kKGhvdXIsIHRlbXAsIGljb24pO1xuICAgIGhvdXJseVdlYXRoZXIuYXBwZW5kQ2hpbGQoZGl2V3JhcHBlcik7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbW92ZShlKSB7XG4gIGNvbnN0IGN1cnJlbnREb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcbiAgY29uc3QgY3VycmVudElkID0gcGFyc2VJbnQoY3VycmVudERvdC5kYXRhc2V0LmlkKTtcbiAgY29uc3QgYXJyb3cgPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJsZWZ0XCIpID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCI7XG5cbiAgaWYgKGN1cnJlbnRJZCA9PT0gMSAmJiBhcnJvdyA9PT0gXCJsZWZ0XCIpIHJldHVybjtcbiAgaWYgKGN1cnJlbnRJZCA9PT0gMyAmJiBhcnJvdyA9PT0gXCJyaWdodFwiKSByZXR1cm47XG5cbiAgY3VycmVudERvdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXG4gIGNvbnN0IG5leHRJZCA9IGFycm93ID09PSBcImxlZnRcIiA/IGN1cnJlbnRJZCAtIDEgOiBjdXJyZW50SWQgKyAxO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7bmV4dElkfVwiXWApLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHNlYXJjaFdlYXRoZXJCeUNpdHkoXCJcIik7XG4gIHBvcHVsYXRlSG91cmx5KGRhdGEsIG5leHRJZCk7XG59XG5cbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gIGlmIChlLmtleSAhPSBcIkVudGVyXCIpIHJldHVybjtcblxuICBzZWFyY2hGb3JXZWF0aGVyKCk7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbn0pO1xuXG5zZWFyY2hJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIHNlYXJjaEZvcldlYXRoZXIoKTtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufSk7XG5cbmRhaWx5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBob3VybHlCb29sID0gZmFsc2U7XG4gIHNlY3Rpb25zLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICBkYWlseS5jbGFzc05hbWUgPSBcImRhaWx5IHRvZ2dsZXIgY2hvc2VuXCI7XG4gIGhvdXJseS5jbGFzc05hbWUgPSBcImhvdXJseSB0b2dnbGVyXCI7XG4gIHNlYXJjaEZvcldlYXRoZXIoKTtcbn0pO1xuXG5ob3VybHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIHNlY3Rpb25zLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICBkYWlseS5jbGFzc05hbWUgPSBcImRhaWx5IHRvZ2dsZXJcIjtcbiAgaG91cmx5LmNsYXNzTmFtZSA9IFwiaG91cmx5IHRvZ2dsZXIgY2hvc2VuXCI7XG4gIGhvdXJseUJvb2wgPSB0cnVlO1xuICBzZWFyY2hGb3JXZWF0aGVyKCk7XG59KTtcblxubGVmdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbW92ZSk7XG5yaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbW92ZSk7XG4iLCJpbXBvcnQgY2xvdWQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9jbG91ZC5zdmdcIjtcbmltcG9ydCBjbG91ZHkgZnJvbSBcIi4uLy4uL2Fzc2V0cy9jbG91ZHkuc3ZnXCI7XG5pbXBvcnQgbGlnaHRuaW5nIGZyb20gXCIuLi8uLi9hc3NldHMvbGlnaHRuaW5nLnN2Z1wiO1xuaW1wb3J0IG1pc3QgZnJvbSBcIi4uLy4uL2Fzc2V0cy9taXN0LnN2Z1wiO1xuaW1wb3J0IG1vb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9tb29uLnN2Z1wiO1xuaW1wb3J0IHJhaW55IGZyb20gXCIuLi8uLi9hc3NldHMvcmFpbnkuc3ZnXCI7XG5pbXBvcnQgc25vdyBmcm9tIFwiLi4vLi4vYXNzZXRzL3Nub3cuc3ZnXCI7XG5pbXBvcnQgc3VuIGZyb20gXCIuLi8uLi9hc3NldHMvc3VuLnN2Z1wiO1xuXG5leHBvcnQgeyBwYXJzZURhdGUsIHBhcnNlRGFpbHksIHBhcnNlSG91cmx5IH07XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlKSB7XG4gIGNvbnN0IHllYXIgPSBwYXJzZUludChkYXRlLnNwbGl0KFwiLVwiKVswXSk7XG4gIGNvbnN0IG1vbnRoSW5kZXggPSBwYXJzZUludChkYXRlLnNwbGl0KFwiLVwiKVsxXSkgLSAxO1xuICBjb25zdCBkYXkgPSBwYXJzZUludChkYXRlLnNwbGl0KFwiLVwiKVsyXS5zcGxpdChcIiBcIilbMF0pO1xuICBjb25zdCB0aW1lID0gZGF0ZS5zcGxpdChcIiBcIilbMV07XG4gIGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aEluZGV4LCBkYXkpO1xuICByZXR1cm4ge1xuICAgIG1vbnRoOiBnZXRNb250aChkYXRlLmdldE1vbnRoKCkpLFxuICAgIGRheTogZ2V0RGF5KGRhdGUuZ2V0RGF5KCkpLFxuICAgIHllYXI6IHllYXIudG9TdHJpbmcoKS5zbGljZSgyKSxcbiAgICBvcmQ6IGdldE9yZGluYWwoZGF0ZS5nZXREYXRlKCkpLFxuICAgIHRpbWUsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldERheShkYXkpIHtcbiAgY29uc3Qgd2Vla2RheSA9IFtcbiAgICBcIlN1bmRheVwiLFxuICAgIFwiTW9uZGF5XCIsXG4gICAgXCJUdWVzZGF5XCIsXG4gICAgXCJXZWRuZXNkYXlcIixcbiAgICBcIlRodXJzZGF5XCIsXG4gICAgXCJGcmlkYXlcIixcbiAgICBcIlNhdHVyZGF5XCIsXG4gIF07XG4gIHJldHVybiB3ZWVrZGF5W2RheV07XG59XG5cbmZ1bmN0aW9uIGdldE1vbnRoKG1vbnRoKSB7XG4gIGNvbnN0IG1vbnRocyA9IFtcbiAgICBcIkphblwiLFxuICAgIFwiRmViXCIsXG4gICAgXCJNYXJcIixcbiAgICBcIkFwclwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5cIixcbiAgICBcIkp1bFwiLFxuICAgIFwiQXVnXCIsXG4gICAgXCJTZXB0XCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF07XG5cbiAgcmV0dXJuIG1vbnRoc1ttb250aF07XG59XG5cbmZ1bmN0aW9uIGdldE9yZGluYWwobikge1xuICBsZXQgb3JkID0gXCJ0aFwiO1xuXG4gIGlmIChuICUgMTAgPT09IDEpIHtcbiAgICBvcmQgPSBcInN0XCI7XG4gIH1cblxuICBpZiAobiAlIDEwID09PSAyKSB7XG4gICAgb3JkID0gXCJuZFwiO1xuICB9XG5cbiAgaWYgKG4gJSAxMCA9PT0gMykge1xuICAgIG9yZCA9IFwicmRcIjtcbiAgfVxuICByZXR1cm4gbiArIG9yZDtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYWlseShkYXRhKSB7XG4gIGNvbnN0IHdlZWtJbmZvID0gW107XG4gIGlmICghZGF0YSkgcmV0dXJuO1xuICBkYXRhLmZvckVhY2goKGRheSkgPT4ge1xuICAgIHdlZWtJbmZvLnB1c2goe1xuICAgICAgd2Vla0RheTogcGFyc2VEYXRlKGRheS5kYXRlKS5kYXksXG4gICAgICBtYXhUZW1wOiBkYXkuZGF5Lm1heHRlbXBfYyxcbiAgICAgIG1pblRlbXA6IGRheS5kYXkubWludGVtcF9jLFxuICAgICAgaWNvblBhdGg6IGdldEljb24oZGF5LmRheS5jb25kaXRpb24udGV4dCksXG4gICAgICBjb25kaXRpb246IGRheS5kYXkuY29uZGl0aW9uLnRleHQsXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gd2Vla0luZm87XG59XG5cbmZ1bmN0aW9uIHBhcnNlSG91cmx5KGhvdXJzLCBsb2NhbHRpbWUpIHtcbiAgY29uc3QgaG91cmx5ID0gW107XG4gIGhvdXJzLmZvckVhY2goKGhvdXIpID0+IHtcbiAgICBob3VybHkucHVzaCh7XG4gICAgICB0ZW1wOiBob3VyLnRlbXBfYyxcbiAgICAgIHRpbWU6IHBhcnNlRGF0ZShob3VyLnRpbWUpLnRpbWUsXG4gICAgICBpY29uUGF0aDogZ2V0SWNvbihob3VyLmNvbmRpdGlvbi50ZXh0KSxcbiAgICAgIGNvbmRpdGlvbjogaG91ci5jb25kaXRpb24udGV4dCxcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiB0cmFuc2Zvcm1Ib3VybHkoaG91cmx5LCBsb2NhbHRpbWUpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Ib3VybHkoaG91cmx5LCBsb2NhbHRpbWUpIHtcbiAgY29uc3Qgc3BsaXRlZCA9IGxvY2FsdGltZS5zcGxpdChcIlwiKTtcbiAgc3BsaXRlZFtzcGxpdGVkLmxlbmd0aCAtIDFdID0gXCIwXCI7XG4gIHNwbGl0ZWRbc3BsaXRlZC5sZW5ndGggLSAyXSA9IFwiMFwiO1xuICBjb25zdCB0aW1lID0gc3BsaXRlZC5zbGljZSgtNSkuam9pbihcIlwiKTtcblxuICBjb25zdCBpID0gaG91cmx5LmZpbmRJbmRleCgoaG91cikgPT4ge1xuICAgIHJldHVybiBob3VyLnRpbWUgPT09IHRpbWU7XG4gIH0pO1xuXG4gIGlmIChpID09PSAwKSByZXR1cm4gaG91cmx5O1xuXG4gIGNvbnN0IHNlY29uZFBhcnQgPSBob3VybHkuc2xpY2UoaSk7XG4gIGNvbnN0IGZpcnN0UGFydCA9IGhvdXJseS5zbGljZSgwLCBpKTtcbiAgcmV0dXJuIFsuLi5zZWNvbmRQYXJ0LCAuLi5maXJzdFBhcnRdO1xufVxuXG5mdW5jdGlvbiBnZXRJY29uKGMpIHtcbiAgbGV0IGkgPSBudWxsO1xuICBzd2l0Y2ggKGMpIHtcbiAgICBjYXNlIFwiU3VubnlcIjpcbiAgICAgIGkgPSBzdW47XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQ2xlYXJcIjpcbiAgICAgIGkgPSBtb29uO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkNsb3VkeVwiOlxuICAgIGNhc2UgXCJQYXRjaHkgc2xlZXQgcG9zc2libGVcIjpcbiAgICBjYXNlIFwiT3ZlcmNhc3RcIjpcbiAgICBjYXNlIFwiUGFydGx5IGNsb3VkeVwiOlxuICAgICAgaSA9IGNsb3VkeTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJNaXN0XCI6XG4gICAgY2FzZSBcIkZvZ1wiOlxuICAgIGNhc2UgXCJGcmVlemluZyBmb2dcIjpcbiAgICBjYXNlIFwiUGF0Y2h5IGxpZ2h0IGRyaXp6bGVcIjpcbiAgICAgIGkgPSBtaXN0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlRodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZVwiOlxuICAgICAgaSA9IGxpZ2h0bmluZztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiOlxuICAgIGNhc2UgXCJMaWdodCBkcml6emxlXCI6XG4gICAgY2FzZSBcIkZyZWV6aW5nIGRyaXp6bGVcIjpcbiAgICBjYXNlIFwiSGVhdnkgZnJlZXppbmcgZHJpenpsZVwiOlxuICAgIGNhc2UgXCJQYXRjaHkgbGlnaHQgcmFpblwiOlxuICAgIGNhc2UgXCJMaWdodCByYWluXCI6XG4gICAgY2FzZSBcIk1vZGVyYXRlIHJhaW4gYXQgdGltZXNcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgcmFpblwiOlxuICAgIGNhc2UgXCJIZWF2eSByYWluIGF0IHRpbWVzXCI6XG4gICAgY2FzZSBcIkhlYXZ5IHJhaW5cIjpcbiAgICBjYXNlIFwiTGlnaHQgZnJlZXppbmcgcmFpblwiOlxuICAgIGNhc2UgXCJNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluXCI6XG4gICAgY2FzZSBcIkxpZ2h0IHJhaW4gc2hvd2VyXCI6XG4gICAgY2FzZSBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyXCI6XG4gICAgY2FzZSBcIlRvcnJlbnRpYWwgcmFpbiBzaG93ZXJcIjpcbiAgICBjYXNlIFwiUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyXCI6XG4gICAgY2FzZSBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyXCI6XG4gICAgICBpID0gcmFpbnk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUGF0Y2h5IHNub3cgcG9zc2libGVcIjpcbiAgICBjYXNlIFwiQmxvd2luZyBzbm93XCI6XG4gICAgY2FzZSBcIkJsaXp6YXJkXCI6XG4gICAgY2FzZSBcIkxpZ2h0IHNsZWV0XCI6XG4gICAgY2FzZSBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0XCI6XG4gICAgY2FzZSBcIlBhdGNoeSBsaWdodCBzbm93XCI6XG4gICAgY2FzZSBcIkxpZ2h0IHNub3dcIjpcbiAgICBjYXNlIFwiUGF0Y2h5IG1vZGVyYXRlIHNub3dcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgc25vd1wiOlxuICAgIGNhc2UgXCJQYXRjaHkgaGVhdnkgc25vd1wiOlxuICAgIGNhc2UgXCJIZWF2eSBzbm93XCI6XG4gICAgY2FzZSBcIkljZSBwZWxsZXRzXCI6XG4gICAgY2FzZSBcIkxpZ2h0IHNsZWV0IHNob3dlcnNcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2Vyc1wiOlxuICAgIGNhc2UgXCJMaWdodCBzbm93IHNob3dlcnNcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyBzaG93ZXJzXCI6XG4gICAgY2FzZSBcIkxpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiOlxuICAgIGNhc2UgXCJQYXRjaHkgbGlnaHQgc25vdyB3aXRoIHRodW5kZXJcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcIjpcbiAgICAgIGkgPSBzbm93O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGkgPSBjbG91ZDtcbiAgfVxuXG4gIHJldHVybiBpO1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5kYWlseS13ZWF0aGVyLFxuLmhvdXJseS13ZWF0aGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmRheS1pbmZvLXdyYXBwZXIsXG4uaG91ci1pbmZvLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLndlZWtkYXksXG4uaG91ciB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbn1cblxuLm1heC10ZW1wLFxuLnRlbXAge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMWVtO1xufVxuXG4ubWluLXRlbXAge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLndlYXRoZXItaWNvbiB7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcbiAgLyogLmRhaWx5LXdlYXRoZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9ICovXG5cbiAgLndlZWtkYXksXG4gIC5ob3VyIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICB9XG4gIC5tYXgtdGVtcCxcbiAgLnRlbXAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XG4gIH1cblxuICAubWluLXRlbXAge1xuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuXG4gIC53ZWF0aGVyLWljb24ge1xuICAgIHdpZHRoOiAzMHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAud2Vla2RheSxcbiAgLmhvdXIge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuICAubWF4LXRlbXAsXG4gIC50ZW1wIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMWVtO1xuICB9XG5cbiAgLm1pbi10ZW1wIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cblxuICAud2VhdGhlci1pY29uIHtcbiAgICB3aWR0aDogNDBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuZGFpbHktd2VhdGhlcixcbiAgLmhvdXJseS13ZWF0aGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC5kYXktaW5mby13cmFwcGVyLFxuICAuaG91ci1pbmZvLXdyYXBwZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ2FwOiAyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnRlbXAtd3JhcCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cblxuICAud2Vla2RheSxcbiAgLmhvdXIge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLndlZWtkYXksXG4gIC5ob3VyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgLm1heC10ZW1wLFxuICAudGVtcCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XG4gIH1cblxuICAubWluLXRlbXAge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuXG4gIC53ZWF0aGVyLWljb24ge1xuICAgIHdpZHRoOiAzMHB4O1xuICB9XG59XG5cbi5ob3VyLFxuLnRlbXAge1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuLndlYXRoZXItZGlzcGxheSB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZGlzcGxheS13ZWF0aGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFFBQVE7RUFDUixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0U7O09BRUs7O0VBRUw7O0lBRUUsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7RUFDQTs7SUFFRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFOztJQUVFLGtCQUFrQjtFQUNwQjtFQUNBOztJQUVFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7O0lBRUUsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7RUFFQTs7SUFFRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFFBQVE7SUFDUiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFOztJQUVFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBOztJQUVFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBOztFQUVFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5kYWlseS13ZWF0aGVyLFxcbi5ob3VybHktd2VhdGhlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uZGF5LWluZm8td3JhcHBlcixcXG4uaG91ci1pbmZvLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLndlZWtkYXksXFxuLmhvdXIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XFxufVxcblxcbi5tYXgtdGVtcCxcXG4udGVtcCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4xZW07XFxufVxcblxcbi5taW4tdGVtcCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi53ZWF0aGVyLWljb24ge1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xcbiAgLyogLmRhaWx5LXdlYXRoZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH0gKi9cXG5cXG4gIC53ZWVrZGF5LFxcbiAgLmhvdXIge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XFxuICB9XFxuICAubWF4LXRlbXAsXFxuICAudGVtcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcXG4gIH1cXG5cXG4gIC5taW4tdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxuXFxuICAud2VhdGhlci1pY29uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgLndlZWtkYXksXFxuICAuaG91ciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIH1cXG4gIC5tYXgtdGVtcCxcXG4gIC50ZW1wIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMWVtO1xcbiAgfVxcblxcbiAgLm1pbi10ZW1wIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIH1cXG5cXG4gIC53ZWF0aGVyLWljb24ge1xcbiAgICB3aWR0aDogNDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5kYWlseS13ZWF0aGVyLFxcbiAgLmhvdXJseS13ZWF0aGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuXFxuICAuZGF5LWluZm8td3JhcHBlcixcXG4gIC5ob3VyLWluZm8td3JhcHBlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLnRlbXAtd3JhcCB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgfVxcblxcbiAgLndlZWtkYXksXFxuICAuaG91ciB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjRweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC53ZWVrZGF5LFxcbiAgLmhvdXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC5tYXgtdGVtcCxcXG4gIC50ZW1wIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcXG4gIH1cXG5cXG4gIC5taW4tdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxuXFxuICAud2VhdGhlci1pY29uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICB9XFxufVxcblxcbi5ob3VyLFxcbi50ZW1wIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG4ud2VhdGhlci1kaXNwbGF5IHtcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZXh0cmEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAwLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4uaGVhZGVyIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbi5pbmZvIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5pbmZvIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgfVxuXG4gIC5pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2V4dHJhLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmV4dHJhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uaWNvbiB7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLmluZm8ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmluZm8ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxuICB9XFxuXFxuICAuaWNvbiB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9iZy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5hcHAge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJtYWluXCJcbiAgICBcIi4uLlwiXG4gICAgXCJ3ZWF0aGVyLWRpc3BsYXlcIjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgdG8gcmlnaHQsXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuMjUzKSxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC4yMTkpXG4gICAgKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZzogNWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHJvdy1nYXA6IDRlbTtcbiAgcGFkZGluZy1ib3R0b206IDRlbTtcbn1cblxuLm1haW4ge1xuICBncmlkLWFyZWE6IG1haW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxZW07XG59XG5cbi53ZWF0aGVyLWRpc3BsYXkge1xuICBncmlkLWFyZWE6IHdlYXRoZXItZGlzcGxheTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmFwcCB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIHBhZGRpbmctdG9wOiA0ZW07XG4gICAgcm93LWdhcDogMTBlbTtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgXCJtYWluXCJcbiAgICAgIFwid2VhdGhlci1kaXNwbGF5XCJcbiAgICAgIFwid2VhdGhlci1kaXNwbGF5XCI7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9sYXlvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0I7OztxQkFHbUI7RUFDbkI7Ozs7OzREQUt3QztFQUN4QyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYjs7O3VCQUdtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5hcHAge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwibWFpblxcXCJcXG4gICAgXFxcIi4uLlxcXCJcXG4gICAgXFxcIndlYXRoZXItZGlzcGxheVxcXCI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gcmlnaHQsXFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjI1MyksXFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjIxOSlcXG4gICAgKSxcXG4gICAgdXJsKC4uL2Fzc2V0cy9iZy5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcGFkZGluZzogNWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcm93LWdhcDogNGVtO1xcbiAgcGFkZGluZy1ib3R0b206IDRlbTtcXG59XFxuXFxuLm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4ud2VhdGhlci1kaXNwbGF5IHtcXG4gIGdyaWQtYXJlYTogd2VhdGhlci1kaXNwbGF5O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmFwcCB7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgcGFkZGluZy10b3A6IDRlbTtcXG4gICAgcm93LWdhcDogMTBlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICBcXFwibWFpblxcXCJcXG4gICAgICBcXFwid2VhdGhlci1kaXNwbGF5XFxcIlxcbiAgICAgIFxcXCJ3ZWF0aGVyLWRpc3BsYXlcXFwiO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb25kaXRpb24ge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jaXR5IHtcbiAgbWFyZ2luLWJvdHRvbTogMC44ZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4udGltZSB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLnRlbXByZXR1cmUge1xuICBmb250LXNpemU6IDRyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2VhcmNoLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgd2lkdGg6IDE3MHB4O1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXTo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZWFyY2gtaWNvbiB7XG4gIGhlaWdodDogMS41ZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIGZsZXg6IDE7XG59XG5cbi5zZWFyY2gtaWNvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbmRpdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgd2hpdGUtc3BhY2U6IHdyYXA7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG5cbiAgLmNpdHkge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC5kYXRlLXRpbWUge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICB9XG5cbiAgLnRlbXByZXR1cmUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cblxuICAuc2VhcmNoLWljb24ge1xuICAgIGhlaWdodDogMWVtO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc2VhcmNoLWFuZC1jdXJyZW50LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsT0FBTztBQUNUOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29uZGl0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uY2l0eSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4udGltZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi50ZW1wcmV0dXJlIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnNlYXJjaC13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHdpZHRoOiAxNzBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2VhcmNoLWljb24ge1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uc2VhcmNoLWljb246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmNvbmRpdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB3aGl0ZS1zcGFjZTogd3JhcDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgfVxcblxcbiAgLmNpdHkge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAuZGF0ZS10aW1lIHtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICB9XFxuXFxuICAudGVtcHJldHVyZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICB9XFxuXFxuICAuc2VhcmNoLWljb24ge1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xheW91dC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zZWFyY2gtYW5kLWN1cnJlbnQuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZXh0cmEuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlzcGxheS13ZWF0aGVyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dlYXRoZXItdG9nZ2xlcnMuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpazp3Z2h0QDQwMDs2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YWZ0ZXIsXG4qOjpiZWZvcmUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU9BOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJ1YmlrOndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5AaW1wb3J0IFxcXCIuL2xheW91dC5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vc2VhcmNoLWFuZC1jdXJyZW50LmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9leHRyYS5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vZGlzcGxheS13ZWF0aGVyXFxcIjtcXG5AaW1wb3J0IFxcXCIuL3dlYXRoZXItdG9nZ2xlcnMuY3NzXFxcIjtcXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogXFxcIlJ1YmlrXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNoYW5nZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udG9nZ2xlciB7XG4gIHBhZGRpbmc6IDAuNGVtIDAuOGVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDMwMG1zIGVhc2UtaW47XG59XG5cbi50b2dnbGVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41ZW07XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4sIHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluO1xufVxuXG4ubGVmdCxcbi5yaWdodCB7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG4uZG90IHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG59XG5cbi5sZWZ0OmhvdmVyLFxuLnJpZ2h0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZG90LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuY2hhbmdlciB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIH1cbn1cblxuLnZpc2libGUge1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uY2hvc2VuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvd2VhdGhlci10b2dnbGVycy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QiwwREFBMEQ7QUFDNUQ7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNoYW5nZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRvZ2dsZXIge1xcbiAgcGFkZGluZzogMC40ZW0gMC44ZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDMwMG1zIGVhc2UtaW47XFxufVxcblxcbi50b2dnbGVyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVlbTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4sIHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluO1xcbn1cXG5cXG4ubGVmdCxcXG4ucmlnaHQge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi5kb3Qge1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5sZWZ0OmhvdmVyLFxcbi5yaWdodDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kb3QuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLmNoYW5nZXIge1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbiAgfVxcbn1cXG5cXG4udmlzaWJsZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICB0cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi5jaG9zZW4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi8uLi9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBsb2FkVWkgfSBmcm9tIFwiLi4vZG9tL2RvbVwiO1xuaW1wb3J0IHNlYXJjaFdlYXRoZXJCeUNpdHkgZnJvbSBcIi4uL2FwaS9hcGlGdW5jdGlvbnMuanNcIjtcblxuKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHNlYXJjaFdlYXRoZXJCeUNpdHkoXCJ0YmlsaXNpXCIpO1xuICBsb2FkVWkoZGF0YSk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xufSkoKTtcbiJdLCJuYW1lcyI6WyJnZXRJbnB1dFZhbHVlIiwic2VhcmNoV2VhdGhlckJ5Q2l0eSIsImNpdHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInRvTG93ZXJDYXNlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJkYXRhIiwianNvbiIsInBhcnNlRGF0ZSIsInBhcnNlRGFpbHkiLCJwYXJzZUhvdXJseSIsInNlYXJjaEkiLCJ0aGVybW9JIiwiaHVtaWRpdHlJIiwicmFpbnlJIiwid2luZEkiLCJsZWZ0SSIsInJpZ2h0SSIsImNvbmRpdGlvbiIsImRhdGUiLCJ0aW1lIiwidGVtcHJldHVyZSIsInNlYXJjaEltZyIsImZlZWxzTGlrZSIsImh1bWlkaXR5IiwiY2hhbmNlT2ZSYWluIiwid2luZFNwZWVkIiwiaW5wdXQiLCJkYWlseVdlYXRoZXIiLCJob3VybHlXZWF0aGVyIiwiZGFpbHkiLCJob3VybHkiLCJsZWZ0IiwicmlnaHQiLCJzZWN0aW9ucyIsImNlbCIsIlN0cmluZyIsImZyb21Db2RlUG9pbnQiLCJob3VybHlCb29sIiwibG9hZFVpIiwibG9hZFNlYXJjaEFuZEN1cnJlbnQiLCJsb2FkQXJyb3dzIiwibG9hZEV4dHJhSW5mbyIsInBvcHVsYXRlSG91cmx5IiwicGFyc2VJbnQiLCJkYXRhc2V0IiwiaWQiLCJwb3B1bGF0ZURhaWx5Iiwic3JjIiwiX2RhdGEkY3VycmVudCIsIl9kYXRhJGN1cnJlbnQkY29uZGl0aSIsIl9kYXRhJGxvY2F0aW9uIiwiX2RhdGEkbG9jYXRpb24yIiwiX2RhdGEkbG9jYXRpb24zIiwiY3VycmVudCIsInRleHQiLCJsb2NhdGlvbiIsIm5hbWUiLCJkYXRlT2JqIiwibG9jYWx0aW1lIiwiZGF5Iiwib3JkIiwibW9udGgiLCJ5ZWFyIiwidGVtcF9jIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJmZWVsc2xpa2VfYyIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJkYWlseV9jaGFuY2Vfb2ZfcmFpbiIsIndpbmRfa3BoIiwidmFsdWUiLCJ0cmltIiwic2VhcmNoRm9yV2VhdGhlciIsIndlZWsiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwiZGF5SW5mbyIsImRpdldyYXBwZXIiLCJjcmVhdGVFbGVtZW50Iiwid2Vla0RheSIsIm1heFRlbXAiLCJtaW5UZW1wIiwidGVtcFdyYXAiLCJpY29uIiwiY2xhc3NOYW1lIiwiaWNvblBhdGgiLCJhbHQiLCJhcHBlbmQiLCJhcHBlbmRDaGlsZCIsInN0YWdlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaG91cnMiLCJob3VyIiwiY29uc29sZSIsImxvZyIsInN0YXJ0IiwiZW5kIiwiaSIsInRlbXAiLCJtb3ZlIiwiZSIsImN1cnJlbnREb3QiLCJjdXJyZW50SWQiLCJhcnJvdyIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlIiwibmV4dElkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleSIsInJlbW92ZSIsImFkZCIsImNsb3VkIiwiY2xvdWR5IiwibGlnaHRuaW5nIiwibWlzdCIsIm1vb24iLCJyYWlueSIsInNub3ciLCJzdW4iLCJzcGxpdCIsIm1vbnRoSW5kZXgiLCJEYXRlIiwiZ2V0TW9udGgiLCJnZXREYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiZ2V0T3JkaW5hbCIsImdldERhdGUiLCJ3ZWVrZGF5IiwibW9udGhzIiwibiIsIndlZWtJbmZvIiwicHVzaCIsIm1heHRlbXBfYyIsIm1pbnRlbXBfYyIsImdldEljb24iLCJ0cmFuc2Zvcm1Ib3VybHkiLCJzcGxpdGVkIiwiam9pbiIsImZpbmRJbmRleCIsInNlY29uZFBhcnQiLCJmaXJzdFBhcnQiLCJjIl0sInNvdXJjZVJvb3QiOiIifQ==