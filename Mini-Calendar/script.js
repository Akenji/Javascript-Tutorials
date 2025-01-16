const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

/*console.log(today);*/

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allMonhs = ["January", "February", "March", "April", "May", "Juin", "July", "August", "September", "October", "November", "December"];

date.innerHTML = (today.getDate()<10?"0":"") + /*the stuff in bracket will make sure to display double digits like 01 if the date is a number less than 10 and just 1 */ today.getDate();
day.innerHTML = weekDays[today.getDay()]; /*so that It'll display the actual day and not the number coressponding to it */
month.innerHTML = allMonhs[today.getMonth()];
year.innerHTML = today.getFullYear();