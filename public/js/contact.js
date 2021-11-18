import formState from "./components/formState.js";
import validateInputs from "./components/validateInputs.js";
import showAlert from "./components/showAlert.js";

const contactForm = document.querySelector("#contact-form");

const formSubmitButton = document.querySelector(".form__submit");

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("change", () => {
    validateInputs(input);
  });
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    validateInputs(input);
  });

  if (
    !formState.nameInput.isValid ||
    !formState.subjectInput.isValid ||
    !formState.emailInput.isValid ||
    !formState.addressInput.isValid
  ) {
    showAlert(
      contactForm,
      "fail",
      "Some fields are not correct, please try again"
    );
    formSubmitButton.disabled = true;
    const failedTimer = setTimeout(() => {
      formSubmitButton.disabled = false;
      clearTimeout(failedTimer);
    }, 5000);

    return;
  }
  showAlert(contactForm, "success", "Form successfully submitted, thank you!");
  formSubmitButton.disabled = true;
  const successTimer = setTimeout(() => {
    formSubmitButton.disabled = false;
    clearTimeout(successTimer);
  }, 5000);
});
