function solution(n: number, m: number): Array<Array<number> | number> {
  const answer = [];
  const tmp = [];
  function DFS(level: number, now: number) {
    if (level === m) {
      answer.push(tmp.slice());
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        if (now >= i) {
          continue;
        }
        tmp.push(i);
        DFS(level + 1, i);
        tmp.pop();
      }
    }
  }

  DFS(0, 0);

  answer.push(answer.length);
  return answer;
}

console.log(solution(4, 2));

function lectureSolution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L, s) {
    if (L === m) {
      answer.push(tmp.slice());
      return;
    } else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}
console.log(lectureSolution(4, 2));
