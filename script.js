
const examDate = new Date("2026-12-08T00:00:00+05:30").getTime();

function updateTimer() {
  const now = Date.now();
  const difference = examDate - now;

  if (difference <= 0) {
    document.querySelector(".timer").innerHTML =
      "<h2>Good luck with your O/L exams!</h2>";
    return;
  }

  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateTimer();
setInterval(updateTimer, 1000);
