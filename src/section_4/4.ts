// 내가 푼 방법은 오답임
function solution(m: number, product: number[][]) {
  let answer = 0;
  const budget = m;
  // 상품가격 오름차순순으로 정렬(같은 경우 배송비를 오름차순으로 정렬) => 상품 전체 가격 순으로 정렬 필요
  product.sort((a, b) => (a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0]));
  let sum = 0; // 전체 금액
  let temp = [];
  for (let i = 0; i < product.length; i++) {
    const price = product[i][0];
    const halfPrice = price / 2;
    const deliveryFee = product[i][1];

    sum += price + deliveryFee;

    if (sum <= budget) {
      // 현재 상품까지 다 더한 금액과 예산을 비교하여 예산보다 작으면 answer++
      answer++;
      temp.push([price, deliveryFee]);
    } else {
      // 현재 상품까지 다 더한 금액이 예산보다 클 경우 상품금액을 절반으로 깎은 후 다시 비교
      sum -= halfPrice;
      if (sum <= budget) {
        answer++;
        temp.push([price, deliveryFee]); // 절반 쿠폰 사용 후에는 반복문 그만 돌리기
        break;
      } else {
        sum -= halfPrice + price; // 절반 쿠폰 사용 시도했는데도 예산 초과한 경우 원래의 sum으로 돌려놓기
      }
    }
  }

  console.log(temp);
  return answer;
}

console.log(
  solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);

// 어떤 상품을 할인 받을지를 기준으로 완전 탐색
function lectureSolution(m: number, product: number[][]) {
  const cntList = [];
  // 상품가격 총합 오름차순으로 정렬
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < product.length; i++) {
    // 할인 받을 상품 선택
    const salesTotalPrice = product[i][0] / 2 + product[i][1];
    let cnt = 1;
    let totalSum = salesTotalPrice;
    // 할인 받은 상품을 제외한 상품들을 상품 가격이 작은 순으로 더해서 예산과 비교
    for (let j = 0; j < product.length; j++) {
      if (i === j) continue;
      totalSum += product[j][0] + product[j][1];
      if (totalSum <= m) cnt++;
      else break;
    }
    cntList.push(cnt);
  }
  return Math.max(...cntList);
}

console.log(
  lectureSolution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);

// 어떤 상품을 할인 받을지를 기준으로 완전 탐색
function lectureSolution2(m: number, product: number[][]) {
  let answer = 0;
  let n = product.length; // 학생 수
  product.sort((a, b) => a[0] + a[1] - b[0] - b[1]); // 상품 가격 총합을 기준으로 오름차순 정렬
  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]); // 남은 예산
    let cnt = 1; // 상품 구매 개수
    for (let j = 0; j < n; j++) {
      if (i !== j && product[j][0] + product[j][1] > money) break;
      if (i !== j && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

console.log(
  lectureSolution2(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
