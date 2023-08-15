function createHome() {
  const brand = document.createElement("div");
  brand.setAttribute("class", "brand");

  const brandTitle = document.createElement("h9");
  brandTitle.setAttribute("id", "brandTitle");
  brandTitle.textContent = `Piazza Pizzaiolo`;

  const brandSlogan = document.createElement("p");
  brandSlogan.setAttribute("id", "brandSlogan");
  brandSlogan.textContent = `Dove Ogni Fetta Racconta una Storia Toscana!`;

  brand.appendChild(brandTitle);
  brand.appendChild(brandSlogan);

  return brand;
}

function loadHome() {
  const main = document.querySelector("main");
  main.textContent = " ";
  main.appendChild(createHome());
}

export { loadHome, createHome };
