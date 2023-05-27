// main.js

// Function to clear all input values on page load and display the current time
window.onload = function() {
    document.getElementById("secondsInput").reset();
    displayTime();
}

setInterval(displayTime, 1000); // Update the time every second

// Function to get the current time and display it on the page every second
function displayTime() {
    const clock = document.querySelector(".clock");
    const time = new Date().toLocaleTimeString();
    clock.innerHTML = `<h4 class="clock">${time}</h4>`;
}

// Function to convert seconds to days, hours, minutes, and seconds
document.getElementById("secondsInput").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get known values from the form
    let seconds = Number(event.target.seconds.value);
    if (seconds === 0) return; // If the user enters 0, do nothing
    const excludeDays = event.target.days.checked;
    const target = document.querySelector(".result");
    let resultStr = '<h4 class="result-text">';

    // Calculate the appropriate number of days, hours, minutes, and seconds
    const days = Math.floor(seconds / 86400);
    seconds %= 86400;
    const hours = excludeDays ? Math.floor((days * 24) + seconds / 3600) : Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    seconds = Math.floor(seconds);

    // Build the result string with the non-zero values
    if (!excludeDays && days > 0) resultStr += `${days}d `; // Days
    if (hours > 0) resultStr += `${hours}h `; // Hours
    if (minutes > 0) resultStr += `${minutes}m `; // Minutes
    resultStr += `${seconds}s</h4>`; // Seconds will always be displayed

    target.innerHTML = resultStr;
});