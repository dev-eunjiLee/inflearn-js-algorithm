function solution(arr: Array<Array<number>>): number {
  const [[quizCnt, limitTime], ...quizList] = arr;

  console.log(quizCnt);
  console.log(limitTime);
  console.log(quizList);

  const dy = Array.from({ length: quizCnt + 1 }, () => 0);

  dy[0] = 0;

  for (let i = 1; i < dy.length; i++) {
    let tmp = 0;
    for (const [perQuizTime, perQuizScore] of quizList) {
      console.log(perQuizTime, perQuizScore);
    }
  }

  return null;
}

console.log(
  `answer: ${solution([
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])}`
);

function lectureSolution(m, arr) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    let ps = arr[i][0]; // problem score
    let pt = arr[i][1]; // problem time

    for (let j = m; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }
  answer = dy[m];
  return answer;
}

console.log(
  `answer: ${lectureSolution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])}`
);
