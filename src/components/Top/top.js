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
  console.time("Add Top Trending");

  let top_trending;
  if (sessionStorage.top_trending) {
    top_trending = JSON.parse(sessionStorage.top_trending);
  } else {
    top_trending = await get_CoinGecko("search/trending");
    sessionStorage.top_trending = JSON.stringify(top_trending);
  }

  if (!top_trending) return;

  const text_block = document.createElement("p");
  text_block.classList = "top-trending__text";
  text_block.innerHTML = "Top Trending";

  top_trending.coins.forEach((coin) => {
    text_block.innerHTML += `
      |
      Market cap rank
      ${coin.item.name}
      <img src="${coin.item.thumb}" alt="${coin.item.symbol}">
      (<b>${coin.item.symbol}</b>):
      ${coin.item.market_cap_rank}
      |
    `;
  });

  place.appendChild(text_block);

  console.timeEnd("Add Top Trending");
}

add_TP_onPage($Top.querySelector(".top-trending"));
