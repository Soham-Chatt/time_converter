// main.js

// Function to clear all input values on page load and display the current time
window.onload = function() {
    document.getElementById("secondsInput").reset();
    displayTime();
}

setInterval(displayTime, 1000); // Update the time every second

// Function to get the current time and display it on the page every second
function displayTime() {
    const clock = document.querySelector(".time");
    const time = new Date().toLocaleTimeString();
    clock.innerHTML = `<h4 class="clock">${time}</h4>`;
}

// Function to convert hours, minutes, and seconds to days, hours, minutes, and seconds
document.getElementById("timeInput").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    let hours = Number(event.target.hours.value);
    let minutes = Number(event.target.minutes.value);
    let seconds = Number(event.target.seconds.value);
    seconds += (minutes * 60) + (hours * 3600); // Convert everything to seconds
    if (seconds === 0) return; // If the user entered 0, don't do anything
    const excludeDays = event.target.days.checked;

    // Define our result information
    const target = document.querySelector(".result");
    let resultStr = '<h4 class="result-text">';

    // Calculate the appropriate number of days, hours, minutes, and seconds
    const days = Math.floor(seconds / 86400);
    seconds %= 86400;
    hours = excludeDays ? Math.floor((days * 24) + seconds / 3600) : Math.floor(seconds / 3600);
    seconds %= 3600;
    minutes = Math.floor(seconds / 60);
    seconds %= 60;
    seconds = Math.floor(seconds);

    // Build the result string with the non-zero values
    if (!excludeDays && days > 0) resultStr += `${days}d `; // Days
    if (hours > 0) resultStr += `${hours}h `; // Hours
    if (minutes > 0) resultStr += `${minutes}m `; // Minutes
    resultStr += `${seconds}s</h4>`; // Seconds will always be displayed

    target.innerHTML = resultStr;
});

