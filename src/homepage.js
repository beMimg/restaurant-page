import loadMenu from "./menu";
import loadAbout from "./about";

function createHeader() {
  const header = document.createElement("header");
  header.setAttribute("class", "header");

  const homeBtn = document.createElement("button");
  homeBtn.setAttribute("id", "homeBtn");
  homeBtn.textContent = `Home`;

  const menuBtn = document.createElement("button");
  menuBtn.setAttribute("id", "menuBtn");
  menuBtn.textContent = `Menu`;
  menuBtn.addEventListener("click", function () {
    loadMenu();
  });

  const aboutBtn = document.createElement("button");
  aboutBtn.setAttribute("id", "aboutBtn");
  aboutBtn.textContent = `About`;
  aboutBtn.addEventListener("click", function () {
    loadAbout();
  });

  header.appendChild(homeBtn);
  header.appendChild(menuBtn);
  header.appendChild(aboutBtn);

  return header;
}

function createMain() {
  const main = document.createElement("main");
  main.setAttribute("class", "main");

  const brand = document.createElement("div");
  brand.setAttribute("class", "brand");

  const brandTitle = document.createElement("h9");
  brandTitle.setAttribute("id", "brandTitle");
  brandTitle.textContent = `Piazza Pizzaiolo`;

  const brandSlogan = document.createElement("p");
  brandSlogan.setAttribute("id", "brandSlogan");
  brandSlogan.textContent = `Dove Ogni Fetta Racconta una Storia Toscana!`;

  main.appendChild(brand);
  brand.appendChild(brandTitle);
  brand.appendChild(brandSlogan);

  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.setAttribute("class", "footer");

  const credits = document.createElement("p");
  credits.setAttribute("id", "credits");
  credits.innerHTML = `made by
  <a href="https://github.com/beMimg">beMimg </a>`;

  footer.appendChild(credits);

  return footer;
}

function initializePage() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}

export default initializePage;
