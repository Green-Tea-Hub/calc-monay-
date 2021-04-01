"use strict";

/*
  There are
  Some functions
  For #coin block
  And some initialization for #coin
  Add inputs Heandlers
*/

const $Coin = document.getElementById("coin");

// Add heandler to input "More" coins
const input_more = $Coin.querySelector(".coins__input-more");
input_more.addEventListener("click", createCoinsList, false);

// Add heandler to search inputs
["id", "symbol", "name"].forEach((placeholder) => {
  const input = $Coin.querySelector(`input[placeholder="${placeholder}"]`);
  input.addEventListener("change", searchInCoinsList, false);
});
