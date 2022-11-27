const btnChangeColorEl = document.querySelector(".change-color");
const valueColorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

btnChangeColorEl.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  const ColorRandom = "#" + Math.floor(Math.random() * 16777215).toString(16);

  valueColorEl.textContent = ColorRandom;
  bodyEl.style.backgroundColor = ColorRandom;

  return ColorRandom;
}


