const showMsgBox = document.querySelector('.box')

const mailInput = document.querySelector(".name-input")
const errorMail = document.querySelector(".valid-name")

const passInput = document.querySelector(".pass-input");
const errorPass = document.querySelector(".valid-pass");

const errorData = document.querySelector(".valid-data");

const btn = document.querySelector("#submit")
btn.addEventListener('click', valid)
function valid(event) {
    event.preventDefault();
    const mailInputValue = mailInput.value;
    const passInputValue = passInput.value;
    const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
    const numberValue = /^[0-9]{4,10}/;
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
    } else if (passInputValue.length >= 10) {
        errorPass.innerHTML = "👆Your password is long";
        passInput.style.borderBottom = " 1px solid #ff0000";
        ifSendData = false;
    } else if (numberValue.test(passInputValue) === false) {
        errorPass.innerHTML = "👆Please enter a number";
        passInput.style.borderBottom = " 1px solid #ff0000";
        ifSendData = false;
    } else {
        errorPass.innerHTML = "";
        passInput.style.borderBottom = "1px solid #fff";
    }

    if (ifSendData) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://jsonplaceholder.typicode.com/posts")
        const body = {
            username: mailInputValue,
            password: passInputValue,
        }
        const headers = {
            "Content-Type": "application/json"
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: body,
            headers: headers
        })
            .then(response => {
                if (response.ok) {
                    setTimeout(() => {
                        showMsgBox.innerHTML = 'Your login was successful'
                        showMsgBox.style.background = 'green'
                        showMsgBox.style.display = 'flex'
                        setTimeout(() => {
                            showMsgBox.style.display = 'none'
                        }, 2000)
                    }, 0)
                }
            })
    } else {
        setTimeout(() => {
            showMsgBox.innerHTML = 'Your login was not successful'
            showMsgBox.style.background = 'red'
            showMsgBox.style.display = 'flex'
            setTimeout(() => {
                showMsgBox.style.display = 'none'
            }, 2000)
        }, 0)
    }
}
