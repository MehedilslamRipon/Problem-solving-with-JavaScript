//parameters will specify date you put to input
// var date = new Date(year, month, day, hours, minutes, seconds, milliseconds);

// show current month
const localDate = new Date();
const months = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
];
let currentMonth = months[localDate.getMonth()];
console.log(currentMonth);

// show current date
const localDate = new Date();
const currentDate = localDate.getDate();
console.log(currentDate);

// show current day
const localDate = new Date();
const days = [
   "Sunday",
   "Monday ",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
];

const currentDay = days[localDate.getDay()];
console.log(currentDay);
