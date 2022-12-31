// 2중 loop
function solution(k: number, arr: number[]) {
  let max = Number.MIN_SAFE_INTEGER;
  arr.forEach((per, index) => {
    if (index + k < arr.length) {
      let sum = 0;
      for (let i = 0; i < k; i++) {
        sum += arr[index + i];
      }
      console.log(sum);
      max = Math.max(sum, max);
    }
  });
  return max;
}
console.log("answer: ", solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15])); // 56

function lectureSolution(k: number, arr: number[]) {
  let length = 0;
  let sum = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (length === k) {
      sum = sum + arr[i] - arr[i - k];
      console.log(sum);
    } else {
      sum += arr[i];
      length++;
    }
    max = Math.max(max, sum);
  }
  return max;
}
console.log(lectureSolution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15])); // 56

function lectureSolution2(k: number, arr: number[]) {
  let answer = 0,
    sum = 0;
  // 첫번째 슬라이드 값 셋팅
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }

  return answer;
}
console.log(
  "answer2",
  lectureSolution2(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15])
); // 56
