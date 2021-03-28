"use strict";

async function changeCalcCoin() {
  // get_CoinGecko(`/coins/${this.value}/tickers`);

  const coin_syb = this.value.toLocaleLowerCase().trim();

  // Get Coins List
  let coin_db;
  if (sessionStorage[coin_syb]) {
    coin_db = JSON.parse(sessionStorage[coin_syb]);
  } else {
    coin_db = await get_CoinGecko("coins/list");
    sessionStorage.coinsList = JSON.stringify(coinsList);
  }
}
