"use strict";

// NEED REAL RESTRUCT !!!
async function changePrice() {
  const inputs_coin = coin_selectors;
  const inputs_coin_value = coin_valueInputs;

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

    const main_coin_PricePlan = JSON.parse(sessionStorage[main_coin_id]);
    const price = main_coin_PricePlan[oth_coin_symb];

    oth_coin_val_inp.value = (main_coin_val * price).toFixed(2); // Add all information on page
    coinRate_divs[i].innerText = `1 ${main_coin_id} - ${price}`;
  }
}

async function getSimplePrice(main_coin_id, inputs_coin) {
  const symb_mass = []; // Create and add needed coin symbols
  inputs_coin.forEach((input) => symb_mass.push(input.value)); // Add inputs value in symb mass

  const resp = `${main_coin_id}&vs_currencies=${symb_mass.join("%2C")}`;
  const answer = await get_CoinGecko("simple/price?ids=" + resp);

  // sessionStorage[main_coin_id] = JSON.stringify(answer[main_coin_id]); // Save server answer
  return answer[main_coin_id]; // Add anwer in plan
}
