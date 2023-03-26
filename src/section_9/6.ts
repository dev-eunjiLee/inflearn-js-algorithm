function solution(personIndex: number, cowIndex: number): number {
  let level = 0;
  let queue: Array<number> = [];
  queue.push(personIndex);
  const caseList: Array<number> = [1, -1, 5];
  while (queue.length !== 0) {
    console.log(queue);
    const nowIndex = queue.shift();
    let nowLevelLastIndex: number;
    for (let i = 0; i < caseList.length; i++) {
      const nextIndex = nowIndex + caseList[i];
      if (nextIndex === cowIndex) {
        queue = [];

        break;
      } else {
        queue.push(nextIndex);
      }
    }
    level++;
  }
  return level;
}

console.log(solution(5, 14)); // 3

function lectureSolution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);

  let queue = [];

  ch[s] = 1;
  queue.push(s);
  dis[s] = 0;

  while (queue.length !== 0) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return dis[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }

  console.log(3);
}

console.log(lectureSolution(5, 14));
console.log(lectureSolution(8, 3));
