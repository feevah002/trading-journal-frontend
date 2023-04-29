import Requests from "./request.js";
const { userToken } = new Requests();
class Navbar {
  getNavbar() {
    fetch("http://127.0.0.1:5500/navbar.html")
      .then((response) => response.text())
      .then((html) => {
        const div = document.createElement("div");
        div.innerHTML = `${html}
        <style>
          a {
            text-decoration: none;
          }
          .header {
           
            height: 80px;
            width: 100%;
            z-index: 100;
            padding: 0 20px;
          }
          .nav {
            max-width: 1100px;
            width: 100%;
            margin: 0 auto;
          }
          .nav,
          .nav_item {
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: space-between;
          }
          .nav_logo,
          .nav_link,
          .button {
            color: #fff;
          }
          .nav_logo {
            font-size: 25px;
          }
          .nav_item {
            column-gap: 25px;
          }
          .nav_link:hover {
            color: #d9d9d9;
          }
          .button {
            padding: 6px 24px;
            border: 2px solid #fff;
            background: transparent;
            border-radius: 6px;
            cursor: pointer;
            transform: scale(1);
            transition: transform 0.3s ease-out;
          }
          .button:hover {
            transform: scale(1.1);
            transition: all 0.3s ease-out;
          }
          #logout{
            display: 'none';
          }
          #login{
            display: 'none';
          }
          #sign_up{
            display: 'none';
          }
        </style>`;
        document.body.appendChild(div);

        const log_status = div.querySelector("#log_status");
        const logout = div.querySelector("#logout");
        const signup = div.querySelector("#sign_up");
        const login = div.querySelector("#login");

        function state() {
          if (!userToken) {
            logout.style.display = "none";
            login.style.display = "inline-block";
            signup.style.display = "inline-block";
          } else {
            logout.style.display = "inline-block";
            login.style.display = "none";
            signup.style.display = "none";
          }
        }
        state();

        logout.addEventListener("click", (e) => {
          localStorage.removeItem("jwtToken");
          state();
          window.location.reload();
          e.preventDefault();
        });
        document.querySelector("#header-container").appendChild(div);
      });
  }
}
export default Navbar;
