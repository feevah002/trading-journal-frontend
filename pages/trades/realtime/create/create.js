import TradeDataHandler from "../../../../utils/tradesHandler.js";
import Requests from "../../../../services/fetch.js";

const { postNewTrade, userToken } = new Requests();
const { getUIdata } = new TradeDataHandler();

const form = document.querySelector("#trade-form");
const url =
  "https://trading-journal-backend-feevah.onrender.com/trades/real-time/new";

form.addEventListener("submit", (e) => {
  postNewTrade(url, getUIdata(document))
    .then((response) => {
      if (response.status == true) {
        alert("Form submitted successfully!");
      } else {
        alert("Form submission failed.");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  e.preventDefault();
});
