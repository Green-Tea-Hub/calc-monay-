function addOptionInSelector(selector) {
  const coins = [
    { id: "bitcoin", symbol: "btc", name: "Bitcoin" },
    { id: "ethereum", symbol: "eth", name: "Ethereum" },
    { id: "ripple", symbol: "xrp", name: "XRP" },
    { id: "litecoin", symbol: "ltc", name: "Litecoin" },
    { id: "bitcoin", symbol: "btc", name: "Bitcoin" },
    { id: "ethereum", symbol: "eth", name: "Ethereum" },
  ];
  const currencies = [
    {
      id: "uniswap-state-dollar",
      symbol: "usd",
      name: "unified Stable Dollar",
    },
  ];

  if (selector.name == "id") {
    const g_coins = getOptionsGroup(coins, "id", "name", "coins");
    const g_curr = getOptionsGroup(currencies, "id", "name", "currencies");

    selector.appendChild(g_coins);
    selector.appendChild(g_curr);
  } else if (selector.name == "symbol") {
    const g_coins = getOptionsGroup(coins, "symbol", "name", "coins");
    const g_curr = getOptionsGroup(currencies, "symbol", "name", "currencies");

    selector.appendChild(g_coins);
    selector.appendChild(g_curr);
  }
}
