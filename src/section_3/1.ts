/**
 * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
 * 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
 * 단 회문을 검사할 때 대소문자를 구분하지 않습니다.
 */

function solution(s: string): string {
  return s.toLowerCase() === s.split("").reverse().join("").toLowerCase()
    ? "YES"
    : "NO";
}

console.log(solution("goooG"));

function lectureSolution(s: string): string {
  // 함수안의 for문에서 return을 하면 함수에서 해당 값을 리턴하고 그 함수가 끝나버린다.
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - i - 1]) return "NO";
  }
  return answer;
}

console.log(lectureSolution("gooo1"));
console.log(lectureSolution("goooG"));
