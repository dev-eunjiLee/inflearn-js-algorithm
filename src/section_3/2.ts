/**
 * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
 * 문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성하세요.
 * 단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다. 알파벳 이외의 문자들의 무시합니다.
 */

function solution(s: string) {
  const regexp = new RegExp(/[A-z]/, "g");
  const updatedString = s.toLowerCase().match(regexp);
  // Array.every(): return 중 모두가 true여야 true를 반환하기 때문에 하나라도 false면 break된다
  // 중간 index를 넘어간 값은 확인할 필요 없지만 every 함수 사용 테스트를 위해 사용
  const result = updatedString.every((per, index) => {
    return per === updatedString[updatedString.length - index - 1];
  });
  return result === true ? "YES" : "NO";
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));

function lectureSolution(s: string) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) {
    answer = "NO";
  }
  return answer;
}

console.log(lectureSolution("found7, time: study; Yduts; emit, 7Dnuof"));
