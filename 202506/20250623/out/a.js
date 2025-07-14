"use strict";
let body = document.body;
let table = document.createElement("table");
body.appendChild(table);
let tbody = document.createElement("tbody");
table.appendChild(tbody);
function createTable(row, column) {
    tbody.innerHTML = "";
    for (let rowNum = 0; rowNum < row; rowNum += 1) {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);
        for (let colNum = 0; colNum < column; colNum += 1) {
            let td = document.createElement("td");
            tr.appendChild(td);
            td.textContent = "글자";
        }
    }
}
createTable(10, 10);
// console.log('hello')
// function square(data:number, square:number):number {
//   let result:number = 1;
//   for(let i:number = 0; i < square; i += 1) {
//     result *= data;
//   }
//   return result;
// }
// type user = { id?:string, pw:string } | undefined;
// let user: user = {pw:'1234', id:'weg'};
// let a:[number, string] = [3, 'b'];
// let a: 1 | 2 = 2;
// console.log('hello')
// console.log("world")
// let a:number | undefined;
// function A(b:number) :number {
//   return 0;
// }
