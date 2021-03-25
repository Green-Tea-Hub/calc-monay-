"use strict";

/**
 * Called from addInCoinsList()
 * @param {Array} names
 */
function addSearchForDB(names) {
  const search_cont = document.querySelector(".coins__search");

  names.forEach((name) => {
    const input = document.createElement("input");

    input.addEventListener("change", searchInCoinsList, false);
    input.placeholder = name;
    input.classList = `search-${name} coins__search-inputs`;
    input.target = name;

    search_cont.appendChild(input);
  });
}
// !!! CANGE !!!
addSearchForDB(["id", "symbol", "name"]);
