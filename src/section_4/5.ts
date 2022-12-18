function solution(n: number, k: number, card: number[]) {
  const cardCnt = n;
  const answerList = [];
  for (let firstCardIndex = 0; firstCardIndex < cardCnt; firstCardIndex++) {
    for (
      let secondCardIndex = 0;
      secondCardIndex < cardCnt;
      secondCardIndex++
    ) {
      if (firstCardIndex === secondCardIndex) continue;
      for (let thirdCardIndex = 0; thirdCardIndex < cardCnt; thirdCardIndex++) {
        if (
          firstCardIndex === thirdCardIndex ||
          secondCardIndex === thirdCardIndex
        ) {
          continue;
        }
        const sum =
          card[firstCardIndex] + card[secondCardIndex] + card[thirdCardIndex];
        if (sum === 152) {
          console.log(
            card[firstCardIndex],
            card[secondCardIndex],
            card[thirdCardIndex]
          );
        }
        answerList.push(sum);
      }
    }
  }
  return [...new Set(answerList)].sort((a, b) => b - a)[k - 1];
}

console.log(solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));

function lectureSolution(n: number, k: number, card: number[]) {
  let answer;
  let tmp = new Set<number>();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  let a = Array.from(tmp).sort((a, b) => b - a);
  answer = a[k - 1];
  return answer;
}

console.log(lectureSolution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
