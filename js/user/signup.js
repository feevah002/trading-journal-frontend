import Requests from "../utils/request.js";
const { postSignup } = new Requests();
function passwordUI() {
  const formOpenBtn = document.querySelector("#form-open"),
    pwShowHide = document.querySelectorAll(".pw_hide");

  pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
      let getPwInput = icon.parentElement.querySelector("input");
      console.log(getPwInput);
      if (getPwInput.type === "password") {
        getPwInput.type = "text";
        icon.classList.replace("uil-eye-slash", "uil-eye");
      } else {
        getPwInput.type = "password";
        icon.classList.replace("uil-eye", "uil-eye-slash");
      }
    });
  });
}

function getUIdata() {
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');
  // const usernameInput = document.getElementById("username");
  // const firstnameInput = document.getElementById("firstname");
  // const lastnameInput = document.getElementById("lastname");
  // const middlenameInput = document.getElementById("middlename");
  // const phoneInput = document.getElementById("phone");
  const formData = new FormData();
  formData.append("email", emailInput.value);
  formData.append("password", passwordInput.value);
  // formData.append("username", usernameInput.value);
  // formData.append("firstname", firstnameInput.value);
  // formData.append("lastname", lastnameInput.value);
  // formData.append("middlename", middlenameInput.value);
  // formData.append("phone", phoneInput.value);
  return formData;
}

function signup() {
  postSignup(
    "https://trading-journal-backend-feevah.onrender.com/auth/signup",
    getUIdata()
  )
    .then((res) => {
      if (res.token) {
        const token = res.token;
        localStorage.setItem("jwtToken", token);
        window.location = "https://feevah002.github.io/trading-journal-frontend/index.html";
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

document.querySelector("#signup_form").addEventListener("submit", (e) => {
  signup();
  e.preventDefault();
});
passwordUI();
