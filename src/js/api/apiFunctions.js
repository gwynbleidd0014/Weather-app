import { getInputValue } from "../dom/dom.js";

export default async function searchWeatherByCity(city) {
  city =
    city === ""
      ? document.querySelector(".city").textContent.toLowerCase()
      : city;
  if (city === "rustavi") city = "176.221.252.21";
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=d409c877c1dc4a8f84d201629233006&q=${city}&days=7`,
    {
      mode: "cors",
    }
  );
  const data = await response.json();
  return data;
}
