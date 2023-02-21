function solution(N: number, M: number): Array<Array<number>> {
  const totalArray = [];
  const DFS = (numberList: Array<number>) => {
    if (numberList.length === M) {
      totalArray.push(numberList);
      return;
    } else {
      for (let i = 1; i <= N; i++) {
        DFS([...numberList, i]);
      }
    }
  };
  DFS([]);
  return [...totalArray, [totalArray.length]];
}

console.log(solution(3, 2));
console.log(solution(3, 3));
console.log(solution(5, 2));

/**
 * - M 만큼 가지를 뻗는다
 * - 해당 문제는 2중 for문으로 돌 수 있는데, 왜 이렇게 푸느냐?
 * ===> 2번이 아니라 여러번을 뽑아 순열을 만드는 경우는 단순 for문으로 풀 수 없다
 */
function example(N: number, M: number) {
  let answer = [];
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      answer.push([i, j]);
    }
  }
  return answer;
}
console.log(example(3, 2));

function lectureSolution(N: number, M: number) {
  let answer = [];
  let tmp = Array.from({ length: M }, () => 0);
  function DFS(L: number) {
    if (L === M) {
      answer.push([...tmp]);
    } else {
      for (let i = 1; i <= N; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return answer;
}

console.log("==========lectureSolution");
console.log(lectureSolution(3, 2));
console.log(lectureSolution(3, 3));
console.log(lectureSolution(5, 2));
