function solution(n: number, k: number) {
  let princeList = Array.from({ length: n }, (v, i) => i + 1);
  let index = 0;
  while (princeList.length !== 1) {
    index += k - 1;
    while (index >= princeList.length) {
      index -= princeList.length;
    }
    princeList.splice(index, 1);
  }

  return princeList[0];
}

console.log(solution(8, 3));

/**
 * 큐: 먼저 들어간 데이터가 먼저 나오는 자료구조
 */

function lectureSolution(n: number, k: number) {
  const queue = Array.from({ length: n }, (v, i) => i + 1);
  let i = 0;

  while (queue.length !== 1) {
    const first = queue.shift();
    if (i !== k - 1) {
      queue.push(first);
      i++;
    } else i = 0;
  }
  return queue.shift();
}

console.log(lectureSolution(8, 3));
