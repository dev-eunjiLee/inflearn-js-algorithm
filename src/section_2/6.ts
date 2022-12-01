/**
 * 5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
 *  [10, 13, 10, 12, 15],
 *  [12, 39, 30, 23, 11],
 *  [11, 25, 50, 53, 15],
 *  [19, 27, 29, 37, 27],
 *  [19, 13, 30, 13, 19],
 * N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합 니다.
 * @param arr
 */

function solution(arr: number[][]) {
  let max = 0;
  let rightUpSum = 0,
    rightDownSum = 0; // 우상향, 우하향

  for (let i = 0; i < arr.length; i++) {
    // 가장 바깥 반복문을 돌 때 대각선 총합에 값 누계
    rightDownSum += arr[i][i];
    rightUpSum += arr[i][arr.length - i - 1];
    // 가로 합, 세로 합은 내부 반복문에서 처리 예정이기 때문에 바깥 반복문에서 변수 선언 및 최소값 할당
    let verticalSum = 0,
      widthSum = 0;
    for (let j = 0; j < arr.length; j++) {
      // 가로 합, 세로 합 구하기
      verticalSum += arr[j][i];
      widthSum += arr[i][j];
    }
    // 가로 합, 세로 합 중 최대값 구하기
    max = verticalSum <= widthSum ? widthSum : verticalSum;
  }

  // 가로 합, 세로 합 중에서 고른 최대값과 대각선의 최대값 비교 후 최종으로 최대값 할당
  if (max <= rightUpSum) max = rightUpSum;
  if (max <= rightDownSum) max = rightDownSum;

  return max;
}

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
