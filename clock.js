let hourEl = document.getElementById("hours")
let minutesEl = document.getElementById("minutes")
let secondsEl = document.getElementById("seconds")
let ampmEl = document.getElementById("ampm")

let dayEl = document.getElementById("day")
let monthEl = document.getElementById("month")
let yearEl = document.getElementById("year")
let mthEl = document.getElementById("mth")
let dotwEl = document.getElementById("dotw")

function updateClock () {
    let h =  new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM";

    let d = new Date().getDate()
    let mo = new Date().getMonth() + 1
    let y = new Date().getFullYear()
    let dot = new Date().getDay()

    // day of the week
    if (dot == 0 ){
        dotwEl.innerHTML = "SUNDAY"
    }
    else if (dot == 1 ){
        dotwEl.innerHTML = "MONDAY"
    }
    else if (dot == 2 ){
        dotwEl.innerHTML = "TUESDAY"
    }
    else if (dot == 3){
        dotwEl.innerHTML = "WEDNESDAY"
    }
    else if (dot == 4){
        dotwEl.innerHTML = "THURSDAY"
    }
    else if (dot == 5){
        dotwEl.innerHTML = "FRIDAY"
    }
    else if (dot == 6 ){
        dotwEl.innerHTML = "SATURDAY"
    }

    // month of the year
    if (mo == 1) {
        mthEl.innerHTML = "JANUARY"

    } 
        else if (mo == 2) {
            mthEl.innerHTML = "FEBUARY"
        }

        else if (mo == 3) {
            mthEl.innerHTML = "MARCH"
        }

        else if (mo == 4) {
            mthEl.innerHTML = "APRIL"
        }

        else if (mo == 5) {
            mthEl.innerHTML = "MAY"
        }

        else if (mo == 6) {
            mthEl.innerHTML = "JUNE"
        }

        else if (mo == 7) {
            mthEl.innerHTML = "JULY"
        }

        else if (mo == 8) {
            mthEl.innerHTML = "AUGUST"
        }

        else if (mo == 9) {
            mthEl.innerHTML = "SEPTEMBER"
        }

        else if (mo == 10) {
            mthEl.innerHTML = "OCTOBER"
        }

        else if (mo == 11) {
            mthEl.innerHTML = "NOVEMBER"
        }

        else if (mo == 12) {
            mthEl.innerHTML = "DECEMBER"
        }



    // setting a 12 hour clock
    if (h > 12) {
        h = h - 12;
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    d = d < 10 ? "0" + d : d
    mo = mo < 10 ? "0" + mo : mo

    hourEl.innerHTML = h;
    minutesEl.innerHTML = m;
    secondsEl.innerHTML = s;
    ampmEl.innerHTML = ampm;

    dayEl.innerHTML = d;
    monthEl.innerHTML = mo;
    yearEl.innerHTML = y;
    


    setTimeout(() => {
        updateClock()
    }, 1000)

}

updateClock()
// setInterval(updateClock)

