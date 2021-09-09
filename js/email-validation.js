var form = document.querySelector("form");
var email = document.querySelector(".email-input");
var btn = document.querySelector(".btn");
var errorMsg  = document.querySelector(".error-msg");


var emailValidity = email.validity;

emailValidation = (input, validator) => {

    if(input.value === "" || !validator.valid){
        errorMsg.classList.add("show-msg");
        email.classList.add("red-border");

    }
    else{
        errorMsg.classList.remove("show-msg");
        email.classList.remove("red-border");
        console.log("remove");
    }
}


form.addEventListener("submit", e => {
    e.preventDefault();
    emailValidation(email, emailValidity);
});