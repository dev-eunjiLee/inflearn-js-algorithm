function lectureSolution(s: string) {
  const stack = [];
  for (let x of s) {
    console.log(x);
    if (x !== ")") stack.push(x);
    else {
      let flag = true;
      while (flag) {
        flag = stack[stack.length - 1] !== "(";
        console.log(flag);
        stack.pop();
      }
    }
  }
  return stack.join("");
}

console.log(lectureSolution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));

function lectureSolution2(s: string) {
  let answer;
  const stack = [];
  for (let x of s) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }
  answer = stack.join("");

  return answer;
}

console.log(lectureSolution2("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
