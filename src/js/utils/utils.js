import cloud from "../../assets/cloud.svg";
import cloudy from "../../assets/cloudy.svg";
import lightning from "../../assets/lightning.svg";
import mist from "../../assets/mist.svg";
import moon from "../../assets/moon.svg";
import rainy from "../../assets/rainy.svg";
import snow from "../../assets/snow.svg";
import sun from "../../assets/sun.svg";

export { parseDate, parseDaily };

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
    time,
  };
}

function getDay(day) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[day];
}

function getMonth(month) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

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
  data.forEach((day) => {
    weekInfo.push({
      weekDay: parseDate(day.date).day,
      maxTemp: day.day.maxtemp_c,
      minTemp: day.day.mintemp_c,
      iconPath: getIcon(day.day.condition.text),
      condition: day.day.condition.text,
    });
  });
  return weekInfo;
}

function parseHourly() {}

function getIcon(c) {
  let i = null;
  switch (c) {
    case "Sunny":
      i = sun;
      break;
    case "Clear":
      i = moon;
      break;
    case "Cloudy":
    case "Patchy sleet possible":
    case "Overcast":
    case "Partly cloudy":
      i = cloudy;
      break;
    case "Mist":
    case "Fog":
    case "Freezing fog":
    case "Patchy light drizzle":
      i = mist;
      break;
    case "Thundery outbreaks possible":
      i = lightning;
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
      i = rainy;
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
      i = snow;
      break;
    default:
      i = cloud;
  }

  return i;
}
