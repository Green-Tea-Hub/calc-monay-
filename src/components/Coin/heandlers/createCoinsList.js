"use strict";

/** .coins__input-more heandler
 */
async function createCoinsList() {
  // Disabled Input
  this.setAttribute("disabled", true);
  console.time("Add Coins in list time");

  this.style.addInCoinsList;
  let coinsList;
  if (sessionStorage.coinsList) {
    coinsList = JSON.parse(sessionStorage.coinsList);
  } else {
    coinsList = await get_CoinGecko("coins/list");
    sessionStorage.coinsList = JSON.stringify(coinsList);
  }

  // Start a Function
  // addInCoinsList(["id", "name", "symbol"], coinsList);
  addInCoinsList(coinsList);

  // End of Heandler
  console.timeEnd("Add Coins in list time");
  this.removeAttribute("disabled");
}
