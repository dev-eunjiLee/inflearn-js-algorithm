function solution(s: string[]): string[] {
  return s.reduce(
    (prev, curr) => (prev.includes(curr) ? [...prev] : [...prev, curr]),
    []
  );
}
console.log(solution(["good", "time", "good", "time", "student"]));

function lectureSolution(s: string[]): string[] {
  let answer;

  answer = s.filter(function (v, i) {
    return s.indexOf(v) === i;
  });

  return answer;
}
console.log(lectureSolution(["good", "time", "good", "time", "student"]));
