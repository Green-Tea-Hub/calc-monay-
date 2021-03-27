"use strict";

/** When error
 * @param {String} error_text
 * => Alert reload window
 */
const err = (error_text) => {
  confirm(error_text + "\n\n This page will be reload")
    ? window.location.reload()
    : false;
};

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
