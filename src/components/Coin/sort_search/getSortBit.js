"use strict";

/**
 * const a = sortBit([{tag},{tag},{tag}], tag);
 * @param {Array} db
 * @param {String} tag or symbol
 * @returns Array
 */
function sortBit(db, tag) {
  return db.sort((a, b) => {
    if (a[tag] > b[tag]) return 1;
    if (a[tag] < b[tag]) return -1;
    // a должно быть равным b
    return 0;
  });
}
