function solution(arr: Array<number>): number {
  // 배열 초기화
  const dy = Array.from({ length: arr.length }) as Array<number>;

  dy[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    // index가 기준보다 작고, value도 작은 경우, 증가수열에 포함 가능
    const max = Math.max(
      ...arr.map((value, index) => {
        if (index < i && value < arr[i]) return dy[index];
        else return null;
      })
    );
    if (max === 0) dy[i] = 1;
    else dy[i] = max + 1;
  }

  return Math.max(...dy);
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4])); // 4

function lectureSolution(arr) {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
  }
  return answer;
}

console.log(lectureSolution([5, 3, 7, 8, 6, 2, 9, 4])); // 4
