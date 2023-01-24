function solution(target: number, arr: Array<number>) {
  arr.sort((a, b) => a - b);
  let searchCnt = 1;
  let nowIndex = Math.floor(arr.length / 2);
  let beforeIndex = arr.length;
  let answer: number;
  console.log(arr);
  while (arr[nowIndex] !== target) {
    console.log(nowIndex, beforeIndex);
    searchCnt++;
    [nowIndex, beforeIndex] = [
      arr[nowIndex] > target
        ? beforeIndex - nowIndex - arr.length / 2 ** searchCnt
        : beforeIndex + nowIndex - arr.length / 2 ** searchCnt,
      nowIndex,
    ];
    console.log(nowIndex, beforeIndex);
  }
  answer = nowIndex + 1;
  return answer;
}

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81])); // 3

/**
 * 이분탐색 -> 절반 탐색
 * - 시간복잡도: O(logN)
 * - 전제조건: 무조건 정렬이 되어있어야한다.
 * - 포인터 2개(index lt, rt), mid = Math.floor((lt+rt)/2) 필요
 * - arr[mid]가 target인지 비교한 후,
 *      target보다 값이 작으면, rt = mid - 1
 *      target보다 값이 크면, lt = mid + 1
 * - 새로운 mid를 이용해 arr[mid]를 찾아, target과 비교
 *
 * 순차탐색 -> 앞에서부터 하는 방식
 * - 시간복잡도: O(N)
 */
function lectureSolution(target: number, arr: Array<number>) {
  let answer;

  arr.sort((a, b) => a - b);

  let lt = 0,
    rt = arr.length - 1;

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) {
      rt = mid - 1;
    } else if (arr[mid] < target) {
      lt = mid + 1;
    }
  }

  return answer;
}

console.log(lectureSolution(32, [23, 87, 65, 12, 57, 32, 99, 81]));
