/**
 * BFS(깊이 우선 방식으로 푼 예습)
 */

type CNT = number;

function up(
  amountList: Array<number>,
  nowAmount: number,
  beforeFloor: number,
  goal: number,
  cnt: CNT
): CNT {
  // 이전 층계 + 올라가는 만큼
  const floor = nowAmount + beforeFloor;
  /**
   * 목표로 하는 층에 도달한 경우 cnt++
   * 목표로 하는 층보다 낮은 경우 다음 층으로 넘어감
   * 목표로 하는 층보다 높은 경우 다른 처리X
   */
  if (floor === goal) {
    cnt++;
    return cnt;
  } else if (floor < goal) {
    for (const perAmount of amountList) {
      cnt = up(amountList, perAmount, floor, goal, cnt);
    }
    return cnt;
  } else if (floor > goal) {
    return cnt;
  }
}

function solution(goal: number): number {
  const amountList = [1, 2];
  let cnt = 0;
  const startFloor = 0;

  for (const perAmount of amountList) {
    cnt = up(amountList, perAmount, startFloor, goal, cnt);
  }

  return cnt;
}

console.log(solution(7));

/**
 * 수업
 */

function lectureSolution(n) {
  const dy = Array.from({ length: n + 1 }, () => 0);

  // 직관적으로 구할 수 있는 값은 초기화해두기
  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i < dy.length; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }

  return dy[n];
}

console.log(lectureSolution(7));
