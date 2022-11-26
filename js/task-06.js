const inputEl = document.querySelector("#validation-input")
const num = Number(inputEl.dataset.length)

const onInputBlur = event => {
event.currentTarget.value.length === num
    ? event.currentTarget.classList.add("valid")
    : event.currentTarget.classList.add("invalid")
}

inputEl.addEventListener("blur", onInputBlur)

