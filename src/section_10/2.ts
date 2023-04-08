function solution(stoneCnt: number): number {
  const goal = stoneCnt + 1;
  const dy = Array.from({ length: stoneCnt + 2 }, () => 0);

  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i < dy.length; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  return dy[goal];
}

console.log(solution(7));
