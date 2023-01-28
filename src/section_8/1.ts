function getNewN(n: number) {
  console.log(n);
  const newN = n - 1;
  if (newN >= 1) {
    getNewN(newN);
  }
}

function solution(n) {
  getNewN(n);
}

solution(3); // 1,2,3

/**
 * 재귀함수
 * - 자기가 자신을 호출하는 함수
 */

function lectureSolution(n) {
  // l: level의 약자
  // DFS: 깊이 우선 탐색
  function DFS(l) {
    if (l === 0) {
      return; // 재귀함수 break용
    } else {
      DFS(l - 1);
      console.log(l);
    }
  }
  DFS(n);
}

lectureSolution(3); // 1,2,3
