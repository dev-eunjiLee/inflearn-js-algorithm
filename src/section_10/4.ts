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

console.time("1");
console.log(`answer: ${solution(15, [1, 2, 5])}`); // 3
console.log(`answer: ${solution(17, [1, 2, 5])}`); // 4
console.timeEnd("1");

function lectureSolution(m, coin) {
  let answer = 0;
  const MAX_SAFE_NUMBER = 1000;
  let dy = Array.from({ length: m + 1 }, () => MAX_SAFE_NUMBER);

  dy[0] = 0;

  for (let i = 0; i < coin.length; i++) {
    // 동전 금액부터 ++해서 진행하도록
    for (let j = coin[i]; j < m + 1; j++) {
      // 기존 값과, 해당 코인을 뺀 값의 최소 금액 + 1 과 비교해서 더 작은 값으로 업데이트
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }

  return dy[m];
}

console.time("2");
console.log(`answer: ${lectureSolution(15, [1, 2, 5])}`); // 3
console.log(`answer: ${lectureSolution(17, [1, 2, 5])}`); // 4
console.timeEnd("2");
