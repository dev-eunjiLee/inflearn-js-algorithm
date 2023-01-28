function solution(c: number, stable: Array<number>): number {
  let answer: number;
  stable.sort((a, b) => a - b);
  let rt = stable[stable.length - 1] - stable[0];
  let lt = 1;
  while (lt <= rt) {
    let next = stable[0];
    let mid = Math.floor((rt + lt) / 2);

    let cnt = 0;

    while (next < stable[stable.length - 1]) {
      if (stable.includes(next)) {
        cnt++;
        next += mid;
      } else {
        next++;
      }
    }
    if (cnt >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

console.log(solution(3, [1, 2, 8, 4, 9]));

function count(stable, dist) {
  let cnt = 1;
  let ep = stable[0];

  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
}

function lectureSolution(c: number, stable: Array<number>): number {
  let answer: number;

  // 좌표 정렬
  stable.sort((a, b) => a - b);

  let lt = 1;
  let rt = stable[stable.length - 1]; // 가장 마지막 좌표

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);

    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
}

console.log(lectureSolution(3, [1, 2, 8, 4, 9]));
