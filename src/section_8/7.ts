type score = number;
type time = number;

function solution(
  limitTime: number,
  scoreAndTime: Array<[score, time]>
): number {
  let max = 0;
  function DFS(
    level: number,
    totalScore: number,
    totalTime: number,
    list: Array<[score, time]>
  ): number {
    console.log(level, totalScore, totalTime, list);
    if (totalTime > limitTime) {
      return;
    } else {
      if (level === scoreAndTime.length) {
        max = Math.max(totalScore, max);
      } else {
        DFS(
          level + 1,
          totalScore + scoreAndTime[level][0],
          totalTime + scoreAndTime[level][1],
          [...list, scoreAndTime[level]]
        );
        DFS(level + 1, totalScore, totalTime, list);
      }
    }
  }

  DFS(0, 0, 0, []);

  return max;
}

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);

function lectureSolution(
  m: number,
  ps: Array<number>,
  pt: Array<number>
): number {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = ps.length;
  function DFS(l, sum, time) {
    if (time > m) return;
    if (l === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(l + 1, sum + ps[l], time + pt[l]);
      DFS(l + 1, sum, time);
    }
  }

  DFS(0, 0, 0);

  return answer;
}

console.log(lectureSolution(20, [10, 25, 15, 6, 7], [5, 12, 8, 3, 4]));
