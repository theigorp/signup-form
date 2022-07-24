const testPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;

const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#passConfirm');
const emailInput = document.querySelector('.email-input');


//js see if passwords are same
//if email and number input is good border blue