"use strict";

/** .coins__search-inps heandler
 */
async function searchInCoinsList() {
  // Disabled Input and Start timer
  this.setAttribute("disabled", true);
  console.time("Search coin time");

  // Get Coins List
  let coinsList;
  if (sessionStorage.coinsList) {
    coinsList = JSON.parse(sessionStorage.coinsList);
  } else {
    coinsList = await get_CoinGecko("coins/list");
    sessionStorage.coinsList = JSON.stringify(coinsList);
  }

  // Get ID - answer
  const ID = getSearchId(
    sortBit(coinsList, this.placeholder), // Get with tag sorted db
    this.value.trim(), // Get "target" without " "
    this.placeholder // Tag ...
  );

  $Coin.querySelector(".coins__list").innerHTML = "";
  input_more.innerText = 0;

  // Send "DB" and create list with answer of search
  addInCoinsList([coinsList[ID]]);

  // End of Heandler
  console.timeEnd("Search coin time");
  this.removeAttribute("disabled");
}
