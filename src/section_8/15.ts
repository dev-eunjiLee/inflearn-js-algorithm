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

function lectureSolution(k: number, arr: Array<number>, m: number): number {
  let answer = 0;
  let tmp = Array.from({ length: k });
  function DFS(L, s, sum) {
    if (L === k) {
      console.log(sum, tmp);
      if (sum % m === 0) {
        answer++;
      }
    } else {
      for (let i = s; i < arr.length; i++) {
        tmp[L] = arr[i];
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0, 0);
  return answer;
}

console.log(lectureSolution(3, [2, 4, 5, 8, 12], 6));
