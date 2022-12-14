/**
 * 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력 하는 프로그램을 작성하세요.
 */

function solution(s: string): string {
  return s.toUpperCase();
}

console.log(solution("ItisTimeToStudy"));

function lectureSolution(s: string): string {
  let answer = "";
  for (let x of s) {
    if (x === x.toLowerCase()) answer += x.toUpperCase();
    else answer += x;
  }
  return answer;
}

console.log(lectureSolution("ItisTimeToStudy"));

// 아스키코드
function lectureSolution2(s: string): string {
  let answer = "";
  for (let x of s) {
    let num = x.charCodeAt(0);
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }
  return answer;
}

console.log(lectureSolution2("ItisTimeToStudy"));
