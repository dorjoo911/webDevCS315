// "use strict";
// module.import = { createTable, deleteRow };

window.onload = pageLoaded;

let buttonEl;

function pageLoaded() {
  let buttonEl = document.getElementById("outBtn");
  buttonEl.onclick = clickToAdd;

  buttonEl = document.getElementsByClassName("btn");
  for (el of buttonEl) {
    if (el.id == "btnAdd") {
      el.onclick = add;
    } else if (el.id == "btnSub") {
      el.onclick = sub;
    } else {
      el.onclick = mul;
    }
  }

  buttonEl = document.getElementById("inventtoryBtn");
  buttonEl.onclick = createTable;

  // document.getElementById("editBtn").onclick = editThenSave;
  // document.getElementById("saveBtn").onclick = saveThenEdit;
  // buttonEl = document.getElementById("deleteBtn");
  // buttonEl.onclick = deleteRow;
}

function clickToAdd() {
  let val = document.getElementById("input_2").value;
  let out = document.getElementById("textarea_2").value;
  document.getElementById("textarea_2").innerText = out + val;
}

function doTask(myOp) {
  let val1 = document.getElementById("firstInput_3").value;
  let val2 = document.getElementById("secondInput_3").value;
  document.getElementById("resultInput_3").innerText = myOp(val1, val2);
}
function add() {
  doTask(function (val1, val2) {
    return parseInt(val1) + parseInt(val2);
  });
}
function sub() {
  doTask(function (val1, val2) {
    return val1 - val2;
  });
}

function mul() {
  doTask(function (val1, val2) {
    return val1 * val2;
  });
}

function createTable() {
  let table = document.getElementById("myTable");

  let row = table.insertRow(-1);

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);

  let product = document.getElementById("inputItem_4").value;
  if (product == "") {
    alert("Please insert product name");
    document.querySelector("#inputItem_4").style.background = "red";
    product = "";
  }
  let categoty = document.getElementById("inputCategory_4").value;
  if (categoty == "") {
    alert("Please insert category");
    document.querySelector("#inputCategory_4").style.background = "red";
  }
  let quantidy = document.getElementById("inputQuantidy_4").value;
  if (quantidy == !Number) {
    alert("Please input a number only!!!");
    document.querySelector("#inputQuantidy_4").style.background = "red";
    deleteRow();
  }
  let rating = document.getElementById("inputRaiting_4").value;
  if (rating == !Number) {
    alert("Please input number only!!!");
    document.querySelector("#inputRaiting_4").style.background = "red";
    deleteRow();
  } else if (rating > 5) {
    alert("Please rate between 1-5");
    document.querySelector("#inputRaiting_4").style.background = "red";
    deleteRow();
  }
  let update =
    '<button class="inventoryBtn" type="button" id="editBtn" onclick="editRow(this)">Edit</button>' +
    '<button class="inventoryBtn" type="submit" id="saveBtn" onclick="saveThenEdit(this) display="none" >Save</button>';
  let cancel =
    '<button class="inventoryBtn" type="button" id="deleteBtn" onclick="deleteRow(this)">Delete</button>';

  cell1.innerHTML = product;
  cell2.innerHTML = categoty;
  cell3.innerHTML = quantidy;
  cell4.innerHTML = rating;
  cell5.innerHTML = update;
  cell6.innerHTML = cancel;
}

function deleteRow(row) {
  let thisRow = row.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(thisRow);
}
function editRow(obj) {
  // let childrenOf = obj.parentNode.parentNode.children;
  let itemName = obj.parentNode.parentNode.children[0];
  let catName = obj.parentNode.parentNode.children[1];
  let quantity = obj.parentNode.parentNode.children[2];
  let rating = obj.parentNode.parentNode.children[3];

  let itemName_val = itemName.innerHTML;
  let catName_val = catName.innerHTML;
  let quantity_val = quantity.innerHTML;
  let rating_val = rating.innerHTML;

  itemName.innerHTML =
    "<input type='text' id='name_text' value='" + itemName_val + "'>";
  catName.innerHTML =
    "<input type='text' id='name_text' value='" + catName_val + "'>";
  quantity.innerHTML =
    "<input type='text' id='name_text' value='" + quantity_val + "'>";
  rating.innerHTML =
    "<input type='text' id='name_text' value='" + rating_val + "'>";

  // console.log(itemName, catName, quantity, rating);

  // document.getElementById("editBtn").style.display = "none";
  // document.getElementById("saveBtn").style.display = "inline-block";
}
function saveThenEdit(obj) {
  let itemName = obj.parentNode.parentNode.parentNode.children[0];
  let catName = obj.parentNode.parentNode.parentNode.children[1];
  let quantity = obj.parentNode.parentNode.parentNode.children[2];
  let rating = obj.parentNode.parentNode.parentNode.children[3];
  console.log("itemName :>> ", itemName);
  // for (let i = 0; i < childrenOf.length - 2; i++) {
  //   childrenOf[i].readOnly = false;
  // }
  // document.getElementById("editBtn").style.display = "inline-block";
  // document.getElementById("saveBtn").style.display = "none";
}

// function editSave(row) {
//   let thisRow = row.parentNode.parentNode.rowIndex;
//   let editBtn = thisRow.document.querySelector("#editBtn");
//   let saveBtn = thisRow.document.querySelector("#saveBtn");
//   if (editBtn.onclick == true) {
//     thisRow.editBtn.style.display = "none";
//     return saveBtn;
//   }
// }
// window.onload= function (){
//   document.getElementById("editBtn").onclick = edit;
// }
// //Remove Row
// function edit(){
//   console.log(this.parentNode.parentNode.children);
//   let childrenOf= this.parentNode.parentNode.children;
//   // childrenOf[0].remove();
//   // this.parentNode.parentNode.remove();
//   // this.parentNode.parentNode.innerHTML="";
// }

// document.getElementById("editBtn").addEventListener("click", function () {
//   var fields = document.querySelectorAll("???");
//   for (let i = 0; i < fields.length; i++) {
//     fields[i].readOnly = false;
//   }
//   document.getElementById("saveBtn").style.display = "inline-block";
// });

// document.getElementById("saveBtn").addEventListener("click", function () {
//   var data = {};
//   data.product = document.getElementById("inputItem_4").value;
//   data.categoty = document.getElementById("inputCategory_4").value;
//   data.quantidy = document.getElementById("inputQuantidy_4").value;
//   data.rating = document.getElementById("inputRaiting_4").value;

//   var fields = document.querySelectorAll("???");
//   for (let i = 0; i < fields.length; i++) {
//     fields[i].readOnly = true;
//   }

//   document.getElementById("saveBtn").style.display = "none";
// });
// #myTable > tbody > tr:nth-child(2)
