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

  buttonEl = document.getElementById("deleteBtn");
  buttonEl.onclick = deleteRow;
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
    '<button class="inventoryBtn" type="button" id="editBtn">Edit</button>';
  let cancel =
    '<button class="inventoryBtn" type="button" id="deleteBtn">Delete</button>';
  cell1.innerHTML = product;
  cell2.innerHTML = categoty;
  cell3.innerHTML = quantidy;
  cell4.innerHTML = rating;
  cell5.innerHTML = update;
  cell6.innerHTML = cancel;
}

function deleteRow() {
  document.getElementById("deleteBtn").deleteRow(0);
}
function addSave() {
  let edit = document.querySelector("#editBtn").editCell();
}
