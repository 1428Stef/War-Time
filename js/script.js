function calculateTimeSince(startDate) {
    const now = new Date();
    const start = new Date(startDate);
    const diff = now - start;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
}

function updateTime() {
    const time = calculateTimeSince("2022-02-24T00:00:00");
    document.getElementById("time-since").innerText = 
        `${time.days} дней, ${time.hours} часов, ${time.minutes} минут, ${time.seconds} секунд`;
}

setInterval(updateTime, 1000);
updateTime();
