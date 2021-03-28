"use strict";

function changePrice() {
  const coin_id = switch_inputs[0];
  const coin_1_sym = switch_inputs[1];
  const coin_2_sym = switch_inputs[2];

  const coin_value = cash_inputs[0];
  const coin_1_val = cash_inputs[1];
  const coin_2_val = cash_inputs[2];

  const coins_price = JSON.parse(
    sessionStorage[coin_id.value.toLocaleLowerCase().trim()]
  )[coin_id.value.toLocaleLowerCase().trim()];

  const ctc_1 = coins_price[coin_1_sym.value.toLocaleLowerCase().trim()];
  const ctc_2 = coins_price[coin_2_sym.value.toLocaleLowerCase().trim()];

  coin_1_val.value = coin_value.value * ctc_1;
  coin_2_val.value = coin_value.value * ctc_2;

  // console.log(coin_symbol_price);
}
