"use strict";

/**
 * let index = getSearchId([1,8,9,"haha"], "8");
 * @param {Array} db
 * @param {*} target
 * @param {Symbol} tag
 * @returns index number or false
 */
function getSearchId(db, target = 12, tag = "years") {
  let l = 0; // left
  let r = db.length - 1; // right
  let m; // mid

  while (l <= r) {
    m = Math.round((r - l) / 2) + l;

    // if (~db[m][obj_name].indexOf(target)) return m !!! so heavy
    if (target === db[m][tag]) return m;
    else if (target < db[m][tag]) r = m - 1;
    else l = m + 1;
  }

  return false;
}
