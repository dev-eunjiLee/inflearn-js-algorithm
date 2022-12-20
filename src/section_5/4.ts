function solution(m: number, arr: number[]) {
  let rightPointer = 0,
    leftPointer = 0;
  let answer = 0;
  let temp = [];
  while (leftPointer < arr.length) {
    if (arr[leftPointer] < m) {
      temp.push(arr[leftPointer]);
      answer++;
      console.log(temp);
      let sum = arr[leftPointer];
      for (
        rightPointer = leftPointer + 1;
        rightPointer < arr.length;
        rightPointer++
      ) {
        sum = sum + arr[rightPointer];
        if (sum <= m) {
          temp.push(arr[rightPointer]);
          answer++;
          console.log(temp);
        }
        if (sum >= m) {
          break;
        }
      }
    }
    temp = [];
    leftPointer++;
  }
  return answer;
}

console.log(solution(5, [1, 3, 1, 2, 3])); // 10

function lectureSolution(m: number, arr: number[]) {
  let answer = 0;
  let lt = 0,
    sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

console.log(lectureSolution(5, [1, 3, 1, 2, 3])); // 10
