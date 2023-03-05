function solution(nodeGraphList: Array<Array<number>>) {
  let answer = 0;

  const [N, M] = nodeGraphList[0]; // N: 정점의 수, M: 간선의 수

  const list = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 }, () => 0)
  );

  // 인접 배열 만들기
  for (let i = 1; i <= M; i++) {
    const [x, y] = nodeGraphList[i];
    list[x][y] = 1;
  }

  const route = [];

  function DFS(startIndex: number) {
    if (route[route.length - 1] === N) {
      answer++;
    } else {
      for (let x = startIndex; x < N + 1; x++) {
        for (let y = x + 1; y < N + 1; y++) {
          if (list[x][y] === 1) {
            route.push(y);
            DFS(y);
            console.log(`pop 직전 route: ${route}`);
            route.pop();
          }
        }
      }
    }
  }

  route.push(1);
  DFS(1);
  // TODO 13만 나와서 확인 필요
  return answer;
}
console.log(
  solution([
    [5, 9],
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
