/**
 * 깊이 우선 탐색
 * 이진트리: 부모 노드에 2개의 자식 노드가 연결되어 있는 형태
 * - 전위순회: 부모 > 왼 > 오
 * - 중위순회: 왼 > 부모 > 모
 * - 후위순회: 왼 > 오 > 부모
 */

// 전위 순회
function lectureSolution(v) {
  let answer;
  function DFS(v) {
    if (v > 7) {
      // 종착지
      return;
    } else {
      console.log(v);
      DFS(v * 2); // 왼쪽 자식 노드
      DFS(v * 2 + 1); // 오른쪽 자식 노드
    }
  }

  DFS(v);
  return answer;
}

console.log(lectureSolution(1));

// 중위순회
function lectureSolution2(v) {
  let answer;
  function DFS(v) {
    if (v > 7) {
      // 종착지
      return;
    } else {
      DFS(v * 2); // 왼쪽 자식 노드
      console.log(v);
      DFS(v * 2 + 1); // 오른쪽 자식 노드
    }
  }

  DFS(v);
  return answer;
}

console.log(lectureSolution2(1));
