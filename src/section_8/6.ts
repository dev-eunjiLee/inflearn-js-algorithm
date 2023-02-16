function solution(maxWeight: number, list: number[]): number {
  let answer = Number.MIN_SAFE_INTEGER;
  function DFS(index: number, sum: number) {
    if (index === list.length) {
      if (sum <= maxWeight) {
        answer = Math.max(answer, sum);
      }
      return;
    } else {
      DFS(index + 1, sum + list[index]);
      DFS(index + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(259, [81, 58, 42, 33, 61]));

function lectureSolution(maxWeight: number, list: number[]): number {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = list.length;

  function DFS(L, sum, arr) {
    if (sum > maxWeight) return;
    if (L === n) {
      console.log(sum, arr);
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + list[L], [...arr, list[L]]);
      DFS(L + 1, sum, arr);
    }
  }
  DFS(0, 0, []);
  return answer;
}

console.log(lectureSolution(259, [81, 58, 42, 33, 61]));
