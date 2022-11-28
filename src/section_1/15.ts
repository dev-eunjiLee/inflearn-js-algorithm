function solution(s: string): string {
  const centerIndex = s.length / 2;
  const isOdd = Number.isInteger(centerIndex); // 홀수

  return isOdd === false
    ? s.slice(Math.floor(centerIndex), Math.floor(centerIndex) + 1)
    : s.slice(centerIndex - 1, centerIndex + 1);
}
console.log(solution("study"));
console.log(solution("good"));

function lectureSolution(s: string): string {
  let answer: string;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1); // substr(mid, 1)
  else answer = s.substring(mid - 1, mid + 1); // substri(mid-1, 2)
  return answer;
}
console.log(lectureSolution("study"));
console.log(lectureSolution("good"));
