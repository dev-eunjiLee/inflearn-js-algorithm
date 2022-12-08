/**
 * 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만 듭니다.
 * 만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205 이 됩니다.
 * 추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.
 */

function solution(str: string): number {
  return Number(str.replace(/[^0-9]/g, ""));
}

console.log(solution("g0en2T0s8eSoft"));
console.log(solution("tge0a1h205er"));

// 수업처럼 isNaN()을 사용하기 파라미터의 타입 제거함
function lectureSolution(str): number {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

console.log(lectureSolution("g0en2T0s8eSoft"));
console.log(lectureSolution("tge0a1h205er"));

// 수업처럼 isNaN()을 사용하기 파라미터의 타입 제거함
function lectureSolution2(str): number {
  let answer = 0;
  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  return answer;
}

console.log(lectureSolution2("g0en2T0s8eSoft"));
console.log(lectureSolution2("tge0a1h205er"));
