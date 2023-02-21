type coinCnt = number;
function solution(coinList: Array<number>, charges: number): coinCnt {
  let answer = 500;
  function DFS(level: number, nowCharges: number) {
    if (level >= answer && answer !== -1) {
      return;
    }
    if (nowCharges === charges) {
      console.log(`answer: ${answer}, now: ${level}`);
      answer = Math.min(answer, level);
      return;
    } else {
      for (let i = 0; i < coinList.length; i++) {
        DFS(level + 1, nowCharges + coinList[i]);
      }
    }
  }

  DFS(0, 0);
  return answer;
}
console.log(solution([1, 2, 5], 15));
