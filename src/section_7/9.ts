function solution(times: Array<Array<number>>) {
  times.sort((a, b) => a[0] - b[0]);
  const startTime = times[0][0];
  let maxCnt = 0;
  for (let i = startTime; i < 72; i++) {
    let cnt = 0;
    times.forEach((per) => {
      if (per[0] <= i && per[1] > i) cnt++;
    });
    maxCnt = Math.max(cnt, maxCnt);
  }
  // console.log(maxCnt);
  return maxCnt;
}

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);

function lectureSolution(times: Array<Array<number>>) {
  let answer = Number.MIN_SAFE_INTEGER;

  let now = 0;

  let t_line: Array<Array<number | string>> = [];
  for (let x of times) {
    t_line.push([x[0], "s"]);
    t_line.push([x[1], "e"]);
  }
  t_line
    .sort((a, b) => {
      const a_time = a[0] as number;
      const b_time = b[0] as number;
      const a_status = a[1] as string;
      const b_status = b[1] as string;
      if (a_time === b_time) {
        return a_status.charCodeAt(0) - b_status.charCodeAt(0);
      } else {
        return a_time - b_time;
      }
    })
    .forEach((per) => {
      if (per[1] === "s") {
        now++;
      } else {
        answer = Math.max(answer, now);
        now--;
      }
    });
  console.log(t_line);
  return answer;
}

console.log(
  lectureSolution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
