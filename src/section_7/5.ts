function solution(size: number, arr: number[]) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (answer.indexOf(arr[i]) !== -1) {
      answer.splice(i, 1);
    }
    if (answer.length === 5) answer.pop();
    answer.unshift(arr[i]);
  }
  return answer;
}

console.time("unshift");
console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
console.timeEnd("unshift");

/**
 * 삽입정렬 방식
 */
function solution2(size: number, arr: number[]) {
  let answer = Array.from({ length: size }, () => 0);

  arr.forEach((per) => {
    let startIndex = answer.indexOf(per);
    startIndex = startIndex === -1 ? size - 1 : startIndex;
    for (let i = startIndex; i >= 0; i--) {
      answer[i] = answer[i - 1];
    }
    answer[0] = per;
  });

  return answer;
}
console.time("삽입 정렬");
console.log(solution2(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
console.timeEnd("삽입 정렬");

function lectureSolution(size: number, arr: number[]) {
  let answer = Array.from({ length: size }, () => 0);

  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i; // check cache
    if (pos === -1) {
      // cache에 값이 없을 경우 하나씩 다 뒤로 밀어서 맨 앞에 값 넣어줌
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      // cache에 값이 있을 경우, 해당 값부터 밀어서 그 값을 맨 앞에 넣어줌
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });

  return answer;
}
console.time("삽입 정렬");
console.log(lectureSolution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
console.timeEnd("삽입 정렬");

function lectureSolution2(size: number, arr: number[]) {
  let answer = [];

  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i; // check cache
    if (pos === -1) {
      answer.unshift(x);
      if (answer.length > size) answer.pop();
    } else {
      answer.splice(pos, 1);
      answer.unshift(x);
    }
  });

  return answer;
}
console.time("수업 unshift");
console.log(lectureSolution2(5, [1, 2, 3, 2, 6, 2, 3, 5, 7])); // [7, 5, 3, 2, 6]
console.timeEnd("수업 unshift");
