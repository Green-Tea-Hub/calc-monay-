"use strict";

/**
 *
 * @param {Array} db
 * @param {Number} counter
 * @param {Number} step
 * @returns Number
 */
function addInCoinsList(db, counter = 0, step = 50) {
  let end = counter + step; // Make and number

  for (; counter < end && counter < db.length; counter++)
    $Coin.querySelector(".coins__list").appendChild(__getRow(db[counter])); // Add in .coins__list rows

  return counter;
}
