// Countdown Timer
const weddingDate = new Date("2025-12-15T17:00:00").getTime();

const countdown = setInterval(() => {
  const now = Date.now();
  const diff = weddingDate - now;

  if (diff < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerText = "We're Married!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);

// Blessings Wall (local only)
const form = document.getElementById("blessingForm");
const messagesDiv = document.getElementById("messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !message) return;
  const msgDiv = document.createElement("div");
  msgDiv.innerHTML = `<strong>${name}</strong>: ${message}`;
  messagesDiv.prepend(msgDiv);
  form.reset();
});
