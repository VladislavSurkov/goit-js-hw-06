const ref = {
  input: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

let boxSize = 20;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeInputValue() {
  const amount = ref.input.value;
  ref.input.value = "";
  createBoxes(amount);
}

function createBoxes(amount) {
  const boxesArr = [];

  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    boxSize += 10;
    console.log(boxSize);
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.border = "1px solid";

    boxesArr.push(newBox);
  }

  ref.boxes.append(...boxesArr);
}

function destroyBoxes() {
  ref.boxes.innerHTML = "";
  boxSize = 20;
}

ref.btnCreate.addEventListener("click", onChangeInputValue);
ref.btnDestroy.addEventListener("click", destroyBoxes);
