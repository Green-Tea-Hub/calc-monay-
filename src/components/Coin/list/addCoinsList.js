"use strict";

/**
 * addInCoinsList([{},{},{}])
 * @param {Array} db
 */
function addInCoinsList(db) {
  // Start & end (inp counter):
  let i = +input_more.innerText;
  let end = i + 100;

  for (; i < end && i < db.length; i++) {
    const names = db[i];
    const container = document.createElement("div");
    container.classList = "coins__list-item";

    $Coin.querySelector(".coins__list").appendChild(container);

    for (var name in names) {
      const span_cont = document.createElement("span");
      span_cont.classList = "coins__list-items show-animation ";
      span_cont.innerHTML = `
        <span class="name">${name}</span>
        <span class="value">${names[name]}</span>
      `;

      container.appendChild(span_cont);
    }
  }

  // Change counter in button
  input_more.innerText = i;
}
