function solution(n) {
  function DFS(a, checkList) {
    if (a === n + 1) {
      console.log("============");
      checkList.forEach((per, index) => {
        if (per) {
          console.log(index + 1);
        }
      });
      console.log("============");
      return;
    } else {
      checkList[a - 1] = true;
      DFS(a + 1, checkList);
      checkList[a - 1] = false;
      DFS(a + 1, checkList);
    }
  }
  DFS(1, []);
}

console.log(solution(3));

function lectureSolution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  function DFS(v) {
    if (v === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) {
          tmp += i + " ";
        }
      }
      // 공집합 제외 후 앞 뒤 여백 제거한 후 answer에 푸시
      if (tmp.length > 0) answer.push(tmp.trim());
      return;
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(lectureSolution(3));
