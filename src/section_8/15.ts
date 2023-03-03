function solution(
  pickedCnt: number,
  numberList: Array<number>,
  standard: number
): number {
  const checkArray = Array.from({ length: numberList.length }, () => false);
  const tmpList: Array<number> = [];
  let answer = 0;
  function DFS(level: number, startIndex: number) {
    if (level === pickedCnt) {
      console.log(tmpList);
      const sum = tmpList.reduce((acc, curr) => {
        return acc + curr;
      }, 0);
      if (sum % standard === 0) {
        answer++;
      }
      return;
    } else {
      for (let i = startIndex; i < numberList.length; i++) {
        if (tmpList[0] === 2 && tmpList[1] === 8) {
        }
        if (checkArray[i] === false) {
          checkArray[i] = true;
          tmpList.push(numberList[i]);
          DFS(level + 1, i + 1);
          tmpList.pop();
          checkArray[i] = false;
        }
      }
    }
  }
  DFS(0, 0);

  return answer;
}

console.log(solution(3, [2, 4, 5, 8, 12], 6));
