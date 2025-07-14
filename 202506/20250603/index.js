// 문제 1:
//     프로토타입형 변수에 name, price, category를 입력한 후, 아래 조건에 따른 프로그램을 작성하십시오.

//     price가 10000원 이상이면 "고급" 아니면 "일반"
//     출력 시 "상품명[고급 or 일반]" 형식으로 출력합니다.

let product = {name:'사과', price:7000, category:'신선식품'};
console.log(
  product['name'] + "[" + 
  (product.price >= 10000 ? "고급" : "일반") + "]"
);


// let nation = 'korea';
// let price = 5000;
// let money = 5500;
// let my_nation = 'korea';

// console.log(
//   price > money ? "가격 부족" : 
//   nation !== my_nation ? "국가 비일치" : "구매 가능");

// console.log(2 < 3 ? "맞다" : "아니다")

// let apple = {
//   price: 5000,
//   count: 50,
//   total: 0
// };
// apple.total = apple.count * apple.price;

// console.log(apple)


// let arr = [1,2,3,4,5];
// let proto = {apple:5000, grape:6000};

// console.log(arr[0] + 2);
// console.log(arr[1] * 2);
// console.log(proto['apple'] / 2550)
// console.log(proto['grape'])

// object -> array, prototype
// [1,2,3,4]
// {'key':value}

// 가격이 5000원 이상이고 한국인만 구매 가능한 상품
// price >= money && nation == 'korean'
// price < money || nation != 'korean'

// let apple = undefined;
// let price = apple ?? 0 ;
// console.log(price);

// let price = 5000;
// console.log(price || price < 5000);


// let price = 5000;
// let money = 6000;
// let nation = 'korea';
// let my_nation = 'japan';
// console.log(money >= price);

// console.log(1 == 1);
// console.log(1 == '1');
// console.log(1 === '1');

// let a = 1;
// console.log(a);
// a += 1;
// console.log(a);
// a += 1;
// console.log(a);
// a += 1;
// console.log(a);
// a += 1;

// let a = 1 + 2 + 3;
// console.log(a);
// console.log(a);

// console.log(1 + 2);
// console.log(1 + 2);


// console.log(2 ** 10);

// console.log(1.2 % 0.7)

// console.log(3 / 5)
// console.log(3 % 5)

// console.log('hello ' + 'world')

// console.log(3 + 3);