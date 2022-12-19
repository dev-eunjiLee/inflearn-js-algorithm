function solution(arr1, arr2) {
  // 투포인터 셋팅
  let pointer1 = 0,
    pointer2 = 0;

  // 오름차순으로 정렬
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let temp = [];

  // 투포인터 돌리면서 작은 값은 pointer를 ++ 시키고, 같은 값이 나올 때 푸시한다. 단, 둘 중 한 배열이 끝나면 반복문 종료
  while (pointer1 < arr1.length - 1 && pointer2 < arr2.length - 1) {
    if (arr1[pointer1] < arr2[pointer2]) {
      pointer1++;
    } else if (arr1[pointer1] > arr2[pointer2]) {
      pointer2++;
    } else {
      temp.push(arr1[pointer1]);
      pointer1++;
      pointer2++;
    }
  }
  return temp;
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));

function lectureSolution(arr1, arr2) {
  let answer = [];
  // sort에 콜백을 넣지 않으면 string으로 치환 후 정렬이 진행된다. 사전 순으로 정렬!
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  // 포인터
  let p1 = 0,
    p2 = 0;
  while (p1 < arr1.length && p2 < arr1.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
    } else p2++;
  }
  return answer;
}

console.log(lectureSolution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
