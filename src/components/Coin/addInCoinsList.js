"use strict";

/**
 * addInCoinsList(["#", "value"], [{},{},{}])
 * @param {Array} names
 * @param {Array} db
 */
function addInCoinsList(names, db) {
  const start = $Coin.querySelector(".coins__input-more").list_num;
  const end = start + 100;

  for (let i = start; i < db.length && i < end; i++) {
    const obj = db[i];
    const new_div = document.createElement("div");
    for (let j = 0; j < names.length; j++) {
      const name = names[j];
      const nSpan = document.createElement("span");
      nSpan.innerText = `${i} ${name.toLocaleUpperCase()}: ${obj[name]} `;

      new_div.appendChild(nSpan);
    }
    $Coin.querySelector(".coins__list").appendChild(new_div);
  }
}
