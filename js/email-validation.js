var form = document.querySelector("form");
var email = document.querySelector(".email-input");
var btn = document.querySelector(".btn");
var errorMsg  = document.querySelector(".error-msg");


var emailValidation = email.validity;

emailValidation = (input, validator) => {

    if(input.value === ""){
        errorMsg.classList.add("show-msg");
        email.classList.add("red-border");
    }
    else if(!validator.valid){
        errorMsg.classList.add("show-msg");
        email.classList.add("red-border");
    }
    else{
        errorMsg.classList.remove("show-msg");
        email.classList.remove("red-border");
    }
}


form.addEventListener("submit", e => {
    e.preventDefault();
    emailValidation(email, emailValidation);
});