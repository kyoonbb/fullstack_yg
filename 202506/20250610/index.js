// function buy(product, price) {
//   return count=>{
//     console.log('Buying ' + product);
//     return price * count;
//   }
// }
// function sell(product, price) {
//   return count=>{
//     console.log('Selling ' + product);
//     return price * count;
//   }
// }


// const sales = { profit:0 }
// const sale_product = {
//   apple:(count)=>{sales.profit += buy('apple', 3500)(count)},
//   grape:(count)=>{sales.profit += buy('grape', 4000)(count)},
//   melon:(count)=>{sales.profit += buy('melon', 7000)(count)},
//   strawberry:(count)=>{sales.profit += buy('strawberry', 6500)(count)}
// }
// const sell_product = {
//   apple:(count)=>{sales.profit -= sell('apple', 3500)(count)},
//   grape:(count)=>{sales.profit -= sell('grape', 4000)(count)},
//   melon:(count)=>{sales.profit -= sell('melon', 7000)(count)},
//   strawberry:(count)=>{sales.profit -= sell('strawberry', 6500)(count)}
// }

// sale_product.apple(10);
// sale_product.grape(20);
// sell_product.apple(5);

// console.log(sales.profit + '$');




// function OneToTen(condition) {
//   for(let i = 1; i <= 10; i += 1) {
//     if(condition(i))
//       console.log(i);
//   }
// }

// OneToTen(i=>i % 2 == 0)
// OneToTen(i=>i % 2 != 0)

// function plus(n) {
//   return function (m) {
//     return n + m;
//   }
// }
// function plus(n) {
//   return (m)=>{ return n + m; }
// }
// let func = plus(5);

// console.log(func(3))
// console.log(func(5))



// let b = 5;

// let a = function () {
//   console.log(b);
// }
// a();



// a();

// let b = 5;

// let a = function (c) {
//   console.log(c);
// }
// a(b);


// function A() {
//   throw new Error('오류');
// }
// try {
//   A();
// } catch(e) {
//   console.log(e);
// }

// function A(b, c){
//   try {
//     if(c == 0) throw new Error('Not divide zero');
//     return b / c;
//   } catch(e) {
//     console.log(e);
//     // console.log(g);
//     return "Not a Number";
//   } finally {
//     console.log('hello');
//   }
// }
// console.log(A(2, 0));