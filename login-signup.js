var loginBox = document.querySelector(".login-box");
var registerBox = document.querySelector(".register-box");
var registerChoice = document.getElementById("register-choice");
var loginChoice = document.getElementById("login-choice");
var nameFieldRegister = document.getElementById("name-field-register");
let emailField = document.getElementById("email-verification");
let passwordFieldRegister = document.getElementById("password-field-register");
let repeatPasswordField = document.getElementById("repeat-password-field");
var registerButton = document.querySelector(".register-button");
var loginButton = document.querySelector(".login-button")
var emailLoginField = document.getElementById("email-field-login");
registerChoice.addEventListener("click", function(){
registerBox.style.display = "block";
loginBox.style.display = "none";
});
loginChoice.addEventListener("click", function(){
registerBox.style.display = "none";
loginBox.style.display = "block";
});


var localEmail;
var localName;
var localPassword;
registerButton.addEventListener("click", function(){
if(nameFieldRegister.value != "" && emailField.value != "" && passwordFieldRegister.value != "" && repeatPasswordField.value != ""){
    localName = localStorage.setItem("name", nameFieldRegister.value);
    localEmail = localStorage.setItem("email", emailField.value)
    localPassword = localStorage.setItem("password", passwordFieldRegister.value);
    localStorage.setItem("repeat password", repeatPasswordField.value);
    registerBox.style.display = "none";
    loginBox.style.display = "block";
}else{
    alert();
}
});

loginButton.addEventListener("click", function(){
    var emailLoginFieldValue = emailField.value;
    if(emailLoginFieldValue == localStorage.getItem("email")){
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
        confettiColors: [
            '#f7de00', '#ffcc40', '#fff570', '#fdff85', '#fff56e'
        ]
    });
    setTimeout(window.location.href = "index.html", 2000);
}else if(emailLoginFieldValue != localStorage.getItem("email")){
    alert()
}

});
