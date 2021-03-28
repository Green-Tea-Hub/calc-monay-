"use strict";

/*
  There are
  Some functions
  For #top-trending block
  And some initialization for #top-trending
  Add inputs Heandlers
*/

const $Top = document.getElementById("top");

async function add_TP_onPage(place) {
  const top_trending = await get_CoinGecko("search/trending");

  if (!top_trending) return;

  const text_block = document.createElement("p");
  text_block.classList = "top-trending__text";
  text_block.innerHTML = "Market cap rank: ";

  top_trending.coins.forEach((coin) => {
    text_block.innerHTML += `
      ${coin.item.name} (<b>${coin.item.symbol}</b>): ${coin.item.market_cap_rank} |
    `;
  });

  place.appendChild(text_block);
}

add_TP_onPage($Top.querySelector(".top-trending"));
