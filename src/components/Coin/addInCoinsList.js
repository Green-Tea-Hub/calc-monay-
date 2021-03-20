"use strict";

/**
 * addInCoinsList(["#", "value"], [{},{},{}])
 * @param {Array} names
 * @param {Array} db
 */
function addInCoinsList(names, db) {
  const start = +input_more.innerText;
  const end = start + 100;

  for (let i = start; i < end && i < db.length; i++) {
    const obj = db[i];
    const new_div = document.createElement("div");
    new_div.classList = "coins__list-item";

    for (let j = 0; j < names.length; j++) {
      const name = names[j];
      const nSpan = document.createElement("span");
      nSpan.innerHTML = `
        <span class="number"> ${1 + i} </span>
        <span class="name">   ${name.toLocaleUpperCase()} </span>
        <span class="value">  ${obj[name]} </span>`;
      new_div.appendChild(nSpan);
    }

    input_more.innerText = end;
    $Coin.querySelector(".coins__list").appendChild(new_div);
  }
}
