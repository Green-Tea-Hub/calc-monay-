"use strict";

/** .coins__input-more heandler
 */
async function createCoinsList() {
  this.setAttribute("disabled", true); // Disabled Input

  let coinsList; // Need get "db"
  if (sessionStorage.coinsList) {
    coinsList = JSON.parse(sessionStorage.coinsList);
  } else {
    coinsList = await get_CoinGecko("coins/list");
    sessionStorage.coinsList = JSON.stringify(coinsList);
  }

  const counter = +input_more.innerText; // Make counter
  input_more.innerText = addInCoinsList(coinsList, counter, 100); // send db, start-number, end-number; Return counter

  this.removeAttribute("disabled"); // Enable input
}
