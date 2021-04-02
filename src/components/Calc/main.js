"use strict";

/*
  There are
  Some functions
  For #calc block
  And some initialization for #calc
  Add inputs Heandlers
*/

const $Calc = document.getElementById("calc");

// Add heandlers
const coin_selectors = $Calc.querySelectorAll(".calc-box__coin-select");
coin_selectors.forEach((selector) => {
  const options = {
    coins: [
      { id: "bitcoin", symbol: "btc", name: "Bitcoin" },
      { id: "ethereum", symbol: "eth", name: "Ethereum" },
      { id: "ripple", symbol: "xrp", name: "XRP" },
      { id: "litecoin", symbol: "ltc", name: "Litecoin" },
      { id: "bitcoin", symbol: "btc", name: "Bitcoin" },
      { id: "ethereum", symbol: "eth", name: "Ethereum" },
    ],
    currencies: [
      {
        id: "uniswap-state-dollar",
        symbol: "usd",
        name: "unified Stable Dollar",
      },
    ],
  };

  addOptionsInSelector(selector, options); // Add options in selector
  selector.addEventListener("change", changeCalcCoin, false); // Add Heandler
});

const coinValue_inputs = $Calc.querySelectorAll(".calc-box__coin-value");
coinValue_inputs[0].addEventListener("change", changeCalcValue, false);

// Just get coin div ...
const coinRate_divs = $Calc.querySelectorAll(".calc-box__coin-rate");

// changePrice();
