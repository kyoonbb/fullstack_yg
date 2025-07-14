import abc from 'bcrypt';
import hello from './a.js'

abc.hash('hello', abc.genSaltSync(10))
.then((data)=>{
  console.log(data)
})
console.log("Hello World" + hello);