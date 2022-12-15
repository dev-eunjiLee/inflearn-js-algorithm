function solution(s: string, t: string) {
  const indexList = [];
  let matchFlag = true;
  let index = 0;
  while (matchFlag) {
    const nowIndex = s.indexOf(t, index);
    if (nowIndex === -1) matchFlag = false;
    if (index !== nowIndex && nowIndex !== -1) indexList.push(nowIndex);
    index = nowIndex + 1;
  }
  return s.split("").map((per, index) => {
    return Math.min(
      ...indexList.map((matchIndex) => {
        return Math.abs(matchIndex - index);
      })
    );
  });
}
console.log(solution("teachermode", "e"));

function lectureSolution(s: string, t: string) {
  let p = 1000;
  const stringList = s.split("");
  const answer = [];
  // 본인의 좌측의 t 변수와 비교해서 값 넣기
  for (let i = 0; i < s.length; i++) {
    if (stringList[i] === t) p = 0;
    else p++;
    answer.push(p);
  }
  p = 1000;
  // 본인의 우측 t 변수와 비교해서 값 넣기
  for (let i = s.length - 1; i >= 0; i--) {
    if (stringList[i] === t) p = 0;
    else p++;
    if (answer[i] > p) answer[i] = p;
  }
  return answer;
}
console.log(lectureSolution("teachermode", "e"));

function lectureSolution2(s: string, t: string) {
  let answer = [];
  let p = 1000; // 임의의 큰 수(string 길이보다 길게)
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}
console.log(lectureSolution2("teachermode", "e"));
