const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

let isEmailValid = false;
let isPasswordValid = false;

let isEmailTouched = false;
let isPasswordTouched = false;

const handleButtonStatus = () => {
    if (isEmailValid && isPasswordValid) {
        loginBtn.removeAttribute('disabled');
    } else {
        loginBtn.setAttribute('disabled', true);
    }
};

const validateEmail = () => {
    if (!isEmailTouched) return;

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    

    let temail = email.value.trim();

    console.log({ temail });
    if (temail === '') {
        isEmailValid = false;
        handleButtonStatus();
        emailError.innerHTML = 'This field is required';
        return;
    }
      
    if (temail.match(emailPattern)) {
        isEmailValid = true;
        handleButtonStatus();
        emailError.innerHTML = '';
    } else {
        isEmailValid = false;
        handleButtonStatus();
        emailError.innerHTML = 'Enter valid email';
    }
};

const validatePassword = () => {
    if (!isPasswordTouched) return;
    const passwordPattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    let tpassword = password.value.trim();
    console.log({ tpassword });
    if (tpassword === '') {
        isPasswordValid = false;
        handleButtonStatus();
        passwordError.innerHTML = 'This field is required';
        return;
    }
    if (tpassword.match(passwordPattern)) {
        isPasswordValid = true;
        handleButtonStatus();
        passwordError.innerHTML = '';
    } else {
        isPasswordValid = false;
        handleButtonStatus();
        passwordError.innerHTML = 'Password:atleast 8 characters , one upper , lower case ,numeric and (special character)';
    }

    // if (tpassword.match(passwordPattern)) {
    //     isPasswordValid = false;
    //     handleButtonStatus();
    //     passwordError.innerHTML = 'Password:atleast 8 characters , one upper , lower case , (special character)   ';
    //     return;
    // }

    // isPasswordValid = true;
    // handleButtonStatus();
    // passwordError.innerHTML = '';
};

email.addEventListener('blur', function () {
    isEmailTouched = true;
});

password.addEventListener('blur', function () {
    isPasswordTouched = true;
});

email.addEventListener('blur', validateEmail);
password.addEventListener('blur', validatePassword);

email.addEventListener('keyup', validateEmail);
password.addEventListener('keyup', validatePassword);
const mobile_nav = document.querySelector(".mobile-nav-icon");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  
  console.log("hii")
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());