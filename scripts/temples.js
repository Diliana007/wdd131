// Dynamically set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically set the last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Hamburger menu toggle
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // Toggle icon between ☰ and ✖
  if (navMenu.classList.contains("active")) {
    hamburgerBtn.textContent = "✖";
  } else {
    hamburgerBtn.textContent = "☰";
  }
});
