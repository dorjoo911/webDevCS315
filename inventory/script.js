window.onload = pageLoaded;

let buttonEl;

function pageLoaded() {
  buttonEl = document.getElementById("inventtoryBtn");
  buttonEl.onclick = createTable;
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
}
// function saveThenEdit(obj) {
//   // let itemName = document.querySelector("#name_text").value;
//   let catName = obj.parentNode.parentNode.children[1];
//   let quantity = obj.parentNode.parentNode.parentNode.children[2];
//   let rating = obj.parentNode.parentNode.parentNode.children[3];
//   console.log("itemName :>> ", catName);
// }
