function solution(s: string, t: string) {
  let answer = 0;
  t = t.split("").sort().join("");
  for (let i = 0; i < s.length; i++) {
    const slideStr = s.slice(i, i + t.length);
    console.log(slideStr);
    if (slideStr.split("").sort().join("") === t) answer++;
  }
  return answer;
}

console.log(solution("bacaAacba", "abc"));

console.log("======================");

// 해쉬, 투포인터, 슬라이딩 윈도우
function compareMaps(map1, map2): boolean {
  // 맵 사이즈가 다르거나, 해당 키값이 없거나, 있더라도 그 value가 다른 경우 false 리턴
  if (map1.size !== map2.size) return false;
  for (let [key, value] of map1) {
    if (map2.get(key) !== value) return false;
  }
  return true;
}

function lectureSolution(s: string, t: string) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  // tH Map 초기화
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1;
  // sH Map 초기화
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) tH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    // 새로운 Map과 비교
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);

    if (compareMaps(sH, tH)) answer++;
    // 기존 Map 한 칸씩 전진;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}

console.log(lectureSolution("bacaAacba", "abc"));
