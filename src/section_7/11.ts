function solution(m: number, songs: Array<number>) {
  const sum = songs.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  const min = Math.floor(sum / m);
  for (let capacity = min; capacity < sum; capacity++) {
    let tempArray = [];
    let tempSum = 0;
    for (let i = 0; i < songs.length; i++) {
      tempSum += songs[i];
      if (tempSum > capacity) {
        tempSum -= songs[i];
        tempArray.push(tempSum);
        tempSum = songs[i];
      }
      if (songs.length - 1 === i) {
        tempArray.push(tempSum);
      }
    }
    if (tempArray.length === m) return capacity;
    else tempArray = [];
  }
}

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));

/**
 * 결정 알고리즘(반씩 떨궈나가는 이분탐색이 기본 베이스)
 * - 주어진 범위 내에서 원하는 값 또는 원하는 조건에 가장 일치하는 값을 찾아내는 알고리즘
 * - lt: DVD 1개의 최소 용량: 9 => 가장 긴 곡이 9기 때문에
 * - rt: 전체 합: 45
 * - 이분탐색으로 진행하기 때문에 rt를 명확하게 구하기 위해 엄청 노력할 필요는 없다
 * - 첫 번째 mid: (9 + 45) /2 = 27
 * ---> (1,2,3,4,5,6), (7,8,9)
 * ---> 용량이 27인 DVD로 3개가 되는지 확인 => 가득 채울 수 있는 값이 2장이기 때문에 정답은 아님. 28 ~ 45 용량은 볼 필요 없기 때문에 줄여나갈 수 있다
 * - 2번째 mid: (9 + 26) / 2 = 17
 * ---> (1,2,3,4,5), (6,7), (8,9) => 1개의 DVD 용량이 17이면 3장으로 나눠서 넣을 수 있음
 * - 3번째 mid: (9 + 16) / 2 = 12
 * ---> (1,2,3,4), (5, 6), (7), (8), (9) => 5장 필요 => 답이 될 수 없음
 * - 4번째 mid: (13 + 16) / 2 = 14
 * ---> (1,2,3,4), (5,6), (7), (8), (9) => 5장 필요 => 답이 될 수 없음
 * - 5번째 mid: (15+16)/2 = 15
 * ---> (1,2,3,4,5), (6,7), (8), (9) => 4장 필요 => 답이 될 수 없음
 *
 * ======> 정답은 17
 */
function solution2(m: number, songs: Array<number>) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  while (lt < rt) {
    const mid = Math.floor((lt + rt) / 2);
    let temp = 0;
    let cnt = 0;
    for (const song of songs) {
      temp += song;
      if (temp > mid) {
        temp = song;
        cnt++;
      } else if (temp === mid) {
        cnt++;
        temp = 0;
      }
    }
    if (temp !== 0) cnt++;
    if (cnt <= 3) {
      answer = mid;
      rt = mid - 1;
    } else if (cnt > 3) {
      lt = mid + 1;
    }
  }
  return answer;
}

console.log(solution2(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));

function count(songs, capacity): number {
  let cnt = 1;
  let sum = 0;

  for (const x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return cnt;
}

function lectureSolution(m: number, songs: Array<number>): number {
  let answer;

  let lt = Math.max(...songs);
  let rt = songs.reduce((acc, curr) => acc + curr, 0);

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

console.log(lectureSolution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
