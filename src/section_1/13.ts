/**
 * 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.
 */
function solution(s: string): string {
  return s.split("").reduce((prev, curr) => {
    if (curr === curr.toUpperCase()) prev += curr.toLowerCase();
    else prev += curr.toUpperCase();
    return prev;
  }, "");
}

console.log(solution("StuDY"));

function lectureSolution(s: string): string {
  let answer = "";
  for (let x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }
  return answer;
}

console.log(lectureSolution("StuDY"));
