const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const submit = document.querySelector(".submit-button");
const form = document.querySelector("#myForm");
const passwordMismatchError = document.querySelector(
  ".password-mismatch-error"
);
const requiredError = document.querySelector(".required-error");
const requiredConfirmError = document.querySelector(".required-confirm-error");

function checkForClass(className, elem) {
  for (let i = 0; i < elem.classList.length; i++) {
    if (elem.classList[i] === className) return true;
  }
  return false;
}

form.addEventListener("submit", (event) => {
  if (password.value !== confirmPassword.value) {
    console.log(password.classList);
    event.preventDefault();
    passwordMismatchError.classList.remove("hidden");
    password.classList.add("invalid");
    confirmPassword.classList.add("invalid");
  }
  if (password.value.length === 0) {
    event.preventDefault();
    password.classList.add("invalid");
    requiredError.classList.remove("hidden");
  } else if (checkForClass("invalid", password)) {
    requiredError.classList.add("hidden");
  }
  if (confirmPassword.value.length === 0) {
    event.preventDefault();
    confirmPassword.classList.add("invalid");
    requiredConfirmError.classList.remove("hidden");
  } else if (checkForClass("invalid", confirmPassword)) {
    requiredConfirmError.classList.add("hidden");
  }
});
