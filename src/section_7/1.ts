function solution(arr: number[]) {
  return arr.sort((a, b) => a - b);
}

console.log(solution([13, 5, 11, 7, 23, 15]));

/**
 * 선택 정렬: i번째로 올 수 있는 데이터를 찾아서 해당 데이터를 선택해 i번째와 바꿔주는 것
 * - 첫번째 자료를 두번째 자료부터 마지막 자료까지와 차례대로 비교하여 그 중 가장 작은 값을 찾아 첫번째 자료에 넣고, 해당 작업을 마지막까지 진행해서 정렬하는 것
 */

function lectureSolution(arr: number[]) {
  const answer = arr; // 얕은 복사기 때문에 arr이 달라지면 answer도 달라진다
  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[idx] > arr[j]) idx = j; // idx의 값을 더 작은 값의 인덱스 번호로 바꿔준다
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]]; // 구조분해 할당 문법을 사용해 추가 변수 할당없이 교환 진행
  }
  return answer;
}

console.log(lectureSolution([13, 5, 11, 7, 23, 15]));
