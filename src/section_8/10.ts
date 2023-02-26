function solution(cnt: number, pickedCnt: number, arr: Array<number>) {
  const newArr = [];
  function DFS(level: number, numberSet: Set<number>) {
    if (level > pickedCnt) {
      return;
    }
    if (numberSet.size === pickedCnt) {
      newArr.push([...Array.from(numberSet)]);
      return;
    } else {
      let i = 0;
      const newLevel = level + 1;
      while (i < cnt) {
        DFS(newLevel, new Set([...Array.from(numberSet), arr[i]]));
        i++;
      }
    }
  }
  DFS(0, new Set<number>());
  return newArr;
}

console.log(solution(3, 2, [3, 6, 9]));

function lectureSolution(m, arr) {
  let answer = [];
  let n = arr.length;
  let ch = Array.from({ length: n }, () => 0); // 체크 배열
  let tmp = Array.from({ length: m }, () => 0); // 실제 answer 에 들어갈 배열
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice()); // 깊은 복사 후 push 해야한다, 깊은 복사가 아니면 가장 마지막에 셋팅된 값으로 6개가 출력된다
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          // 아래 레벨 다 돌고 온 케이스니까 체크 표시 풀어줘야한다
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(lectureSolution(2, [3, 6, 9]));
console.log(lectureSolution(2, [3, 6, 9, 5]));
