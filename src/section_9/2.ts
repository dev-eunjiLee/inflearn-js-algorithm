function solution(nodeGraphList: Array<Array<number>>) {
  let answer = 0;

  const [N, M] = nodeGraphList[0]; // N: 정점의 수, M: 간선의 수

  const list = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => 0)
  );

  // 인접 배열 만들기
  for (let i = 1; i <= M; i++) {
    const [x, y] = nodeGraphList[i];
    list[x - 1][y - 1] = 1;
  }

  // const route: Array<number> = [];
  // function DFS(level: number) {
  //   console.log(level);
  //   if (route[route.length - 1] === 5) {
  //     console.log(route);
  //     answer++;
  //   } else {
  //   }
  // }
  //
  // DFS(0);
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
