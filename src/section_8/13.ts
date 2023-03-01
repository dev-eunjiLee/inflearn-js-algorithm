function lectureSolution(n: number, f: number) {
  let answer;
  // 메모리제이션용 배열 변수
  let dy = Array.from({ length: 11 }, () => Array(11).fill(0));
  // 체크 표시용 배열 변수
  let ch = Array.from({ length: n + 1 }, () => 0);
  // 순열 저장
  let p = Array.from({ length: n }, () => 0);
  // 조합 수 nCr => 해서 나온 값
  let b = Array.from({ length: n }, () => 0);

  // nCr = n-1Cr-1 + n-1Cr
  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else {
      // 변수 지정 후 해당 변수 바로 return
      return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
    }
  }

  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }

  console.log(b);

  let flag;

  function DFS(L, sum) {
    if (flag === 1) return;
    if (L === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(lectureSolution(4, 16));
