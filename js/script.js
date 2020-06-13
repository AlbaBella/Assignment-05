

let column=1;
function addRow(){
    let table=document.getElementById("table");
    let tablerow=document.createElement("tr");
    tablerow.classList.add("row");
    table.appendChild(tablerow);
    for (let i=0;i<column;i++){
        let tablecell=document.createElement("td");
        tablerow.appendChild(tablecell);
    }

}
function addColumn(){
    if(column===0){
        column=1;
        addRow();
    }
    column++;
    let tablerows=document.getElementByClassName("row");
    tr=[...tablerows];
    for(let i=0;i<tr.length;i++){
        let tablecell=document.createElement("td");
        tr[i].appendChild(tablecell);
    }
}

function removeRow(){
    let tablerows=document.getElementsByClassName("row");
    tr=[...tablerows];
    if(tr.length==0){
        return;
    }
    tr[tr.length - 1].parentNode.removeChild(tr[tr.length - 1]);
    if(tr.length==1){
        columns=1;
    }
}

function removeColumn(){
    if (column==1){
        return;
    }
    let tablerows=document.getElementsByClassName("row");
    tr=[...tablerows];
    for(let i=0;i<tr.length;i++){
        tr[i].removeChild(tr[i].lastChild);
    }
}
let selectedColor = "blue";
const selectColor = (color) => {
  selectedColor = color;
};

let isColored = false;
function colorChange(tableCell) {
  tableCell.classList.add("notColored");
  tableCell.addEventListener("click", changeColor);
  tableCell.addEventListener("mousedown", (e) => {
    isColored = true;
  });
  tableCell.addEventListener("mousemove", (e) => {
    if (isColored) {
      tableCell.style.backgroundColor = selectedColor;
    }
  });
  tableCell.addEventListener("mouseup", (e) => {
    if (isColored) {
      isColored = false;
    }
  });
}
function changeColor() {
  this.style.backgroundColor = selectedColor;
  this.classList.remove("notColored");
}

function fillUncolored() {
  let tableCells = document.getElementsByTagName("td");
  let collectionOfCells = [...tableCells];
  let uncoloredtableCells = collectionOfCells.filter((tableCell) => {
    return tableCell.classList.contains("notColored");
  });
  uncoloredtableCells.forEach((tableCell) => {
    tableCell.style.backgroundColor = selectedColor;
    tableCell.classList.remove("notColored");
  });
}

function fillAll() {
  let tableCells = document.getElementsByTagName("td");
  let collectionOfCells = [...tableCells];
  collectionOfCells.forEach((tableCell) => {
    tableCell.style.backgroundColor = selectedColor;
    tableCell.classList.remove("notColored");
  });
}

function clearAll() {
    let tableCells = document.getElementsByTagName("td");
    let collectionOfCells = [...tableCells];
    collectionOfCells.forEach((tableCell) => {
      tableCell.style.backgroundColor = "beige";
      tableCell.classList.add("notColored");
    });
  }