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
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/preston-england-temple/preston-england-temple-50577-main.jpg"
  },
{
    templeName: "Freiburg Germany Temple",
    location: "Freiburg, Germany",
    dedicated: "1983-04-23 ",
    area: 21500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/freiburg-germany-temple/freiburg-germany-temple-50578-main.jpg"
  },
{
    templeName: "Rome Italy Temple",    
    location: "Rome, Italy",
    dedicated: "2010-10-23",
    area: 41010,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-50579-main.jpg"
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
    templeName:  "Kirtland Ohio Temple",
    location: "Kirtland, Ohio, USA",
    dedicated: "1999-10-24",
    area: 54000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-1275-main.jpg" 
 },
];

function renderTemples(templeList) {
  const container = document.getElementById("templeCards");
  container.innerHTML = "";

  templeList.forEach(t => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = t.imageUrl;
    img.alt = t.templeName;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.textContent = `${t.templeName} (${t.location})`;

    figure.appendChild(img);
    figure.appendChild(caption);
    container.appendChild(figure);
  });
}
function filterTemples(criteria) {
  let filtered;
  switch (criteria) {
    case "Old":
      filtered = temples.filter(t => new Date(t.dedicated) < new Date("1980-01-01"));
      break;
    case "New":
      filtered = temples.filter(t => new Date(t.dedicated) >= new Date("2000-01-01"));
      break;
    case "Large":
      filtered = temples.filter(t => t.area >= 60000);
      break;
    case "Small":
      filtered = temples.filter(t => t.area < 60000);
      break;
    default:
      filtered = temples;
  }
  renderTemples(filtered);
}
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const filter = link.textContent.trim();
    filterTemples(filter);
  });
});
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

