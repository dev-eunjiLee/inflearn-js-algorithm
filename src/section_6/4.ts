function calculate(first: number, second: number, operator: string): number {
  if (operator === "+") return first + second;
  else if (operator === "-") return first - second;
  else if (operator === "*") return first * second;
  else if (operator === "/") return first / second;
}

function solution(s: string): number {
  const stack = [];
  const regex = new RegExp(/\+|\-|\*|\//);
  s.split("").forEach((per) => {
    if (per.match(regex)) {
      const second = stack.pop();
      const first = stack.pop();
      const result = calculate(first, second, per);
      stack.push(result);
    } else stack.push(Number(per));
  });
  console.log(stack);
  return stack[0];
}

console.log(solution("352+*9-"));

function lectureSolution(s): number {
  let answer;
  const stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      const rt = stack.pop();
      const lt = stack.pop();
      if (x === "+") stack.push(rt + lt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

console.log(lectureSolution("352+*9-")); // 12
console.log(lectureSolution("35-")); // -2
