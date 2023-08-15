import loadMenu from "./menu";
import loadAbout from "./about";
import { loadHome, createHome } from "./home";

function createHeader() {
  const header = document.createElement("header");
  header.setAttribute("class", "header");

  const homeBtn = document.createElement("button");
  homeBtn.setAttribute("id", "homeBtn");
  homeBtn.textContent = `Home`;
  homeBtn.addEventListener("click", function () {
    loadHome();
  });

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

  main.appendChild(createHome());
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
