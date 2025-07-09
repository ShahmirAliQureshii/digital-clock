type val = HTMLElement | null;

let hours: val = document.querySelector(".hours");
let minutes: val = document.querySelector(".minutes");
let seconds: val = document.querySelector(".seconds");
let date: val = document.querySelector(".date");
let month: val = document.querySelector(".month");
let year: val = document.querySelector(".year");
let day: val = document.querySelector(".day");
let shift: val = document.querySelector(".shift")

let daysArr = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
let monthsArr = [
    'January',
    'Februray',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

let getTime = ()=>{
    let time: Date = new Date();
    if(hours && minutes && seconds && month && year && day && date && shift) {
    // Hours
    let hrs = time.getHours()
    hrs = hrs > 12 ? hrs-12 : hrs;
    hours.innerHTML = hrs < 10 ? "0" + hrs.toString() : hrs.toString();
    // Minutes
    let min = time.getMinutes();
    minutes.innerHTML = min < 10 ? "0" + min.toString() : min.toString();
    // Seconds
    let sec = time.getSeconds();
    seconds.innerHTML = sec < 10 ? "0" + sec.toString() : sec.toString();
    // Date
    let dt = time.getDate();
    date.innerHTML = dt.toString()+",";
    // Month
    let mon = time.getMonth();
    month.innerHTML = monthsArr[mon].toString();
    // Year
    let yr = time.getFullYear();
    year.innerHTML = yr.toString();
    // Day
    let dy = time.getDay();
    day.innerHTML = daysArr[dy].toString();
    // Shift
    let sht = time.getHours() >= 12 ? "PM" : "AM";
    shift.innerHTML = sht;
    }
}
setInterval(() => {
    getTime();
}, 100);