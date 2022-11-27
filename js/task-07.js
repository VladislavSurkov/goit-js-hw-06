const controlInput = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const rangeTextEl = (event) =>
  (textEl.style.fontSize = `${event.currentTarget.value}px`);

controlInput.addEventListener("input", rangeTextEl);
