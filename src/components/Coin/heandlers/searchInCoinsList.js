"use strict";

/** .coins__search-inps heandler
 */
async function searchInCoinsList() {
  this.setAttribute("disabled", true); // Disabled Input

  let coinsList; // Need get "db"
  if (sessionStorage.coinsList) {
    coinsList = JSON.parse(sessionStorage.coinsList);
  } else {
    coinsList = await get_CoinGecko("coins/list");
    sessionStorage.coinsList = JSON.stringify(coinsList);
  }

  const ID = getSearchIndex(
    sortBit(coinsList, this.placeholder), // Get with tag sorted db
    this.value.toLocaleLowerCase().trim(), // Get "target" without " "
    this.placeholder // Tag ...
  );

  $Coin.querySelector(".coins__list").innerHTML = "";
  input_more.innerText = addInCoinsList([coinsList[ID]]);

  this.removeAttribute("disabled"); // Enable input
}
