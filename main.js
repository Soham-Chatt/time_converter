// main.js

// Function to clear all input values on page load
window.onload = function() {
    document.getElementById("secondsInput").reset();
}

// Function to convert seconds to days, hours, minutes, and seconds
document.getElementById("secondsInput").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = document.getElementById("secondsInput");
    const totalSeconds = Number(form.seconds.value);
    const excludeDays = form.days.checked;
    const target = document.querySelector(".result");

    let days = Math.floor(totalSeconds / (3600*24));
    let hours = Math.floor(totalSeconds % (3600*24) / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = Math.floor(totalSeconds % 60);

    if (excludeDays) {
        hours += days * 24;
        target.innerHTML = `<h4 class="text-primary">${hours}h ${minutes}m ${seconds}s</h4>`;
    } else {
        target.innerHTML = `<h4 class="text-primary">${days}d ${hours}h ${minutes}m ${seconds}s</h4>`;
    }

});

// Function to get the current time and display it on the page every second
function displayTime() {
    const clock = document.querySelector(".clock");
    const time = new Date().toLocaleTimeString();
    clock.innerHTML = `<h4 class="clock">${time}</h4>`;
}

// Call the displayTime function initially to show the time immediately
displayTime();

// Call the displayTime function every second using setInterval
setInterval(displayTime, 1000);


