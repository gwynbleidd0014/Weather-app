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
    max-width: 400px;
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

@media screen and (max-width: 600px) {
  .weekday {
    margin-bottom: 1em;
    font-size: 1rem;
  }

  .max-temp {
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
`, "",{"version":3,"sources":["webpack://./src/css/display-weather.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE;;OAEK;;EAEL;IACE,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;EACvB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;EACtB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;EACtB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,cAAc;EAChB;;EAEA;IACE,mBAAmB;IACnB,WAAW;IACX,QAAQ;EACV;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;EACvB;AACF;;AAEA;EACE;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,eAAe;IACf,oBAAoB;EACtB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,WAAW;EACb;AACF","sourcesContent":[".daily-weather {\n  display: flex;\n  justify-content: space-between;\n  gap: 2em;\n  white-space: nowrap;\n}\n\n.day-info-wrapper {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n}\n\n.weekday {\n  font-size: 1.5rem;\n  margin-bottom: 1em;\n  letter-spacing: 1.4px;\n}\n\n.max-temp {\n  font-weight: 600;\n  font-size: 2rem;\n  margin-bottom: 0.1em;\n}\n\n.min-temp {\n  font-size: 1rem;\n  margin-bottom: 1em;\n}\n\n.weather-icon {\n  width: 50px;\n}\n\n@media screen and (max-width: 1050px) {\n  /* .daily-weather {\n      flex-direction: column;\n    } */\n\n  .weekday {\n    font-size: 0.8rem;\n    margin-bottom: 1em;\n    letter-spacing: 1.4px;\n  }\n\n  .max-temp {\n    font-weight: 600;\n    font-size: 1.2rem;\n    margin-bottom: 0.1em;\n  }\n\n  .min-temp {\n    font-size: 0.6rem;\n    margin-bottom: 1em;\n  }\n\n  .weather-icon {\n    width: 30px;\n  }\n}\n\n@media screen and (max-width: 1200px) {\n  .weekday {\n    margin-bottom: 1em;\n  }\n\n  .max-temp {\n    font-weight: 600;\n    font-size: 1.5rem;\n    margin-bottom: 0.1em;\n  }\n\n  .min-temp {\n    font-size: 0.8rem;\n    margin-bottom: 1em;\n  }\n\n  .weather-icon {\n    width: 40px;\n  }\n}\n\n@media screen and (max-width: 890px) {\n  .daily-weather {\n    flex-direction: column;\n    align-items: center;\n    max-width: 400px;\n    margin: 0 auto;\n  }\n\n  .day-info-wrapper {\n    flex-direction: row;\n    width: 100%;\n    gap: 2em;\n  }\n\n  .temp-wrap {\n    margin-left: auto;\n  }\n\n  .weekday {\n    font-size: 1.4rem;\n    margin-bottom: 1em;\n    letter-spacing: 1.4px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .weekday {\n    margin-bottom: 1em;\n    font-size: 1rem;\n  }\n\n  .max-temp {\n    font-weight: 600;\n    font-size: 1rem;\n    margin-bottom: 0.1em;\n  }\n\n  .min-temp {\n    font-size: 0.7rem;\n    margin-bottom: 1em;\n  }\n\n  .weather-icon {\n    width: 30px;\n  }\n}\n"],"sourceRoot":""}]);
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
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/layout.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,0BAA0B;EAC1B,+BAA+B;EAC/B;;;qBAGmB;EACnB,oEAA0D;EAC1D,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,QAAQ;AACV;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE;IACE,YAAY;IACZ,gBAAgB;EAClB;AACF","sourcesContent":[".app {\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  overflow-x: hidden;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 2fr 1fr;\n  grid-template-areas:\n    \"main\"\n    \"...\"\n    \"weather-display\";\n  background: url(../assets/background.png) no-repeat center;\n  background-size: cover;\n  padding: 5em;\n  color: white;\n  row-gap: 4em;\n}\n\n.main {\n  grid-area: main;\n  display: flex;\n  justify-content: space-between;\n  gap: 1em;\n}\n\n.weather-display {\n  grid-area: weather-display;\n}\n\n@media screen and (max-width: 600px) {\n  .app {\n    padding: 1em;\n    padding-top: 4em;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ087QUFDcUI7QUFFekQsQ0FBQyxrQkFBa0I7RUFDakIsTUFBTTlHLElBQUksR0FBRyxNQUFNTCxnRUFBbUIsQ0FBQyxTQUFTLENBQUM7RUFDakQyQixnREFBTSxDQUFDdEIsSUFBSSxDQUFDO0VBQ1p5QixPQUFPLENBQUNDLEdBQUcsQ0FBQzFCLElBQUksQ0FBQztBQUNuQixDQUFDLEVBQUUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvanMvYXBpL2FwaUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9kb20vZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Nzcy9kaXNwbGF5LXdlYXRoZXIuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Nzcy9leHRyYS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL2xheW91dC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL3NlYXJjaC1hbmQtY3VycmVudC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9tYWluL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZ1bmN0aW9uIHNob3VsZCByZWNpZXZlIDEgcGFyYW1ldGVyIHR5cGUgb2Ygc3RyaW5nIGFuZCBpdCBzaG91bGQgYmUgbmFtZSBvZiBjaXR5XG4vLyBmdW5jdGlvbiB0aGVuIHNob3VsZCBmZXRjaCB0aGUgd2VhdGhlciBhcGkgYW5kIGNvbnNvbGUgbG9nIHRoZSBkYXRhIHJlY2lldmVkXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFdlYXRoZXJCeUNpdHkoY2l0eSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1kNDA5Yzg3N2MxZGM0YThmODRkMjAxNjI5MjMzMDA2JnE9JHtjaXR5fSZkYXlzPTdgLFxuICAgIHtcbiAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgIH1cbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgeyBwYXJzZURhdGUsIHBhcnNlRGFpbHkgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHMuanNcIjtcbmltcG9ydCBzZWFyY2hJIGZyb20gXCIuLi8uLi9hc3NldHMvc2VhcmNoLnN2Z1wiO1xuaW1wb3J0IHRoZXJtb0kgZnJvbSBcIi4uLy4uL2Fzc2V0cy90aGVybW8uc3ZnXCI7XG5pbXBvcnQgaHVtaWRpdHlJIGZyb20gXCIuLi8uLi9hc3NldHMvaHVtaWRpdHkuc3ZnXCI7XG5pbXBvcnQgcmFpbnlJIGZyb20gXCIuLi8uLi9hc3NldHMvcmFpbnkuc3ZnXCI7XG5pbXBvcnQgd2luZEkgZnJvbSBcIi4uLy4uL2Fzc2V0cy93aW5kLnN2Z1wiO1xuaW1wb3J0IHNlYXJjaFdlYXRoZXJCeUNpdHkgZnJvbSBcIi4uL2FwaS9hcGlGdW5jdGlvbnMuanNcIjtcblxuLy9ET00gRUxFTUVOVFNcbmNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZGl0aW9uXCIpO1xuY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eVwiKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIik7XG5jb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lXCIpO1xuY29uc3QgdGVtcHJldHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcHJldHVyZVwiKTtcbmNvbnN0IHNlYXJjaEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWljb25cIik7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzLWxpa2VcIik7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIik7XG5jb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5jZS1vZi1yYWluXCIpO1xuY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kLXNwZWVkXCIpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG5jb25zdCBkYWlseVdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5LXdlYXRoZXJcIik7XG5cbmV4cG9ydCB7IGxvYWRVaSwgZ2V0SW5wdXRWYWx1ZSB9O1xuXG5mdW5jdGlvbiBsb2FkVWkoZGF0YSkge1xuICBsb2FkU2VhcmNoQW5kQ3VycmVudChkYXRhKTtcbiAgY29uc29sZS5sb2coXCJkb25lb25lXCIpO1xuICBsb2FkRXh0cmFJbmZvKGRhdGEpO1xuICBjb25zb2xlLmxvZyhcImRvbmV0d29cIik7XG4gIHBvcHVsYXRlRGFpbHkoZGF0YSk7XG4gIGNvbnNvbGUubG9nKFwiZG9uZXRyZWVcIik7XG4gIHNlYXJjaEltZy5zcmMgPSBzZWFyY2hJO1xufVxuXG5mdW5jdGlvbiBsb2FkU2VhcmNoQW5kQ3VycmVudChkYXRhKSB7XG4gIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGRhdGE/LmN1cnJlbnQ/LmNvbmRpdGlvbj8udGV4dDtcbiAgY2l0eS50ZXh0Q29udGVudCA9IGRhdGE/LmxvY2F0aW9uPy5uYW1lO1xuICBjb25zdCBkYXRlT2JqID0gcGFyc2VEYXRlKGRhdGE/LmxvY2F0aW9uPy5sb2NhbHRpbWUpO1xuICBkYXRlLnRleHRDb250ZW50ID0gYCR7ZGF0ZU9iai5kYXl9LCAke2RhdGVPYmoub3JkfSAke2RhdGVPYmoubW9udGh9JyR7ZGF0ZU9iai55ZWFyfWA7XG4gIHRpbWUudGV4dENvbnRlbnQgPSBkYXRlT2JqLnRpbWU7XG4gIHRlbXByZXR1cmUudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQudGVtcF9jICsgU3RyaW5nLmZyb21Db2RlUG9pbnQoODQ1MSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRFeHRyYUluZm8oZGF0YSkge1xuICBmZWVsc0xpa2UuZmlyc3RFbGVtZW50Q2hpbGQuc3JjID0gdGhlcm1vSTtcbiAgZmVlbHNMaWtlLnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKS50ZXh0Q29udGVudCA9XG4gICAgZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jICsgXCIgXCIgKyBTdHJpbmcuZnJvbUNvZGVQb2ludCg4NDUxKTtcbiAgaHVtaWRpdHkuZmlyc3RFbGVtZW50Q2hpbGQuc3JjID0gaHVtaWRpdHlJO1xuICBodW1pZGl0eS5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIikudGV4dENvbnRlbnQgPVxuICAgIGRhdGEuY3VycmVudC5odW1pZGl0eSArIFwiIFwiICsgXCIlXCI7XG4gIGNoYW5jZU9mUmFpbi5maXJzdEVsZW1lbnRDaGlsZC5zcmMgPSByYWlueUk7XG4gIGNoYW5jZU9mUmFpbi5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIikudGV4dENvbnRlbnQgPVxuICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluICsgXCIgXCIgKyBcIiVcIjtcbiAgd2luZFNwZWVkLmZpcnN0RWxlbWVudENoaWxkLnNyYyA9IHdpbmRJO1xuICB3aW5kU3BlZWQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpLnRleHRDb250ZW50ID1cbiAgICBkYXRhLmN1cnJlbnQud2luZF9rcGggKyBcIiBcIiArIFwia20vaFwiO1xufVxuXG5mdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xuICByZXR1cm4gaW5wdXQudmFsdWUgPyBpbnB1dC52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKSA6IFwicnVzdGF2aVwiO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZWFyY2hGb3JXZWF0aGVyKCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgc2VhcmNoV2VhdGhlckJ5Q2l0eShnZXRJbnB1dFZhbHVlKCkpO1xuICBsb2FkVWkoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRGFpbHkoZGF0YSkge1xuICBjb25zdCB3ZWVrID0gcGFyc2VEYWlseShkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5KTtcbiAgZGFpbHlXZWF0aGVyLmlubmVySFRNTCA9IFwiXCI7XG4gIHdlZWsuZm9yRWFjaCgoZGF5SW5mbykgPT4ge1xuICAgIGNvbnN0IGRpdldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHdlZWtEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRlbXBXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgIGRpdldyYXBwZXIuY2xhc3NOYW1lID0gXCJkYXktaW5mby13cmFwcGVyXCI7XG4gICAgd2Vla0RheS5jbGFzc05hbWUgPSBcIndlZWtkYXlcIjtcbiAgICBtYXhUZW1wLmNsYXNzTmFtZSA9IFwibWF4LXRlbXBcIjtcbiAgICBtaW5UZW1wLmNsYXNzTmFtZSA9IFwibWluLXRlbXBcIjtcbiAgICB0ZW1wV3JhcC5jbGFzc05hbWUgPSBcInRlbXAtd3JhcFwiO1xuICAgIGljb24uY2xhc3NOYW1lID0gXCJ3ZWF0aGVyLWljb25cIjtcblxuICAgIHdlZWtEYXkudGV4dENvbnRlbnQgPSBkYXlJbmZvLndlZWtEYXk7XG4gICAgbWF4VGVtcC50ZXh0Q29udGVudCA9IGAke2RheUluZm8ubWF4VGVtcH0gJHtTdHJpbmcuZnJvbUNvZGVQb2ludCg4NDUxKX1gO1xuICAgIG1pblRlbXAudGV4dENvbnRlbnQgPSBgJHtkYXlJbmZvLm1pblRlbXB9ICR7U3RyaW5nLmZyb21Db2RlUG9pbnQoODQ1MSl9YDtcbiAgICBpY29uLnNyYyA9IGRheUluZm8uaWNvblBhdGg7XG4gICAgaWNvbi5hbHQgPSBkYXlJbmZvLmNvbmRpdGlvbjtcblxuICAgIHRlbXBXcmFwLmFwcGVuZChtYXhUZW1wLCBtaW5UZW1wKTtcbiAgICBkaXZXcmFwcGVyLmFwcGVuZCh3ZWVrRGF5LCB0ZW1wV3JhcCwgaWNvbik7XG4gICAgZGFpbHlXZWF0aGVyLmFwcGVuZENoaWxkKGRpdldyYXBwZXIpO1xuICB9KTtcbn1cblxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgaWYgKGUua2V5ICE9IFwiRW50ZXJcIikgcmV0dXJuO1xuXG4gIHNlYXJjaEZvcldlYXRoZXIoKTtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufSk7XG5cbnNlYXJjaEltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgc2VhcmNoRm9yV2VhdGhlcigpO1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG59KTtcblxuZnVuY3Rpb24gcHJvZHVjdE9mQXJyYXkoYXJyKSB7XG4gIGlmIChhcnIubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGFyclswXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXSArIHByb2R1Y3RPZkFycmF5KGFyci5zbGljZShhcnIubGVuZ3RoIC0gMSkpO1xuICB9XG59XG5cbnByb2R1Y3RPZkFycmF5KFsxLCAyLCAzXSk7XG5cbmZ1bmN0aW9uIHRvdGFsSW50KHRpbWVzLCBuKSB7XG4gIGlmICh0aW1lcyA9PT0gMSkge1xuICAgIHJldHVybiBbbl07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtuLCAuLi50b3RhbEludCh0aW1lcyAtIDEsIG4pXTtcbiAgfVxufVxuXG5jb25zb2xlLmxvZyh0b3RhbEludCg0LCA1KSk7XG4iLCJpbXBvcnQgY2xvdWQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9jbG91ZC5zdmdcIjtcbmltcG9ydCBjbG91ZHkgZnJvbSBcIi4uLy4uL2Fzc2V0cy9jbG91ZHkuc3ZnXCI7XG5pbXBvcnQgbGlnaHRuaW5nIGZyb20gXCIuLi8uLi9hc3NldHMvbGlnaHRuaW5nLnN2Z1wiO1xuaW1wb3J0IG1pc3QgZnJvbSBcIi4uLy4uL2Fzc2V0cy9taXN0LnN2Z1wiO1xuaW1wb3J0IG1vb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9tb29uLnN2Z1wiO1xuaW1wb3J0IHJhaW55IGZyb20gXCIuLi8uLi9hc3NldHMvcmFpbnkuc3ZnXCI7XG5pbXBvcnQgc25vdyBmcm9tIFwiLi4vLi4vYXNzZXRzL3Nub3cuc3ZnXCI7XG5pbXBvcnQgc3VuIGZyb20gXCIuLi8uLi9hc3NldHMvc3VuLnN2Z1wiO1xuXG5leHBvcnQgeyBwYXJzZURhdGUsIHBhcnNlRGFpbHkgfTtcblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGUpIHtcbiAgLy8gbGV0IGRhdGUgPSBkYXRhPy5sb2NhdGlvbj8ubG9jYWx0aW1lO1xuICBjb25zdCB5ZWFyID0gcGFyc2VJbnQoZGF0ZS5zcGxpdChcIi1cIilbMF0pO1xuICBjb25zdCBtb250aEluZGV4ID0gcGFyc2VJbnQoZGF0ZS5zcGxpdChcIi1cIilbMV0pIC0gMTtcbiAgY29uc3QgZGF5ID0gcGFyc2VJbnQoZGF0ZS5zcGxpdChcIi1cIilbMl0uc3BsaXQoXCIgXCIpWzBdKTtcbiAgY29uc3QgdGltZSA9IGRhdGUuc3BsaXQoXCIgXCIpWzFdO1xuICBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGhJbmRleCwgZGF5KTtcbiAgcmV0dXJuIHtcbiAgICBtb250aDogZ2V0TW9udGgoZGF0ZS5nZXRNb250aCgpKSxcbiAgICBkYXk6IGdldERheShkYXRlLmdldERheSgpKSxcbiAgICB5ZWFyOiB5ZWFyLnRvU3RyaW5nKCkuc2xpY2UoMiksXG4gICAgb3JkOiBnZXRPcmRpbmFsKGRhdGUuZ2V0RGF0ZSgpKSxcbiAgICB0aW1lLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXREYXkoZGF5KSB7XG4gIGNvbnN0IHdlZWtkYXkgPSBbXG4gICAgXCJTdW5kYXlcIixcbiAgICBcIk1vbmRheVwiLFxuICAgIFwiVHVlc2RheVwiLFxuICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgXCJUaHVyc2RheVwiLFxuICAgIFwiRnJpZGF5XCIsXG4gICAgXCJTYXR1cmRheVwiLFxuICBdO1xuICByZXR1cm4gd2Vla2RheVtkYXldO1xufVxuXG5mdW5jdGlvbiBnZXRNb250aChtb250aCkge1xuICBjb25zdCBtb250aHMgPSBbXG4gICAgXCJKYW5cIixcbiAgICBcIkZlYlwiLFxuICAgIFwiTWFyXCIsXG4gICAgXCJBcHJcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuXCIsXG4gICAgXCJKdWxcIixcbiAgICBcIkF1Z1wiLFxuICAgIFwiU2VwdFwiLFxuICAgIFwiT2N0XCIsXG4gICAgXCJOb3ZcIixcbiAgICBcIkRlY1wiLFxuICBdO1xuXG4gIHJldHVybiBtb250aHNbbW9udGhdO1xufVxuXG5mdW5jdGlvbiBnZXRPcmRpbmFsKG4pIHtcbiAgbGV0IG9yZCA9IFwidGhcIjtcblxuICBpZiAobiAlIDEwID09PSAxKSB7XG4gICAgb3JkID0gXCJzdFwiO1xuICB9XG5cbiAgaWYgKG4gJSAxMCA9PT0gMikge1xuICAgIG9yZCA9IFwibmRcIjtcbiAgfVxuXG4gIGlmIChuICUgMTAgPT09IDMpIHtcbiAgICBvcmQgPSBcInJkXCI7XG4gIH1cbiAgcmV0dXJuIG4gKyBvcmQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGFpbHkoZGF0YSkge1xuICBjb25zdCB3ZWVrSW5mbyA9IFtdO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgaWYgKCFkYXRhKSByZXR1cm47XG4gIGRhdGEuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgd2Vla0luZm8ucHVzaCh7XG4gICAgICB3ZWVrRGF5OiBwYXJzZURhdGUoZGF5LmRhdGUpLmRheSxcbiAgICAgIG1heFRlbXA6IGRheS5kYXkubWF4dGVtcF9jLFxuICAgICAgbWluVGVtcDogZGF5LmRheS5taW50ZW1wX2MsXG4gICAgICBpY29uUGF0aDogZ2V0SWNvbihkYXkuZGF5LmNvbmRpdGlvbi50ZXh0KSxcbiAgICAgIGNvbmRpdGlvbjogZGF5LmRheS5jb25kaXRpb24udGV4dCxcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiB3ZWVrSW5mbztcbn1cblxuZnVuY3Rpb24gcGFyc2VIb3VybHkoKSB7fVxuXG5mdW5jdGlvbiBnZXRJY29uKGMpIHtcbiAgbGV0IGkgPSBudWxsO1xuICBzd2l0Y2ggKGMpIHtcbiAgICBjYXNlIFwiU3VubnlcIjpcbiAgICAgIGkgPSBzdW47XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQ2xlYXJcIjpcbiAgICAgIGkgPSBtb29uO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkNsb3VkeVwiOlxuICAgIGNhc2UgXCJQYXRjaHkgc2xlZXQgcG9zc2libGVcIjpcbiAgICBjYXNlIFwiT3ZlcmNhc3RcIjpcbiAgICBjYXNlIFwiUGFydGx5IGNsb3VkeVwiOlxuICAgICAgaSA9IGNsb3VkeTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJNaXN0XCI6XG4gICAgY2FzZSBcIkZvZ1wiOlxuICAgIGNhc2UgXCJGcmVlemluZyBmb2dcIjpcbiAgICBjYXNlIFwiUGF0Y2h5IGxpZ2h0IGRyaXp6bGVcIjpcbiAgICAgIGkgPSBtaXN0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlRodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZVwiOlxuICAgICAgaSA9IGxpZ2h0bmluZztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiOlxuICAgIGNhc2UgXCJMaWdodCBkcml6emxlXCI6XG4gICAgY2FzZSBcIkZyZWV6aW5nIGRyaXp6bGVcIjpcbiAgICBjYXNlIFwiSGVhdnkgZnJlZXppbmcgZHJpenpsZVwiOlxuICAgIGNhc2UgXCJQYXRjaHkgbGlnaHQgcmFpblwiOlxuICAgIGNhc2UgXCJMaWdodCByYWluXCI6XG4gICAgY2FzZSBcIk1vZGVyYXRlIHJhaW4gYXQgdGltZXNcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgcmFpblwiOlxuICAgIGNhc2UgXCJIZWF2eSByYWluIGF0IHRpbWVzXCI6XG4gICAgY2FzZSBcIkhlYXZ5IHJhaW5cIjpcbiAgICBjYXNlIFwiTGlnaHQgZnJlZXppbmcgcmFpblwiOlxuICAgIGNhc2UgXCJNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluXCI6XG4gICAgY2FzZSBcIkxpZ2h0IHJhaW4gc2hvd2VyXCI6XG4gICAgY2FzZSBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyXCI6XG4gICAgY2FzZSBcIlRvcnJlbnRpYWwgcmFpbiBzaG93ZXJcIjpcbiAgICBjYXNlIFwiUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyXCI6XG4gICAgY2FzZSBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyXCI6XG4gICAgICBpID0gcmFpbnk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUGF0Y2h5IHNub3cgcG9zc2libGVcIjpcbiAgICBjYXNlIFwiQmxvd2luZyBzbm93XCI6XG4gICAgY2FzZSBcIkJsaXp6YXJkXCI6XG4gICAgY2FzZSBcIkxpZ2h0IHNsZWV0XCI6XG4gICAgY2FzZSBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0XCI6XG4gICAgY2FzZSBcIlBhdGNoeSBsaWdodCBzbm93XCI6XG4gICAgY2FzZSBcIkxpZ2h0IHNub3dcIjpcbiAgICBjYXNlIFwiUGF0Y2h5IG1vZGVyYXRlIHNub3dcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgc25vd1wiOlxuICAgIGNhc2UgXCJQYXRjaHkgaGVhdnkgc25vd1wiOlxuICAgIGNhc2UgXCJIZWF2eSBzbm93XCI6XG4gICAgY2FzZSBcIkljZSBwZWxsZXRzXCI6XG4gICAgY2FzZSBcIkxpZ2h0IHNsZWV0IHNob3dlcnNcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2Vyc1wiOlxuICAgIGNhc2UgXCJMaWdodCBzbm93IHNob3dlcnNcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyBzaG93ZXJzXCI6XG4gICAgY2FzZSBcIkxpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiOlxuICAgIGNhc2UgXCJQYXRjaHkgbGlnaHQgc25vdyB3aXRoIHRodW5kZXJcIjpcbiAgICBjYXNlIFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcIjpcbiAgICAgIGkgPSBzbm93O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGkgPSBjbG91ZDtcbiAgfVxuXG4gIHJldHVybiBpO1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5kYWlseS13ZWF0aGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmRheS1pbmZvLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLndlZWtkYXkge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG59XG5cbi5tYXgtdGVtcCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4xZW07XG59XG5cbi5taW4tdGVtcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4ud2VhdGhlci1pY29uIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xuICAvKiAuZGFpbHktd2VhdGhlciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH0gKi9cblxuICAud2Vla2RheSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgfVxuXG4gIC5tYXgtdGVtcCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcbiAgfVxuXG4gIC5taW4tdGVtcCB7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG5cbiAgLndlYXRoZXItaWNvbiB7XG4gICAgd2lkdGg6IDMwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC53ZWVrZGF5IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cblxuICAubWF4LXRlbXAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XG4gIH1cblxuICAubWluLXRlbXAge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuXG4gIC53ZWF0aGVyLWljb24ge1xuICAgIHdpZHRoOiA0MHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg5MHB4KSB7XG4gIC5kYWlseS13ZWF0aGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC5kYXktaW5mby13cmFwcGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdhcDogMmVtO1xuICB9XG5cbiAgLnRlbXAtd3JhcCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cblxuICAud2Vla2RheSB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAud2Vla2RheSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC5tYXgtdGVtcCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XG4gIH1cblxuICAubWluLXRlbXAge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuXG4gIC53ZWF0aGVyLWljb24ge1xuICAgIHdpZHRoOiAzMHB4O1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZGlzcGxheS13ZWF0aGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsUUFBUTtFQUNSLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRTs7T0FFSzs7RUFFTDtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5kYWlseS13ZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5kYXktaW5mby13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi53ZWVrZGF5IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xcbn1cXG5cXG4ubWF4LXRlbXAge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuMWVtO1xcbn1cXG5cXG4ubWluLXRlbXAge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4ud2VhdGhlci1pY29uIHtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcXG4gIC8qIC5kYWlseS13ZWF0aGVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9ICovXFxuXFxuICAud2Vla2RheSB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjRweDtcXG4gIH1cXG5cXG4gIC5tYXgtdGVtcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcXG4gIH1cXG5cXG4gIC5taW4tdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxuXFxuICAud2VhdGhlci1pY29uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgLndlZWtkYXkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxuXFxuICAubWF4LXRlbXAge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XFxuICB9XFxuXFxuICAubWluLXRlbXAge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgfVxcblxcbiAgLndlYXRoZXItaWNvbiB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4OTBweCkge1xcbiAgLmRhaWx5LXdlYXRoZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG5cXG4gIC5kYXktaW5mby13cmFwcGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMmVtO1xcbiAgfVxcblxcbiAgLnRlbXAtd3JhcCB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgfVxcblxcbiAgLndlZWtkYXkge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAud2Vla2RheSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgLm1heC10ZW1wIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcXG4gIH1cXG5cXG4gIC5taW4tdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxuXFxuICAud2VhdGhlci1pY29uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmV4dHJhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMC41ZW07XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmljb24ge1xuICB3aWR0aDogMjVweDtcbn1cblxuLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG4uaW5mbyB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaW5mbyB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gIH1cblxuICAuaWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9leHRyYS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5leHRyYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmljb24ge1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi5pbmZvIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5pbmZvIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgfVxcblxcbiAgLmljb24ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvYmFja2dyb3VuZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5hcHAge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJtYWluXCJcbiAgICBcIi4uLlwiXG4gICAgXCJ3ZWF0aGVyLWRpc3BsYXlcIjtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIG5vLXJlcGVhdCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBhZGRpbmc6IDVlbTtcbiAgY29sb3I6IHdoaXRlO1xuICByb3ctZ2FwOiA0ZW07XG59XG5cbi5tYWluIHtcbiAgZ3JpZC1hcmVhOiBtYWluO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMWVtO1xufVxuXG4ud2VhdGhlci1kaXNwbGF5IHtcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyLWRpc3BsYXk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5hcHAge1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBwYWRkaW5nLXRvcDogNGVtO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbGF5b3V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsK0JBQStCO0VBQy9COzs7cUJBR21CO0VBQ25CLG9FQUEwRDtFQUMxRCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYXBwIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIm1haW5cXFwiXFxuICAgIFxcXCIuLi5cXFwiXFxuICAgIFxcXCJ3ZWF0aGVyLWRpc3BsYXlcXFwiO1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwYWRkaW5nOiA1ZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICByb3ctZ2FwOiA0ZW07XFxufVxcblxcbi5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLndlYXRoZXItZGlzcGxheSB7XFxuICBncmlkLWFyZWE6IHdlYXRoZXItZGlzcGxheTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5hcHAge1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIHBhZGRpbmctdG9wOiA0ZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNvbmRpdGlvbiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNpdHkge1xuICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi50aW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4udGVtcHJldHVyZSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zZWFyY2gtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB3aWR0aDogMTcwcHg7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgZmxleDogMTtcbn1cblxuLnNlYXJjaC1pY29uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29uZGl0aW9uIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB3aGl0ZS1zcGFjZTogd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cblxuICAuY2l0eSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgLmRhdGUtdGltZSB7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gIH1cblxuICAudGVtcHJldHVyZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuXG4gIC5zZWFyY2gtaWNvbiB7XG4gICAgaGVpZ2h0OiAxZW07XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zZWFyY2gtYW5kLWN1cnJlbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb25kaXRpb24ge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5jaXR5IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuOGVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50aW1lIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLnRlbXByZXR1cmUge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uc2VhcmNoLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMC4yZW0gMC41ZW07XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgd2lkdGg6IDE3MHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zZWFyY2gtaWNvbiB7XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5zZWFyY2gtaWNvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuY29uZGl0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHdoaXRlLXNwYWNlOiB3cmFwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxuXFxuICAuY2l0eSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC5kYXRlLXRpbWUge1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gIH1cXG5cXG4gIC50ZW1wcmV0dXJlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtaWNvbiB7XFxuICAgIGhlaWdodDogMWVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGF5b3V0LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaC1hbmQtY3VycmVudC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9leHRyYS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaXNwbGF5LXdlYXRoZXIuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpazp3Z2h0QDQwMDs2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YWZ0ZXIsXG4qOjpiZWZvcmUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU1BOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJ1YmlrOndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5AaW1wb3J0IFxcXCIuL2xheW91dC5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vc2VhcmNoLWFuZC1jdXJyZW50LmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9leHRyYS5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vZGlzcGxheS13ZWF0aGVyXFxcIjtcXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogXFxcIlJ1YmlrXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi8uLi9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBsb2FkVWkgfSBmcm9tIFwiLi4vZG9tL2RvbVwiO1xuaW1wb3J0IHNlYXJjaFdlYXRoZXJCeUNpdHkgZnJvbSBcIi4uL2FwaS9hcGlGdW5jdGlvbnMuanNcIjtcblxuKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHNlYXJjaFdlYXRoZXJCeUNpdHkoXCJ0YmlsaXNpXCIpO1xuICBsb2FkVWkoZGF0YSk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xufSkoKTtcbiJdLCJuYW1lcyI6WyJzZWFyY2hXZWF0aGVyQnlDaXR5IiwiY2l0eSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtb2RlIiwiZGF0YSIsImpzb24iLCJwYXJzZURhdGUiLCJwYXJzZURhaWx5Iiwic2VhcmNoSSIsInRoZXJtb0kiLCJodW1pZGl0eUkiLCJyYWlueUkiLCJ3aW5kSSIsImNvbmRpdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRhdGUiLCJ0aW1lIiwidGVtcHJldHVyZSIsInNlYXJjaEltZyIsImZlZWxzTGlrZSIsImh1bWlkaXR5IiwiY2hhbmNlT2ZSYWluIiwid2luZFNwZWVkIiwiaW5wdXQiLCJkYWlseVdlYXRoZXIiLCJsb2FkVWkiLCJnZXRJbnB1dFZhbHVlIiwibG9hZFNlYXJjaEFuZEN1cnJlbnQiLCJjb25zb2xlIiwibG9nIiwibG9hZEV4dHJhSW5mbyIsInBvcHVsYXRlRGFpbHkiLCJzcmMiLCJfZGF0YSRjdXJyZW50IiwiX2RhdGEkY3VycmVudCRjb25kaXRpIiwiX2RhdGEkbG9jYXRpb24iLCJfZGF0YSRsb2NhdGlvbjIiLCJ0ZXh0Q29udGVudCIsImN1cnJlbnQiLCJ0ZXh0IiwibG9jYXRpb24iLCJuYW1lIiwiZGF0ZU9iaiIsImxvY2FsdGltZSIsImRheSIsIm9yZCIsIm1vbnRoIiwieWVhciIsInRlbXBfYyIsIlN0cmluZyIsImZyb21Db2RlUG9pbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImZlZWxzbGlrZV9jIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImRhaWx5X2NoYW5jZV9vZl9yYWluIiwid2luZF9rcGgiLCJ2YWx1ZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsInNlYXJjaEZvcldlYXRoZXIiLCJ3ZWVrIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsImRheUluZm8iLCJkaXZXcmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsIndlZWtEYXkiLCJtYXhUZW1wIiwibWluVGVtcCIsInRlbXBXcmFwIiwiaWNvbiIsImNsYXNzTmFtZSIsImljb25QYXRoIiwiYWx0IiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleSIsInByb2R1Y3RPZkFycmF5IiwiYXJyIiwibGVuZ3RoIiwic2xpY2UiLCJ0b3RhbEludCIsInRpbWVzIiwibiIsImNsb3VkIiwiY2xvdWR5IiwibGlnaHRuaW5nIiwibWlzdCIsIm1vb24iLCJyYWlueSIsInNub3ciLCJzdW4iLCJwYXJzZUludCIsInNwbGl0IiwibW9udGhJbmRleCIsIkRhdGUiLCJnZXRNb250aCIsImdldERheSIsInRvU3RyaW5nIiwiZ2V0T3JkaW5hbCIsImdldERhdGUiLCJ3ZWVrZGF5IiwibW9udGhzIiwid2Vla0luZm8iLCJwdXNoIiwibWF4dGVtcF9jIiwibWludGVtcF9jIiwiZ2V0SWNvbiIsInBhcnNlSG91cmx5IiwiYyIsImkiXSwic291cmNlUm9vdCI6IiJ9