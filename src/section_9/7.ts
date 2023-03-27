function solution(arr: Array<Array<number>>): number {
  type Coordinate = {
    x: number;
    y: number;
  };

  const coordinateIncreaseList = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    // [0, 0], => 자기 자신은 제외s
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  let answer = 0;

  const map = new Map<Coordinate, number>();

  for (let y = 0; y < arr.length; y++) {
    for (let x = 0; x < arr.length; x++) {
      map.set({ x, y }, 0);
    }
  }

  for (let [root, value] of map) {
    if (value === 1) continue;
    else {
      const queue: Array<Coordinate> = [];
      queue.push(root);
      map.set(root, 1);

      while (queue.length !== 0) {
        const now = queue.shift();
        console.log(`now: ${JSON.stringify(now)}`);
        for (let i = 0; i < coordinateIncreaseList.length; i++) {
          const nextX = now.x + coordinateIncreaseList[i][0];
          const nextY = now.y + coordinateIncreaseList[i][1];

          if (
            nextX < 0 ||
            nextY < 0 ||
            nextX >= arr.length ||
            nextY >= arr.length
          ) {
            continue;
          }

          const nextCoordinate: Coordinate = {
            x: nextX,
            y: nextY,
          };

          console.log(`nextCoordinate: ${JSON.stringify(nextCoordinate)}`);

          if (arr[nextY][nextX] === 1 && map.get(nextCoordinate) === 0) {
            queue.push(nextCoordinate);
            map.set(nextCoordinate, 1);
          }
        }
        if (queue.length === 0) {
          answer++;
        }
      }
    }
  }

  return answer;
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
