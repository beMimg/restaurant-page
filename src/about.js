function aboutInfo() {
  const infoContainer = document.createElement("div");
  infoContainer.setAttribute("class", "info-container");

  const phoneNumber = document.createElement("p");
  phoneNumber.setAttribute("class", "phone-number");
  phoneNumber.textContent = "Fake Phone Number: +1 (555) 123-4567";

  const location = document.createElement("p");
  location.setAttribute("class", "location");
  location.textContent = "Fake Location: Springdale, Meadowland";

  const openTime = document.createElement("p");
  openTime.setAttribute("class", "open-time");
  openTime.textContent = `Fake Business Opening Time:
  Monday - Friday: 9:00 AM - 6:00 PM
  Saturday: 10:00 AM - 4:00 PM
  Sunday: Closed`;

  infoContainer.appendChild(phoneNumber);
  infoContainer.appendChild(location);
  infoContainer.appendChild(openTime);

  return infoContainer;
}

function loadAbout() {
  const main = document.querySelector("main");
  main.textContent = " ";
  main.appendChild(aboutInfo());
}
export default loadAbout;
