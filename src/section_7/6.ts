/**
 * 3번을 통과하지 못한 틀린 답
 * @param arr
 */
function solution(arr: number[]) {
  let a: number, b: number; // a: 현수, b: 짝꿍
  arr.forEach((per, index) => {
    if (per <= arr[index - 1]) {
      if (arr[index - 1] === per && per === arr[index + 1]) {
        console.log("no");
      } else {
        if (arr[index - 1] > arr[index + 1]) a = index - 1;
        else b = index;
      }
    }
  });
  return [a + 1, b + 1];
}

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160])); // 3, 8
console.log(solution([120, 130, 150, 150, 130, 150])); // 3,5
console.log(solution([120, 130, 150, 150, 150, 130, 150])); // 3,6

function solution2(arr: number[]) {
  let answer = [];
  const newArr = [...arr].sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== newArr[i]) answer.push(i + 1);
  }
  return answer;
}

console.log(solution2([120, 125, 152, 130, 135, 135, 143, 127, 160])); // 3, 8
console.log(solution2([120, 130, 150, 150, 130, 150])); // 3,5
console.log(solution2([120, 130, 150, 150, 150, 130, 150])); // 3,6

function lectureSolution(arr: number[]) {
  let answer = [];

  let sortArr = [...arr].slice().sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }

  return answer;
}

console.log(lectureSolution([120, 125, 152, 130, 135, 135, 143, 127, 160])); // 3, 8
console.log(lectureSolution([120, 130, 150, 150, 130, 150])); // 3,5
console.log(lectureSolution([120, 130, 150, 150, 150, 130, 150])); // 3,6
