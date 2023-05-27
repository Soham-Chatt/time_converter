// main.js

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
