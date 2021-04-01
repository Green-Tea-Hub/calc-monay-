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
  addOptionInSelector(selector);
  selector.addEventListener("change", changeCalcCoin, false);
});

const coinValue_inputs = $Calc.querySelectorAll(".calc-box__coin-value");
coinValue_inputs[0].addEventListener("change", changeCalcValue, false);

// Just get coin div ...
const coinRate_divs = $Calc.querySelectorAll(".calc-box__coin-rate");

// changePrice();
