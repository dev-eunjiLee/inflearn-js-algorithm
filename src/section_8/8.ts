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
