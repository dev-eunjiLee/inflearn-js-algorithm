function solution(arr: number[][]) {
  arr.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else return a[1] - b[1];
  });
  return arr;
}

console.log(
  solution([
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
  ])
);

function lectureSolution(arr: number[][]) {
  let answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  return answer;
}

console.log(
  lectureSolution([
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
  ])
);
