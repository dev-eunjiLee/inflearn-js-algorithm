function solution(s: string) {
  let numOfVotes = {};
  s.split("").forEach((per) => {
    if (numOfVotes[per] === undefined) {
      numOfVotes[per] = 0;
    }
    numOfVotes[per]++;
  });
  let winner = "";
  let numOfVotesOfWinner = 0;
  Object.keys(numOfVotes).forEach((per) => {
    if (numOfVotesOfWinner <= numOfVotes[per]) {
      winner = per;
      numOfVotesOfWinner = numOfVotes[per];
    }
  });
  return winner;
}

console.log(solution("BACBACCACCBDEDE"));

//
function lectureSolution(s: string) {
  let sh = new Map(); // string hash
  s.split("").forEach((per) => {
    let origin = sh.get(per);
    if (origin === undefined) {
      origin = 1;
    } else {
      origin++;
    }
    sh.set(per, origin);
  });
  let max = Number.MIN_SAFE_INTEGER;
  let answer;
  for (let [key, value] of sh) {
    if (max < value) {
      max = value;
      answer = key;
    }
  }
  return answer;
}

console.log(lectureSolution("BACBACCACCBDEDE"));

function lectureSolution2(s: string) {
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  console.log(sH);
  console.log(1);

  let max = Number.MIN_SAFE_INTEGER;
  let answer;
  for (let [key, val] of sH) {
    console.log(key, val);
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

console.log(lectureSolution2("BACBACCACCBDEDE"));
