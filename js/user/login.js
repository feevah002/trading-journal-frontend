import Requests from "../utils/request.js";

const { postLogin } = new Requests();


function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // Define the login credentials
  const credentials = {
    email,
    password,
  };

  postLogin(
    "https://trading-journal-backend-feevah.onrender.com/auth/login",
    credentials
  ).then((res) => {
    if (res.token) {
      const token = res.token;
      localStorage.setItem("jwtToken", token);
      window.location =
        "https://feevah002.github.io/trading-journal-frontend/index.html";
    } else {
      setTimeout(() => {
        document.querySelector("#message").style.color = "red";
        document.querySelector("#message").innerHTML = "";
      }, 2000);
      document.querySelector("#message").style.color = "red";
      document.querySelector("#message").innerHTML = "invalid credentials";
    }
  });
}

const form = document.getElementById("login_form");
form.addEventListener("submit", (e) => {
  login();
  e.preventDefault();
});

const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  pwShowHide = document.querySelectorAll(".pw_hide");


pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});
