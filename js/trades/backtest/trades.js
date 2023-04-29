import Requests from "../../utils/request.js";
import TradeDataHandler from "../../utils/tradesHandler.js";
const { fillUI } = new TradeDataHandler();
const { getReq } = new Requests();

function mediaSlider() {
  const slideshow = document.getElementById("slideshow");
  const nextButton = document.getElementById("next-button");
  let currentSlide = 0;
  const slides = slideshow.getElementsByTagName("img");
  const numSlides = slides.length;

  function showSlide(index) {
    for (let i = 0; i < numSlides; i++) {
      slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
  }

  nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % numSlides;
    showSlide(currentSlide);
  });

  showSlide(currentSlide);
}

window.addEventListener("load", () => {
  mediaSlider();
  getReq("https://trading-journal-backend-feevah.onrender.com/trades/back-test")
    .then((data) => {
      document.querySelector("html").style.display = "block";
      fillUI(data.data);
    })
    .catch((error) => {
      console.log(error);
      window.location = "../../user/login.html";
    });
});
