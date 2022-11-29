function solution(arr: number[]) {
  let answer = [];
  arr.forEach((per, index) => {
    if (index === 0) {
      answer.push(per);
    } else {
      if (arr[index - 1] < arr[index]) {
        answer.push(per);
      }
    }
  });
  return answer;
}
console.log(solution([7, 3, 9, 5, 6, 12]));

function solution2(arr: number[]) {
  return arr.filter((per, index) => {
    return index === 0 ? true : arr[index - 1] < per;
  });
}

console.log(solution2([7, 3, 9, 5, 6, 12]));

function lectureSolution(arr: number[]) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}

console.log(lectureSolution([7, 3, 9, 5, 6, 12]));
