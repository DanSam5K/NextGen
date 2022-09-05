function fullName(){
    let firstName = document.querySelector("#firstName");
    let lastName = document.querySelector("#lastName");
    let display = document.querySelector("#display");
    display.innerHTML = "Welcome to my page, " + firstName.value + " " + lastName.value;
}