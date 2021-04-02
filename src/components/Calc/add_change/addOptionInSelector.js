"use strict";

/**
 * addOptionsInSelector(input, arrayOfOptions)
 * @param {Object HTML} selector
 * @param {Array} options
 */
function addOptionsInSelector(selector, options) {
  for (var option in options) {
    const a = getOptionsGroup(options[option], selector.name, "name", option); // Send this coins and get optgroup with him
    selector.appendChild(a); // Add in selector
  }
}
