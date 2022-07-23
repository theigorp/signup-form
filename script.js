const testEmail = /[a-z0-9_]*@[a-z]*\.[a-z]*/g;
const testPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#passConfirm');

if(password == confirmPassword) console.log('ss');
else console.log('error');

if(testEmail.test(email.textContent)==true) email.style.borderBottom = '2px solid red';
