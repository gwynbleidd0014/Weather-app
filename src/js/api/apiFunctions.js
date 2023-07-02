// function should recieve 1 parameter type of string and it should be name of city
// function then should fetch the weather api and console log the data recieved

export default async function searchWeatherByCity(city) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=d409c877c1dc4a8f84d201629233006&q=${city}&day=5`,
    {
      mode: "cors",
    }
  );
  const data = await response.json();
  return data;
}
