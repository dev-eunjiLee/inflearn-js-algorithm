function solution(arr1: number[], arr2: number[]) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));

function lectureSolution(arr1: number[], arr2: number[]) {
  // sort로 정렬할 경우 시간 복잡도가 nlogn이기 때문에 변수가 커질 경우 적합하지 않다...
  // 적합한 알고리즘: two pointers 알고리즘 => 각자 다른 원소를 가리키고 있는 2개의 포인터를 조작해서 원하는 값을 얻는 형태
  const answer = [];
  let p1 = 0,
    p2 = 0;

  while (true) {
    if (p1 === arr1.length && p2 === arr2.length) {
      break;
    } else if (p1 === arr1.length) {
      answer.push(arr2[p2]);
      p2++;
    } else if (p2 === arr2.length) {
      answer.push(arr1[p1]);
      p1++;
    } else if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
    } else {
      answer.push(arr2[p2]);
      p2++;
    }
  }

  return answer;
}

console.log(lectureSolution([1, 3, 5], [2, 3, 6, 7, 9]));

function lectureSolution2(arr1: number[], arr2: number[]) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = 0,
    p2 = 0;
  // while문 안에서 투 포인터 조작해서 푸시, 단, 어느 한 배열이 끝까지 간 경우 while 탈출
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2])
      answer.push(arr1[p1++]); // arr[p1] 값을 answer에 넣은 후 p1++ 진행
    else answer.push(arr2[p2++]);
  }
  // arr1, 2 중 남아있는 배열을 push 진행
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

console.log(lectureSolution2([1, 3, 5], [2, 3, 6, 7, 9]));
