const testPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;

const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#passConfirm');
const passwordInput = document.querySelector('.password-input');

const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");
const errorBox = document.querySelector(".error-message");

passwordInput.addEventListener('click', () => errorBox.style.display = 'block');
passwordInput.addEventListener('blur', () => errorBox.style.display = 'none', true);

let lowercase = /[a-z]/g;
const uppercase = /[A-Z]/g;
const numbers = /[0-9]/g;

passwordInput.addEventListener('keyup', () => {
    validatePassword(lowercase, letter);
    validatePassword(uppercase, capital);
    validatePassword(numbers, number);

    if(password.value.length >= 8)
    {
        length.classList.remove('fa-xmark');
        length.classList.add('fa-check');
    }
    else
    {
        length.classList.remove('fa-check');
        length.classList.add('fa-xmark');
    }
});


function validatePassword(condition, element)
{
    if(password.value.match(condition))
    {
        element.classList.remove('fa-xmark');
        element.classList.add('fa-check');
    }
    else
    {
        element.classList.remove('fa-check');
        element.classList.add('fa-xmark');
    }
}

//js see if passwords are same
//if email and number input is good border blue