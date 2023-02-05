function DFS(x: number, res: number[]): number[] {
  let share = Math.floor(x / 2); // 몫
  let remainder = Math.floor(x % 2); // 나머지
  res.push(remainder);
  if (share === 0) return;
  else {
    DFS(share, res);
  }
  return res;
}

function solution(n) {
  return DFS(n, []).reverse().join("");
}

console.log(solution(11));

function lectureSolution(n) {
  let answer = "";
  function lectureDFS(n) {
    if (n === 0) return; // 몫이 0이면 함수가 끝나야함
    else {
      lectureDFS(Math.floor(n / 2));
      answer += n % 2;
    }
  }
  lectureDFS(n);
  return answer;
}

console.log(lectureSolution(11));
