var hours = document.querySelector(".hours");
var minutes = document.querySelector(".minutes");
var seconds = document.querySelector(".seconds");
var date = document.querySelector(".date");
var month = document.querySelector(".month");
var year = document.querySelector(".year");
var day = document.querySelector(".day");
var shift = document.querySelector(".shift");
var daysArr = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
var monthsArr = [
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
];
var getTime = function () {
    var time = new Date();
    if (hours && minutes && seconds && month && year && day && date && shift) {
        // Hours
        var hrs = time.getHours();
        hrs = hrs > 12 ? hrs - 12 : hrs;
        hours.innerHTML = hrs < 10 ? "0" + hrs.toString() : hrs.toString();
        // Minutes
        var min = time.getMinutes();
        minutes.innerHTML = min < 10 ? "0" + min.toString() : min.toString();
        // Seconds
        var sec = time.getSeconds();
        seconds.innerHTML = sec < 10 ? "0" + sec.toString() : sec.toString();
        // Date
        var dt = time.getDate();
        date.innerHTML = dt.toString() + ",";
        // Month
        var mon = time.getMonth();
        month.innerHTML = monthsArr[mon].toString();
        // Year
        var yr = time.getFullYear();
        year.innerHTML = yr.toString();
        // Day
        var dy = time.getDay();
        day.innerHTML = daysArr[dy].toString();
        // Shift
        var sht = time.getHours() >= 12 ? "PM" : "AM";
        shift.innerHTML = sht;
    }
};
setInterval(function () {
    getTime();
}, 100);
