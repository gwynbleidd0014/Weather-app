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
// function should recieve 1 parameter type of string and it should be name of city
// function then should fetch the weather api and console log the data recieved

async function searchWeatherByCity(city) {
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

function loadUi(data) {
  loadSearchAndCurrent(data);
  console.log("doneone");
  loadExtraInfo(data);
  console.log("donetwo");
  populateDaily(data);
  console.log("donetree");
  searchImg.src = _assets_search_svg__WEBPACK_IMPORTED_MODULE_1__;
}
function loadSearchAndCurrent(data) {
  var _data$current, _data$current$conditi, _data$location, _data$location2;
  condition.textContent = data === null || data === void 0 ? void 0 : (_data$current = data.current) === null || _data$current === void 0 ? void 0 : (_data$current$conditi = _data$current.condition) === null || _data$current$conditi === void 0 ? void 0 : _data$current$conditi.text;
  city.textContent = data === null || data === void 0 ? void 0 : (_data$location = data.location) === null || _data$location === void 0 ? void 0 : _data$location.name;
  const dateObj = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.parseDate)(data === null || data === void 0 ? void 0 : (_data$location2 = data.location) === null || _data$location2 === void 0 ? void 0 : _data$location2.localtime);
  date.textContent = `${dateObj.day}, ${dateObj.ord} ${dateObj.month}'${dateObj.year}`;
  time.textContent = dateObj.time;
  tempreture.textContent = data.current.temp_c + String.fromCodePoint(8451);
}
function loadExtraInfo(data) {
  feelsLike.firstElementChild.src = _assets_thermo_svg__WEBPACK_IMPORTED_MODULE_2__;
  feelsLike.querySelector(".info").textContent = data.current.feelslike_c + " " + String.fromCodePoint(8451);
  humidity.firstElementChild.src = _assets_humidity_svg__WEBPACK_IMPORTED_MODULE_3__;
  humidity.querySelector(".info").textContent = data.current.humidity + " " + "%";
  chanceOfRain.firstElementChild.src = _assets_rainy_svg__WEBPACK_IMPORTED_MODULE_4__;
  chanceOfRain.querySelector(".info").textContent = data.forecast.forecastday[0].day.daily_chance_of_rain + " " + "%";
  windSpeed.firstElementChild.src = _assets_wind_svg__WEBPACK_IMPORTED_MODULE_5__;
  windSpeed.querySelector(".info").textContent = data.current.wind_kph + " " + "km/h";
}
function getInputValue() {
  return input.value ? input.value.trim().toLowerCase() : "rustavi";
}
async function searchForWeather() {
  const data = await (0,_api_apiFunctions_js__WEBPACK_IMPORTED_MODULE_6__["default"])(getInputValue());
  loadUi(data);
}
function populateDaily(data) {
  const week = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.parseDaily)(data.forecast.forecastday);
  dailyWeather.innerHTML = "";
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
    maxTemp.textContent = `${dayInfo.maxTemp} ${String.fromCodePoint(8451)}`;
    minTemp.textContent = `${dayInfo.minTemp} ${String.fromCodePoint(8451)}`;
    icon.src = dayInfo.iconPath;
    icon.alt = dayInfo.condition;
    tempWrap.append(maxTemp, minTemp);
    divWrapper.append(weekDay, tempWrap, icon);
    dailyWeather.appendChild(divWrapper);
  });
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

/***/ }),

/***/ "./src/js/utils/utils.js":
/*!*******************************!*\
  !*** ./src/js/utils/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseDaily: () => (/* binding */ parseDaily),
/* harmony export */   parseDate: () => (/* binding */ parseDate)
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
  // let date = data?.location?.localtime;
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
  console.log(data);
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
function parseHourly() {}
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
___CSS_LOADER_EXPORT___.push([module.id, `.daily-weather {
  display: flex;
  justify-content: space-between;
  gap: 2em;
  white-space: nowrap;
}

.day-info-wrapper {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.weekday {
  font-size: 1.5rem;
  margin-bottom: 1em;
  letter-spacing: 1.4px;
}

.max-temp {
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

  .weekday {
    font-size: 0.8rem;
    margin-bottom: 1em;
    letter-spacing: 1.4px;
  }

  .max-temp {
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
  .weekday {
    margin-bottom: 1em;
  }

  .max-temp {
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

@media screen and (max-width: 890px) {
  .daily-weather {
    flex-direction: column;
    align-items: center;
    width: 400px;
    margin: 0 auto;
  }

  .day-info-wrapper {
    flex-direction: row;
    width: 100%;
    gap: 2em;
  }

  .temp-wrap {
    margin-left: auto;
  }

  .weekday {
    font-size: 1.4rem;
    margin-bottom: 1em;
    letter-spacing: 1.4px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/display-weather.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE;;OAEK;;EAEL;IACE,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;EACvB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;EACtB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;EACtB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,cAAc;EAChB;;EAEA;IACE,mBAAmB;IACnB,WAAW;IACX,QAAQ;EACV;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;EACvB;AACF","sourcesContent":[".daily-weather {\n  display: flex;\n  justify-content: space-between;\n  gap: 2em;\n  white-space: nowrap;\n}\n\n.day-info-wrapper {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n}\n\n.weekday {\n  font-size: 1.5rem;\n  margin-bottom: 1em;\n  letter-spacing: 1.4px;\n}\n\n.max-temp {\n  font-weight: 600;\n  font-size: 2rem;\n  margin-bottom: 0.1em;\n}\n\n.min-temp {\n  font-size: 1rem;\n  margin-bottom: 1em;\n}\n\n.weather-icon {\n  width: 50px;\n}\n\n@media screen and (max-width: 1050px) {\n  /* .daily-weather {\n      flex-direction: column;\n    } */\n\n  .weekday {\n    font-size: 0.8rem;\n    margin-bottom: 1em;\n    letter-spacing: 1.4px;\n  }\n\n  .max-temp {\n    font-weight: 600;\n    font-size: 1.2rem;\n    margin-bottom: 0.1em;\n  }\n\n  .min-temp {\n    font-size: 0.6rem;\n    margin-bottom: 1em;\n  }\n\n  .weather-icon {\n    width: 30px;\n  }\n}\n\n@media screen and (max-width: 1200px) {\n  .weekday {\n    margin-bottom: 1em;\n  }\n\n  .max-temp {\n    font-weight: 600;\n    font-size: 1.5rem;\n    margin-bottom: 0.1em;\n  }\n\n  .min-temp {\n    font-size: 0.8rem;\n    margin-bottom: 1em;\n  }\n\n  .weather-icon {\n    width: 40px;\n  }\n}\n\n@media screen and (max-width: 890px) {\n  .daily-weather {\n    flex-direction: column;\n    align-items: center;\n    width: 400px;\n    margin: 0 auto;\n  }\n\n  .day-info-wrapper {\n    flex-direction: row;\n    width: 100%;\n    gap: 2em;\n  }\n\n  .temp-wrap {\n    margin-left: auto;\n  }\n\n  .weekday {\n    font-size: 1.4rem;\n    margin-bottom: 1em;\n    letter-spacing: 1.4px;\n  }\n}\n"],"sourceRoot":""}]);
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
`, "",{"version":3,"sources":["webpack://./src/css/extra.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;EACV,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB","sourcesContent":[".extra {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5em;\n  margin-bottom: 2em;\n  white-space: nowrap;\n}\n\n.icon {\n  width: 25px;\n}\n\n.header {\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.4px;\n  margin-bottom: 0.5em;\n}\n\n.info {\n  font-size: 1.5rem;\n  font-weight: 400;\n}\n"],"sourceRoot":""}]);
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
    padding: 2em;
    padding-top: 4em;
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/layout.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,0BAA0B;EAC1B,+BAA+B;EAC/B;;;qBAGmB;EACnB,oEAA0D;EAC1D,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,QAAQ;AACV;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE;IACE,YAAY;IACZ,gBAAgB;EAClB;AACF","sourcesContent":[".app {\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  overflow-x: hidden;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 2fr 1fr;\n  grid-template-areas:\n    \"main\"\n    \"...\"\n    \"weather-display\";\n  background: url(../assets/background.png) no-repeat center;\n  background-size: cover;\n  padding: 5em;\n  color: white;\n  row-gap: 4em;\n}\n\n.main {\n  grid-area: main;\n  display: flex;\n  justify-content: space-between;\n  gap: 1em;\n}\n\n.weather-display {\n  grid-area: weather-display;\n}\n\n@media screen and (max-width: 600px) {\n  .app {\n    padding: 2em;\n    padding-top: 4em;\n  }\n}\n"],"sourceRoot":""}]);
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
`, "",{"version":3,"sources":["webpack://./src/css/search-and-current.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,8BAA8B;EAC9B,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,oBAAoB;EACpB,cAAc;EACd,YAAY;AACd;;AAEA;EACE,UAAU;EACV,YAAY;AACd;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,OAAO;AACT;;AAEA;EACE,eAAe;AACjB","sourcesContent":[".condition {\n  font-size: 2.5rem;\n  margin-bottom: 0.2em;\n  white-space: nowrap;\n}\n\n.city {\n  margin-bottom: 0.8em;\n  font-size: 1.2rem;\n}\n\n.time {\n  margin-bottom: 1em;\n}\n\n.tempreture {\n  font-size: 4rem;\n  margin-bottom: 0.2em;\n  font-weight: 600;\n}\n\n.search-wrapper {\n  padding: 0.2em 0.5em;\n  border-bottom: 2px solid white;\n  display: inline-flex;\n}\n\ninput[type=\"text\"] {\n  appearance: none;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: inherit;\n  font-family: inherit;\n  color: inherit;\n  width: 170px;\n}\n\ninput[type=\"text\"]::placeholder {\n  opacity: 1;\n  color: white;\n}\n\n.search-icon {\n  height: 1.5em;\n  transform: rotate(270deg);\n  flex: 1;\n}\n\n.search-icon:hover {\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
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
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_search_and_current_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_extra_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_display_weather_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
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
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAMA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,gCAAgC;EAChC,gBAAgB;AAClB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap\");\n@import \"./layout.css\";\n@import \"./search-and-current.css\";\n@import \"./extra.css\";\n@import \"./display-weather\";\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 16px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 400;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRWUsZUFBZUEsbUJBQW1CQSxDQUFDQyxJQUFJLEVBQUU7RUFDdEQsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDekIscUZBQW9GRixJQUFLLFNBQVEsRUFDbEc7SUFDRUcsSUFBSSxFQUFFO0VBQ1IsQ0FDRixDQUFDO0VBQ0QsTUFBTUMsSUFBSSxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7RUFDbEMsT0FBT0QsSUFBSTtBQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjBEO0FBQ1o7QUFDQTtBQUNJO0FBQ047QUFDRjtBQUNlOztBQUV6RDtBQUNBLE1BQU1TLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDO0FBQ3RELE1BQU1mLElBQUksR0FBR2MsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0FBQzVDLE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0FBQzVDLE1BQU1FLElBQUksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0FBQzVDLE1BQU1HLFVBQVUsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0FBQ3hELE1BQU1JLFNBQVMsR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0FBQ3hELE1BQU1LLFNBQVMsR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0FBQ3ZELE1BQU1NLFFBQVEsR0FBR1AsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0FBQ3BELE1BQU1PLFlBQVksR0FBR1IsUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7QUFDOUQsTUFBTVEsU0FBUyxHQUFHVCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7QUFDdkQsTUFBTVMsS0FBSyxHQUFHVixRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDN0MsTUFBTVUsWUFBWSxHQUFHWCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUU1QjtBQUVqQyxTQUFTVyxNQUFNQSxDQUFDdEIsSUFBSSxFQUFFO0VBQ3BCd0Isb0JBQW9CLENBQUN4QixJQUFJLENBQUM7RUFDMUJ5QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7RUFDdEJDLGFBQWEsQ0FBQzNCLElBQUksQ0FBQztFQUNuQnlCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztFQUN0QkUsYUFBYSxDQUFDNUIsSUFBSSxDQUFDO0VBQ25CeUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0VBQ3ZCWCxTQUFTLENBQUNjLEdBQUcsR0FBR3pCLCtDQUFPO0FBQ3pCO0FBRUEsU0FBU29CLG9CQUFvQkEsQ0FBQ3hCLElBQUksRUFBRTtFQUFBLElBQUE4QixhQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGNBQUEsRUFBQUMsZUFBQTtFQUNsQ3hCLFNBQVMsQ0FBQ3lCLFdBQVcsR0FBR2xDLElBQUksYUFBSkEsSUFBSSx3QkFBQThCLGFBQUEsR0FBSjlCLElBQUksQ0FBRW1DLE9BQU8sY0FBQUwsYUFBQSx3QkFBQUMscUJBQUEsR0FBYkQsYUFBQSxDQUFlckIsU0FBUyxjQUFBc0IscUJBQUEsdUJBQXhCQSxxQkFBQSxDQUEwQkssSUFBSTtFQUN0RHhDLElBQUksQ0FBQ3NDLFdBQVcsR0FBR2xDLElBQUksYUFBSkEsSUFBSSx3QkFBQWdDLGNBQUEsR0FBSmhDLElBQUksQ0FBRXFDLFFBQVEsY0FBQUwsY0FBQSx1QkFBZEEsY0FBQSxDQUFnQk0sSUFBSTtFQUN2QyxNQUFNQyxPQUFPLEdBQUdyQywwREFBUyxDQUFDRixJQUFJLGFBQUpBLElBQUksd0JBQUFpQyxlQUFBLEdBQUpqQyxJQUFJLENBQUVxQyxRQUFRLGNBQUFKLGVBQUEsdUJBQWRBLGVBQUEsQ0FBZ0JPLFNBQVMsQ0FBQztFQUNwRDVCLElBQUksQ0FBQ3NCLFdBQVcsR0FBSSxHQUFFSyxPQUFPLENBQUNFLEdBQUksS0FBSUYsT0FBTyxDQUFDRyxHQUFJLElBQUdILE9BQU8sQ0FBQ0ksS0FBTSxJQUFHSixPQUFPLENBQUNLLElBQUssRUFBQztFQUNwRi9CLElBQUksQ0FBQ3FCLFdBQVcsR0FBR0ssT0FBTyxDQUFDMUIsSUFBSTtFQUMvQkMsVUFBVSxDQUFDb0IsV0FBVyxHQUFHbEMsSUFBSSxDQUFDbUMsT0FBTyxDQUFDVSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztBQUMzRTtBQUVBLFNBQVNwQixhQUFhQSxDQUFDM0IsSUFBSSxFQUFFO0VBQzNCZ0IsU0FBUyxDQUFDZ0MsaUJBQWlCLENBQUNuQixHQUFHLEdBQUd4QiwrQ0FBTztFQUN6Q1csU0FBUyxDQUFDTCxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUN1QixXQUFXLEdBQzFDbEMsSUFBSSxDQUFDbUMsT0FBTyxDQUFDYyxXQUFXLEdBQUcsR0FBRyxHQUFHSCxNQUFNLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDN0Q5QixRQUFRLENBQUMrQixpQkFBaUIsQ0FBQ25CLEdBQUcsR0FBR3ZCLGlEQUFTO0VBQzFDVyxRQUFRLENBQUNOLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQ3VCLFdBQVcsR0FDekNsQyxJQUFJLENBQUNtQyxPQUFPLENBQUNsQixRQUFRLEdBQUcsR0FBRyxHQUFHLEdBQUc7RUFDbkNDLFlBQVksQ0FBQzhCLGlCQUFpQixDQUFDbkIsR0FBRyxHQUFHdEIsOENBQU07RUFDM0NXLFlBQVksQ0FBQ1AsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDdUIsV0FBVyxHQUM3Q2xDLElBQUksQ0FBQ2tELFFBQVEsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDVixHQUFHLENBQUNXLG9CQUFvQixHQUFHLEdBQUcsR0FBRyxHQUFHO0VBQ25FakMsU0FBUyxDQUFDNkIsaUJBQWlCLENBQUNuQixHQUFHLEdBQUdyQiw2Q0FBSztFQUN2Q1csU0FBUyxDQUFDUixhQUFhLENBQUMsT0FBTyxDQUFDLENBQUN1QixXQUFXLEdBQzFDbEMsSUFBSSxDQUFDbUMsT0FBTyxDQUFDa0IsUUFBUSxHQUFHLEdBQUcsR0FBRyxNQUFNO0FBQ3hDO0FBRUEsU0FBUzlCLGFBQWFBLENBQUEsRUFBRztFQUN2QixPQUFPSCxLQUFLLENBQUNrQyxLQUFLLEdBQUdsQyxLQUFLLENBQUNrQyxLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsU0FBUztBQUNuRTtBQUVBLGVBQWVDLGdCQUFnQkEsQ0FBQSxFQUFHO0VBQ2hDLE1BQU16RCxJQUFJLEdBQUcsTUFBTUwsZ0VBQW1CLENBQUM0QixhQUFhLENBQUMsQ0FBQyxDQUFDO0VBQ3ZERCxNQUFNLENBQUN0QixJQUFJLENBQUM7QUFDZDtBQUVBLFNBQVM0QixhQUFhQSxDQUFDNUIsSUFBSSxFQUFFO0VBQzNCLE1BQU0wRCxJQUFJLEdBQUd2RCwyREFBVSxDQUFDSCxJQUFJLENBQUNrRCxRQUFRLENBQUNDLFdBQVcsQ0FBQztFQUNsRDlCLFlBQVksQ0FBQ3NDLFNBQVMsR0FBRyxFQUFFO0VBQzNCRCxJQUFJLENBQUNFLE9BQU8sQ0FBRUMsT0FBTyxJQUFLO0lBQ3hCLE1BQU1DLFVBQVUsR0FBR3BELFFBQVEsQ0FBQ3FELGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDaEQsTUFBTUMsT0FBTyxHQUFHdEQsUUFBUSxDQUFDcUQsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUM3QyxNQUFNRSxPQUFPLEdBQUd2RCxRQUFRLENBQUNxRCxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzdDLE1BQU1HLE9BQU8sR0FBR3hELFFBQVEsQ0FBQ3FELGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDN0MsTUFBTUksUUFBUSxHQUFHekQsUUFBUSxDQUFDcUQsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUM5QyxNQUFNSyxJQUFJLEdBQUcxRCxRQUFRLENBQUNxRCxhQUFhLENBQUMsS0FBSyxDQUFDO0lBRTFDRCxVQUFVLENBQUNPLFNBQVMsR0FBRyxrQkFBa0I7SUFDekNMLE9BQU8sQ0FBQ0ssU0FBUyxHQUFHLFNBQVM7SUFDN0JKLE9BQU8sQ0FBQ0ksU0FBUyxHQUFHLFVBQVU7SUFDOUJILE9BQU8sQ0FBQ0csU0FBUyxHQUFHLFVBQVU7SUFDOUJGLFFBQVEsQ0FBQ0UsU0FBUyxHQUFHLFdBQVc7SUFDaENELElBQUksQ0FBQ0MsU0FBUyxHQUFHLGNBQWM7SUFFL0JMLE9BQU8sQ0FBQzlCLFdBQVcsR0FBRzJCLE9BQU8sQ0FBQ0csT0FBTztJQUNyQ0MsT0FBTyxDQUFDL0IsV0FBVyxHQUFJLEdBQUUyQixPQUFPLENBQUNJLE9BQVEsSUFBR25CLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBRSxFQUFDO0lBQ3hFbUIsT0FBTyxDQUFDaEMsV0FBVyxHQUFJLEdBQUUyQixPQUFPLENBQUNLLE9BQVEsSUFBR3BCLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBRSxFQUFDO0lBQ3hFcUIsSUFBSSxDQUFDdkMsR0FBRyxHQUFHZ0MsT0FBTyxDQUFDUyxRQUFRO0lBQzNCRixJQUFJLENBQUNHLEdBQUcsR0FBR1YsT0FBTyxDQUFDcEQsU0FBUztJQUU1QjBELFFBQVEsQ0FBQ0ssTUFBTSxDQUFDUCxPQUFPLEVBQUVDLE9BQU8sQ0FBQztJQUNqQ0osVUFBVSxDQUFDVSxNQUFNLENBQUNSLE9BQU8sRUFBRUcsUUFBUSxFQUFFQyxJQUFJLENBQUM7SUFDMUMvQyxZQUFZLENBQUNvRCxXQUFXLENBQUNYLFVBQVUsQ0FBQztFQUN0QyxDQUFDLENBQUM7QUFDSjtBQUVBMUMsS0FBSyxDQUFDc0QsZ0JBQWdCLENBQUMsU0FBUyxFQUFHQyxDQUFDLElBQUs7RUFDdkMsSUFBSUEsQ0FBQyxDQUFDQyxHQUFHLElBQUksT0FBTyxFQUFFO0VBRXRCbkIsZ0JBQWdCLENBQUMsQ0FBQztFQUNsQnJDLEtBQUssQ0FBQ2tDLEtBQUssR0FBRyxFQUFFO0FBQ2xCLENBQUMsQ0FBQztBQUVGdkMsU0FBUyxDQUFDMkQsZ0JBQWdCLENBQUMsT0FBTyxFQUFHQyxDQUFDLElBQUs7RUFDekNsQixnQkFBZ0IsQ0FBQyxDQUFDO0VBQ2xCckMsS0FBSyxDQUFDa0MsS0FBSyxHQUFHLEVBQUU7QUFDbEIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNHeUM7QUFDRTtBQUNNO0FBQ1Y7QUFDQTtBQUNFO0FBQ0Y7QUFDRjtBQUVOO0FBRWpDLFNBQVNwRCxTQUFTQSxDQUFDVSxJQUFJLEVBQUU7RUFDdkI7RUFDQSxNQUFNZ0MsSUFBSSxHQUFHeUMsUUFBUSxDQUFDekUsSUFBSSxDQUFDMEUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3pDLE1BQU1DLFVBQVUsR0FBR0YsUUFBUSxDQUFDekUsSUFBSSxDQUFDMEUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztFQUNuRCxNQUFNN0MsR0FBRyxHQUFHNEMsUUFBUSxDQUFDekUsSUFBSSxDQUFDMEUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdEQsTUFBTXpFLElBQUksR0FBR0QsSUFBSSxDQUFDMEUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUMvQjFFLElBQUksR0FBRyxJQUFJNEUsSUFBSSxDQUFDNUMsSUFBSSxFQUFFMkMsVUFBVSxFQUFFOUMsR0FBRyxDQUFDO0VBQ3RDLE9BQU87SUFDTEUsS0FBSyxFQUFFOEMsUUFBUSxDQUFDN0UsSUFBSSxDQUFDNkUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNoQ2hELEdBQUcsRUFBRWlELE1BQU0sQ0FBQzlFLElBQUksQ0FBQzhFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDMUI5QyxJQUFJLEVBQUVBLElBQUksQ0FBQytDLFFBQVEsQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDOUJsRCxHQUFHLEVBQUVtRCxVQUFVLENBQUNqRixJQUFJLENBQUNrRixPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQy9CakY7RUFDRixDQUFDO0FBQ0g7QUFFQSxTQUFTNkUsTUFBTUEsQ0FBQ2pELEdBQUcsRUFBRTtFQUNuQixNQUFNc0QsT0FBTyxHQUFHLENBQ2QsUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLFVBQVUsRUFDVixRQUFRLEVBQ1IsVUFBVSxDQUNYO0VBQ0QsT0FBT0EsT0FBTyxDQUFDdEQsR0FBRyxDQUFDO0FBQ3JCO0FBRUEsU0FBU2dELFFBQVFBLENBQUM5QyxLQUFLLEVBQUU7RUFDdkIsTUFBTXFELE1BQU0sR0FBRyxDQUNiLEtBQUssRUFDTCxLQUFLLEVBQ0wsS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLEVBQ0wsS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLEVBQ0wsTUFBTSxFQUNOLEtBQUssRUFDTCxLQUFLLEVBQ0wsS0FBSyxDQUNOO0VBRUQsT0FBT0EsTUFBTSxDQUFDckQsS0FBSyxDQUFDO0FBQ3RCO0FBRUEsU0FBU2tELFVBQVVBLENBQUNJLENBQUMsRUFBRTtFQUNyQixJQUFJdkQsR0FBRyxHQUFHLElBQUk7RUFFZCxJQUFJdUQsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUU7SUFDaEJ2RCxHQUFHLEdBQUcsSUFBSTtFQUNaO0VBRUEsSUFBSXVELENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQ2hCdkQsR0FBRyxHQUFHLElBQUk7RUFDWjtFQUVBLElBQUl1RCxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRTtJQUNoQnZELEdBQUcsR0FBRyxJQUFJO0VBQ1o7RUFDQSxPQUFPdUQsQ0FBQyxHQUFHdkQsR0FBRztBQUNoQjtBQUVBLFNBQVN2QyxVQUFVQSxDQUFDSCxJQUFJLEVBQUU7RUFDeEIsTUFBTWtHLFFBQVEsR0FBRyxFQUFFO0VBQ25CekUsT0FBTyxDQUFDQyxHQUFHLENBQUMxQixJQUFJLENBQUM7RUFDakIsSUFBSSxDQUFDQSxJQUFJLEVBQUU7RUFDWEEsSUFBSSxDQUFDNEQsT0FBTyxDQUFFbkIsR0FBRyxJQUFLO0lBQ3BCeUQsUUFBUSxDQUFDQyxJQUFJLENBQUM7TUFDWm5DLE9BQU8sRUFBRTlELFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQzdCLElBQUksQ0FBQyxDQUFDNkIsR0FBRztNQUNoQ3dCLE9BQU8sRUFBRXhCLEdBQUcsQ0FBQ0EsR0FBRyxDQUFDMkQsU0FBUztNQUMxQmxDLE9BQU8sRUFBRXpCLEdBQUcsQ0FBQ0EsR0FBRyxDQUFDNEQsU0FBUztNQUMxQi9CLFFBQVEsRUFBRWdDLE9BQU8sQ0FBQzdELEdBQUcsQ0FBQ0EsR0FBRyxDQUFDaEMsU0FBUyxDQUFDMkIsSUFBSSxDQUFDO01BQ3pDM0IsU0FBUyxFQUFFZ0MsR0FBRyxDQUFDQSxHQUFHLENBQUNoQyxTQUFTLENBQUMyQjtJQUMvQixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7RUFDRixPQUFPOEQsUUFBUTtBQUNqQjtBQUVBLFNBQVNLLFdBQVdBLENBQUEsRUFBRyxDQUFDO0FBRXhCLFNBQVNELE9BQU9BLENBQUNFLENBQUMsRUFBRTtFQUNsQixJQUFJQyxDQUFDLEdBQUcsSUFBSTtFQUNaLFFBQVFELENBQUM7SUFDUCxLQUFLLE9BQU87TUFDVkMsQ0FBQyxHQUFHckIsNENBQUc7TUFDUDtJQUNGLEtBQUssT0FBTztNQUNWcUIsQ0FBQyxHQUFHeEIsNkNBQUk7TUFDUjtJQUNGLEtBQUssUUFBUTtJQUNiLEtBQUssdUJBQXVCO0lBQzVCLEtBQUssVUFBVTtJQUNmLEtBQUssZUFBZTtNQUNsQndCLENBQUMsR0FBRzNCLCtDQUFNO01BQ1Y7SUFDRixLQUFLLE1BQU07SUFDWCxLQUFLLEtBQUs7SUFDVixLQUFLLGNBQWM7SUFDbkIsS0FBSyxzQkFBc0I7TUFDekIyQixDQUFDLEdBQUd6Qiw2Q0FBSTtNQUNSO0lBQ0YsS0FBSyw2QkFBNkI7TUFDaEN5QixDQUFDLEdBQUcxQixrREFBUztNQUNiO0lBQ0YsS0FBSyxzQkFBc0I7SUFDM0IsS0FBSyxlQUFlO0lBQ3BCLEtBQUssa0JBQWtCO0lBQ3ZCLEtBQUssd0JBQXdCO0lBQzdCLEtBQUssbUJBQW1CO0lBQ3hCLEtBQUssWUFBWTtJQUNqQixLQUFLLHdCQUF3QjtJQUM3QixLQUFLLGVBQWU7SUFDcEIsS0FBSyxxQkFBcUI7SUFDMUIsS0FBSyxZQUFZO0lBQ2pCLEtBQUsscUJBQXFCO0lBQzFCLEtBQUssaUNBQWlDO0lBQ3RDLEtBQUssbUJBQW1CO0lBQ3hCLEtBQUssK0JBQStCO0lBQ3BDLEtBQUssd0JBQXdCO0lBQzdCLEtBQUssZ0NBQWdDO0lBQ3JDLEtBQUsscUNBQXFDO01BQ3hDMEIsQ0FBQyxHQUFHdkIsOENBQUs7TUFDVDtJQUNGLEtBQUssc0JBQXNCO0lBQzNCLEtBQUssY0FBYztJQUNuQixLQUFLLFVBQVU7SUFDZixLQUFLLGFBQWE7SUFDbEIsS0FBSyx5QkFBeUI7SUFDOUIsS0FBSyxtQkFBbUI7SUFDeEIsS0FBSyxZQUFZO0lBQ2pCLEtBQUssc0JBQXNCO0lBQzNCLEtBQUssZUFBZTtJQUNwQixLQUFLLG1CQUFtQjtJQUN4QixLQUFLLFlBQVk7SUFDakIsS0FBSyxhQUFhO0lBQ2xCLEtBQUsscUJBQXFCO0lBQzFCLEtBQUssaUNBQWlDO0lBQ3RDLEtBQUssb0JBQW9CO0lBQ3pCLEtBQUssZ0NBQWdDO0lBQ3JDLEtBQUssOEJBQThCO0lBQ25DLEtBQUssMENBQTBDO0lBQy9DLEtBQUssZ0NBQWdDO0lBQ3JDLEtBQUsscUNBQXFDO01BQ3hDdUIsQ0FBQyxHQUFHdEIsNkNBQUk7TUFDUjtJQUNGO01BQ0VzQixDQUFDLEdBQUc1Qiw4Q0FBSztFQUNiO0VBRUEsT0FBTzRCLENBQUM7QUFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEtBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw4RkFBOEYsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSx5Q0FBeUMsa0JBQWtCLG1DQUFtQyxhQUFhLHdCQUF3QixHQUFHLHVCQUF1QixrQkFBa0IsNEJBQTRCLDJCQUEyQixHQUFHLGNBQWMsc0JBQXNCLHVCQUF1QiwwQkFBMEIsR0FBRyxlQUFlLHFCQUFxQixvQkFBb0IseUJBQXlCLEdBQUcsZUFBZSxvQkFBb0IsdUJBQXVCLEdBQUcsbUJBQW1CLGdCQUFnQixHQUFHLDJDQUEyQyx1QkFBdUIsK0JBQStCLFFBQVEsa0JBQWtCLHdCQUF3Qix5QkFBeUIsNEJBQTRCLEtBQUssaUJBQWlCLHVCQUF1Qix3QkFBd0IsMkJBQTJCLEtBQUssaUJBQWlCLHdCQUF3Qix5QkFBeUIsS0FBSyxxQkFBcUIsa0JBQWtCLEtBQUssR0FBRywyQ0FBMkMsY0FBYyx5QkFBeUIsS0FBSyxpQkFBaUIsdUJBQXVCLHdCQUF3QiwyQkFBMkIsS0FBSyxpQkFBaUIsd0JBQXdCLHlCQUF5QixLQUFLLHFCQUFxQixrQkFBa0IsS0FBSyxHQUFHLDBDQUEwQyxvQkFBb0IsNkJBQTZCLDBCQUEwQixtQkFBbUIscUJBQXFCLEtBQUsseUJBQXlCLDBCQUEwQixrQkFBa0IsZUFBZSxLQUFLLGtCQUFrQix3QkFBd0IsS0FBSyxnQkFBZ0Isd0JBQXdCLHlCQUF5Qiw0QkFBNEIsS0FBSyxHQUFHLHFCQUFxQjtBQUNsOEU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pIdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9GQUFvRixVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxrQ0FBa0Msa0JBQWtCLDRCQUE0QixlQUFlLHVCQUF1Qix3QkFBd0IsR0FBRyxXQUFXLGdCQUFnQixHQUFHLGFBQWEsc0JBQXNCLHFCQUFxQiwwQkFBMEIseUJBQXlCLEdBQUcsV0FBVyxzQkFBc0IscUJBQXFCLEdBQUcscUJBQXFCO0FBQ3puQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QnZDO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDRIQUEyQztBQUN2Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxxRkFBcUYsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxPQUFPLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSwrQkFBK0IsaUJBQWlCLGtCQUFrQixrQkFBa0IsdUJBQXVCLCtCQUErQixvQ0FBb0MsNkVBQTZFLCtEQUErRCwyQkFBMkIsaUJBQWlCLGlCQUFpQixpQkFBaUIsR0FBRyxXQUFXLG9CQUFvQixrQkFBa0IsbUNBQW1DLGFBQWEsR0FBRyxzQkFBc0IsK0JBQStCLEdBQUcsMENBQTBDLFVBQVUsbUJBQW1CLHVCQUF1QixLQUFLLEdBQUcscUJBQXFCO0FBQ3BnQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0N2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpR0FBaUcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsc0NBQXNDLHNCQUFzQix5QkFBeUIsd0JBQXdCLEdBQUcsV0FBVyx5QkFBeUIsc0JBQXNCLEdBQUcsV0FBVyx1QkFBdUIsR0FBRyxpQkFBaUIsb0JBQW9CLHlCQUF5QixxQkFBcUIsR0FBRyxxQkFBcUIseUJBQXlCLG1DQUFtQyx5QkFBeUIsR0FBRywwQkFBMEIscUJBQXFCLGlCQUFpQixrQkFBa0IsNEJBQTRCLHVCQUF1Qix5QkFBeUIsbUJBQW1CLGlCQUFpQixHQUFHLHVDQUF1QyxlQUFlLGlCQUFpQixHQUFHLGtCQUFrQixrQkFBa0IsOEJBQThCLFlBQVksR0FBRyx3QkFBd0Isb0JBQW9CLEdBQUcscUJBQXFCO0FBQzd5QztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEdkM7QUFDNkc7QUFDakI7QUFDYTtBQUNZO0FBQ2I7QUFDVTtBQUNsSCw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDhHQUE4RyxrQkFBa0I7QUFDaEksMEJBQTBCLHVGQUFpQztBQUMzRCwwQkFBMEIsbUdBQWlDO0FBQzNELDBCQUEwQixzRkFBaUM7QUFDM0QsMEJBQTBCLGdHQUFpQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHNGQUFzRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsZ0dBQWdHLG9CQUFvQiwyQkFBMkIsdUNBQXVDLDBCQUEwQixnQ0FBZ0MsOEJBQThCLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxVQUFVLG9CQUFvQix1Q0FBdUMscUJBQXFCLEdBQUcscUJBQXFCO0FBQ3ZtQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzdCMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ087QUFDcUI7QUFFekQsQ0FBQyxrQkFBa0I7RUFDakIsTUFBTXpHLElBQUksR0FBRyxNQUFNTCxnRUFBbUIsQ0FBQyxTQUFTLENBQUM7RUFDakQyQixnREFBTSxDQUFDdEIsSUFBSSxDQUFDO0VBQ1p5QixPQUFPLENBQUNDLEdBQUcsQ0FBQzFCLElBQUksQ0FBQztBQUNuQixDQUFDLEVBQUUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvanMvYXBpL2FwaUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9kb20vZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Nzcy9kaXNwbGF5LXdlYXRoZXIuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Nzcy9leHRyYS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL2xheW91dC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL3NlYXJjaC1hbmQtY3VycmVudC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9tYWluL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZ1bmN0aW9uIHNob3VsZCByZWNpZXZlIDEgcGFyYW1ldGVyIHR5cGUgb2Ygc3RyaW5nIGFuZCBpdCBzaG91bGQgYmUgbmFtZSBvZiBjaXR5XG4vLyBmdW5jdGlvbiB0aGVuIHNob3VsZCBmZXRjaCB0aGUgd2VhdGhlciBhcGkgYW5kIGNvbnNvbGUgbG9nIHRoZSBkYXRhIHJlY2lldmVkXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFdlYXRoZXJCeUNpdHkoY2l0eSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1kNDA5Yzg3N2MxZGM0YThmODRkMjAxNjI5MjMzMDA2JnE9JHtjaXR5fSZkYXlzPTdgLFxuICAgIHtcbiAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgIH1cbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgeyBwYXJzZURhdGUsIHBhcnNlRGFpbHkgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHMuanNcIjtcbmltcG9ydCBzZWFyY2hJIGZyb20gXCIuLi8uLi9hc3NldHMvc2VhcmNoLnN2Z1wiO1xuaW1wb3J0IHRoZXJtb0kgZnJvbSBcIi4uLy4uL2Fzc2V0cy90aGVybW8uc3ZnXCI7XG5pbXBvcnQgaHVtaWRpdHlJIGZyb20gXCIuLi8uLi9hc3NldHMvaHVtaWRpdHkuc3ZnXCI7XG5pbXBvcnQgcmFpbnlJIGZyb20gXCIuLi8uLi9hc3NldHMvcmFpbnkuc3ZnXCI7XG5pbXBvcnQgd2luZEkgZnJvbSBcIi4uLy4uL2Fzc2V0cy93aW5kLnN2Z1wiO1xuaW1wb3J0IHNlYXJjaFdlYXRoZXJCeUNpdHkgZnJvbSBcIi4uL2FwaS9hcGlGdW5jdGlvbnMuanNcIjtcblxuLy9ET00gRUxFTUVOVFNcbmNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZGl0aW9uXCIpO1xuY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eVwiKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIik7XG5jb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lXCIpO1xuY29uc3QgdGVtcHJldHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcHJldHVyZVwiKTtcbmNvbnN0IHNlYXJjaEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWljb25cIik7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzLWxpa2VcIik7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIik7XG5jb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5jZS1vZi1yYWluXCIpO1xuY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kLXNwZWVkXCIpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG5jb25zdCBkYWlseVdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5LXdlYXRoZXJcIik7XG5cbmV4cG9ydCB7IGxvYWRVaSwgZ2V0SW5wdXRWYWx1ZSB9O1xuXG5mdW5jdGlvbiBsb2FkVWkoZGF0YSkge1xuICBsb2FkU2VhcmNoQW5kQ3VycmVudChkYXRhKTtcbiAgY29uc29sZS5sb2coXCJkb25lb25lXCIpO1xuICBsb2FkRXh0cmFJbmZvKGRhdGEpO1xuICBjb25zb2xlLmxvZyhcImRvbmV0d29cIik7XG4gIHBvcHVsYXRlRGFpbHkoZGF0YSk7XG4gIGNvbnNvbGUubG9nKFwiZG9uZXRyZWVcIik7XG4gIHNlYXJjaEltZy5zcmMgPSBzZWFyY2hJO1xufVxuXG5mdW5jdGlvbiBsb2FkU2VhcmNoQW5kQ3VycmVudChkYXRhKSB7XG4gIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGRhdGE/LmN1cnJlbnQ/LmNvbmRpdGlvbj8udGV4dDtcbiAgY2l0eS50ZXh0Q29udGVudCA9IGRhdGE/LmxvY2F0aW9uPy5uYW1lO1xuICBjb25zdCBkYXRlT2JqID0gcGFyc2VEYXRlKGRhdGE/LmxvY2F0aW9uPy5sb2NhbHRpbWUpO1xuICBkYXRlLnRleHRDb250ZW50ID0gYCR7ZGF0ZU9iai5kYXl9LCAke2RhdGVPYmoub3JkfSAke2RhdGVPYmoubW9udGh9JyR7ZGF0ZU9iai55ZWFyfWA7XG4gIHRpbWUudGV4dENvbnRlbnQgPSBkYXRlT2JqLnRpbWU7XG4gIHRlbXByZXR1cmUudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQudGVtcF9jICsgU3RyaW5nLmZyb21Db2RlUG9pbnQoODQ1MSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRFeHRyYUluZm8oZGF0YSkge1xuICBmZWVsc0xpa2UuZmlyc3RFbGVtZW50Q2hpbGQuc3JjID0gdGhlcm1vSTtcbiAgZmVlbHNMaWtlLnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKS50ZXh0Q29udGVudCA9XG4gICAgZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jICsgXCIgXCIgKyBTdHJpbmcuZnJvbUNvZGVQb2ludCg4NDUxKTtcbiAgaHVtaWRpdHkuZmlyc3RFbGVtZW50Q2hpbGQuc3JjID0gaHVtaWRpdHlJO1xuICBodW1pZGl0eS5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIikudGV4dENvbnRlbnQgPVxuICAgIGRhdGEuY3VycmVudC5odW1pZGl0eSArIFwiIFwiICsgXCIlXCI7XG4gIGNoYW5jZU9mUmFpbi5maXJzdEVsZW1lbnRDaGlsZC5zcmMgPSByYWlueUk7XG4gIGNoYW5jZU9mUmFpbi5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIikudGV4dENvbnRlbnQgPVxuICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluICsgXCIgXCIgKyBcIiVcIjtcbiAgd2luZFNwZWVkLmZpcnN0RWxlbWVudENoaWxkLnNyYyA9IHdpbmRJO1xuICB3aW5kU3BlZWQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpLnRleHRDb250ZW50ID1cbiAgICBkYXRhLmN1cnJlbnQud2luZF9rcGggKyBcIiBcIiArIFwia20vaFwiO1xufVxuXG5mdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xuICByZXR1cm4gaW5wdXQudmFsdWUgPyBpbnB1dC52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKSA6IFwicnVzdGF2aVwiO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZWFyY2hGb3JXZWF0aGVyKCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgc2VhcmNoV2VhdGhlckJ5Q2l0eShnZXRJbnB1dFZhbHVlKCkpO1xuICBsb2FkVWkoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRGFpbHkoZGF0YSkge1xuICBjb25zdCB3ZWVrID0gcGFyc2VEYWlseShkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5KTtcbiAgZGFpbHlXZWF0aGVyLmlubmVySFRNTCA9IFwiXCI7XG4gIHdlZWsuZm9yRWFjaCgoZGF5SW5mbykgPT4ge1xuICAgIGNvbnN0IGRpdldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHdlZWtEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRlbXBXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgIGRpdldyYXBwZXIuY2xhc3NOYW1lID0gXCJkYXktaW5mby13cmFwcGVyXCI7XG4gICAgd2Vla0RheS5jbGFzc05hbWUgPSBcIndlZWtkYXlcIjtcbiAgICBtYXhUZW1wLmNsYXNzTmFtZSA9IFwibWF4LXRlbXBcIjtcbiAgICBtaW5UZW1wLmNsYXNzTmFtZSA9IFwibWluLXRlbXBcIjtcbiAgICB0ZW1wV3JhcC5jbGFzc05hbWUgPSBcInRlbXAtd3JhcFwiO1xuICAgIGljb24uY2xhc3NOYW1lID0gXCJ3ZWF0aGVyLWljb25cIjtcblxuICAgIHdlZWtEYXkudGV4dENvbnRlbnQgPSBkYXlJbmZvLndlZWtEYXk7XG4gICAgbWF4VGVtcC50ZXh0Q29udGVudCA9IGAke2RheUluZm8ubWF4VGVtcH0gJHtTdHJpbmcuZnJvbUNvZGVQb2ludCg4NDUxKX1gO1xuICAgIG1pblRlbXAudGV4dENvbnRlbnQgPSBgJHtkYXlJbmZvLm1pblRlbXB9ICR7U3RyaW5nLmZyb21Db2RlUG9pbnQoODQ1MSl9YDtcbiAgICBpY29uLnNyYyA9IGRheUluZm8uaWNvblBhdGg7XG4gICAgaWNvbi5hbHQgPSBkYXlJbmZvLmNvbmRpdGlvbjtcblxuICAgIHRlbXBXcmFwLmFwcGVuZChtYXhUZW1wLCBtaW5UZW1wKTtcbiAgICBkaXZXcmFwcGVyLmFwcGVuZCh3ZWVrRGF5LCB0ZW1wV3JhcCwgaWNvbik7XG4gICAgZGFpbHlXZWF0aGVyLmFwcGVuZENoaWxkKGRpdldyYXBwZXIpO1xuICB9KTtcbn1cblxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgaWYgKGUua2V5ICE9IFwiRW50ZXJcIikgcmV0dXJuO1xuXG4gIHNlYXJjaEZvcldlYXRoZXIoKTtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufSk7XG5cbnNlYXJjaEltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgc2VhcmNoRm9yV2VhdGhlcigpO1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG59KTtcbiIsImltcG9ydCBjbG91ZCBmcm9tIFwiLi4vLi4vYXNzZXRzL2Nsb3VkLnN2Z1wiO1xuaW1wb3J0IGNsb3VkeSBmcm9tIFwiLi4vLi4vYXNzZXRzL2Nsb3VkeS5zdmdcIjtcbmltcG9ydCBsaWdodG5pbmcgZnJvbSBcIi4uLy4uL2Fzc2V0cy9saWdodG5pbmcuc3ZnXCI7XG5pbXBvcnQgbWlzdCBmcm9tIFwiLi4vLi4vYXNzZXRzL21pc3Quc3ZnXCI7XG5pbXBvcnQgbW9vbiBmcm9tIFwiLi4vLi4vYXNzZXRzL21vb24uc3ZnXCI7XG5pbXBvcnQgcmFpbnkgZnJvbSBcIi4uLy4uL2Fzc2V0cy9yYWlueS5zdmdcIjtcbmltcG9ydCBzbm93IGZyb20gXCIuLi8uLi9hc3NldHMvc25vdy5zdmdcIjtcbmltcG9ydCBzdW4gZnJvbSBcIi4uLy4uL2Fzc2V0cy9zdW4uc3ZnXCI7XG5cbmV4cG9ydCB7IHBhcnNlRGF0ZSwgcGFyc2VEYWlseSB9O1xuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZSkge1xuICAvLyBsZXQgZGF0ZSA9IGRhdGE/LmxvY2F0aW9uPy5sb2NhbHRpbWU7XG4gIGNvbnN0IHllYXIgPSBwYXJzZUludChkYXRlLnNwbGl0KFwiLVwiKVswXSk7XG4gIGNvbnN0IG1vbnRoSW5kZXggPSBwYXJzZUludChkYXRlLnNwbGl0KFwiLVwiKVsxXSkgLSAxO1xuICBjb25zdCBkYXkgPSBwYXJzZUludChkYXRlLnNwbGl0KFwiLVwiKVsyXS5zcGxpdChcIiBcIilbMF0pO1xuICBjb25zdCB0aW1lID0gZGF0ZS5zcGxpdChcIiBcIilbMV07XG4gIGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aEluZGV4LCBkYXkpO1xuICByZXR1cm4ge1xuICAgIG1vbnRoOiBnZXRNb250aChkYXRlLmdldE1vbnRoKCkpLFxuICAgIGRheTogZ2V0RGF5KGRhdGUuZ2V0RGF5KCkpLFxuICAgIHllYXI6IHllYXIudG9TdHJpbmcoKS5zbGljZSgyKSxcbiAgICBvcmQ6IGdldE9yZGluYWwoZGF0ZS5nZXREYXRlKCkpLFxuICAgIHRpbWUsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldERheShkYXkpIHtcbiAgY29uc3Qgd2Vla2RheSA9IFtcbiAgICBcIlN1bmRheVwiLFxuICAgIFwiTW9uZGF5XCIsXG4gICAgXCJUdWVzZGF5XCIsXG4gICAgXCJXZWRuZXNkYXlcIixcbiAgICBcIlRodXJzZGF5XCIsXG4gICAgXCJGcmlkYXlcIixcbiAgICBcIlNhdHVyZGF5XCIsXG4gIF07XG4gIHJldHVybiB3ZWVrZGF5W2RheV07XG59XG5cbmZ1bmN0aW9uIGdldE1vbnRoKG1vbnRoKSB7XG4gIGNvbnN0IG1vbnRocyA9IFtcbiAgICBcIkphblwiLFxuICAgIFwiRmViXCIsXG4gICAgXCJNYXJcIixcbiAgICBcIkFwclwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5cIixcbiAgICBcIkp1bFwiLFxuICAgIFwiQXVnXCIsXG4gICAgXCJTZXB0XCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF07XG5cbiAgcmV0dXJuIG1vbnRoc1ttb250aF07XG59XG5cbmZ1bmN0aW9uIGdldE9yZGluYWwobikge1xuICBsZXQgb3JkID0gXCJ0aFwiO1xuXG4gIGlmIChuICUgMTAgPT09IDEpIHtcbiAgICBvcmQgPSBcInN0XCI7XG4gIH1cblxuICBpZiAobiAlIDEwID09PSAyKSB7XG4gICAgb3JkID0gXCJuZFwiO1xuICB9XG5cbiAgaWYgKG4gJSAxMCA9PT0gMykge1xuICAgIG9yZCA9IFwicmRcIjtcbiAgfVxuICByZXR1cm4gbiArIG9yZDtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYWlseShkYXRhKSB7XG4gIGNvbnN0IHdlZWtJbmZvID0gW107XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICBpZiAoIWRhdGEpIHJldHVybjtcbiAgZGF0YS5mb3JFYWNoKChkYXkpID0+IHtcbiAgICB3ZWVrSW5mby5wdXNoKHtcbiAgICAgIHdlZWtEYXk6IHBhcnNlRGF0ZShkYXkuZGF0ZSkuZGF5LFxuICAgICAgbWF4VGVtcDogZGF5LmRheS5tYXh0ZW1wX2MsXG4gICAgICBtaW5UZW1wOiBkYXkuZGF5Lm1pbnRlbXBfYyxcbiAgICAgIGljb25QYXRoOiBnZXRJY29uKGRheS5kYXkuY29uZGl0aW9uLnRleHQpLFxuICAgICAgY29uZGl0aW9uOiBkYXkuZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHdlZWtJbmZvO1xufVxuXG5mdW5jdGlvbiBwYXJzZUhvdXJseSgpIHt9XG5cbmZ1bmN0aW9uIGdldEljb24oYykge1xuICBsZXQgaSA9IG51bGw7XG4gIHN3aXRjaCAoYykge1xuICAgIGNhc2UgXCJTdW5ueVwiOlxuICAgICAgaSA9IHN1bjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJDbGVhclwiOlxuICAgICAgaSA9IG1vb247XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQ2xvdWR5XCI6XG4gICAgY2FzZSBcIlBhdGNoeSBzbGVldCBwb3NzaWJsZVwiOlxuICAgIGNhc2UgXCJPdmVyY2FzdFwiOlxuICAgIGNhc2UgXCJQYXJ0bHkgY2xvdWR5XCI6XG4gICAgICBpID0gY2xvdWR5O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIk1pc3RcIjpcbiAgICBjYXNlIFwiRm9nXCI6XG4gICAgY2FzZSBcIkZyZWV6aW5nIGZvZ1wiOlxuICAgIGNhc2UgXCJQYXRjaHkgbGlnaHQgZHJpenpsZVwiOlxuICAgICAgaSA9IG1pc3Q7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiVGh1bmRlcnkgb3V0YnJlYWtzIHBvc3NpYmxlXCI6XG4gICAgICBpID0gbGlnaHRuaW5nO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBhdGNoeSByYWluIHBvc3NpYmxlXCI6XG4gICAgY2FzZSBcIkxpZ2h0IGRyaXp6bGVcIjpcbiAgICBjYXNlIFwiRnJlZXppbmcgZHJpenpsZVwiOlxuICAgIGNhc2UgXCJIZWF2eSBmcmVlemluZyBkcml6emxlXCI6XG4gICAgY2FzZSBcIlBhdGNoeSBsaWdodCByYWluXCI6XG4gICAgY2FzZSBcIkxpZ2h0IHJhaW5cIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiOlxuICAgIGNhc2UgXCJNb2RlcmF0ZSByYWluXCI6XG4gICAgY2FzZSBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIjpcbiAgICBjYXNlIFwiSGVhdnkgcmFpblwiOlxuICAgIGNhc2UgXCJMaWdodCBmcmVlemluZyByYWluXCI6XG4gICAgY2FzZSBcIk1vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW5cIjpcbiAgICBjYXNlIFwiTGlnaHQgcmFpbiBzaG93ZXJcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXJcIjpcbiAgICBjYXNlIFwiVG9ycmVudGlhbCByYWluIHNob3dlclwiOlxuICAgIGNhc2UgXCJQYXRjaHkgbGlnaHQgcmFpbiB3aXRoIHRodW5kZXJcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXJcIjpcbiAgICAgIGkgPSByYWlueTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQYXRjaHkgc25vdyBwb3NzaWJsZVwiOlxuICAgIGNhc2UgXCJCbG93aW5nIHNub3dcIjpcbiAgICBjYXNlIFwiQmxpenphcmRcIjpcbiAgICBjYXNlIFwiTGlnaHQgc2xlZXRcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXRcIjpcbiAgICBjYXNlIFwiUGF0Y2h5IGxpZ2h0IHNub3dcIjpcbiAgICBjYXNlIFwiTGlnaHQgc25vd1wiOlxuICAgIGNhc2UgXCJQYXRjaHkgbW9kZXJhdGUgc25vd1wiOlxuICAgIGNhc2UgXCJNb2RlcmF0ZSBzbm93XCI6XG4gICAgY2FzZSBcIlBhdGNoeSBoZWF2eSBzbm93XCI6XG4gICAgY2FzZSBcIkhlYXZ5IHNub3dcIjpcbiAgICBjYXNlIFwiSWNlIHBlbGxldHNcIjpcbiAgICBjYXNlIFwiTGlnaHQgc2xlZXQgc2hvd2Vyc1wiOlxuICAgIGNhc2UgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzXCI6XG4gICAgY2FzZSBcIkxpZ2h0IHNub3cgc2hvd2Vyc1wiOlxuICAgIGNhc2UgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHNob3dlcnNcIjpcbiAgICBjYXNlIFwiTGlnaHQgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiOlxuICAgIGNhc2UgXCJNb2RlcmF0ZSBvciBoZWF2eSBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCI6XG4gICAgY2FzZSBcIlBhdGNoeSBsaWdodCBzbm93IHdpdGggdGh1bmRlclwiOlxuICAgIGNhc2UgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHdpdGggdGh1bmRlclwiOlxuICAgICAgaSA9IHNub3c7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaSA9IGNsb3VkO1xuICB9XG5cbiAgcmV0dXJuIGk7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmRhaWx5LXdlYXRoZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGF5LWluZm8td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ud2Vla2RheSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbn1cblxuLm1heC10ZW1wIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcbn1cblxuLm1pbi10ZW1wIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi53ZWF0aGVyLWljb24ge1xuICB3aWR0aDogNTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XG4gIC8qIC5kYWlseS13ZWF0aGVyIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfSAqL1xuXG4gIC53ZWVrZGF5IHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICB9XG5cbiAgLm1heC10ZW1wIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMWVtO1xuICB9XG5cbiAgLm1pbi10ZW1wIHtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cblxuICAud2VhdGhlci1pY29uIHtcbiAgICB3aWR0aDogMzBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLndlZWtkYXkge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuXG4gIC5tYXgtdGVtcCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcbiAgfVxuXG4gIC5taW4tdGVtcCB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG5cbiAgLndlYXRoZXItaWNvbiB7XG4gICAgd2lkdGg6IDQwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODkwcHgpIHtcbiAgLmRhaWx5LXdlYXRoZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuZGF5LWluZm8td3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBnYXA6IDJlbTtcbiAgfVxuXG4gIC50ZW1wLXdyYXAge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG5cbiAgLndlZWtkYXkge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9kaXNwbGF5LXdlYXRoZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFOztPQUVLOztFQUVMO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmRhaWx5LXdlYXRoZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmRheS1pbmZvLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLndlZWtkYXkge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XFxufVxcblxcbi5tYXgtdGVtcCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4xZW07XFxufVxcblxcbi5taW4tdGVtcCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi53ZWF0aGVyLWljb24ge1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xcbiAgLyogLmRhaWx5LXdlYXRoZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH0gKi9cXG5cXG4gIC53ZWVrZGF5IHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xcbiAgfVxcblxcbiAgLm1heC10ZW1wIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMWVtO1xcbiAgfVxcblxcbiAgLm1pbi10ZW1wIHtcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIH1cXG5cXG4gIC53ZWF0aGVyLWljb24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAud2Vla2RheSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIH1cXG5cXG4gIC5tYXgtdGVtcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcXG4gIH1cXG5cXG4gIC5taW4tdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxuXFxuICAud2VhdGhlci1pY29uIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg5MHB4KSB7XFxuICAuZGFpbHktd2VhdGhlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuXFxuICAuZGF5LWluZm8td3JhcHBlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDJlbTtcXG4gIH1cXG5cXG4gIC50ZW1wLXdyYXAge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIH1cXG5cXG4gIC53ZWVrZGF5IHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5leHRyYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDAuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbi5oZWFkZXIge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuLmluZm8ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9leHRyYS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZXh0cmEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5pY29uIHtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2JhY2tncm91bmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYXBwIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwibWFpblwiXG4gICAgXCIuLi5cIlxuICAgIFwid2VhdGhlci1kaXNwbGF5XCI7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBuby1yZXBlYXQgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwYWRkaW5nOiA1ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcm93LWdhcDogNGVtO1xufVxuXG4ubWFpbiB7XG4gIGdyaWQtYXJlYTogbWFpbjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDFlbTtcbn1cblxuLndlYXRoZXItZGlzcGxheSB7XG4gIGdyaWQtYXJlYTogd2VhdGhlci1kaXNwbGF5O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYXBwIHtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgcGFkZGluZy10b3A6IDRlbTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2xheW91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLCtCQUErQjtFQUMvQjs7O3FCQUdtQjtFQUNuQixvRUFBMEQ7RUFDMUQsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFwcCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJtYWluXFxcIlxcbiAgICBcXFwiLi4uXFxcIlxcbiAgICBcXFwid2VhdGhlci1kaXNwbGF5XFxcIjtcXG4gIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvYmFja2dyb3VuZC5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcGFkZGluZzogNWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcm93LWdhcDogNGVtO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi53ZWF0aGVyLWRpc3BsYXkge1xcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyLWRpc3BsYXk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuYXBwIHtcXG4gICAgcGFkZGluZzogMmVtO1xcbiAgICBwYWRkaW5nLXRvcDogNGVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb25kaXRpb24ge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jaXR5IHtcbiAgbWFyZ2luLWJvdHRvbTogMC44ZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4udGltZSB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLnRlbXByZXR1cmUge1xuICBmb250LXNpemU6IDRyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2VhcmNoLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgd2lkdGg6IDE3MHB4O1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXTo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZWFyY2gtaWNvbiB7XG4gIGhlaWdodDogMS41ZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIGZsZXg6IDE7XG59XG5cbi5zZWFyY2gtaWNvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zZWFyY2gtYW5kLWN1cnJlbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb25kaXRpb24ge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5jaXR5IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuOGVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50aW1lIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLnRlbXByZXR1cmUge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uc2VhcmNoLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMC4yZW0gMC41ZW07XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgd2lkdGg6IDE3MHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zZWFyY2gtaWNvbiB7XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5zZWFyY2gtaWNvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sYXlvdXQuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VhcmNoLWFuZC1jdXJyZW50LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2V4dHJhLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rpc3BsYXktd2VhdGhlci5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJ1YmlrOndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBTUE7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWs6d2dodEA0MDA7NjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbkBpbXBvcnQgXFxcIi4vbGF5b3V0LmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9zZWFyY2gtYW5kLWN1cnJlbnQuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2V4dHJhLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9kaXNwbGF5LXdlYXRoZXJcXFwiO1xcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWtcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uLy4uL2Nzcy9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGxvYWRVaSB9IGZyb20gXCIuLi9kb20vZG9tXCI7XG5pbXBvcnQgc2VhcmNoV2VhdGhlckJ5Q2l0eSBmcm9tIFwiLi4vYXBpL2FwaUZ1bmN0aW9ucy5qc1wiO1xuXG4oYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgc2VhcmNoV2VhdGhlckJ5Q2l0eShcInRiaWxpc2lcIik7XG4gIGxvYWRVaShkYXRhKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG59KSgpO1xuIl0sIm5hbWVzIjpbInNlYXJjaFdlYXRoZXJCeUNpdHkiLCJjaXR5IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJkYXRhIiwianNvbiIsInBhcnNlRGF0ZSIsInBhcnNlRGFpbHkiLCJzZWFyY2hJIiwidGhlcm1vSSIsImh1bWlkaXR5SSIsInJhaW55SSIsIndpbmRJIiwiY29uZGl0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGF0ZSIsInRpbWUiLCJ0ZW1wcmV0dXJlIiwic2VhcmNoSW1nIiwiZmVlbHNMaWtlIiwiaHVtaWRpdHkiLCJjaGFuY2VPZlJhaW4iLCJ3aW5kU3BlZWQiLCJpbnB1dCIsImRhaWx5V2VhdGhlciIsImxvYWRVaSIsImdldElucHV0VmFsdWUiLCJsb2FkU2VhcmNoQW5kQ3VycmVudCIsImNvbnNvbGUiLCJsb2ciLCJsb2FkRXh0cmFJbmZvIiwicG9wdWxhdGVEYWlseSIsInNyYyIsIl9kYXRhJGN1cnJlbnQiLCJfZGF0YSRjdXJyZW50JGNvbmRpdGkiLCJfZGF0YSRsb2NhdGlvbiIsIl9kYXRhJGxvY2F0aW9uMiIsInRleHRDb250ZW50IiwiY3VycmVudCIsInRleHQiLCJsb2NhdGlvbiIsIm5hbWUiLCJkYXRlT2JqIiwibG9jYWx0aW1lIiwiZGF5Iiwib3JkIiwibW9udGgiLCJ5ZWFyIiwidGVtcF9jIiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsImZpcnN0RWxlbWVudENoaWxkIiwiZmVlbHNsaWtlX2MiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiZGFpbHlfY2hhbmNlX29mX3JhaW4iLCJ3aW5kX2twaCIsInZhbHVlIiwidHJpbSIsInRvTG93ZXJDYXNlIiwic2VhcmNoRm9yV2VhdGhlciIsIndlZWsiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwiZGF5SW5mbyIsImRpdldyYXBwZXIiLCJjcmVhdGVFbGVtZW50Iiwid2Vla0RheSIsIm1heFRlbXAiLCJtaW5UZW1wIiwidGVtcFdyYXAiLCJpY29uIiwiY2xhc3NOYW1lIiwiaWNvblBhdGgiLCJhbHQiLCJhcHBlbmQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5IiwiY2xvdWQiLCJjbG91ZHkiLCJsaWdodG5pbmciLCJtaXN0IiwibW9vbiIsInJhaW55Iiwic25vdyIsInN1biIsInBhcnNlSW50Iiwic3BsaXQiLCJtb250aEluZGV4IiwiRGF0ZSIsImdldE1vbnRoIiwiZ2V0RGF5IiwidG9TdHJpbmciLCJzbGljZSIsImdldE9yZGluYWwiLCJnZXREYXRlIiwid2Vla2RheSIsIm1vbnRocyIsIm4iLCJ3ZWVrSW5mbyIsInB1c2giLCJtYXh0ZW1wX2MiLCJtaW50ZW1wX2MiLCJnZXRJY29uIiwicGFyc2VIb3VybHkiLCJjIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=