"use strict";

function changeCalcCoin() {
  this.value && changePrice();
}

function changeCalcValue() {
  this.value && changePrice();
}

async function changePrice() {
  const inputs_coin = $Calc.querySelectorAll(".calc-box__coin-select");
  const inputs_coin_value = $Calc.querySelectorAll(".calc-box__coin-value");

  const main_coin_id = inputs_coin[0].value; // To string get ID
  const main_coin_val = +inputs_coin_value[0].value; // To number get Value

  for (let i = 1; i < inputs_coin.length; i++) {
    const oth_coin_symb = inputs_coin[i].value;
    const oth_coin_val_inp = inputs_coin_value[i];

    if (
      !sessionStorage[main_coin_id] ||
      !JSON.parse(sessionStorage[main_coin_id])[oth_coin_symb]
    )
      sessionStorage[main_coin_id] = JSON.stringify(
        await getSimplePrice(main_coin_id, inputs_coin)
      );

    const main_coin_PricePlan = JSON.parse(sessionStorage[main_coin_id]); // Get Object
    const price = main_coin_PricePlan[oth_coin_symb]; // Get number

    oth_coin_val_inp.value = (main_coin_val * price).toFixed(2); // Add all information on page
    $Calc.querySelectorAll(".calc-box__coin-rate")[
      i
    ].innerText = `${main_coin_id} is ${price} ${oth_coin_symb}`; // Add info too
  }
}
