function createPlate(title, info) {
  const plateCard = document.createElement("div");
  plateCard.setAttribute("class", "menu-card");

  const plateTitle = document.createElement("h1");
  plateTitle.setAttribute("class", "menu-title");
  plateTitle.textContent = title;

  const plateInfo = document.createElement("p");
  plateInfo.setAttribute("class", "menu-info");
  plateInfo.textContent = info;

  plateCard.appendChild(plateTitle);
  plateCard.appendChild(plateInfo);

  return plateCard;
}

function createMenu() {
  const menu = document.createElement("div");
  menu.setAttribute("class", "menu");

  menu.appendChild(
    createPlate(
      "Margherita Supreme",
      "Thin crust, tomato sauce, mozzarella cheese, basil leaves, roma tomatoes, extra-virgin olive oil"
    )
  );
  menu.appendChild(
    createPlate(
      "BBQ Chicken Ranch",
      "Thin crust, barbecue sauce, grilled chicken, cheddar cheese, mozzarella cheese, red onions, ranch dressing."
    )
  );
  menu.appendChild(
    createPlate(
      "Mediterranean Delight",
      " Whole wheat crust, garlic-infused olive oil, roasted red peppers, Kalamata olives, artichoke hearts, red onion, feta cheese, dried oregano."
    )
  );
  menu.appendChild(
    createPlate(
      "Spicy Pepperoni Fiesta",
      " Thin crust, tomato sauce, pepperoni, jalapeños, crushed red pepper flakes, mozzarella cheese, provolone cheese."
    )
  );

  return menu;
}

function loadMenu() {
  const main = document.querySelector("main");
  main.textContent = " ";
  main.appendChild(createMenu());
}

export default loadMenu;
