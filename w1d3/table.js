function createTable() {
  let table = document.getElementById("myTable");

  let row = table.insertRow(0);

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);

  let product = document.getElementById("inputItem_4").value;
  let categoty = document.getElementById("inputCategory_4").value;
  let quantidy = document.getElementById("inputQuantidy_4").value;
  cell1.innerHTML = product;
  cell2.innerHTML = categoty;
  cell3.innerHTML = quantidy;
}

function deleteRow() {
  document.getElementById("myTable").deleteRow(0);
}
