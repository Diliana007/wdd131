// ✅ Services offered at Dinamic Beauty Parlour
const services = [
  { id: 1, name: "Luxury Facial Treatment" },
  { id: 2, name: "Manicure & Pedicure Deluxe" },
  { id: 3, name: "Full Body Massage Therapy" },
  { id: 4, name: "Hair Styling & Coloring" },
  { id: 5, name: "Bridal Makeup Package" }
];

const serviceSelect = document.getElementById("service");
const reviewForm = document.getElementById("reviewForm");
const dateInput = document.getElementById("visitDate");
const counterDisplay = document.getElementById("reviewCounter");

// ✅ Prevent future dates
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("max", today);

// ✅ Create thank-you popup
const thankYouMessage = document.createElement("div");
thankYouMessage.classList.add("thank-you");
thankYouMessage.textContent = "👑 💋 Thank you for trusting Dinamic Beauty Parlour!";
document.body.appendChild(thankYouMessage);

// ✅ Populate service dropdown
services.forEach(service => {
  const option = document.createElement("option");
  option.value = service.id;
  option.textContent = service.name;
  serviceSelect.appendChild(option);
});

// ✅ Load stored review count on page load
window.addEventListener("load", () => {
  let reviewCount = localStorage.getItem("reviewCount");
  counterDisplay.textContent = reviewCount ? reviewCount : 0;
});

// ✅ Handle form submission
reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const selectedDate = new Date(dateInput.value);
  if (selectedDate > new Date(today)) {
    alert("⚠️ The visit date cannot be in the future.");
    return;
  }

  // Increment and store count
  let reviewCount = parseInt(localStorage.getItem("reviewCount") || "0") + 1;
  localStorage.setItem("reviewCount", reviewCount);

  // Update badge immediately
  counterDisplay.textContent = reviewCount;

  // Show thank-you message
  thankYouMessage.classList.add("show");
  setTimeout(() => {
    thankYouMessage.classList.remove("show");
  }, 5000);

  // Reset form
  reviewForm.reset();
});

// Show review count on review.html
window.addEventListener("DOMContentLoaded", () => {
  const counterDisplay = document.getElementById("reviewCounter");
  if (counterDisplay) {
    counterDisplay.textContent = localStorage.getItem("reviewCount") || 0;
  }
});
