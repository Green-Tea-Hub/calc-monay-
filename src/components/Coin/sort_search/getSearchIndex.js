"use strict";

/**
 * let index = getSearchId([1,8,9,"haha"], "8");
 * @param {Array} db
 * @param {*} target
 * @param {Symbol} tag
 * @returns index number or false
 */
function getSearchIndex(db, target = 12, tag = "years") {
  let top = 0; // left - top
  let bot = db.length - 1; // right - bottom
  let mid; // mid - mid

  while (top <= bot) {
    mid = Math.round((bot - top) / 2) + top;
    if (target === db[mid][tag]) return mid;
    else if (target < db[mid][tag]) bot = mid - 1;
    else top = mid + 1;
  }
  return false;
}
