/**
 * 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
 */

function solution(a: number, b: number, c: number): string {
  // 가장 긴 변, 그 외 변 구분
  const [longSide, ...lastSides] = [a, b, c].sort((a, b) => {
    return b - a;
  });
  // 길이 체크 후 Y, N 전달(삼각형의 조건: 가장 긴 변이 나머지 두 변의 합 보다 짧아야 한다)
  return longSide <
    lastSides.reduce((prev, curr) => {
      return prev + curr;
    }, 0)
    ? "YES"
    : "NO";
}
console.log(solution(6, 7, 11)); // YES
console.log(solution(13, 33, 17)); // NO
