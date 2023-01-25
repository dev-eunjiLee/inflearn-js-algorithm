function count(songs, capacity) {}

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
