function solution(n: number, arr: number[]) {
  let max = {
    origin: 0,
    sum: 0,
  };
  arr.forEach((per) => {
    const newSum = per
      .toString()
      .split("")
      .reduce((prev, curr) => {
        return prev + Number(curr);
      }, 0);
    if (max.sum < newSum || (max.sum === newSum && max.origin < per)) {
      max.origin = per;
      max.sum = newSum;
    }
  });
  return max.origin;
}

console.log(solution(7, [128, 460, 603, 40, 521, 137, 123]));

function lectureSolution(n: number, arr: number[]) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp !== 0) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      answer = x;
      max = sum;
    } else if (sum === max) {
      if (answer < x) {
        answer = x;
      }
    }
  }
  return answer;
}

console.log(lectureSolution(7, [128, 460, 603, 40, 521, 137, 123]));

function lectureSolution2(n: number, arr: number[]) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((prev, curr) => {
        return prev + Number(curr);
      }, 0);
    if (sum > max) {
      answer = x;
      max = sum;
    } else if (sum === max) {
      if (answer < x) {
        answer = x;
      }
    }
  }
  return answer;
}

console.log(lectureSolution2(7, [128, 460, 603, 40, 521, 137, 123]));
