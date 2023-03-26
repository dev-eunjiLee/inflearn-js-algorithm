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
    const checkPathResult = checkPath(nowCoordinate, path);
    if (checkPathResult) return;

    // 도착지에 왔는지 확인
    if (nowX === 6 && nowY === 6) {
      console.log(`
        
        🚀🚀 path: ${JSON.stringify(path)}
        🚀🚀now: ${JSON.stringify(nowCoordinate)}
        
        `);

      answer++;
      return;
    } else {
      path.push(nowCoordinate);
      DFS({ x: nowX - 1, y: nowY }, arr, path);
      DFS({ x: nowX + 1, y: nowY }, arr, path);
      DFS({ x: nowX, y: nowY - 1 }, arr, path);
      DFS({ x: nowX, y: nowY + 1 }, arr, path);
      path.pop();
    }
  }

  DFS({ x: 0, y: 0 }, arr, []);
  return answer;
}

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
