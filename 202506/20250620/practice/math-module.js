import { create, all } from 'mathjs';

// mathjs 인스턴스 생성
const math = create(all);

// 계산할 숫자 2개
const number1 = 15;
const number2 = 3;

console.log("=== 수학 계산기 ===");
console.log(`숫자 1: ${number1}`);
console.log(`숫자 2: ${number2}`);
console.log("==================");

// 사칙연산 수행
const addition = math.add(number1, number2);
const subtraction = math.subtract(number1, number2);
const multiplication = math.multiply(number1, number2);
const division = math.divide(number1, number2);

// 결과 출력
console.log(`덧셈: ${number1} + ${number2} = ${addition}`);
console.log(`뺄셈: ${number1} - ${number2} = ${subtraction}`);
console.log(`곱셈: ${number1} × ${number2} = ${multiplication}`);
console.log(`나눗셈: ${number1} ÷ ${number2} = ${division}`);

// 추가 수학 연산
console.log("\n=== 추가 연산 ===");
console.log(`제곱: ${number1}² = ${math.pow(number1, 2)}`);
console.log(`제곱근: √${number1} = ${math.sqrt(number1)}`);
console.log(`절댓값: |${-number1}| = ${math.abs(-number1)}`);