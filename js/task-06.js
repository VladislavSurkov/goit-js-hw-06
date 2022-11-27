const inputEl = document.querySelector("#validation-input");
const num = Number(inputEl.dataset.length);

const onInputBlur = (event) => {
  if (event.currentTarget.value.length === num) {
    event.currentTarget.classList.add("valid")
      event.currentTarget.classList.remove("invalid")
  } else {
    event.currentTarget.classList.add("invalid")
    event.currentTarget.classList.remove("valid")
  }
};

inputEl.addEventListener("blur", onInputBlur);
