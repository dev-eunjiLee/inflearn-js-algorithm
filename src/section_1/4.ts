/**
 * 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
 */
function solution(n: number): number {
  return Array.from({ length: n }, (x, index) => index + 1).reduce(
    (prev, curr) => {
      return prev + curr;
    },
    0
  );
}

console.log(solution(10));
console.log(solution(6));

function lectureSolution(n: number): number {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    answer += i;
  }
  return answer;
}

console.log(lectureSolution(10));
console.log(lectureSolution(6));
