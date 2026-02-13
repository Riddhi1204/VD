const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const playBtn = document.getElementById("playBtn");
const music = document.getElementById("bgMusic");
const timer = document.getElementById("timer");

/* Play music */
playBtn.onclick = () => {
  music.play();
};

/* NO button runs away */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* YES button */
yesBtn.addEventListener("click", () => {
  message.classList.remove("hidden");
  document.querySelector(".buttons").style.display = "none";
  launchHearts();
  startHindiReveal();
});

/* Floating hearts background */
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 400);

/* Celebration hearts */
function launchHearts() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("span");
    heart.innerText = "💘";
    heart.style.left = "50%";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }
}

/* ❤️ LOVE TIMER (24 Sept 2025 → forever) */
const startDate = new Date("2025-09-24T00:00:00");

setInterval(() => {
  const now = new Date();
  let diff = now - startDate;

  const days = Math.floor(diff / 86400000);
  diff %= 86400000;
  const hours = Math.floor(diff / 3600000);
  diff %= 3600000;
  const minutes = Math.floor(diff / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  timer.innerHTML = `
    💞 ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds<br>
    since 24 September 2025 ♾️
  `;
}, 1000);

/* ===== Hindi Typing + Reveal ===== */

const hindiLines = [
  "Tum meri zindagi ka sabse khoobsurat hissa ho 💞",
  "Har din tumhare saath aur bhi special lagta hai ✨",
  "Tum ho toh sab kuch perfect lagta hai 💋",
  "Hamesha mere hi rehna ❤️"
];

function typeLine(element, text, speed = 40) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

function startHindiReveal() {
  const container = document.getElementById("hindiBlock");
  const lines = document.querySelectorAll(".hindi-line");

  container.classList.remove("hidden");
  container.classList.add("show");

  lines.forEach((line, index) => {
    setTimeout(() => {
      typeLine(line, hindiLines[index]);
    }, index * 2000);
  });
}

