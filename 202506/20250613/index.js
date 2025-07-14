// 나중에 배우는 기능 => fetch
// let datas = 
//   await fetch('https://www.reddit.com/r/destiny2/new.json')
//     .then(v=>v.json());

// console.log(datas);



// async function Hello(data){
//   console.log("Hello : " + data);
// }

// async function B() {
//   await Hello(3);
//   await Hello(4);
//   await Hello(5);
// }
// // (async ()=>{
// //   await B();
// // })();
// await B();

// new Promise();
// function();

// Promise.race([
//   new Promise((r,j)=>j(4)), new Promise((r,j)=>r(5))
// ]).then((data)=>{
//   console.log(data);
// })


// Promise.all()


// Promise.race()


// Promise.reject

// new Promise((resolve,reject)=>{
//   let promiseList;
//   for(let promise of promiseList) {
//     promise;
//   }
// })


// Promise.resolve(new Promise(), new Promise()).then();


// Promise.resolve()

// new Promise((resolve,reject)=>resolve())
//   .then(()=>console.log('Hello'))
//   .catch(()=>console.log('World'))
//   .then(()=>console.log('My'))
//   .catch(()=>console.log('World'))






// new Promise((resolve, reject)=>{
//   console.log("비동기");
//   resolve(5);
// })
// .then((data)=>{
//   console.log("성공 비동기 1:" + data);
//   return data + 1;
// })
// .then((data)=>{
//   console.log("성공 비동기 2:" + data);
//   return data + 1;
// });










// new Promise((resolve, reject)=>{
//   console.log("비동기");
//   resolve();
// })
// .then(()=>{
//   console.log("성공 비동기 1");
// })
// .then(()=>{
//   console.log("성공 비동기 2");
// })
// .then(()=>{
//   console.log("성공 비동기 3");
// })







// new Promise((resolve, reject)=>{
//   console.log("비동기");
//   reject();
// })
// .then(()=>{
//   console.log("성공 비동기");
// }) // 비동기 -> 성공시 => 성공 비동기
// .catch(()=>{
//   console.log("실패 비동기");
// }) // 비동기 -> 성공시 => 성공 비동기 -> 실패시 => 실패 비동기


// setTimeout(()=>{
//   // 동작
//   setTimeout(()=>{
//     // 동작
//   }, 500);
// }, 500);


// setTimeout(()=>{
//   console.log("Hello");
// }, 5000);

// console.log("World");


// let work = new Worker('./work.js');
// work.onmessage = (e)=>{
//   console.log('나 : ', e.data);
// }

// work.postMessage('메시지 전송')


// let i = 0;
// console.log(i);




// console.log('heelo')