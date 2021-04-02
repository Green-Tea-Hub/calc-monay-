"use strict";

/**
 *
 * @param {Object HTML} selector
 * @param {Array} options
 */
function addOptionsInSelector(selector, options) {
  for (var option in options) {
    const a = getOptionsGroup(options[option], selector.name, "name", option); // Send this coins and get optgroup with him
    selector.appendChild(a); // Add in selector

    // if (selector.name == "id") {
    //   const a = getOptionsGroup(options[option], "id", "name", option); // Send this coins and get optgroup with him
    //   selector.appendChild(a); // Add in selector
    // } else if (selector.name == "symbol") {
    //   const a = getOptionsGroup(options[option], "symbol", "name", option);
    //   selector.appendChild(a);
    // }
  }
}
