"use strict";

/*
  There are
  Some functions
  For #calc block
  And some initialization for #calc
  Add inputs Heandlers
*/

const $Calc = document.getElementById("calc");

(() => {
  const options_coinsANDcurrencies = {
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

  // heandlers
  const selects = $Calc.querySelectorAll(".calc-box__coin-select");
  selects.forEach((selector) => {
    addOptionsInSelector(selector, options_coinsANDcurrencies); // Add options in selector
    selector.addEventListener("change", changeCalcCoin, false); // Add Heandler
  });

  const numbers = $Calc.querySelectorAll(".calc-box__coin-value");
  numbers.forEach((input) =>
    input.addEventListener("change", changeCalcValue, false)
  );
})();
