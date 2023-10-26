const nameInput = document.getElementById('name-input')
const emailInput = document.getElementById('email-input') 
const passwordInput = document.getElementById('password-input')
const passwordcheckInput = document.getElementById('password-check-input')
document.getElementById('form').addEventListener('submit', getData)

function getData(e) {
    e.preventDefault();

    Username()
    Email()
    Password()
}

function Username() {
    const nameValue = nameInput.value.trim()
   
    setErrorFor(nameValue, 'Username cannot be blank')
}

function setErrorFor(input, message) {
    if(input === '') {
        const nameNull = document.getElementById('nameNull')
        nameInput.classList.add('error')
        nameNull.innerHTML = message
    } else {
        nameInput.classList.add('success')
        nameNull.innerHTML = ''
    }
}

function Email() {
    const emailValue = emailInput.value.trim()

    setErrorForEmail(emailValue, 'Email cannot be blank')
}

function setErrorForEmail(input, message) {
    if(input === '') {
        const emailNull = document.getElementById('emailNull')
        emailInput.classList.add('error')
        emailNull.innerHTML = message
    } else {
        emailInput.classList.add('success')
        emailNull.innerHTML = ''
    }
}

function Password() {
    const passwordValue = passwordInput.value.trim()
    const passwordcheckValue = passwordcheckInput.value.trim();

    setErrorForPasswordcheck(passwordcheckValue, passwordValue, 'Passwords must be the same')

    setErrorForPassword(passwordValue, 'Password cannot be blank')
}
    
function setErrorForPassword(input, message) {
    if(input === '') {
        const passwordNull = document.getElementById('passwordNull')
        passwordInput.classList.add('error')
        passwordNull.innerHTML = message
    } else {
        passwordInput.classList.add('success')
        passwordNull.innerHTML = ''
    }
}

// function PasswordCheck() {
//     const passwordcheckValue = passwordcheckInput.value.trim();
//     const passwordValue = passwordInput.value

//     setErrorForPassword(passwordcheckValue, passwordValue, 'Passwords must be the same')
// }
    
function setErrorForPasswordcheck(input, passwordValue, message) {
    if(input !== passwordValue) {
        const passwordcheckNull = document.getElementById('passwordcheckNull')
        passwordcheckInput.classList.add('error')
        passwordcheckNull.innerHTML = message
    } else if(input === '') {
        passwordcheckInput.classList.add('error')
        passwordcheckNull.innerHTML = 'Password cannot be blank'
    } else{
        passwordcheckInput.classList.add('success')
        passwordcheckNull.innerHTML = ''
    } 
}