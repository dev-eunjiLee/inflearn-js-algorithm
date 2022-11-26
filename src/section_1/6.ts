/**
 * 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
 * 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53, 85이므로 그 합은
 * 이 되고,
 * 77 + 41 + 53 + 85 = 256
 * 41 < 53 < 77 < 85 이므로 홀수들 중 최소값은 41이 된다.
 */

function solution(arr: number[]): number[] {
  let min = 101; // 조건에서 주어지는 숫자들은 다 100 이하의 자연수라고 했기 때문에 초기화를 101로 함
  let sum = 0;
  arr.forEach((per) => {
    if (per % 2 === 0) return;
    min = per < min ? per : min;
    sum += per;
  });
  return [sum, min];
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));

function lectureSolution(arr: number[]): number[] {
  let answer = [];
  let min = Number.MAX_SAFE_INTEGER,
    sum = 0;
  for (const x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

console.log(lectureSolution([12, 77, 38, 41, 53, 92, 85]));
