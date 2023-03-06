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
// console.log(
//   solution([
//     [5, 9],
//     [1, 2],
//     [1, 3],
//     [1, 4],
//     [2, 1],
//     [2, 3],
//     [2, 5],
//     [3, 4],
//     [4, 2],
//     [4, 5],
//   ])
// );

function lectureSolution(n, arr) {
  console.log(n, arr);

  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // 1번 인덱스부터 사용
  let ch = Array.from({ length: n + 1 }, () => 0);

  for (let [a, b] of arr) {
    console.log(a, b);
    graph[a][b] = 1;
  }

  let path = [];

  function DFS(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let i = 1; i <= n; i++) {
        // 모든 노드를 비교해서, 연결되어 있으면서 방문하지 않은 노드의 경우만 ch에 추가
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          path.push(i);
          DFS(i);
          path.pop();
          ch[i] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  path.push(1);
  DFS(1);

  return answer;
}

console.log(
  lectureSolution(5, [
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
