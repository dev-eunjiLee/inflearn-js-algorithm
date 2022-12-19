function solution(m: number, arr: number[]) {
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = [];
    let breakPoint = -1;
    let result = arr.reduce((prev, curr, index) => {
      if (prev === m) return prev;
      if (index < i) return prev;
      if (prev === breakPoint) return prev;
      const sum = prev + curr;
      if (sum <= m) {
        temp.push(curr);
        return sum;
      } else {
        temp = [];
        return breakPoint;
      }
    }, 0);
    if (temp.length > 0 && result === m) {
      cnt++;
    }
  }
  return cnt;
}

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));

function lectureSolution(m: number, arr: number[]) {
  let answer = 0;
  let lt = 0,
    sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) {
      console.log(lt, rt);
      answer++;
    } else {
      while (sum >= m) {
        sum -= arr[lt++]; // arr[lt] 값을 sum에서 빼준 후 lt++ 진행
        if (sum === m) {
          console.log(lt, rt);
          answer++;
        }
      }
    }
  }
  return answer;
}

console.log(lectureSolution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
