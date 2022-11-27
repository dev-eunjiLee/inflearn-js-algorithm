/**
 * 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.
 */
function solution(s) {
  return s.match(/[A-Z]/g).length;
}

console.log(solution("KoreaTimeGood"));

function lectureSolution(s) {
  let answer = 0;
  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}

console.log(lectureSolution("KoreaTimeGood"));

function lectureSolution2(s) {
  let answer = 0;
  for (let x of s) {
    let num = x.charCodeAt();
    // String.cahrCodeAt(): 해당 string의 아스키코드값을 넘겨준다
    // 대문자 아스키코드 넘버 범위: 65 ~ 90
    // 소문자 아스키코드 넘버 범위: 97 ~ 122
    if (num >= 65 && num <= 90) answer++;
  }
  return answer;
}

console.log(lectureSolution2("KoreaTimeGood"));
