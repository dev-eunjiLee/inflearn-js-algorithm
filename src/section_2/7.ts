function getOutsideValue(
  arr: number[][],
  line: number[],
  lineIndex: number,
  perIndex: number
): {
  up: number;
  down: number;
  right: number;
  left: number;
} {
  // 상,하,좌,우 값 다 구한 후 현재 위치의 max값과 비교 후 현재 위치의 값이 가장 큰 경우 봉우리++
  const up = lineIndex === 0 ? 0 : arr[lineIndex - 1][perIndex];
  const down = lineIndex === arr.length - 1 ? 0 : arr[lineIndex + 1][perIndex];
  const right = perIndex === arr.length - 1 ? 0 : line[perIndex + 1];
  const left = perIndex === 0 ? 0 : line[perIndex - 1];
  return { up, down, right, left };
}

function solution(arr: number[][]) {
  let cnt = 0;
  arr.forEach((line, lineIndex) => {
    line.forEach((per, perIndex) => {
      const { up, down, right, left } = getOutsideValue(
        arr,
        line,
        lineIndex,
        perIndex
      );
      if (Math.max(per, up, down, right, left) === per) cnt++;
    });
  });
  return cnt;
}

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);

function lectureSolution(arr: number[][]) {
  let answer = 0;
  // dx, dy 순서대로 12시 3시 6시 9
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const n = arr.length;

  // 바깥쪽 loop: 각 값 넘어가기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = true;
      // 주위 배열 보기 위한 loop
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k]; // 행 좌표(가로)
        let ny = j + dy[k]; // 열 좌표(세로)
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = false;
          break;
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
}

console.log(
  lectureSolution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
