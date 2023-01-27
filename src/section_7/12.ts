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
