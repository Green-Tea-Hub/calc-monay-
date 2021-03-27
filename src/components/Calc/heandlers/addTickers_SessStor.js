"use strict";

function addTickers_SessStor() {
  get_CoinGecko(`/coins/${this.value}/tickers`);
}
