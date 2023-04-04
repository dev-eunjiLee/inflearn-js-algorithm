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

// console.log(
//   solution([
//     [1, 1, 0, 0, 0, 1, 0],
//     [0, 1, 1, 0, 1, 1, 0],
//     [0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 0, 1, 1],
//     [1, 1, 0, 1, 1, 0, 0],
//     [1, 0, 0, 0, 1, 0, 0],
//     [1, 0, 1, 0, 1, 0, 0],
//   ])
// );

function lectureSolution(board: Array<Array<number>>) {
  let answer = 0;
  let n = board.length;
  // dx, dy를 순차적으로 돌면서 중심을 기준으로 좌상단 대각선부터 둘러싸고 있는 칸들을 시계방향으로 훑는다
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function DFS(x, y) {
    // 넘어온 지점을 0으로 바꿈 => 계속 돌지 않도록
    board[x][y] = 0;
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      // 확인하려는 좌표가 주어진 표 내부에 있는지, 섬이 맞는지(1인지) 확인
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }

  // 2중 for문을 돌면서 각 칸이 1인 케이스를 루트로 잡아서 DFS 돌리도록 구현(root가 발견될 때 마다 answer++)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        answer++;
        console.log(i, j, board);
        DFS(i, j);
      }
    }
  }

  return answer;
}

console.log(
  lectureSolution([
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
  ])
);
