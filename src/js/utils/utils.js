export default function parseDate(data) {
  let date = data?.location?.localtime;
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
