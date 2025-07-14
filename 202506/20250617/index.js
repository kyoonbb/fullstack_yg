let tbody = document.querySelector("tbody");
setInterval(()=>{
  let tr = tbody.querySelector("tr");
  let copy_tr = tr.cloneNode(true);
  tbody.appendChild(copy_tr);

  let trs = tbody.querySelectorAll("tr");
  for(let tr of trs) {
    let td = document.createElement("td");
    td.innerText = '한칸'
    tr.appendChild(td);
  }
}, 500);


// let table = document.createElement("table");
// let tbody = document.createElement("tbody");
// table.appendChild(tbody);

// for(let i = 0; i < 10; i += 1) {
//   let tr = document.createElement("tr");
//   tbody.appendChild(tr);
//   for(let j = 0; j < 10; j += 1) {
//     let td = document.createElement("td");
//     tr.appendChild(td);
//     if(j % 2 == 0) td.style.backgroundColor='red'
//     td.innerText = `${i * 10 + j + 1}`;
//   }
// }
// document.body.appendChild(table)



// let div = document.createElement("div");
// div.innerHTML = 'hello';
// document.body.appendChild(div)
// setTimeout(()=>{
//   document.body.removeChild(div);
// }, 5000)

// let input = document.body.children[0]
// input.value = '값'


// let div = document.body.children[0]
// div.classList.add('a')
// console.log(div.classList.contains('a'))
// div.style.backgroundColor = 'red'

// console.log(document.body.children[0])


// console.log(document.head)
// document.body.innerHTML = 'hello bye text is <div>Hello</div>'
// console.log(document.body.textContent)

// console.log(document)