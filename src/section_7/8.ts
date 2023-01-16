/**
 * 그리디 알고리즘
 * - === 탐욕 알고리즘, 욕심쟁이 알고리즘
 * - 미래를 생각하지 않고 각 단계에서 가장 최선의 선택을 하는 기법
 *
 * --> 빨리 끝나는 순으로 정렬을 그 다음 회의의 시작시간과 비교해서 넣어준다
 * --> 그리디 알고리즘 잘 설명된 블로그: https://source-sc.tistory.com/59
 */

function solution(meeting: number[][]) {
  const answer = [];
  meeting
    .sort((a, b) => {
      if (a[1] !== b[1]) return a[1] - b[1];
      else return a[0] - b[0];
    })
    .forEach((per) => {
      if (answer.length === 0) answer.push(per);
      if (answer[answer.length - 1][1] <= per[0]) answer.push(per);
    });
  return answer.length;
}

console.log("test");

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
); // 3 => [ [ 2, 3 ], [ 3, 5 ], [ 5, 7 ] ]

console.log(
  solution([
    [3, 3],
    [1, 3],
    [2, 3],
  ])
); // 2 => [[1, 3], [3, 3]]

function lectureSolution(meeting: number[][]) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0; // endTime
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
}

console.log(
  lectureSolution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
); // 3 => [ [ 2, 3 ], [ 3, 5 ], [ 5, 7 ] ]

console.log(
  lectureSolution([
    [3, 3],
    [1, 3],
    [2, 3],
  ])
); // 2 => [[1, 3], [3, 3]]
