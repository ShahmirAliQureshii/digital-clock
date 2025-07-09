type val = HTMLElement | null;

let hours: val = document.querySelector(".hours");
let minutes: val = document.querySelector(".minutes");
let seconds: val = document.querySelector(".seconds");
let date: val = document.querySelector(".date");
let month: val = document.querySelector(".month");
let year: val = document.querySelector(".year");
let day: val = document.querySelector(".day");
let shift: val = document.querySelector(".shift")

let daysArr: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
let monthsArr: string[] = [
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
    let hrs: number = time.getHours()
    hrs = hrs > 12 ? hrs-12 : hrs;
    hours.innerHTML = hrs < 10 ? "0" + hrs.toString() : hrs.toString();
    // Minutes
    let min: number = time.getMinutes();
    minutes.innerHTML = min < 10 ? "0" + min.toString() : min.toString();
    // Seconds
    let sec: number = time.getSeconds();
    seconds.innerHTML = sec < 10 ? "0" + sec.toString() : sec.toString();
    // Date
    let dt: number = time.getDate();
    date.innerHTML = dt.toString()+",";
    // Month
    let mon: number = time.getMonth();
    month.innerHTML = monthsArr[mon].toString();
    // Year
    let yr: number = time.getFullYear();
    year.innerHTML = yr.toString();
    // Day
    let dy: number = time.getDay();
    day.innerHTML = daysArr[dy].toString();
    // Shift
    let sht: string = time.getHours() >= 12 ? "PM" : "AM";
    shift.innerHTML = sht;
    } else {
        console.log("An Error Occured");
    }
}
setInterval(() => {
    getTime();
}, 100);

let theme: val = document.querySelector(".theme");
let container: val = document.getElementById("container")
let header: val = document.querySelector("header");
let dayy: val = document.querySelector("#day")
let night: val = document.querySelector("#night")
let toggle: number = 0

const mode = ()=>{
    if(container && header && theme && dayy && night) {
        if(toggle == 0) {
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
}

theme?.addEventListener("click",()=>{
    mode();
})
let audioBtn: val = document.querySelector(".audioBtn");
let tickSound = document.getElementById("tickSound") as HTMLAudioElement;
let toggle2:number = 0;

if(tickSound) {
    audioBtn?.addEventListener("click",()=>{
        if(toggle2 == 0) {
        tickSound.play();
        toggle2++;
        if(audioBtn) {
            audioBtn.innerText = "Pause Audio";
            audioBtn.style.scale = "1.05";

        }
        }
else {
        tickSound.pause();
        toggle2--;
        if(audioBtn) {
        audioBtn.innerText = "Play Audio"; 
        audioBtn.style.scale = "1.0";
        }
}
})}
