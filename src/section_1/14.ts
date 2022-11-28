/**
 * 첫 줄에 자연수 N이 주어진다.(3<=N<=30)
 * 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다. 각 문자열의 길이는 서로 다릅니다.
 */
function solution(s: string[]) {
  return s.reduce((prev, curr) => (prev.length < curr.length ? curr : prev));
}
console.log(solution(["teacher", "time", "student", "beautiful", "good"]));

function lectureSolution(s: string[]) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}
console.log(
  lectureSolution(["teacher", "time", "student", "beautiful", "good"])
);
