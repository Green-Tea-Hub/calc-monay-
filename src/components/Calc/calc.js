"use strict";

/*
  There are
  Some functions
  For #calc block
  And some initialization for #calc
  Add inputs Heandlers
*/

const $Calc = document.getElementById("calc");

// Add heandler to inputs "switch" coins
const switch_inputs = $Calc.querySelectorAll(".calc-boxes .calc__switch-input");
switch_inputs.forEach((input) => {
  input.addEventListener("change", changeCalcCoin, false);
});

// Add heandler to input coins value
const cash_inputs = $Calc.querySelectorAll(".calc-boxes .calc__cash-value");
cash_inputs.forEach((input) => {
  input.addEventListener("change", changeCalcValue, false);
});
