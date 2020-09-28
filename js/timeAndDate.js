const timeHolder = document.getElementById('timeHolder');
const dateHolder = document.getElementById('dateHolder');

let date = new Date();

//Day
const day = date.getDay();
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const dayName = days[day-1];

//Date and month
const month = date.getMonth();
const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthName = months[month];
const dateNum = date.getDate();

//Year
const year = date.getFullYear();


function dateFunc() {
    dateHolder.innerHTML = `${dayName}, ${monthName} ${dateNum}, ${year}`;
}
dateFunc();


//Get time
function timeFunc() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes(); 
    hours = updateTime(hours);
    minutes = updateTime(minutes);
    timeHolder.innerText = hours + " : " + minutes;

    let timer = setTimeout(function() {
        timeFunc()
    }, 1000);
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}

timeFunc();

