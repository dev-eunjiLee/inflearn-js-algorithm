function solution(s: string) {
  let answer = 0;
  const stack = [];
  let lastStr = "";
  s.split("").forEach((per) => {
    if (per === "(") {
      stack.push(per);
    } else {
      stack.pop();
      if (lastStr === "(") {
        answer += stack.length;
      } else {
        answer += 1;
      }
    }
    lastStr = per;
  });
  return answer;
}

console.log(solution("()(((()())(())()))(())")); // 17
console.log(solution("(((()(()()))(())()))(()())")); // 24

/**
 * 닫는 괄호가 막대기의 끝인지, 레이저 표시인지 확인 필요
 */
function lectureSolution(s: string) {
  let answer = 0;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else {
      // 레이저의 여는 괄호를 계산에서 제외시키기 위해 우선 pop 처리, 막대의 끝인 경우는 pop 시점이 중요하지 않기 때문에 괜찮다
      stack.pop();
      if (s[i - 1] === "(") {
        // 레이저인 경우
        answer += stack.length;
      } else {
        // 막대기의 끝인 경우
        answer += 1;
      }
    }
  }
  return answer;
}

console.log(lectureSolution("()(((()())(())()))(())")); // 17
console.log(lectureSolution("(((()(()()))(())()))(()())")); // 24
