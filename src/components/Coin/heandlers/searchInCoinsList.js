"use strict";

async function __searchInCoinsList() {
  const tag = this.placeholder;

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
  // Get Coins List
  let coinsList;
  if (sessionStorage.coinsList) {
    coinsList = JSON.parse(sessionStorage.coinsList);
  } else {
    coinsList = await get_CoinGecko("coins/list");
    sessionStorage.coinsList = JSON.stringify(coinsList);
  }

  // Search func
  function getSearchId(db, target, tag) {
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

  const tag = this.placeholder;

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

  const target = this.value.replace(/ +/g, " ").trim().toLocaleLowerCase();
  const search_mass_id = getSearchId(coinsList, target, tag);

  if (search_mass_id) {
    const fk_answer = [];
    fk_answer.push(coinsList[search_mass_id]);

    $Coin.querySelector(".coins__list").innerHTML = "";
    input_more.innerText = 0;
    addInCoinsList(fk_answer);
  } else {
    err("oh shit im sorry\n but this is " + search_mass_id);
  }
}

// let cities = [{ id: 121, name: 'г. Урюпинск' }, { id: 122, name: 'г. Париж' }, { id: 123, name: 'г. Москва' }, { id: 124, name: 'г. Штормград' }];
// let searchTerm = 'г. Москва';
// let cityId = cities.find(city => city.name === searchTerm).id
// console.log(cityId);
