const weeks = document.getElementById("weeks");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const millisecond = document.getElementById("milliseconds");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear +1} 00:00:00:`);


function updateCountdown() {
const currentTime = new Date();
const diff = newYearTime - currentTime;

const w = Math.floor(diff / 1000 / 60 / 60 / 24 /7);
const d = Math.floor(diff / 1000 / 60 / 60 / 24);
const h = Math.floor(diff / 1000 / 60 /60) % 24;
const m = Math.floor(diff / 1000 / 60) % 60;
const s = Math.floor(diff / 1000) % 60;

weeks.innerHTML= w;
days.innerHTML = d;
hours.innerHTML = m < 10 ? '0' + h : h;
minutes.innerHTML = m < 10 ? '0' + m : m;
seconds.innerHTML = m < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 10);
