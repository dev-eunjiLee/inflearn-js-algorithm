function solution(n: number[]) {
  let answer = "NO";
  const sum = n.reduce((acc, curr) => acc + curr, 0);
  const perSum = sum / 2;
  for (let [index, _] of n.entries()) {
    if (answer === "YES") {
      break;
    }
    let tempSum = 0;
    for (let i = index; i < n.length; i++) {
      if (tempSum === perSum) {
        answer = "YES";
        break;
      }
      tempSum += n[i];

      if (tempSum > perSum) {
        let nowIndex = i;
        while (tempSum > perSum) {
          nowIndex -= 1;
          tempSum -= n[nowIndex];
        }
      }
    }
  }
  return answer;
}

console.log(solution([1, 3, 5, 6, 7, 10])); // YES
console.log(solution([1, 3, 5, 6, 9, 10])); // YES
console.log(solution([4, 5, 100, 113])); // NO

console.log("==============");

function lectureSolution(arr: number[]) {
  let answer = "NO";
  let flag = 0;
  let total = arr.reduce((acc, curr) => acc + curr, 0);
  let length = arr.length;
  function DFS(L, sum) {
    if (flag) return; // 부분집합이 발견되고 난 이후의 함수는 길게 돌지 않도록
    if (L === length) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]); // 해당 index의 값을 부분 집합에서 사용하는 경우
      DFS(L + 1, sum); // 해당 index의 값을 부분 집합에서 사용하지 않는 경우
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(lectureSolution([1, 3, 5, 6, 7, 10])); // YES
console.log(lectureSolution([1, 3, 5, 6, 9, 10])); // YES
console.log(lectureSolution([4, 5, 100, 113])); // NO
