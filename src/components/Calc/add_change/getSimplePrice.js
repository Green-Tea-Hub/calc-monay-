"use strict";

/**
 *
 * @param {string} main_coin_id
 * @param {Object HTML} inputs_coin
 * @returns Array
 */
async function getSimplePrice(main_coin_id, inputs_coin) {
  let resp = `${main_coin_id}&vs_currencies=`;
  inputs_coin.forEach((input) => (resp += `${input.value}%2C`));

  const answer = await get_CoinGecko("simple/price?ids=" + resp);
  return answer[main_coin_id];
}
