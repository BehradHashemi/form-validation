const mailInput = document.querySelector(".name-input")
const errorMail = document.querySelector(".valid-name")

const passInput = document.querySelector(".pass-input")
const errorPass = document.querySelector(".valid-pass")

const errorData = document.querySelector(".valid-data")

const btn = document.querySelector("#submit")

function valid(event) {
    event.preventDefault();
    const mailInputValue = mailInput.value;
    const passInputValue = passInput.value;
    const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
    let ifSendData = true;

    if (mailInputValue.length === 0) {
        errorMail.innerHTML = "👆Enter your E-mail";
        mailInput.style.borderBottom = " 1px solid #ff0000";
        ifSendData = false;
    } else if (pattern.test(mailInputValue) === false) {
        errorMail.innerHTML = "👆Enter your email correctly";
        mailInput.style.borderBottom = " 1px solid #ff0000";
        ifSendData = false;
    } else {
        errorMail.innerHTML = "";
        mailInput.style.borderBottom = " 1px solid #fff";
    }

    if (passInputValue.length === 0) {
        errorPass.innerHTML = "👆Enter your password";
        passInput.style.borderBottom = " 1px solid #ff0000";
        ifSendData = false;
    } else if (passInputValue.length < 4) {
        errorPass.innerHTML = "👆Your password is short";
        passInput.style.borderBottom = " 1px solid #ff0000";
        ifSendData = false;
    } else {
        errorPass.innerHTML = "";
        passInput.style.borderBottom = "1px solid #fff";
    }
}