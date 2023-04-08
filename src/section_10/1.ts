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
