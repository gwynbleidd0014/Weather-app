import "../../css/style.css";
import { loadUi } from "../dom/dom";
import searchWeatherByCity from "../api/apiFunctions.js";

(async function () {
  const data = await searchWeatherByCity("tbilisi");
  loadUi(data);
  console.log(data);
})();
