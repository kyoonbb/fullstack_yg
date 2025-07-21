
import abc from 'bcrypt'; // 전체 가져올 땐 마음대로 가져와도 노 상관 중괄호가 아니라면
import hello from './a.js' // 거의 함수를 만드는 것 이렇게 거대한 프로젝트를 만드는 것이 node.js 쓰는 이유

abc.hash('hello', abc.genSaltSync(10))
.then((data)=>{
  console.log(data)
})
console.log("Hello World" + hello);