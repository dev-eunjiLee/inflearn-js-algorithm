/**
 * 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.
 */
function solution(s: string) {
  return s.replace(/A/g, "#"); // g => global 전역으로 찾아라
}

console.log(solution("BANANA"));

function lectureSolution(s: string) {
  // string은 얕은 복사가 아니라 값 자체가 복사가 된다.(새로운 메모리에 저장되고 새 주소가 할당)
  let answer = "";
  for (let x of s) {
    if (x === "A") answer += "#";
    else answer += x;
  }
  return answer;
}
console.log(lectureSolution("BANANA"));
