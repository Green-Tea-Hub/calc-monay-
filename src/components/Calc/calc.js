"use strict";

/*
  There are
  Some functions
  For #calc block
  And some initialization for #calc
  Add inputs Heandlers
*/

function clrStr(str) {
  return str.toLocaleLowerCase().trim();
}

const $Calc = document.getElementById("calc");

// Add heandler to inputs "switch" coins
const switch_inputs = $Calc.querySelectorAll(".calc-boxes .calc__switch-input");
switch_inputs[0].addEventListener("change", changeCalcCoin, false);

// Add heandler to input coins value
const cash_inputs = $Calc.querySelectorAll(".calc-boxes .calc__cash-value");
cash_inputs[0].addEventListener("change", changeCalcValue, false);

const cc_rate_divs = $Calc.querySelectorAll(".calc__cash-rate");
