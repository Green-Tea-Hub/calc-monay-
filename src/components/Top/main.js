"use strict";

/*
  There are
  Some functions
  For #top-trending block
  And some initialization for #top-trending
  Add inputs Heandlers
*/

const $Top = document.getElementById("top");

(async () => {
  if (!sessionStorage.top_trending_coins)
    sessionStorage.top_trending_coins = JSON.stringify(
      await get_CoinGecko("search/trending")
    );

  const tt_coins = JSON.parse(sessionStorage.top_trending_coins);
  const tt_coins_p = document.createElement("p");

  tt_coins_p.classList = "top__trending-text";
  tt_coins_p.innerHTML = "Top Trending (Market cap rank): ";

  const getSpan = (coin) => {
    const span = document.createElement("span");
    span.innerHTML = `${coin.item.name}: ${coin.item.market_cap_rank}<img src="${coin.item.thumb}"> | `;
    return span;
  };

  tt_coins.coins.forEach((coin) => tt_coins_p.append(getSpan(coin)));

  $Top.querySelector(".top__trending").appendChild(tt_coins_p);
})();
