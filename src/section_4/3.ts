function lectureSolution(arr: number[][]) {
  let answer = 0;
  const studentCnt = arr[0].length;
  const testCnt = arr.length;
  for (let mentor = 1; mentor <= studentCnt; mentor++) {
    for (let mentee = 1; mentee <= studentCnt; mentee++) {
      if (mentor === mentee) continue;
      let mentorWinCnt = 0;
      for (let perTestNum = 0; perTestNum < arr.length; perTestNum++) {
        const perTest = arr[perTestNum];
        if (perTest.indexOf(mentor) < perTest.indexOf(mentee)) {
          mentorWinCnt++;
        } else {
          break;
        }
      }
      if (mentorWinCnt === testCnt) answer++;
    }
  }
  return answer;
}

console.log(
  lectureSolution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);

function lectureSolution2(test: number[][]) {
  let answer = 0;
  const m = test.length; // 테스트 횟수
  const n = test[0].length; // 학생 수

  let temp = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(i, j);
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0,
          pj = 0;
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) {
          cnt++; // 멘티의 등수가 멘토의 등수보다 뒤에 있는지 확인
        }
      }
      if (cnt === m) {
        answer++;
        temp.push([i, j]);
      }
    }
  }
  console.log(temp);
  return answer;
}

console.log(
  lectureSolution2([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
