function solution(board: number[][], moves: number[]) {
  const stack = [];
  let answer = 0;
  moves.forEach((per) => {
    per -= 1; // moves에 들어있는 값들은 0부터 시작하는 값이 아니기 때문에 1을 빼주고 시작
    let i = 0; // 첫번째줄부터 시작할 수 있도록 i를 0으로 초기화
    let flag = true;
    while (flag) {
      console.log(`stack: ${stack}`);
      const now = board[i][per]; // 크레인이 집게 될 인형
      if (now === 0) {
        // 집은 인형이 없으면 다음 칸으로 넘어감, 단 넘어갔는데 해당 판을 넘어갔으면 반복문 넘어감
        i++;
        if (i >= board.length) flag = false;
      } else {
        if (stack[stack.length - 1] === now) {
          // 인형이 있는 경우, 스택에 같은 값이 가장 마지막에 들어가있으면 없애주고, 아닌 경우에는 쌓아준다
          stack.pop();
          answer += 2;
        } else {
          stack.push(now);
        }
        board[i][per] = 0;
        flag = false;
      }
    }
  });
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); // 4;

function lectureSolution(board: number[][], moves: number[]): number {
  let answer = 0;
  const stack = [];

  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        // 인형을 만난 경우 => 인형을 꺼내고 꺼낸 인형 자리에 0으로 채워넣기
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break; // 인형 만나고 나서는 for문 멈춰야한다
      }
    }
  });

  return answer;
}

console.log(
  lectureSolution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); // 4;
