/**
 * N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
 */

function solution(arr) {
  // 이 방식은 동일 점수에 대해서 값을 처리할 수 없음
  const answer = Array.from({ length: arr.length });
  const sortedArray = arr.slice().sort((a, b) => b - a);
  arr.forEach((per, index) => {
    answer[index] = sortedArray.indexOf(per) + 1;
  });
  return answer;
}

console.log(solution([87, 89, 92, 100, 76]));

function lectureSolution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1); // 1로 가득 찬 1차원 배열 초기화
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

console.log("lectureSolution: ", lectureSolution([87, 89, 92, 100, 76]));
console.log("lectureSolution: ", lectureSolution([92, 92, 92, 100, 76]));

function solution2(arr: number[]): number[] {
  const answer = Array.from({ length: arr.length }, (value) => 1);
  arr.forEach((per, index) => {
    arr.forEach((nestedPer) => {
      if (nestedPer > per) answer[index]++;
    });
  });
  return answer;
}

console.log("solution2", solution2([87, 89, 92, 100, 76]));
console.log("solution2", solution2([92, 92, 92, 100, 76]));
