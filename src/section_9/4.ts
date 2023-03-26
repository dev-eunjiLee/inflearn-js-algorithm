type Coordinate = {
  x: number;
  y: number;
};

function checkValidRange(nowX: number, nowY: number): boolean {
  return (nowX < 0 || nowY < 0 || nowX > 6 || nowY > 6) !== true;
}

function checkWall(
  nowX: number,
  nowY: number,
  arr: Array<Array<number>>
): boolean {
  return arr[nowY][nowX] === 1;
}

// 지난 경로 체크해서 왔던 길인지 체크
function checkPath(
  nowCoordinate: Coordinate,
  path: Array<Coordinate>
): boolean {
  return (
    path.filter((per) => {
      return per.x === nowCoordinate.x && per.y === nowCoordinate.y;
    }).length !== 0
  );
}

const xList = [-1, 0, 1, 0];
const yList = [0, 1, 0, -1];

function solution(arr: Array<Array<number>>): number {
  let answer = 0;

  function DFS(
    nowCoordinate: Coordinate,
    arr: Array<Array<number>>,
    path: Array<Coordinate>
  ) {
    const nowX = nowCoordinate.x;
    const nowY = nowCoordinate.y;

    // 범위 나간 경우 return
    const checkValidRangeResult = checkValidRange(nowX, nowY);
    if (!checkValidRangeResult) return;

    // 벽 여부 체크
    const wallCheckResult = checkWall(nowX, nowY, arr);
    if (wallCheckResult) return;

    // 경로 체크
    // * 경로 배열을 추가로 체크하고 있기 때문에 아래의 수업 코드보다 시간 복잡도가 올라가서 속도가 느려짐
    const checkPathResult = checkPath(nowCoordinate, path);
    if (checkPathResult) return;

    // 도착지에 왔는지 확인
    if (nowX === 6 && nowY === 6) {
      answer++;
      return;
    } else {
      path.push(nowCoordinate);

      for (let i = 0; i < 4; i++) {
        const nextX = nowX + xList[i];
        const nextY = nowY + yList[i];
        DFS({ x: nextX, y: nextY }, arr, path);
      }

      path.pop();
    }
  }

  DFS({ x: 0, y: 0 }, arr, []);
  return answer;
}

console.time("me");
console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ])
);
console.timeEnd("me");

function lectureSolution(board) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  function DFS(x, y) {
    if (x === 6 && y === 6) {
      answer++;
    } else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

console.time("lecture");

console.log(
  lectureSolution([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ])
);
console.timeEnd("lecture");
