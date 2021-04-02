"use strict";

/*
  There are
  Some functions
  For #top-trending block
  And some initialization for #top-trending
  Add inputs Heandlers
*/

const $Top = document.getElementById("top");

(async (place) => {
  // Get/ save coins
  let top_trending_coins;
  if (sessionStorage.top_trending_coins)
    top_trending_coins = JSON.parse(sessionStorage.top_trending_coins);
  else {
    top_trending_coins = await get_CoinGecko("search/trending");
    sessionStorage.top_trending_coins = JSON.stringify(top_trending_coins);
  }

  // Create text container
  const txt_p = document.createElement("p");
  txt_p.classList = "top__trending-text";
  txt_p.innerHTML = "Top Trending (Market cap rank)";
  top_trending_coins.coins.forEach((coin) => {
    const span = document.createElement("span");
    span.innerHTML = `| ${coin.item.name} <img src="${coin.item.thumb}" alt="${coin.item.symbol}"> (<b>${coin.item.symbol}</b>): ${coin.item.market_cap_rank} |`;
    txt_p.appendChild(span);
  });

  place.appendChild(txt_p);
})($Top.querySelector(".top__trending"));
