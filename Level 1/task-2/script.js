const form = document.getElementById("userForm");
const EnteredName = document.getElementById("name");
const EnteredEmail = document.getElementById("email");
const EnteredPhoneNo = document.getElementById("phoneNo");
const EnteredPassword= document.getElementById("password");
const ShowPassword = document.getElementById("showPassword");
EnteredName.addEventListener("input",ValidateName);
function ValidateName(){
    const name = EnteredName.value.trim()
    if (name.length <3){
        document.getElementById("nameError").innerText =
          "Name must be at least 3 characters";
        return false;
      } else {
        document.getElementById("nameError").innerText = "";
        return true;
      }
    }
EnteredEmail.addEventListener("input", ValidateEmail);

function ValidateEmail() {

    const email = EnteredEmail.value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {

        document.getElementById("emailError").innerText =
        "Enter a valid Email";

        return false;
    }

    else {

        document.getElementById("emailError").innerText = "";

        return true;
    }
}
EnteredPhoneNo.addEventListener("input",ValidateNumber);
function ValidateNumber(){
    const number = EnteredPhoneNo.value.trim()
    if(number.length<10 || number.length>10){
        document.getElementById("phoneError").innerText="Phone Number must be atleast 10 digits";
        return false; 
    }
    else if(isNaN(number)){
        document.getElementById("phoneError").innerText="Only Digits are allowed";
        return false;
    }
    else{
        document.getElementById("phoneError").innerText="" 
        return true;
    }
}
EnteredPassword.addEventListener("input",ValidatePassword);
function ValidatePassword(){
    const password = EnteredPassword.value.trim()
    if(password.length<8){
        document.getElementById("passwordError").innerText = "Password must be atleast 8 digits longer";
        return false;
    }
    else{
        document.getElementById("passwordError").innerText = "";
        return true; 
    }

}
form.addEventListener("submit",function(e){
    e.preventDefault();
    const isNameValid = ValidateName();
    const isEmailValid = ValidateEmail();
    const isPhoneValid = ValidateNumber();
    const isPasswordValid = ValidatePassword(); 
    if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid == true){
        document.getElementById("successMessage").innerText = "Form Submitted Successfully!";
        form.reset();
    }
    else{
        document.getElementById("successMessage").innerText = "There is an error";
    }
})
ShowPassword.addEventListener("change",showPassword);
function showPassword(){
    if (ShowPassword.checked){
        EnteredPassword.type ="text";
    }
    else{
        EnteredPassword.type="password";
    }
}
