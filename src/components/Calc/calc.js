"use strict";

/*
  There are
  Some functions
  For #calc block
  And some initialization for #calc
  Add inputs Heandlers
*/

const $Calc = document.getElementById("calc");

const switch_inputs = $Calc.querySelectorAll(
  ".calc__box:first-child .calc__switch-input"
);

switch_inputs.forEach((input) => {
  input.addEventListener("change", addTickers_SessStor, false);
});
