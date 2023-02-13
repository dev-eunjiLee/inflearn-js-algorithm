function solution(n: number[]) {
  console.log(n);
  const sum = n.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
  const perSum = sum / 2;
  for (let [index, per] of n.entries()) {
    let tempSum = 0;
    for (let i = index; i < n.length; i++) {
      tempSum += n[i];
      if (tempSum === perSum) return "YES";
      else if (tempSum > perSum) {
        let nowIndex = i;
        while (tempSum > perSum) {
          nowIndex -= 1;
          tempSum -= n[nowIndex];
        }
      }
    }
  }
}

console.log(solution([1, 3, 5, 6, 7, 10]));
