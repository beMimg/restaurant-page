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

function initializePage() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
}

export default initializePage;
