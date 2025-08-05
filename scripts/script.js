// ✅ Services offered at Dinamic Beauty Parlour
const services = [
  { id: "fc-1888", name: "Luxury Facial Treatment" },
  { id: "fc-2050", name: "Manicure & Pedicure Deluxe" },
  { id: "fs-1987", name: "Full Body Massage Therapy" },
  { id: "ac-2000", name: "Hair Styling & Coloring" },
  { id: "jj-1969", name: "Bridal Makeup Package" }
];

const serviceSelect = document.getElementById("service");
const dateInput = document.getElementById("visitDate");

// ✅ Prevent future dates
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("max", today);

// ✅ Populate service dropdown
services.forEach(service => {
  const option = document.createElement("option");
  option.value = service.name;
  option.textContent = service.name;
  serviceSelect.appendChild(option);
});

// ✅ Auto-update footer year
document.getElementById("currentyear").textContent = new Date().getFullYear();
