const temples = [
  {
    templeName: "Nauvoo Illinois Temple",
    location: "Nauvoo, Illinois, USA",
    dedicated: "2002-06-27",
    area: 5017,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-50576-main.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 382207,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "London England Temple",
    location: "London, England, UK",
    dedicated: "1958-09-07",
    area: 42652,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-4243-main.jpg"
  },
  {
    templeName: "Preston England Temple",
    location: "Preston, England, UK",
    dedicated: "1998-06-07",
    area: 69630,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/preston-england-temple/preston-england-temple-45357-main.jpg"
  },
  {
    templeName: "Freiburg Germany Temple",
    location: "Freiburg, Germany",
    dedicated: "1983-04-23",
    area: 21500,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/freiberg-germany-temple/freiberg-germany-temple-16459-main.jpg"
    },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2010-10-23",
    area: 41010,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    },
  {
    templeName: "Stockholm Sweden Temple",
    location: "Stockholm, Sweden",
    dedicated: "1984-03-17",
    area: 31000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/stockholm-sweden-temple/stockholm-sweden-temple-30267-main.jpg"
  },
  {
    templeName: "Bern Switzerland Temple",
    location: "Bern, Switzerland",
    dedicated: "1955-08-05",
    area: 35546,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
  },
  {
    templeName: "The Haugue Temple",
    location: "The Hague, Netherlands",
    dedicated: "2000-08-28",
    area: 14447,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/the-hague-netherlands-temple/the-hague-netherlands-temple-40883-main.jpg"
  },
  {
    templeName: "Kyiv Ukraine Temple",
    location: "Kyiv, Ukraine",
    dedicated: "2007-06-23",
    area: 22184,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/134-Kyiv-Ukraine-Temple.jpg"
  },
  {
    templeName: "Madrid Spain Temple",
    location: "Madrid, Spain",
    dedicated: "1999-03-19",
    area: 45800,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
  },
  {
    templeName: "Kirtland Ohio Temple",
    location: "Kirtland, Ohio, USA",
    dedicated: "1999-10-24",
    area: 54000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-1275-main.jpg"
  },
];
// Render temple cards to page
function renderTemples(data) {
  const container = document.getElementById("templeCards");
  container.innerHTML = "";

  data.forEach(t => {
    const card = document.createElement("div");
    card.className = "temple-card";
    card.innerHTML = `
      <img src="${t.imageUrl}" alt="${t.templeName}" class="temple-image">
      <div class="temple-details">
        <h3 class="temple-name">${t.templeName}</h3>
        <p class="temple-location">${t.location}</p>
        <div class="temple-info">
          <span><strong>Dedicated:</strong> ${t.dedicated}</span>
          <span><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Filter temples by criteria
function filterTemples(criteria) {
  let filtered;
  switch (criteria) {
    case "old":
      filtered = temples.filter(t => new Date(t.dedicated) < new Date("1980-01-01"));
      break;
    case "new":
      filtered = temples.filter(t => new Date(t.dedicated) >= new Date("2000-01-01"));
      break;
    case "large":
      filtered = temples.filter(t => t.area >= 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    case "all":
    default:
      filtered = temples;
  }
  renderTemples(filtered);
}

// Activate once DOM is fully ready
document.addEventListener("DOMContentLoaded", () => {
  // Initial render
  renderTemples(temples);

  // Add click events to filters
  document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const filter = link.getAttribute("data-filter");
      filterTemples(filter);
    });
  });

  // Footer updates
  document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
  });