class TradeDataHandler {
  getUIdata(doc) {
    const formData = new FormData();
    if (doc.getElementById("account")) {
      formData.append("account", doc.getElementById("account").value);
    }
    formData.append("session", doc.getElementById("session").value);
    formData.append("media", doc.getElementById("media").files[0]);
    formData.append("setup", doc.getElementById("setup").value);
    formData.append("position", doc.getElementById("position").value);
    formData.append("riskToReward", doc.getElementById("riskToReward").value);
    formData.append("currencyPair", doc.getElementById("currencyPair").value);
    formData.append("note", doc.getElementById("note").value);
    formData.append(
      "igSentimentAtTime",
      doc.getElementById("igSentimentAtTime").value
    );
    formData.append("time", doc.getElementById("time").value);
    formData.append("date", doc.getElementById("date").value);
    formData.append("tradeOutcome", doc.getElementById("tradeOutcome").value);
    formData.append("profit", doc.getElementById("profit").value);
    formData.append("moneyRisked", doc.getElementById("moneyRisked").value);
    formData.append("lotSize", doc.getElementById("lotSize").value);
    formData.append("news", doc.getElementById("news").value);
    formData.append("newsType", doc.getElementById("newsType").value);
    return formData;
  }
  fillUI(data) {
    if (data.length > 0) {
      const images = slideshow.querySelectorAll("img");
      const tradingInfo = document.querySelector("#trading-info");
      data.forEach((trade) => {
        tradingInfo.querySelector("#session").textContent = trade.session;
        document.querySelector("#slideshow #one").src = trade.media;
        tradingInfo.querySelector("#setup").textContent = trade.setup;
        tradingInfo.querySelector("#riskToReward").textContent =
          trade.riskToReward;
        tradingInfo.querySelector("#currencyPair").textContent =
          trade.currencyPair;
        tradingInfo.querySelector("#note").textContent = trade.note;
        tradingInfo.querySelector("#igSentimentAtTime").textContent =
          trade.igSentimentAtTime;
        tradingInfo.querySelector("#time").textContent = trade.time;
        tradingInfo.querySelector("#date").textContent = trade.date;
        tradingInfo.querySelector("#tradeOutcome").textContent =
          trade.tradeOutcome;
        tradingInfo.querySelector("#profit").textContent = trade.profit;
        tradingInfo.querySelector("#moneyRisked").textContent =
          trade.moneyRisked;
        tradingInfo.querySelector("#lotSize").textContent = trade.lotSize;
        tradingInfo.querySelector("#news").textContent = trade.news;
        tradingInfo.querySelector("#newsType").textContent = trade.newsType;
      });
    } else {
      document.querySelector("body").innerHTML = `
    no data here
    <a href='create.html'>create </a>
    `;
    }
  }
}

export default TradeDataHandler;