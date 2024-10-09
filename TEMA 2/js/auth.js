let isLoginPage = true;

const ref = {
  switchButton: document.getElementById("switchButton"),
  loginButton: document.getElementById("loginButton"),
  emailField: document.getElementById("username"),
  passwordField: document.getElementById("password"),
  error: document.getElementById("error"),
  forgotPassword: document.getElementById("forgotPassword"),
  headerTitle: document.getElementById("headerTitle"),
};

ref.switchButton.addEventListener("click", function () {
  isLoginPage = !isLoginPage;
  togglePageMode();
  clearInputs();
});

const togglePageMode = () => {
  if (isLoginPage) {
    ref.headerTitle.innerText = "Login";
    ref.forgotPassword.style.visibility = "visible";
    ref.loginButton.value = "Log in";
    ref.switchButton.innerText = "Switch to create account page";
  } else {
    ref.headerTitle.innerText = "Create new account";
    ref.forgotPassword.style.visibility = "hidden";
    ref.loginButton.value = "Sign up";
    ref.switchButton.innerText = "Switch to login page";
  }
};

const showError = (message) => {
  ref.error.style.display = "block";
  ref.error.innerText = message;
  ref.error.style.color = "red";
};

const validateEmail = (emailValue, regex) => {
  return !!emailValue.match(regex);
};

const validatePassword = (passwordValue) => {
  return passwordValue.length > 3;
};

const clearInputs = () => {
  ref.emailField.value = "";
  ref.passwordField.value = "";
};

ref.loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  const emailValue = ref.emailField.value;
  const passwordValue = ref.passwordField.value;
  const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

  ref.error.style.display = "none";

  if (emailValue === "" || passwordValue === "") {
    showError("All fields are required and must contain a value!");
  } else {
    if (validateEmail(emailValue, regexEmailPattern) && validatePassword(passwordValue)) {
      if (isLoginPage) {
        login(emailValue, passwordValue).then((data) => {
          console.log(data);
          window.open("pages/feed.html", "_self");
        });
      } else {
        createAccount(emailValue, passwordValue).then((data) => {
          console.log(data);
          window.open("login.html", "_self");
        });
      }
    } else {
      showError("Incorrect email or password!");
    }

    clearInputs();
  }
});

async function login(emailValue, passwordValue) {
  const loginUrl = "https://reqres.in/api/login";
  const loginData = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };

  const loginConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  };

  const response = await fetch(loginUrl, loginConfig);
  return response.json();
}

async function createAccount(emailValue, passwordValue) {
  const registerUrl = "https://reqres.in/api/register";
  const registerData = {
    email: "eve.holt@reqres.in",
    password: "pistol",
  };

  const registerConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerData),
  };

  const response = await fetch(registerUrl, registerConfig);
  return response.json();
}