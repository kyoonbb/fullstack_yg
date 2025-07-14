// let array = [1,2,3,4,];
// let proto = {a:'b', c:'d',}

// let data = 1_2345_6789;
// 1_2345_6789 => 1,2345,6789
// 123_456_789 => 123M
// 100M 1G

// 100000000 + 23450000 + 6789


// let proto = {a:'b', c:'d',}
// proto.a;
// proto.b;

// let product = {
//   name : {
//     first: '큰',
//     last: '사과'
//   },
//   price : {
//     origin: 5000,
//     sale: 0.15
//   }
// }
// product?.prices?.total;

// function isEven(data) {
//   console.log(typeof data);
//   return data % 2 == 0;
// }
// isEven(3)
// isEven('3')
// isEven([1,2,3])
// isEven({a:3})
// isEven(()=>{})
// isEven(isEven)

// function isEven(data) {
//   if(typeof data === 'function') return data() % 2 == 0;
//   return data % 2 == 0;
// }
// console.log(isEven(5));
// console.log(isEven(()=>6));

// class A {}
// console.log(typeof A);

// let b = new A();
// console.log(typeof b);

// function A() {
//   return {};
// }

// class A { constructor() {} }
// class B extends A {
//   g;
//   #d;
//   constructor() {}
//   B() {
//     // #d = 6;
//   }
// }
// new B().g = 5;
// new B().#d = 5;


// class A { constructor() {} }
// class B extends A {
//   g;
//   #d;
//   constructor() {}
//   B() {
//     this.#d = 5;
//   }
// }

// console.log(this)
// function A() {
//   console.log(this);
// }

// A();

// let a = { apply: function (){
//   this.b = 5;
// }}
// a.apply();

// console.log(a.b);

// let a = {
//   apply: function () {
//     this.b = 5;
//   }
// }
// let b = {
//   apply: a.apply
// }
// b.apply();
// console.log(a, b);
// let d = {
//   C:function () {
//     let a = {
//       target : {
//         apply: ()=>{ this.c = 5; }
//       }
//     }
//     a.target.apply();
//     console.log(a)
//     console.log(window.c)
//   }
// }
// d.C();
// console.log(d.c)

// let a = [1,2,3,4]
// let b = {b:'c', c:'d'}

// // let tempa = a[1];
// // let tempb = b.b;

// let [ _, tempa ] = a;
// let { c:tempc } = b;
// console.log(tempa)
// console.log(tempc)

// function OnOff(def) {
//   let result = {
//     value:def,
//     on: function () { this.value = true; },
//     off: function () { this.value = false; },
//     toggle: function () { this.value = !this.value; }
//   };
//   return { value: result, 
//     on: result.on, 
//     off: result.off,
//     toggle: result.toggle
//   }
// }

// let {value, toggle} = OnOff(true);

// function A(...a) {
//   console.log(a);
//   console.log(...a);
// }
// A(1,2,3,4,5,6)

// let [a, b, ...arr] = [1,2,3,4,5,6,7,8,9]
// let r = [...arr, a, b]

// let {name:name, ...mod} = {name:'hello', price:5000};
// let rr = {...mod, name, name:'target'};
// console.log(rr);

let product = {
  name:'사과',
  price:5000,
  sale:0.15
}
function totalPrice({ price, sale, ...product }) {
  return price - price * sale
}
console.log(totalPrice(product));