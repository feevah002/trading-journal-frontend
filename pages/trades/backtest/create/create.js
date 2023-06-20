import Requests from "../../../../services/fetch.js";
import TradeDataHandler from "../../../../utils/tradesHandler.js";

const { postNewTrade } = new Requests();
const { getUIdata } = new TradeDataHandler();

const form = document.querySelector("form");
const url =
  "https://trading-journal-backend-feevah.onrender.com/trades/back-test/new";

form.addEventListener("submit", (e) => {
  postNewTrade(url, getUIdata(document))
    .then((response) => {
      if (response.status === true) {
        console.log(response)
        alert("Form submitted successfully!");
      } else {
        console.log(response)
        throw new Error("Form submission failed.");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  e.preventDefault();
});
