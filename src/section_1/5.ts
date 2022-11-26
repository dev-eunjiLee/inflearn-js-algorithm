/**
 * 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
 */
function solution(arr: number[]): number {
  // reduce의 경우 initialValue를 넣지 않으면 배열의 첫번째 값을 InitialValue로 사용한다.
  return arr.reduce((prev, curr) => {
    return prev < curr ? prev : curr;
  });
  // return Math.min(...arr);
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

function lectureSolution(arr: number[]): number {
  let answer,
    min = Number.MAX_SAFE_INTEGER; // 큰 숫자로 초기화

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

console.log(lectureSolution(arr));
