const emailInput = document.querySelector(".main__form-email");
const submitButton = document.querySelector(".main__form-submit");
const inputBox = document.querySelector(".main__form-input-box");
const errorMessageClass = "main__form-input-box--error";
const errorText = "Please provide a valid email address";

const validateEmail = () => {
    const emailValidated = validateEmailPattern(emailInput.value);
    
    if (!emailValidated) {
        addErrorMessage();
    } else {
        removeErrorMessage();
    }
}

const validateEmailPattern = email => {
    const emailPattern = new RegExp(emailInput.pattern, "gi");
    return emailPattern.test(email);
}

const addErrorMessage = () => {
    emailInput.classList.add("main__form-email--border");
    // Get the createErrorMessage function if error message doesn't exist. 
    if (!inputBox.querySelector(`.${errorMessageClass}`)) {
        const errorMessage = createErrorMessage();
        // Add error message inside the inputBox
        inputBox.appendChild(errorMessage);
    }
}

const removeErrorMessage = () => {
    emailInput.classList.remove("main__form-email--border");
    // Get the error message
    const errorMessage = inputBox.querySelector(`.${errorMessageClass}`);

    // Remove the error message if createErrorMessage function do exist.
    if (errorMessage) {
        errorMessage.remove();
    }
}

const createErrorMessage = () => {
    const errorMessage = document.createElement("i");
    errorMessage.innerHTML = errorText;
    errorMessage.setAttribute("class", errorMessageClass);
    return errorMessage;
}

submitButton.addEventListener("click", event => {
    event.preventDefault();
    validateEmail();
})

emailInput.addEventListener("keypress", event => {
    if (event.key === "Enter") {
        submitButton.click();
    }
})