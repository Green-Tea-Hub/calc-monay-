"use strict";

/*
  There are
  Some functions
  For #coin block
  And some initialization for #coin
*/

/**
 * await get_CoinGecko("ping");
 *
 * @param {*} res response "ping", "coins/list", "events" ...
 * @returns {Promise} coingecko.com api answer
 */
function get_CoinGecko(res) {
  return fetch(`https://api.coingecko.com/api/v3/${res}`) //
    .then((response) => response.json())
    .catch((error) => err(error + "\nResponse: " + res));
}
// ["ping", "events"].forEach(async (res) =>
//   console.log(await get_CoinGecko(res))
// );

const $Coin = document.getElementById("coin");

createPost_coinsList();
