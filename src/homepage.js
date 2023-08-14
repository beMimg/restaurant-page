function createHeader() {
  const header = document.createElement("header");
  header.setAttribute("class", "header");

  const homeBtn = document.createElement("button");
  homeBtn.setAttribute("id", "homeBtn");
  homeBtn.textContent = `Home`;

  const menuBtn = document.createElement("button");
  menuBtn.setAttribute("id", "menuBtn");
  menuBtn.textContent = `Menu`;

  const aboutBtn = document.createElement("button");
  aboutBtn.setAttribute("id", "aboutBtn");
  aboutBtn.textContent = `About`;

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

function initializePage() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
}

export default initializePage;
