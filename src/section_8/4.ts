function solution(n) {
  function DFS(startNumber, lastNumber) {
    console.log(startNumber);
    let middleNumber = startNumber;
    while (middleNumber <= lastNumber) {
      console.log(middleNumber);
      middleNumber++;
    }
    console.log(lastNumber);
  }
  DFS(1, n);
}

console.log(solution(3));
