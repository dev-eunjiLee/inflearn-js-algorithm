function solution(arr: Array<number>): number {
  // 배열 초기화
  const dy = Array.from({ length: arr.length }) as Array<number>;

  dy[0] = 1;

  // 1. 나보다 앞 index의 값들을 확인
  for (let i = 1; i < arr.length; i++) {
    const tmp = [];
    for (let j = 0; j < i; j++) {
      // 2. 나의 앞 값이 나보다 작은 경우, 증가수열에 넣을 수 있음 => 앞의 값까지만 포함된 증가수열의 길이를 tmp에 push
      if (arr[i] > arr[j]) {
        tmp.push(dy[j]);
      }
    }
    console.log(`tmp: ${tmp}`);
    // 3. push된 tmp 중에서 가장 긴 값에 + 1 해서 증가수열 길이 처리
    if (tmp.length === 0) {
      dy[i] = 1;
    } else {
      dy[i] = Math.max(...tmp) + 1;
    }
  }

  return Math.max(...dy);
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4])); // 4
