const form = document.querySelector(".login-form");
const inputs = document.querySelectorAll("input");

const onFormSubmit = (event) => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

    if (email === "" || password === "")
        alert("Все поля должны быть заполнены.");

  const dataForm = {
    email,
    password,
  };
    console.log(dataForm);
  event.currentTarget.reset();
};

form.addEventListener("submit", onFormSubmit);
