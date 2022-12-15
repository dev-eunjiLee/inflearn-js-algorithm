function solution(s: string) {
  let answer = "";
  let temp = ""; // 임의의 문자;
  let cnt = 0;
  let index = 0;
  for (let per of s) {
    if (temp === per) {
      cnt++;
    } else {
      if (cnt === 1) answer = `${answer}${temp}`;
      if (cnt > 1) answer = `${answer}${temp}${cnt}`;
      temp = per;
      cnt = 1;
      if (index === s.length - 1) {
        answer = `${answer}${temp}`;
      }
    }
    index++;
  }
  return answer;
}

console.log(solution("KKHSSSSSSSE"));

function lectureSolution(s: string) {
  let answer = "";
  let cnt = 1;
  s = s + " ";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}

console.log(lectureSolution("KKHSSSSSSSE"));
