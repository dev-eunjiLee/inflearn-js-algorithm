function solution(s: string) {
  let list = s.split("");
  let i = 0;
  while (true) {
    if (list.length === 0) return "YES";
    if (list.length % 2 === 1) return "NO";
    if (list[i] === ")") {
      if (list[i - 1] === "(") {
        list.splice(i - 1, 2);
        i = 0;
      } else {
        return "NO";
      }
    }
    i++;
  }
}

console.log(solution("(()(()))(()"));
console.log(solution("(())()"));

/**
 * 스택 자료구조 사용
 * 스택: 가장 먼저 들어온게 가장 먼저 나감 LIFO
 * 큐: 선입선출 FIFO
 */

function lectureSolution(s: string) {
  const stack = [];
  let flag = true;
  s.split("").forEach((per) => {
    if (per === "(") {
      stack.push(per);
    } else {
      if (stack.length === 0) flag = false;
      else stack.pop();
    }
  });
  return stack.length === 0 && flag === true ? "YES" : "NO";
}

console.log(lectureSolution("(()(()))(()"));
console.log(lectureSolution("(())()"));

function lectureSolution2(s: string) {
  let answer = "YES";
  const stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      else stack.pop();
    }
  }
  if (stack.length !== 0) answer = "NO";
  return answer;
}

console.log(lectureSolution2("(()(()))(()"));
console.log(lectureSolution2("(())()"));
