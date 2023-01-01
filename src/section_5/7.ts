function solution(str1: string, str2: string) {
  const firstStrMap = new Map<string, number>();
  const secondStrMap = new Map<string, number>();
  const strList = [str1, str2];
  const mapList = [firstStrMap, secondStrMap];
  for (let i = 0; i < str1.length; i++) {
    for (let strIndex = 0; strIndex <= 1; strIndex++) {
      const key = strList[strIndex][i];
      const value = mapList[strIndex].get(key);
      if (value === undefined) {
        mapList[strIndex].set(key, 1);
      } else {
        mapList[strIndex].set(key, value + 1);
      }
    }
  }

  for (let [fKey, fVal] of firstStrMap) {
    if (secondStrMap.get(fKey) !== fVal) return "NO";
  }
  return "YES";
}

console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));

function solution2(str1: string, str2: string) {
  return str1.split("").sort().join("") === str2.split("").sort().join("")
    ? "YES"
    : "NO";
}

console.log(solution2("AbaAeCe", "baeeACA"));
console.log(solution2("abaCC", "Caaab"));

function lectureSolution(str1: string, str2: string) {
  let answer = "YES";
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) return "NO";
    else sH.set(x, sH.get(x) - 1);
  }
  return answer;
}

console.log(lectureSolution("AbaAeCe", "baeeACA"));
console.log(lectureSolution("abaCC", "Caaab"));
