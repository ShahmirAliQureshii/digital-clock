"use strict";
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let date = document.querySelector(".date");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let day = document.querySelector(".day");
let shift = document.querySelector(".shift");
let daysArr = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
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
];
let getTime = () => {
    let time = new Date();
    if (hours && minutes && seconds && month && year && day && date && shift) {
        // Hours
        let hrs = time.getHours();
        hrs = hrs > 12 ? hrs - 12 : hrs;
        hours.innerHTML = hrs < 10 ? "0" + hrs.toString() : hrs.toString();
        // Minutes
        let min = time.getMinutes();
        minutes.innerHTML = min < 10 ? "0" + min.toString() : min.toString();
        // Seconds
        let sec = time.getSeconds();
        seconds.innerHTML = sec < 10 ? "0" + sec.toString() : sec.toString();
        // Date
        let dt = time.getDate();
        date.innerHTML = dt.toString() + ",";
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
    else {
        console.log("An Error Occured");
    }
};
setInterval(() => {
    getTime();
}, 100);
let theme = document.querySelector(".theme");
let container = document.getElementById("container");
let header = document.querySelector("header");
let dayy = document.querySelector("#day");
let night = document.querySelector("#night");
let toggle = 0;
const mode = () => {
    if (container && header && theme && dayy && night) {
        if (toggle == 0) {
            container.style.color = "white";
            container.style.backgroundColor = "black";
            header.style.backgroundColor = "black";
            header.style.color = "white";
            theme.style.backgroundColor = "black";
            theme.style.color = "white";
            theme.style.border = "1px solid white";
            dayy.style.display = "none";
            night.style.display = "block";
            toggle++;
        }
        else {
            theme.style.backgroundColor = "#dfdfdf";
            theme.style.color = "black";
            container.style.color = "black";
            container.style.backgroundColor = "white";
            header.style.backgroundColor = "white";
            header.style.color = "black";
            dayy.style.display = "block";
            night.style.display = "none";
            toggle--;
        }
    }
};
theme === null || theme === void 0 ? void 0 : theme.addEventListener("click", () => {
    mode();
});
let audioBtn = document.querySelector(".audioBtn");
let tickSound = document.getElementById("tickSound");
let toggle2 = 0;
if (tickSound) {
    audioBtn === null || audioBtn === void 0 ? void 0 : audioBtn.addEventListener("click", () => {
        if (toggle2 == 0) {
            tickSound.play();
            toggle2++;
            if (audioBtn) {
                audioBtn.innerText = "Pause Audio";
                audioBtn.style.scale = "1.05";
            }
        }
        else {
            tickSound.pause();
            toggle2--;
            if (audioBtn) {
                audioBtn.innerText = "Play Audio";
                audioBtn.style.scale = "1.0";
            }
        }
    });
}
