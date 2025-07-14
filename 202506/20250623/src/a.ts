let body:HTMLElement = document.body;
let table:HTMLTableElement 
  = document.createElement("table");
body.appendChild(table);
let tbody:HTMLElement
  = document.createElement("tbody");
table.appendChild(tbody);

function createTable(
  row:number, column:number
):void {
  tbody.innerHTML = "";
  for(
    let rowNum:number = 0;
    rowNum < row;
    rowNum += 1
  ) {
    let tr:HTMLTableRowElement
      = document.createElement("tr");
    tbody.appendChild(tr);
    for(
      let colNum:number = 0;
      colNum < column;
      colNum += 1
    ) {
      let td:HTMLTableCellElement
        = document.createElement("td");
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