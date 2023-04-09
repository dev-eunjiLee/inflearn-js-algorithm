function solution(charges: number, coinList: Array<number>): number {
  console.log(charges, coinList);

  coinList = coinList.sort((a, b) => a - b);
  console.log(coinList);

  let rest = charges;
  let coinIndex = coinList.length - 1;
  let coinCnt = 0;
  while (rest !== 0) {
    const newCharge = rest % coinList[coinIndex];
    const newCoinCnt = Math.floor(rest / coinList[coinIndex]);

    rest = newCharge;
    coinCnt += newCoinCnt;

    coinIndex--;
  }

  return coinCnt;
}

console.log(`answer: ${solution(15, [1, 2, 5])}`); // 3
console.log(`answer: ${solution(17, [1, 2, 5])}`); // 4
