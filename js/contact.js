const contactForm = document.querySelector(".contact-form");

const formName = document.querySelector("#name");
const formNameError = document.querySelector("#name-error");
let formNameHasError = false;

const formEmail = document.querySelector("#email");
const formEmailError = document.querySelector("#email-error");
let formEmailHasError = false;

const formMessage = document.querySelector("#message");
const formMessageError = document.querySelector("#message-error");
let formMessageHasError = false;

const submitMessage = document.querySelector("#submit-message");

contactForm.addEventListener("submit", formValidation);

function formValidation() {
    event.preventDefault();

    const nameValue = formName.value;

    if (validateLength(nameValue, 2) === true) {
        formNameError.style.display = "none";
        formNameHasError = false;
    } else {
        formNameError.style.display = "block";
        formNameHasError = true;
    }

    const emailValue = formEmail.value;

    if (validateEmail(emailValue)) {
        formEmailError.style.display = "none";
        formEmailHasError = false;
    } else {
        formEmailError.style.display = "block";
        formEmailHasError = true;
    }

    const messageValue = formMessage.value;

    if (validateLength(messageValue, 10) === true) {
        formMessageError.style.display = "none";
        formMessageHasError = false;
    } else {
        formMessageError.style.display = "block";
        formMessageHasError = true;
    }

    if (formNameHasError === true || formEmailHasError === true || formMessageHasError === true) {
        submitMessage.style.display = "none";
    } else {
        submitMessage.style.display = "block";
    }

}

function validateLength(value, checkLength) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= checkLength) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(emailValue) {
    const emailSymbol = /\S+@\S+\.\S+/;

    if (emailSymbol.test(emailValue)) {
        return true;
    } else {
        return false;
    }
}