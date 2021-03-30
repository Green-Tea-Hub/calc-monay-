"use strict";

async function changePrice() {
  const myCoin_id = clrStr(switch_inputs[0].value);
  const myCoin_inpValue = cash_inputs[0];

  for (let i = 1; i < switch_inputs.length && i < cash_inputs.length; i++) {
    const othCoin_symbol = clrStr(switch_inputs[i].value);
    const othCoin_inpValue = cash_inputs[i];

    // NEED TOTAL CHENGES ...
    let myCoin_PP;

    if (sessionStorage[myCoin_id]) {
      myCoin_PP = JSON.parse(sessionStorage[myCoin_id]);
    } else {
      const answer = await get_CoinGecko(
        `simple/price?ids=${myCoin_id}&vs_currencies=eth%2Cdkk%2Cusd%2Cbtc`
      );
      sessionStorage[myCoin_id] = JSON.stringify(answer[myCoin_id]);

      myCoin_PP = JSON.parse(sessionStorage[myCoin_id]);
    }

    const ctc = myCoin_PP[othCoin_symbol];
    othCoin_inpValue.value = myCoin_inpValue.value * ctc;
  }
}
