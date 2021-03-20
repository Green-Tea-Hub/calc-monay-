"use strict";

/** .coins__input-more heandler
 */
async function createCoinsList() {
  let coinsList;
  if (sessionStorage.coinsList) {
    coinsList = JSON.parse(sessionStorage.coinsList);
  } else {
    coinsList = await get_CoinGecko("coins/list");
    sessionStorage.coinsList = JSON.stringify(coinsList);
  }

  addInCoinsList(["id", "name", "symbol"], coinsList);
}
