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

function loadUi(data) {
  loadSearchAndCurrent(data);
  loadExtraInfo(data);
  if (hourlyBool) {
    populateHourly(data);
  } else {
    populateDaily(data);
  }
  searchImg.src = _assets_search_svg__WEBPACK_IMPORTED_MODULE_1__;
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
  searchForWeather();
});
hourly.addEventListener("click", e => {
  hourlyBool = true;
  searchForWeather();
});

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
  .hourly-weather {
    padding: 4em;
  }
}

.hour,
.temp {
  margin-bottom: 0.5em;
}

.weather-display {
  min-height: 200px;
}
`, "",{"version":3,"sources":["webpack://./src/css/display-weather.css"],"names":[],"mappings":"AAAA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,QAAQ;EACR,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;;EAEE,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;;EAEE,gBAAgB;EAChB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE;;OAEK;;EAEL;;IAEE,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;EACvB;EACA;;IAEE,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;EACtB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,WAAW;EACb;AACF;;AAEA;EACE;;IAEE,kBAAkB;EACpB;EACA;;IAEE,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;EACtB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,WAAW;EACb;AACF;;AAEA;EACE;;IAEE,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,cAAc;EAChB;;EAEA;;IAEE,mBAAmB;IACnB,WAAW;IACX,QAAQ;IACR,8BAA8B;EAChC;;EAEA;IACE,iBAAiB;EACnB;;EAEA;;IAEE,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;EACvB;AACF;;AAEA;EACE;;IAEE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;;IAEE,gBAAgB;IAChB,eAAe;IACf,oBAAoB;EACtB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,WAAW;EACb;EACA;IACE,YAAY;EACd;AACF;;AAEA;;EAEE,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":[".daily-weather,\n.hourly-weather {\n  display: flex;\n  justify-content: space-between;\n  gap: 2em;\n  white-space: nowrap;\n}\n\n.day-info-wrapper,\n.hour-info-wrapper {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n}\n\n.weekday,\n.hour {\n  font-size: 1.5rem;\n  margin-bottom: 1em;\n  letter-spacing: 1.4px;\n}\n\n.max-temp,\n.temp {\n  font-weight: 600;\n  font-size: 2rem;\n  margin-bottom: 0.1em;\n}\n\n.min-temp {\n  font-size: 1rem;\n  margin-bottom: 1em;\n}\n\n.weather-icon {\n  width: 50px;\n}\n\n@media screen and (max-width: 1050px) {\n  /* .daily-weather {\n      flex-direction: column;\n    } */\n\n  .weekday,\n  .hour {\n    font-size: 0.8rem;\n    margin-bottom: 1em;\n    letter-spacing: 1.4px;\n  }\n  .max-temp,\n  .temp {\n    font-weight: 600;\n    font-size: 1.2rem;\n    margin-bottom: 0.1em;\n  }\n\n  .min-temp {\n    font-size: 0.6rem;\n    margin-bottom: 1em;\n  }\n\n  .weather-icon {\n    width: 30px;\n  }\n}\n\n@media screen and (max-width: 1200px) {\n  .weekday,\n  .hour {\n    margin-bottom: 1em;\n  }\n  .max-temp,\n  .temp {\n    font-weight: 600;\n    font-size: 1.5rem;\n    margin-bottom: 0.1em;\n  }\n\n  .min-temp {\n    font-size: 0.8rem;\n    margin-bottom: 1em;\n  }\n\n  .weather-icon {\n    width: 40px;\n  }\n}\n\n@media screen and (max-width: 960px) {\n  .daily-weather,\n  .hourly-weather {\n    flex-direction: column;\n    align-items: center;\n    max-width: 400px;\n    margin: 0 auto;\n  }\n\n  .day-info-wrapper,\n  .hour-info-wrapper {\n    flex-direction: row;\n    width: 100%;\n    gap: 2em;\n    justify-content: space-between;\n  }\n\n  .temp-wrap {\n    margin-left: auto;\n  }\n\n  .weekday,\n  .hour {\n    font-size: 1.4rem;\n    margin-bottom: 1em;\n    letter-spacing: 1.4px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .weekday,\n  .hour {\n    margin-bottom: 1em;\n    font-size: 1rem;\n  }\n\n  .max-temp,\n  .temp {\n    font-weight: 600;\n    font-size: 1rem;\n    margin-bottom: 0.1em;\n  }\n\n  .min-temp {\n    font-size: 0.7rem;\n    margin-bottom: 1em;\n  }\n\n  .weather-icon {\n    width: 30px;\n  }\n  .hourly-weather {\n    padding: 4em;\n  }\n}\n\n.hour,\n.temp {\n  margin-bottom: 0.5em;\n}\n\n.weather-display {\n  min-height: 200px;\n}\n"],"sourceRoot":""}]);
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
}

.toggler {
  padding: 0.4em 0.8em;
  font-weight: 600;
  letter-spacing: 1px;
  border: 1px solid white;
}

.toggler:hover {
  cursor: pointer;
}

@media screen and (max-width: 960px) {
  .changer {
    justify-content: center;
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/weather-togglers.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,QAAQ;EACR,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;IACE,uBAAuB;EACzB;AACF","sourcesContent":[".changer {\n  display: flex;\n  gap: 2em;\n  margin-bottom: 2em;\n}\n\n.toggler {\n  padding: 0.4em 0.8em;\n  font-weight: 600;\n  letter-spacing: 1px;\n  border: 1px solid white;\n}\n\n.toggler:hover {\n  cursor: pointer;\n}\n\n@media screen and (max-width: 960px) {\n  .changer {\n    justify-content: center;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxDQUFDMUgsSUFBSSxDQUFDO0FBQ25CLENBQUMsRUFBRSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9hcGkvYXBpRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL2RvbS9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvanMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL2Rpc3BsYXktd2VhdGhlci5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL2V4dHJhLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jc3MvbGF5b3V0LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jc3Mvc2VhcmNoLWFuZC1jdXJyZW50LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Nzcy93ZWF0aGVyLXRvZ2dsZXJzLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9tYWluL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldElucHV0VmFsdWUgfSBmcm9tIFwiLi4vZG9tL2RvbS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZWFyY2hXZWF0aGVyQnlDaXR5KGNpdHkpIHtcbiAgY2l0eSA9XG4gICAgY2l0eSA9PT0gXCJcIlxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHlcIikudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKVxuICAgICAgOiBjaXR5O1xuICBpZiAoY2l0eSA9PT0gXCJydXN0YXZpXCIpIGNpdHkgPSBcIjE3Ni4yMjEuMjUyLjIxXCI7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWQ0MDljODc3YzFkYzRhOGY4NGQyMDE2MjkyMzMwMDYmcT0ke2NpdHl9JmRheXM9N2AsXG4gICAge1xuICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgfVxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCB7IHBhcnNlRGF0ZSwgcGFyc2VEYWlseSwgcGFyc2VIb3VybHkgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHMuanNcIjtcbmltcG9ydCBzZWFyY2hJIGZyb20gXCIuLi8uLi9hc3NldHMvc2VhcmNoLnN2Z1wiO1xuaW1wb3J0IHRoZXJtb0kgZnJvbSBcIi4uLy4uL2Fzc2V0cy90aGVybW8uc3ZnXCI7XG5pbXBvcnQgaHVtaWRpdHlJIGZyb20gXCIuLi8uLi9hc3NldHMvaHVtaWRpdHkuc3ZnXCI7XG5pbXBvcnQgcmFpbnlJIGZyb20gXCIuLi8uLi9hc3NldHMvcmFpbnkuc3ZnXCI7XG5pbXBvcnQgd2luZEkgZnJvbSBcIi4uLy4uL2Fzc2V0cy93aW5kLnN2Z1wiO1xuaW1wb3J0IHNlYXJjaFdlYXRoZXJCeUNpdHkgZnJvbSBcIi4uL2FwaS9hcGlGdW5jdGlvbnMuanNcIjtcblxuLy9ET00gRUxFTUVOVFNcbmNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZGl0aW9uXCIpO1xuY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eVwiKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIik7XG5jb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lXCIpO1xuY29uc3QgdGVtcHJldHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcHJldHVyZVwiKTtcbmNvbnN0IHNlYXJjaEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWljb25cIik7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzLWxpa2VcIik7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIik7XG5jb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5jZS1vZi1yYWluXCIpO1xuY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kLXNwZWVkXCIpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG5jb25zdCBkYWlseVdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5LXdlYXRoZXJcIik7XG5jb25zdCBob3VybHlXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob3VybHktd2VhdGhlclwiKTtcbmNvbnN0IGRhaWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYWlseVwiKTtcbmNvbnN0IGhvdXJseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG91cmx5XCIpO1xuXG5jb25zdCBjZWwgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCg4NDUxKTtcbmxldCBob3VybHlCb29sID0gZmFsc2U7XG5cbmV4cG9ydCB7IGxvYWRVaSwgZ2V0SW5wdXRWYWx1ZSB9O1xuXG5mdW5jdGlvbiBsb2FkVWkoZGF0YSkge1xuICBsb2FkU2VhcmNoQW5kQ3VycmVudChkYXRhKTtcblxuICBsb2FkRXh0cmFJbmZvKGRhdGEpO1xuXG4gIGlmIChob3VybHlCb29sKSB7XG4gICAgcG9wdWxhdGVIb3VybHkoZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgcG9wdWxhdGVEYWlseShkYXRhKTtcbiAgfVxuICBzZWFyY2hJbWcuc3JjID0gc2VhcmNoSTtcbn1cblxuZnVuY3Rpb24gbG9hZFNlYXJjaEFuZEN1cnJlbnQoZGF0YSkge1xuICBjb25kaXRpb24udGV4dENvbnRlbnQgPSBkYXRhPy5jdXJyZW50Py5jb25kaXRpb24/LnRleHQ7XG4gIGNpdHkudGV4dENvbnRlbnQgPVxuICAgIGRhdGE/LmxvY2F0aW9uPy5uYW1lID09PSBcIkdhcmRhYmFuaVwiID8gXCJSdXN0YXZpXCIgOiBkYXRhPy5sb2NhdGlvbj8ubmFtZTtcbiAgY29uc3QgZGF0ZU9iaiA9IHBhcnNlRGF0ZShkYXRhPy5sb2NhdGlvbj8ubG9jYWx0aW1lKTtcbiAgZGF0ZS50ZXh0Q29udGVudCA9IGAke2RhdGVPYmouZGF5fSwgJHtkYXRlT2JqLm9yZH0gJHtkYXRlT2JqLm1vbnRofScke2RhdGVPYmoueWVhcn1gO1xuICB0aW1lLnRleHRDb250ZW50ID0gZGF0ZU9iai50aW1lO1xuICB0ZW1wcmV0dXJlLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LnRlbXBfYyArIGNlbDtcbn1cblxuZnVuY3Rpb24gbG9hZEV4dHJhSW5mbyhkYXRhKSB7XG4gIGZlZWxzTGlrZS5maXJzdEVsZW1lbnRDaGlsZC5zcmMgPSB0aGVybW9JO1xuICBmZWVsc0xpa2UucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpLnRleHRDb250ZW50ID1cbiAgICBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MgKyBcIiBcIiArIGNlbDtcbiAgaHVtaWRpdHkuZmlyc3RFbGVtZW50Q2hpbGQuc3JjID0gaHVtaWRpdHlJO1xuICBodW1pZGl0eS5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIikudGV4dENvbnRlbnQgPVxuICAgIGRhdGEuY3VycmVudC5odW1pZGl0eSArIFwiIFwiICsgXCIlXCI7XG4gIGNoYW5jZU9mUmFpbi5maXJzdEVsZW1lbnRDaGlsZC5zcmMgPSByYWlueUk7XG4gIGNoYW5jZU9mUmFpbi5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIikudGV4dENvbnRlbnQgPVxuICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluICsgXCIgXCIgKyBcIiVcIjtcbiAgd2luZFNwZWVkLmZpcnN0RWxlbWVudENoaWxkLnNyYyA9IHdpbmRJO1xuICB3aW5kU3BlZWQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpLnRleHRDb250ZW50ID1cbiAgICBkYXRhLmN1cnJlbnQud2luZF9rcGggKyBcIiBcIiArIFwia20vaFwiO1xufVxuXG5mdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xuICByZXR1cm4gaW5wdXQudmFsdWUgPyBpbnB1dC52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKSA6IFwiXCI7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaEZvcldlYXRoZXIoKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBzZWFyY2hXZWF0aGVyQnlDaXR5KGdldElucHV0VmFsdWUoKSk7XG4gIGxvYWRVaShkYXRhKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVEYWlseShkYXRhKSB7XG4gIGNvbnN0IHdlZWsgPSBwYXJzZURhaWx5KGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXkpO1xuICBkYWlseVdlYXRoZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgaG91cmx5V2VhdGhlci5pbm5lckhUTUwgPSBcIlwiO1xuICB3ZWVrLmZvckVhY2goKGRheUluZm8pID0+IHtcbiAgICBjb25zdCBkaXZXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB3ZWVrRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBtYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0ZW1wV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICBkaXZXcmFwcGVyLmNsYXNzTmFtZSA9IFwiZGF5LWluZm8td3JhcHBlclwiO1xuICAgIHdlZWtEYXkuY2xhc3NOYW1lID0gXCJ3ZWVrZGF5XCI7XG4gICAgbWF4VGVtcC5jbGFzc05hbWUgPSBcIm1heC10ZW1wXCI7XG4gICAgbWluVGVtcC5jbGFzc05hbWUgPSBcIm1pbi10ZW1wXCI7XG4gICAgdGVtcFdyYXAuY2xhc3NOYW1lID0gXCJ0ZW1wLXdyYXBcIjtcbiAgICBpY29uLmNsYXNzTmFtZSA9IFwid2VhdGhlci1pY29uXCI7XG5cbiAgICB3ZWVrRGF5LnRleHRDb250ZW50ID0gZGF5SW5mby53ZWVrRGF5O1xuICAgIG1heFRlbXAudGV4dENvbnRlbnQgPSBgJHtkYXlJbmZvLm1heFRlbXB9ICR7Y2VsfWA7XG4gICAgbWluVGVtcC50ZXh0Q29udGVudCA9IGAke2RheUluZm8ubWluVGVtcH0gJHtjZWx9YDtcbiAgICBpY29uLnNyYyA9IGRheUluZm8uaWNvblBhdGg7XG4gICAgaWNvbi5hbHQgPSBkYXlJbmZvLmNvbmRpdGlvbjtcblxuICAgIHRlbXBXcmFwLmFwcGVuZChtYXhUZW1wLCBtaW5UZW1wKTtcbiAgICBkaXZXcmFwcGVyLmFwcGVuZCh3ZWVrRGF5LCB0ZW1wV3JhcCwgaWNvbik7XG4gICAgZGFpbHlXZWF0aGVyLmFwcGVuZENoaWxkKGRpdldyYXBwZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVIb3VybHkoZGF0YSwgc3RhZ2UgPSAxKSB7XG4gIGNvbnN0IGhvdXJzID0gcGFyc2VIb3VybHkoXG4gICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyLFxuICAgIGRhdGEubG9jYXRpb24ubG9jYWx0aW1lXG4gICk7XG4gIGRhaWx5V2VhdGhlci5pbm5lckhUTUwgPSBcIlwiO1xuICBob3VybHlXZWF0aGVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGxldCBzdGFydCA9IG51bGw7XG4gIGxldCBlbmQgPSBudWxsO1xuICBzdGFydCA9IHN0YWdlID09PSAxID8gMCA6IHN0YWdlID09PSAyID8gOCA6IDE1O1xuICBlbmQgPSBzdGFnZSA9PT0gMSA/IDcgOiBzdGFnZSA9PT0gMiA/IDE1IDogaG91cnMubGVuZ3RoIC0gMTtcblxuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICBjb25zdCBkaXZXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBob3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgIGRpdldyYXBwZXIuY2xhc3NOYW1lID0gXCJob3VyLWluZm8td3JhcHBlclwiO1xuICAgIGhvdXIuY2xhc3NOYW1lID0gXCJob3VyXCI7XG4gICAgdGVtcC5jbGFzc05hbWUgPSBcInRlbXBcIjtcbiAgICBpY29uLmNsYXNzTmFtZSA9IFwid2VhdGhlci1pY29uXCI7XG5cbiAgICBob3VyLnRleHRDb250ZW50ID0gaG91cnNbaV0udGltZTtcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7aG91cnNbaV0udGVtcH0gJHtjZWx9YDtcbiAgICBpY29uLnNyYyA9IGhvdXJzW2ldLmljb25QYXRoO1xuICAgIGljb24uYWx0ID0gaG91cnNbaV0uY29uZGl0aW9uO1xuXG4gICAgZGl2V3JhcHBlci5hcHBlbmQoaG91ciwgdGVtcCwgaWNvbik7XG4gICAgaG91cmx5V2VhdGhlci5hcHBlbmRDaGlsZChkaXZXcmFwcGVyKTtcbiAgfVxufVxuXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgIT0gXCJFbnRlclwiKSByZXR1cm47XG5cbiAgc2VhcmNoRm9yV2VhdGhlcigpO1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG59KTtcblxuc2VhcmNoSW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBzZWFyY2hGb3JXZWF0aGVyKCk7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbn0pO1xuXG5kYWlseS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaG91cmx5Qm9vbCA9IGZhbHNlO1xuICBzZWFyY2hGb3JXZWF0aGVyKCk7XG59KTtcblxuaG91cmx5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBob3VybHlCb29sID0gdHJ1ZTtcbiAgc2VhcmNoRm9yV2VhdGhlcigpO1xufSk7XG4iLCJpbXBvcnQgY2xvdWQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9jbG91ZC5zdmdcIjtcbmltcG9ydCBjbG91ZHkgZnJvbSBcIi4uLy4uL2Fzc2V0cy9jbG91ZHkuc3ZnXCI7XG5pbXBvcnQgbGlnaHRuaW5nIGZyb20gXCIuLi8uLi9hc3NldHMvbGlnaHRuaW5nLnN2Z1wiO1xuaW1wb3J0IG1pc3QgZnJvbSBcIi4uLy4uL2Fzc2V0cy9taXN0LnN2Z1wiO1xuaW1wb3J0IG1vb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9tb29uLnN2Z1wiO1xuaW1wb3J0IHJhaW55IGZyb20gXCIuLi8uLi9hc3NldHMvcmFpbnkuc3ZnXCI7XG5pbXBvcnQgc25vdyBmcm9tIFwiLi4vLi4vYXNzZXRzL3Nub3cuc3ZnXCI7XG5pbXBvcnQgc3VuIGZyb20gXCIuLi8uLi9hc3NldHMvc3VuLnN2Z1wiO1xuXG5leHBvcnQgeyBwYXJzZURhdGUsIHBhcnNlRGFpbHksIHBhcnNlSG91cmx5IH07XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlKSB7XG4gIGNvbnN0IHllYXIgPSBwYXJzZUludChkYXRlLnNwbGl0KFwiLVwiKVswXSk7XG4gIGNvbnN0IG1vbnRoSW5kZXggPSBwYXJzZUludChkYXRlLnNwbGl0KFwiLVwiKVsxXSkgLSAxO1xuICBjb25zdCBkYXkgPSBwYXJzZUludChkYXRlLnNwbGl0KFwiLVwiKVsyXS5zcGxpdChcIiBcIilbMF0pO1xuICBjb25zdCB0aW1lID0gZGF0ZS5zcGxpdChcIiBcIilbMV07XG4gIGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aEluZGV4LCBkYXkpO1xuICByZXR1cm4ge1xuICAgIG1vbnRoOiBnZXRNb250aChkYXRlLmdldE1vbnRoKCkpLFxuICAgIGRheTogZ2V0RGF5KGRhdGUuZ2V0RGF5KCkpLFxuICAgIHllYXI6IHllYXIudG9TdHJpbmcoKS5zbGljZSgyKSxcbiAgICBvcmQ6IGdldE9yZGluYWwoZGF0ZS5nZXREYXRlKCkpLFxuICAgIHRpbWUsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldERheShkYXkpIHtcbiAgY29uc3Qgd2Vla2RheSA9IFtcbiAgICBcIlN1bmRheVwiLFxuICAgIFwiTW9uZGF5XCIsXG4gICAgXCJUdWVzZGF5XCIsXG4gICAgXCJXZWRuZXNkYXlcIixcbiAgICBcIlRodXJzZGF5XCIsXG4gICAgXCJGcmlkYXlcIixcbiAgICBcIlNhdHVyZGF5XCIsXG4gIF07XG4gIHJldHVybiB3ZWVrZGF5W2RheV07XG59XG5cbmZ1bmN0aW9uIGdldE1vbnRoKG1vbnRoKSB7XG4gIGNvbnN0IG1vbnRocyA9IFtcbiAgICBcIkphblwiLFxuICAgIFwiRmViXCIsXG4gICAgXCJNYXJcIixcbiAgICBcIkFwclwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5cIixcbiAgICBcIkp1bFwiLFxuICAgIFwiQXVnXCIsXG4gICAgXCJTZXB0XCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF07XG5cbiAgcmV0dXJuIG1vbnRoc1ttb250aF07XG59XG5cbmZ1bmN0aW9uIGdldE9yZGluYWwobikge1xuICBsZXQgb3JkID0gXCJ0aFwiO1xuXG4gIGlmIChuICUgMTAgPT09IDEpIHtcbiAgICBvcmQgPSBcInN0XCI7XG4gIH1cblxuICBpZiAobiAlIDEwID09PSAyKSB7XG4gICAgb3JkID0gXCJuZFwiO1xuICB9XG5cbiAgaWYgKG4gJSAxMCA9PT0gMykge1xuICAgIG9yZCA9IFwicmRcIjtcbiAgfVxuICByZXR1cm4gbiArIG9yZDtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYWlseShkYXRhKSB7XG4gIGNvbnN0IHdlZWtJbmZvID0gW107XG4gIGlmICghZGF0YSkgcmV0dXJuO1xuICBkYXRhLmZvckVhY2goKGRheSkgPT4ge1xuICAgIHdlZWtJbmZvLnB1c2goe1xuICAgICAgd2Vla0RheTogcGFyc2VEYXRlKGRheS5kYXRlKS5kYXksXG4gICAgICBtYXhUZW1wOiBkYXkuZGF5Lm1heHRlbXBfYyxcbiAgICAgIG1pblRlbXA6IGRheS5kYXkubWludGVtcF9jLFxuICAgICAgaWNvblBhdGg6IGdldEljb24oZGF5LmRheS5jb25kaXRpb24udGV4dCksXG4gICAgICBjb25kaXRpb246IGRheS5kYXkuY29uZGl0aW9uLnRleHQsXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gd2Vla0luZm87XG59XG5cbmZ1bmN0aW9uIHBhcnNlSG91cmx5KGhvdXJzLCBsb2NhbHRpbWUpIHtcbiAgY29uc3QgaG91cmx5ID0gW107XG4gIGhvdXJzLmZvckVhY2goKGhvdXIpID0+IHtcbiAgICBob3VybHkucHVzaCh7XG4gICAgICB0ZW1wOiBob3VyLnRlbXBfYyxcbiAgICAgIHRpbWU6IHBhcnNlRGF0ZShob3VyLnRpbWUpLnRpbWUsXG4gICAgICBpY29uUGF0aDogZ2V0SWNvbihob3VyLmNvbmRpdGlvbi50ZXh0KSxcbiAgICAgIGNvbmRpdGlvbjogaG91ci5jb25kaXRpb24udGV4dCxcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiB0cmFuc2Zvcm1Ib3VybHkoaG91cmx5LCBsb2NhbHRpbWUpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Ib3VybHkoaG91cmx5LCBsb2NhbHRpbWUpIHtcbiAgY29uc3Qgc3BsaXRlZCA9IGxvY2FsdGltZS5zcGxpdChcIlwiKTtcbiAgc3BsaXRlZFtzcGxpdGVkLmxlbmd0aCAtIDFdID0gXCIwXCI7XG4gIHNwbGl0ZWRbc3BsaXRlZC5sZW5ndGggLSAyXSA9IFwiMFwiO1xuICBjb25zdCB0aW1lID0gc3BsaXRlZC5zbGljZSgtNSkuam9pbihcIlwiKTtcblxuICBjb25zdCBpID0gaG91cmx5LmZpbmRJbmRleCgoaG91cikgPT4ge1xuICAgIHJldHVybiBob3VyLnRpbWUgPT09IHRpbWU7XG4gIH0pO1xuXG4gIGlmIChpID09PSAwKSByZXR1cm4gaG91cmx5O1xuXG4gIGNvbnN0IHNlY29uZFBhcnQgPSBob3VybHkuc2xpY2UoaSk7XG4gIGNvbnN0IGZpcnN0UGFydCA9IGhvdXJseS5zbGljZSgwLCBpKTtcbiAgcmV0dXJuIFsuLi5zZWNvbmRQYXJ0LCAuLi5maXJzdFBhcnRdO1xufVxuXG5mdW5jdGlvbiBnZXRJY29uKGMpIHtcbiAgbGV0IGkgPSBudWxsO1xuICBzd2l0Y2ggKGMpIHtcbiAgICBjYXNlIFwiU3VubnlcIjpcbiAgICAgIGkgPSBzdW47XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQ2xlYXJcIjpcbiAgICAgIGkgPSBtb29uO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkNsb3VkeVwiOlxuICAgIGNhc2UgXCJQYXRjaHkgc2xlZXQgcG9zc2libGVcIjpcbiAgICBjYXNlIFwiT3ZlcmNhc3RcIjpcbiAgICBjYXNlIFwiUGFydGx5IGNsb3VkeVwiOlxuICAgICAgaSA9IGNsb3VkeTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJNaXN0XCI6XG4gICAgY2FzZSBcIkZvZ1wiOlxuICAgIGNhc2UgXCJGcmVlemluZyBmb2dcIjpcbiAgICBjYXNlIFwiUGF0Y2h5IGxpZ2h0IGRyaXp6bGVcIjpcbiAgICAgIGkgPSBtaXN0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlRodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZVwiOlxuICAgICAgaSA9IGxpZ2h0bmluZztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiOlxuICAgIGNhc2UgXCJMaWdodCBkcml6emxlXCI6XG4gICAgY2FzZSBcIkZyZWV6aW5nIGRyaXp6bGVcIjpcbiAgICBjYXNlIFwiSGVhdnkgZnJlZXppbmcgZHJpenpsZVwiOlxuICAgIGNhc2UgXCJQYXRjaHkgbGlnaHQgcmFpblwiOlxuICAgIGNhc2UgXCJMaWdodCByYWluXCI6XG4gICAgY2FzZSBcIk1vZGVyYXRlIHJhaW4gYXQgdGltZXNcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgcmFpblwiOlxuICAgIGNhc2UgXCJIZWF2eSByYWluIGF0IHRpbWVzXCI6XG4gICAgY2FzZSBcIkhlYXZ5IHJhaW5cIjpcbiAgICBjYXNlIFwiTGlnaHQgZnJlZXppbmcgcmFpblwiOlxuICAgIGNhc2UgXCJNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluXCI6XG4gICAgY2FzZSBcIkxpZ2h0IHJhaW4gc2hvd2VyXCI6XG4gICAgY2FzZSBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyXCI6XG4gICAgY2FzZSBcIlRvcnJlbnRpYWwgcmFpbiBzaG93ZXJcIjpcbiAgICBjYXNlIFwiUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyXCI6XG4gICAgY2FzZSBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyXCI6XG4gICAgICBpID0gcmFpbnk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUGF0Y2h5IHNub3cgcG9zc2libGVcIjpcbiAgICBjYXNlIFwiQmxvd2luZyBzbm93XCI6XG4gICAgY2FzZSBcIkJsaXp6YXJkXCI6XG4gICAgY2FzZSBcIkxpZ2h0IHNsZWV0XCI6XG4gICAgY2FzZSBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0XCI6XG4gICAgY2FzZSBcIlBhdGNoeSBsaWdodCBzbm93XCI6XG4gICAgY2FzZSBcIkxpZ2h0IHNub3dcIjpcbiAgICBjYXNlIFwiUGF0Y2h5IG1vZGVyYXRlIHNub3dcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgc25vd1wiOlxuICAgIGNhc2UgXCJQYXRjaHkgaGVhdnkgc25vd1wiOlxuICAgIGNhc2UgXCJIZWF2eSBzbm93XCI6XG4gICAgY2FzZSBcIkljZSBwZWxsZXRzXCI6XG4gICAgY2FzZSBcIkxpZ2h0IHNsZWV0IHNob3dlcnNcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2Vyc1wiOlxuICAgIGNhc2UgXCJMaWdodCBzbm93IHNob3dlcnNcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyBzaG93ZXJzXCI6XG4gICAgY2FzZSBcIkxpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiOlxuICAgIGNhc2UgXCJQYXRjaHkgbGlnaHQgc25vdyB3aXRoIHRodW5kZXJcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcIjpcbiAgICAgIGkgPSBzbm93O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGkgPSBjbG91ZDtcbiAgfVxuXG4gIHJldHVybiBpO1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5kYWlseS13ZWF0aGVyLFxuLmhvdXJseS13ZWF0aGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmRheS1pbmZvLXdyYXBwZXIsXG4uaG91ci1pbmZvLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLndlZWtkYXksXG4uaG91ciB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbn1cblxuLm1heC10ZW1wLFxuLnRlbXAge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMWVtO1xufVxuXG4ubWluLXRlbXAge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLndlYXRoZXItaWNvbiB7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcbiAgLyogLmRhaWx5LXdlYXRoZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9ICovXG5cbiAgLndlZWtkYXksXG4gIC5ob3VyIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICB9XG4gIC5tYXgtdGVtcCxcbiAgLnRlbXAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XG4gIH1cblxuICAubWluLXRlbXAge1xuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuXG4gIC53ZWF0aGVyLWljb24ge1xuICAgIHdpZHRoOiAzMHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAud2Vla2RheSxcbiAgLmhvdXIge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuICAubWF4LXRlbXAsXG4gIC50ZW1wIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMWVtO1xuICB9XG5cbiAgLm1pbi10ZW1wIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cblxuICAud2VhdGhlci1pY29uIHtcbiAgICB3aWR0aDogNDBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuZGFpbHktd2VhdGhlcixcbiAgLmhvdXJseS13ZWF0aGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC5kYXktaW5mby13cmFwcGVyLFxuICAuaG91ci1pbmZvLXdyYXBwZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ2FwOiAyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnRlbXAtd3JhcCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cblxuICAud2Vla2RheSxcbiAgLmhvdXIge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLndlZWtkYXksXG4gIC5ob3VyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgLm1heC10ZW1wLFxuICAudGVtcCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XG4gIH1cblxuICAubWluLXRlbXAge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuXG4gIC53ZWF0aGVyLWljb24ge1xuICAgIHdpZHRoOiAzMHB4O1xuICB9XG4gIC5ob3VybHktd2VhdGhlciB7XG4gICAgcGFkZGluZzogNGVtO1xuICB9XG59XG5cbi5ob3VyLFxuLnRlbXAge1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuLndlYXRoZXItZGlzcGxheSB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Rpc3BsYXktd2VhdGhlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFOztPQUVLOztFQUVMOztJQUVFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0VBQ0E7O0lBRUUsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTs7SUFFRSxrQkFBa0I7RUFDcEI7RUFDQTs7SUFFRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFOztJQUVFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxRQUFRO0lBQ1IsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBOztJQUVFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRTs7SUFFRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBOztFQUVFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZGFpbHktd2VhdGhlcixcXG4uaG91cmx5LXdlYXRoZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmRheS1pbmZvLXdyYXBwZXIsXFxuLmhvdXItaW5mby13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi53ZWVrZGF5LFxcbi5ob3VyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xcbn1cXG5cXG4ubWF4LXRlbXAsXFxuLnRlbXAge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuMWVtO1xcbn1cXG5cXG4ubWluLXRlbXAge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4ud2VhdGhlci1pY29uIHtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcXG4gIC8qIC5kYWlseS13ZWF0aGVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9ICovXFxuXFxuICAud2Vla2RheSxcXG4gIC5ob3VyIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xcbiAgfVxcbiAgLm1heC10ZW1wLFxcbiAgLnRlbXAge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XFxuICB9XFxuXFxuICAubWluLXRlbXAge1xcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgfVxcblxcbiAgLndlYXRoZXItaWNvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gIC53ZWVrZGF5LFxcbiAgLmhvdXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxuICAubWF4LXRlbXAsXFxuICAudGVtcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcXG4gIH1cXG5cXG4gIC5taW4tdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxuXFxuICAud2VhdGhlci1pY29uIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuICAuZGFpbHktd2VhdGhlcixcXG4gIC5ob3VybHktd2VhdGhlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcblxcbiAgLmRheS1pbmZvLXdyYXBwZXIsXFxuICAuaG91ci1pbmZvLXdyYXBwZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC50ZW1wLXdyYXAge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIH1cXG5cXG4gIC53ZWVrZGF5LFxcbiAgLmhvdXIge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAud2Vla2RheSxcXG4gIC5ob3VyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAubWF4LXRlbXAsXFxuICAudGVtcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XFxuICB9XFxuXFxuICAubWluLXRlbXAge1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgfVxcblxcbiAgLndlYXRoZXItaWNvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgfVxcbiAgLmhvdXJseS13ZWF0aGVyIHtcXG4gICAgcGFkZGluZzogNGVtO1xcbiAgfVxcbn1cXG5cXG4uaG91cixcXG4udGVtcCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLndlYXRoZXItZGlzcGxheSB7XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZXh0cmEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAwLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4uaGVhZGVyIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbi5pbmZvIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5pbmZvIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgfVxuXG4gIC5pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2V4dHJhLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmV4dHJhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uaWNvbiB7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLmluZm8ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmluZm8ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxuICB9XFxuXFxuICAuaWNvbiB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmFwcCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcIm1haW5cIlxuICAgIFwiLi4uXCJcbiAgICBcIndlYXRoZXItZGlzcGxheVwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZzogNWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHJvdy1nYXA6IDRlbTtcbn1cblxuLm1haW4ge1xuICBncmlkLWFyZWE6IG1haW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxZW07XG59XG5cbi53ZWF0aGVyLWRpc3BsYXkge1xuICBncmlkLWFyZWE6IHdlYXRoZXItZGlzcGxheTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmFwcCB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIHBhZGRpbmctdG9wOiA0ZW07XG4gICAgcm93LWdhcDogMTBlbTtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgXCJtYWluXCJcbiAgICAgIFwid2VhdGhlci1kaXNwbGF5XCJcbiAgICAgIFwid2VhdGhlci1kaXNwbGF5XCI7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9sYXlvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0I7OztxQkFHbUI7RUFDbkIsb0VBQTBEO0VBQzFELHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2I7Ozt1QkFHbUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYXBwIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIm1haW5cXFwiXFxuICAgIFxcXCIuLi5cXFwiXFxuICAgIFxcXCJ3ZWF0aGVyLWRpc3BsYXlcXFwiO1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwYWRkaW5nOiA1ZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICByb3ctZ2FwOiA0ZW07XFxufVxcblxcbi5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLndlYXRoZXItZGlzcGxheSB7XFxuICBncmlkLWFyZWE6IHdlYXRoZXItZGlzcGxheTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5hcHAge1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIHBhZGRpbmctdG9wOiA0ZW07XFxuICAgIHJvdy1nYXA6IDEwZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgXFxcIm1haW5cXFwiXFxuICAgICAgXFxcIndlYXRoZXItZGlzcGxheVxcXCJcXG4gICAgICBcXFwid2VhdGhlci1kaXNwbGF5XFxcIjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY29uZGl0aW9uIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY2l0eSB7XG4gIG1hcmdpbi1ib3R0b206IDAuOGVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnRpbWUge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi50ZW1wcmV0dXJlIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnNlYXJjaC13cmFwcGVyIHtcbiAgcGFkZGluZzogMC4yZW0gMC41ZW07XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHdpZHRoOiAxNzBweDtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl06OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VhcmNoLWljb24ge1xuICBoZWlnaHQ6IDEuNWVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICBmbGV4OiAxO1xufVxuXG4uc2VhcmNoLWljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb25kaXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHdoaXRlLXNwYWNlOiB3cmFwO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuXG4gIC5jaXR5IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAuZGF0ZS10aW1lIHtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgfVxuXG4gIC50ZW1wcmV0dXJlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cblxuICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG5cbiAgLnNlYXJjaC1pY29uIHtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3NlYXJjaC1hbmQtY3VycmVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbmRpdGlvbiB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmNpdHkge1xcbiAgbWFyZ2luLWJvdHRvbTogMC44ZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRpbWUge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4udGVtcHJldHVyZSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5zZWFyY2gtd3JhcHBlciB7XFxuICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB3aWR0aDogMTcwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNlYXJjaC1pY29uIHtcXG4gIGhlaWdodDogMS41ZW07XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnNlYXJjaC1pY29uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5jb25kaXRpb24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgd2hpdGUtc3BhY2U6IHdyYXA7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIH1cXG5cXG4gIC5jaXR5IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgLmRhdGUtdGltZSB7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgfVxcblxcbiAgLnRlbXByZXR1cmUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgfVxcblxcbiAgLnNlYXJjaC1pY29uIHtcXG4gICAgaGVpZ2h0OiAxZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sYXlvdXQuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VhcmNoLWFuZC1jdXJyZW50LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2V4dHJhLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rpc3BsYXktd2VhdGhlci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyLXRvZ2dsZXJzLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWs6d2dodEA0MDA7NjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFPQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpazp3Z2h0QDQwMDs2MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuQGltcG9ydCBcXFwiLi9sYXlvdXQuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL3NlYXJjaC1hbmQtY3VycmVudC5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vZXh0cmEuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2Rpc3BsYXktd2VhdGhlclxcXCI7XFxuQGltcG9ydCBcXFwiLi93ZWF0aGVyLXRvZ2dsZXJzLmNzc1xcXCI7XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSdWJpa1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jaGFuZ2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyZW07XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuLnRvZ2dsZXIge1xuICBwYWRkaW5nOiAwLjRlbSAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi50b2dnbGVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuY2hhbmdlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy93ZWF0aGVyLXRvZ2dsZXJzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNoYW5nZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG5cXG4udG9nZ2xlciB7XFxuICBwYWRkaW5nOiAwLjRlbSAwLjhlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi50b2dnbGVyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5jaGFuZ2VyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi8uLi9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBsb2FkVWkgfSBmcm9tIFwiLi4vZG9tL2RvbVwiO1xuaW1wb3J0IHNlYXJjaFdlYXRoZXJCeUNpdHkgZnJvbSBcIi4uL2FwaS9hcGlGdW5jdGlvbnMuanNcIjtcblxuKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHNlYXJjaFdlYXRoZXJCeUNpdHkoXCJ0YmlsaXNpXCIpO1xuICBsb2FkVWkoZGF0YSk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xufSkoKTtcbiJdLCJuYW1lcyI6WyJnZXRJbnB1dFZhbHVlIiwic2VhcmNoV2VhdGhlckJ5Q2l0eSIsImNpdHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInRvTG93ZXJDYXNlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJkYXRhIiwianNvbiIsInBhcnNlRGF0ZSIsInBhcnNlRGFpbHkiLCJwYXJzZUhvdXJseSIsInNlYXJjaEkiLCJ0aGVybW9JIiwiaHVtaWRpdHlJIiwicmFpbnlJIiwid2luZEkiLCJjb25kaXRpb24iLCJkYXRlIiwidGltZSIsInRlbXByZXR1cmUiLCJzZWFyY2hJbWciLCJmZWVsc0xpa2UiLCJodW1pZGl0eSIsImNoYW5jZU9mUmFpbiIsIndpbmRTcGVlZCIsImlucHV0IiwiZGFpbHlXZWF0aGVyIiwiaG91cmx5V2VhdGhlciIsImRhaWx5IiwiaG91cmx5IiwiY2VsIiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsImhvdXJseUJvb2wiLCJsb2FkVWkiLCJsb2FkU2VhcmNoQW5kQ3VycmVudCIsImxvYWRFeHRyYUluZm8iLCJwb3B1bGF0ZUhvdXJseSIsInBvcHVsYXRlRGFpbHkiLCJzcmMiLCJfZGF0YSRjdXJyZW50IiwiX2RhdGEkY3VycmVudCRjb25kaXRpIiwiX2RhdGEkbG9jYXRpb24iLCJfZGF0YSRsb2NhdGlvbjIiLCJfZGF0YSRsb2NhdGlvbjMiLCJjdXJyZW50IiwidGV4dCIsImxvY2F0aW9uIiwibmFtZSIsImRhdGVPYmoiLCJsb2NhbHRpbWUiLCJkYXkiLCJvcmQiLCJtb250aCIsInllYXIiLCJ0ZW1wX2MiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImZlZWxzbGlrZV9jIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImRhaWx5X2NoYW5jZV9vZl9yYWluIiwid2luZF9rcGgiLCJ2YWx1ZSIsInRyaW0iLCJzZWFyY2hGb3JXZWF0aGVyIiwid2VlayIsImlubmVySFRNTCIsImZvckVhY2giLCJkYXlJbmZvIiwiZGl2V3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJ3ZWVrRGF5IiwibWF4VGVtcCIsIm1pblRlbXAiLCJ0ZW1wV3JhcCIsImljb24iLCJjbGFzc05hbWUiLCJpY29uUGF0aCIsImFsdCIsImFwcGVuZCIsImFwcGVuZENoaWxkIiwic3RhZ2UiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJob3VycyIsImhvdXIiLCJzdGFydCIsImVuZCIsImkiLCJ0ZW1wIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXkiLCJjbG91ZCIsImNsb3VkeSIsImxpZ2h0bmluZyIsIm1pc3QiLCJtb29uIiwicmFpbnkiLCJzbm93Iiwic3VuIiwicGFyc2VJbnQiLCJzcGxpdCIsIm1vbnRoSW5kZXgiLCJEYXRlIiwiZ2V0TW9udGgiLCJnZXREYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiZ2V0T3JkaW5hbCIsImdldERhdGUiLCJ3ZWVrZGF5IiwibW9udGhzIiwibiIsIndlZWtJbmZvIiwicHVzaCIsIm1heHRlbXBfYyIsIm1pbnRlbXBfYyIsImdldEljb24iLCJ0cmFuc2Zvcm1Ib3VybHkiLCJzcGxpdGVkIiwiam9pbiIsImZpbmRJbmRleCIsInNlY29uZFBhcnQiLCJmaXJzdFBhcnQiLCJjIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=