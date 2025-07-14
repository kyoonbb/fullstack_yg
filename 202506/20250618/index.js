let content = document.querySelector("#content");
content.addEventListener("change", (event)=>{
  let list = document.querySelector("#list");
  let item = document.createElement("li");
  let div = document.createElement("div");
  let button = document.createElement("button");
  button.innerText = '삭제'
  div.innerText = event.target.value;
  button.addEventListener("click", ()=>{
    list.removeChild(item)
  })

  div.appendChild(button);
  item.appendChild(div);
  list.appendChild(item);

  event.target.value = "";
})

// let form = document.querySelector("form");
// form.addEventListener("submit", (event)=>{
//   event.preventDefault();
// })

// let form = document.querySelector("form");
// form.addEventListener("keydown", (event)=>{

//   if(event.shiftKey) {
//     console.log(event.key)
//   }

//   // console.log(event.key)
//   // console.log(event.code)
//   // console.log(event.button)
//   // console.log(event.clientX, event.clientY)
//   // console.log('변경')
//   // console.log(event.target)
//   // console.log(event.currentTarget)
// })

// let input = document.querySelector("input");
// input.addEventListener("focus", ()=>{
//   console.log("포커싱")
// })
// input.addEventListener("blur", ()=>{
//   console.log("블러")
// })

// input.addEventListener("change", ()=>{
//   console.log("입력")
// })

// input.addEventListener("keydown", ()=>{
//   console.log("입력")
// })


// let div1 = document.querySelector("div:nth-child(1)");
// div1.addEventListener("mouseup", ()=>{
//   console.log('클릭s');
// })

// div1.addEventListener("mousemove", ()=>{
//   console.log('움직임');
// })
// div1.addEventListener("mouseover", ()=>{
//   console.log('들어감');
// })
// div1.addEventListener("mouseout", ()=>{
//   console.log('나감');
// })

// let div1 = document.querySelector("div:nth-child(1)");
// div1.addEventListener("contextmenu", ()=>{
//   alert("이벤트 함수 등록 빨강");
// })



// let div1 = document.querySelector("div:nth-child(1)");
// div1.ondblclick=()=>{
//   alert("빨강");
// }