function solution(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  return arr;
}

console.log(solution([11, 7, 5, 6, 10, 9]));

/**
 * 삽입정렬: 앞의 값과 비교하여 정렬
 */
function lectureSolution(arr: number[]) {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp)
        arr[j + 1] = arr[j]; // 현 위치의 값이 tmp보다 크면 해당 값을 뒤로 민다.
      else break;
    }
    arr[j + 1] = tmp; // 멈춘 위치의 바로 뒤 값에다가 tmp 값을 넣어줌
  }

  return answer;
}

console.log(lectureSolution([11, 7, 5, 6, 10, 9]));
