function solution(arr: Array<Array<number>>): number {
  const movingList = [-1, 0, 1] as const;
  const len = arr.length;
  let boardCount = 0;
  let boardSize = 0;
  function DFS(coordinate?: Array<number>, level = 0): void {
    if (level === 0) {
      for (let x = 0; x < len; x++) {
        for (let y = 0; y < len; y++) {
          boardSize = 0;
          DFS([x, y], level + 1);
        }
      }
    } else {
      const [x, y] = coordinate;
      if (arr[x][y] !== 0) {
        arr[x][y] = 0;
        boardSize++;
        for (const perX of movingList) {
          for (const perY of movingList) {
            if (perX !== 0 && perY !== 0) {
              const newX = x + perX;
              const newY = y + perY;
              if (newX >= 0 && newY >= 0 && newX < len && newY < len) {
                DFS([newX, newY], level + 1);
              }
            }
          }
        }
      }
    }
    if (level === 1 && boardSize > 0) {
      boardCount++;
    }
  }
  DFS();
  // 현재 로직에서는 boardCount가 12임... 왜?
  return boardCount;
}

console.log(
  solution([
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
  ])
);
