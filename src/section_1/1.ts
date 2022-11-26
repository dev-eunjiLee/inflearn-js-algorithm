/**
 * 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.(정렬을 사용하면 안됩니다)
 */

function getLowerNumber(a: number, b:number):number{
    return a<b ? a : b
}

function solution(a:number, b:number, c:number){
    const answer = getLowerNumber(getLowerNumber(a,b), c)
    return answer
}

console.log(solution(2, 5, 1))
