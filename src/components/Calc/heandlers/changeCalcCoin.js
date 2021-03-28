"use strict";

async function changeCalcCoin() {
  const coin_id = this.value.toLocaleLowerCase().trim();

  const coin_price_plan = await get_CoinGecko(
    // `simple/price?ids=${coin_id}&vs_currencies=${switch_inputs[1].value}%2C${switch_inputs[2].value}`
    `simple/price?ids=bitcoin&vs_currencies=eth%2Cdkk%2Cusd%2Cbtc`
  );

  sessionStorage[coin_id] = JSON.stringify(coin_price_plan);

  changePrice();
  // for (let i = 0; i < switch_inputs.length; i++) {
  //   let price;
  //   if (sessionStorage.price[coin_id][switch_inputs[i]]) {
  //     price = sessionStorage.price[coin_id][switch_inputs[i]];
  //   } else {
  //     price = await get_CoinGecko(
  //       `simple/price?ids=${coin_id}&vs_currencies=${switch_inputs[i]}`
  //     )[coin_id][switch_inputs[i]];
  //     sessionStorage.price[coin_id][switch_inputs[i]] = price;
  //   }
  // }
}
