describe("Index functions", function () {
  describe("get_CoinGecko", function () {
    ["ping", "events"].forEach(async (response) => {
      it("Ответ на запрос - " + response, function () {
        assert(get_CoinGecko(response));
      });
    });
  });
});

describe("In Calc", function () {
  // Need restruct and add tests for changePrice
  describe("getOptionsGroup", function () {
    const db0 = [{ id: "unlar", symbol: "usd", name: "ar" }];
    const db1 = [
      { id: "bitcoin", symbol: "btc", name: "Bitcoin" },
      { id: "ethereum", symbol: "eth", name: "Ethereum" },
    ];

    const g0 = getOptionsGroup(db0, "id", "name", "g0");
    const g1 = getOptionsGroup(db1, "id", "name", "g1");
    const g2 = getOptionsGroup(db0, "id", "name");
    const g3 = getOptionsGroup(db1, "id");
    const g4 = getOptionsGroup(db0);

    it("Вернуть обьект группы select с параметрами", function () {
      assert.isObject(g0, "Все не работает");
      assert.isObject(g1, "Не работает с несколькими параметрами");
    });
    it("При отсутсвии параметров", function () {
      assert.isObject(g2, "Не работает без названия группы");
      assert.isObject(g3, "Не работает без текста в option");
      assert.isObject(g4, "Не работает без значения option");
    });
  });
  // Add tests for addOptionsInSelector
  // Add tests for getSimplePrice
});

describe("In Coins List", function () {
  // Add tests for createCoinsList
  // Add tests for searchInCoinsList
  // Add tests for __getRow
  // Add tests for addCoinsList
  // Add tests for getSortBit
  // Add tests for getSearchIndex
});
