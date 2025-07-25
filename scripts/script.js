// scripts/script.js

// ⛅ Add wide view emoticon
function setWideViewIcon() {
  const icon = document.querySelector(".weather-icon");
  if (window.innerWidth >= 650) {
    icon.textContent = "⛅";
  } else {
    icon.textContent = "";
  }
}

window.addEventListener("resize", setWideViewIcon);
window.addEventListener("load", setWideViewIcon);

// Set footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1);
}

// Display wind chill
const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);
const chill = document.getElementById("chill");

if (temp <= 50 && speed > 3) {
  chill.textContent = `${calculateWindChill(temp, speed)}°F`;
} else {
  chill.textContent = "N/A";
}
