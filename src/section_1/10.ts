/**
 * 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
 * 문자열의 길이는 100을 넘지 않습니다.
 */
function solution(s: string, t: string): number {
  return s.match(new RegExp(`${t}`, "g")).length;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));

function lectureSolution(s: string, t: string): number {
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  return answer;
}

console.log(lectureSolution("COMPUTERPROGRAMMING", "R"));

function lectureSolution2(s: string, t: string): number {
  return s.split(t).length - 1;
}

console.log(lectureSolution2("COMPUTERPROGRAMMING", "R"));
