function solution(n: number): number {
  function DFS(a: number, sum?: number): number {
    if (!sum) {
      sum = 1;
    }

    if (a === 1) {
      return sum;
    } else {
      return DFS(a - 1, sum * a);
    }
  }
  return DFS(n);
}

console.log(solution(5));

function lectureSolution(n) {
  let answer;
  function DFS(n) {
    if (n === 1) {
      return 1;
    } else {
      return n * DFS(n - 1);
    }
  }
  answer = DFS(n);
  return answer;
}
console.log(lectureSolution(5));
