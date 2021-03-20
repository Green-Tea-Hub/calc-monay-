"use strict";

async function createPost_coinsList(place = ".coins") {
  const coinsList = await get_CoinGecko("coins/list");
  /** Add Coins List in session storage for using later */
  sessionStorage.coinsList = JSON.stringify(coinsList);

  addInCoinsList(["id", "name", "symbol"], coinsList);
  console.log("done add");
}
