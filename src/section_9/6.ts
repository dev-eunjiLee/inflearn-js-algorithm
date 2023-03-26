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
