"use strict";

async function __searchInCoinsList() {
  const tag = this.placeholder;

  // Check sessionStorage
  let coinsList;
  if (sessionStorage.coinsList) {
    coinsList = JSON.parse(sessionStorage.coinsList);
  } else {
    coinsList = await get_CoinGecko("coins/list");
    sessionStorage.coinsList = JSON.stringify(coinsList);
  }

  const list_cont =
    // "Clear History"
    (list_cont.innerHTML = "");
  input_more.innerText = 0;

  // Serach func
  const getSearchId = (db, target) => {
    let l = 0; // left
    let r = db.length - 1; // right
    let m; // mid

    while (l <= r) {
      m = Math.round((r - l) / 2) + l;

      if (target === db[m][tag]) return m;
      else if (target < db[m][tag]) r = m - 1;
      else l = m + 1;
    }

    return false;
  };

  const search_answer_id = getSearchId(
    coinsList,
    this.innerText.toLocaleLowerCase()
  );

  if (search_answer_id) {
    const search_answer_db = coinsList[search_answer_id];
    addInCoinsList(search_answer_db);
  } else {
    alert("oh shit im sorry");
  }

  // Enable Input
  this.removeAttribute("disabled");
}

async function searchInCoinsList() {
  // Disabled Input
  this.setAttribute("disabled", true);

  // Get Coins List
  let coinsList;
  if (sessionStorage.coinsList) {
    coinsList = JSON.parse(sessionStorage.coinsList);
  } else {
    coinsList = await get_CoinGecko("coins/list");
    sessionStorage.coinsList = JSON.stringify(coinsList);
  }

  const tag = this.placeholder;

  // !!! CHANGE !!!
  // Sort tags
  coinsList = coinsList.sort(function (a, b) {
    if (a[tag] > b[tag]) {
      return 1;
    }
    if (a[tag] < b[tag]) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  });

  // !!! CHANGE TARGET !!!
  const target = this.value.replace(/ +/g, " ").trim();
  const search_mass_id = getSearchId(coinsList, target, tag);

  // !!! CHANGE THIS ALL !!!
  if (search_mass_id) {
    const fk_answer = [];
    fk_answer.push(coinsList[search_mass_id]);

    $Coin.querySelector(".coins__list").innerHTML = "";
    input_more.innerText = 0;
    addInCoinsList(fk_answer);
  } else console.log("Search is " + search_mass_id);

  // Enable Input
  this.removeAttribute("disabled");
}
