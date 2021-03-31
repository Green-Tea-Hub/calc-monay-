"use strict";

async function changePrice() {
  const cS = (str) => str.toLocaleLowerCase().trim(); // Clear String
  const mainCoin_id = cS(switch_inputs[0].value); // To string
  const mainCoin_value = +cash_inputs[0].value; // To number

  // if (switch_inputs.length !== cash_inputs.length) return;
  for (let i = 1; i < switch_inputs.length; i++) {
    const otherCoin_symbol = cS(switch_inputs[i].value);
    const otherCoin_val_inp = cash_inputs[i];
    let mainCoin_PricePlan; // Ohh.. need get prices

    if (
      sessionStorage[mainCoin_id] &&
      JSON.parse(sessionStorage[mainCoin_id])[otherCoin_symbol]
    )
      mainCoin_PricePlan = JSON.parse(sessionStorage[mainCoin_id]);
    else {
      const coin_symbol_mass = []; // Create and add needed coin symbols
      switch_inputs.forEach((input) => coin_symbol_mass.push(cS(input.value)));

      // Get object with coin prices from server
      const r = `${mainCoin_id}&vs_currencies=${coin_symbol_mass.join("%2C")}`;
      const api_obj_answer = await get_CoinGecko("simple/price?ids=" + r);

      // Save server answer
      sessionStorage[mainCoin_id] = JSON.stringify(api_obj_answer[mainCoin_id]);
      mainCoin_PricePlan = JSON.parse(sessionStorage[mainCoin_id]);
    }

    const ctc = mainCoin_PricePlan[otherCoin_symbol]; // Get price coin to coin
    otherCoin_val_inp.value = (mainCoin_value * ctc).toFixed(2); // Add all information on page
    cc_rate_divs[i].innerText = `${mainCoin_id} - ${ctc}`;
  }
}
