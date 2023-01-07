function solution(need: string, plan: string): string {
  const queue = Array.from(need);
  plan.split("").forEach((perLecture) => {
    if (perLecture === queue[0]) queue.shift();
  });
  return queue.length === 0 ? "YES" : "NO";
}

console.log(solution("CBA", "CBDAGE")); // YES
console.log(solution("CBA", "ACBDGE")); // NO

function lectureSolution(need: string, plan: string): string {
  let answer = "YES";
  const queue = need.split("");
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }
  if (queue.length !== 0) {
    answer = "NO";
  }
  return answer;
}

console.log(lectureSolution("CBA", "CBDAGE")); // YES
console.log(lectureSolution("CBAK", "CBDAGE")); // NO
