"use strict";

/**
 * addInCoinsList(["#", "value"], [{},{},{}])
 * @param {Array} names
 * @param {Array} db
 */
function addInCoinsList(names, db) {
  // Start & end (inp counter):
  let i = +input_more.innerText;
  let end = i + 100;

  for (; i < end && i < db.length; i++) {
    const name_obj = db[i];
    const container = document.createElement("div");
    container.classList = "coins__list-item";

    for (let j = 0; j < names.length; j++) {
      const name = names[j];

      const span_cont = document.createElement("span");
      span_cont.classList = "coins__list-items";
      span_cont.innerHTML = `
        <span class="name">${name.toLocaleUpperCase()}</span>
        <span class="value">${name_obj[name]}</span>
      `;

      container.appendChild(span_cont);
    }

    // Add on page container div
    $Coin.querySelector(".coins__list").appendChild(container);
  }

  // Change counter in button
  input_more.innerText = i;
}
