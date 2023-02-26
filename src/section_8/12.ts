function solution(n: number, r: number): number {
  function DFS(n: number, r: number): number {
    if (n - r === 1) return n;
    if (r === 1) return n;
    if (n === r) return 1;
    else return DFS(n - 1, r - 1) + DFS(n - 1, r);
  }
  return DFS(n, r);
}
console.time("1");
console.log(solution(5, 3));
// console.log(solution(33, 19));
console.timeEnd("1");

function lectureSolution(n: number, r: number): number {
  let answer;
  function DFS(n: number, r: number): number {
    if (n === r || r === 0) {
      return 1;
    } else {
      return DFS(n - 1, r - 1) + DFS(n - 1, r);
    }
  }
  answer = DFS(n, r);
  return answer;
}

console.time("2");
console.log(lectureSolution(5, 3));
// console.log(lectureSolution(33, 19));
console.timeEnd("2");

function lectureSolutionWithMemorization(n: number, r: number): number {
  let answer;
  // const dy = Array.from({ length: 3 }, () => Array(5).fill(0)); // 3행 5열 2차원 배열
  const dy = Array.from({ length: n + 1 }, () => Array(r + 1).fill(0));
  console.log(dy);
  function DFS(n: number, r: number): number {
    if (dy[n][r] > 1) return dy[n][r];
    if (n === r || r === 0) {
      return 1;
    } else {
      dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
      return dy[n][r];
    }
  }
  answer = DFS(n, r);
  return answer;
}

console.time("3");
console.log(lectureSolutionWithMemorization(5, 3));
console.log(lectureSolutionWithMemorization(33, 19));
console.timeEnd("3");
