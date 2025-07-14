self.onmessage = (e)=>{
  console.log('대상 : ', e.data);
  self.postMessage("대상 말")
}