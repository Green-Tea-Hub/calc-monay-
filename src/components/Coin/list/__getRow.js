"use strict";

/**
 * __getRow({id:"01", name:"1"})
 * @param {Array} object
 * @returns Object HTML
 */
function __getRow(object) {
  const container = document.createElement("div"); // Make "row"
  container.classList = "coins__list-item";

  for (var name in object) {
    const span_cont = document.createElement("span"); // Make "Cell"

    span_cont.classList = "coins__list-items show-animation ";
    span_cont.innerHTML = `<span class="name">${name}</span>
                           <span class="value">${object[name]}</span>`;
    container.appendChild(span_cont);
  }

  return container; // Return "row" object html
}
