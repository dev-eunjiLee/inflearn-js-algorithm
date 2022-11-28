function solution(s: string): string {
  return s
    .split("")
    .reduce((prev, curr) => (prev.includes(curr) ? prev : prev + curr), "");
}
console.log(solution("ksekkset"));

function lectureSolution(s: string): string {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (i === s.indexOf(s[i])) answer += s[i];
  }
  return answer;
}
console.log(lectureSolution("ksekkset"));
