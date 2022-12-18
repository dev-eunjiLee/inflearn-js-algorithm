function solution(arr: number[]) {
  return arr
    .map((per) => {
      return Number(per.toString().split("").reverse().join(""));
    })
    .filter((per) => {
      if (per === 1) return false;
      if (per <= 3) return true;
      if (per % 2 === 0) return false;
      let temp = 3;
      const middle = Math.ceil(per / 2);
      while (temp < per) {
        if (per % temp === 0) return false;
        if (temp === middle) return true;
        temp++;
      }
    });
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));

// 소수 구하기
function isPrime(num: number): boolean {
  if (num === 1) return false;
  // 소수 판별: 제곱근까지만 보면 된다.
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function lectureSolution(arr: number[]) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = Math.floor(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

console.log(lectureSolution([32, 55, 62, 20, 250, 370, 200, 30, 100]));

function lectureSolution2(arr: number[]) {
  let answer = [];
  for (let x of arr) {
    let res = Number(x.toString().split("").reverse().join(""));
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

console.log(lectureSolution2([32, 55, 62, 20, 250, 370, 200, 30, 100]));
