/**
 * 2번과 동일한 문제인데 다르게 푸는 방식
 * 각 정점에 연결된 노드의 개수만큼만 각각 loop를 돌면 되기 때문에 시간 단축 가능
 */

function solution(arr: Array<Array<number>>) {
  const [nodeCnt, coonnectCnt] = arr.shift();
  const list: Array<Array<number>> = Array.from(
    { length: nodeCnt + 1 },
    () => []
  );
  for (const [startNode, endNode] of arr) {
    console.log(startNode, endNode);
    list[startNode].push(endNode);
  }
  console.log(list);

  let cnt = 0;
  const chk = [];
  const tmp = [];

  function DFS(startNode: number) {
    if (chk.includes(startNode)) {
      return;
    }
    if (startNode === 5) {
      cnt++;
      tmp.push(5);
      console.log(tmp);
      tmp.pop();

      return;
    } else {
      chk.push(startNode);
      tmp.push(startNode);
      for (const node of list[startNode]) {
        DFS(node);
      }
      chk.pop();
      tmp.pop();
    }
  }

  DFS(1);
  return cnt;
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

function lectureSolution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let ch = Array.from({ length: n + 1 }, () => 0);
  console.log(graph);
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  const path = [];
  function DFS(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let i = 0; i <= graph[v].length; i++) {
        try {
          // console.log(graph[v]);
          if (ch[graph[v][i]] == 0) {
            ch[graph[v][i]] = 1;
            path.push(graph[v][i]);
            DFS(graph[v][i]);
            path.pop();
            ch[graph[v][i]] = 0;
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
  ch[1] = 1;

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
