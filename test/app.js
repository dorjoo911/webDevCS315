function CreateUniqueEmployeeID() {
  const ID = Date.now();
  return ID;
}
document
  .getElementById("btnaddEmployee")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var EmployeeID = CreateUniqueEmployeeID();
    var EmployeeName = document.getElementById("txtEmployeeName").value;
    var Address = document.getElementById("txtAddress").value;
    var PostalCode = document.getElementById("txtPostalCode").value;
    var btneditId = "btnedit" + EmployeeID;
    var btndeleteId = "btndelete" + EmployeeID;
    var tablerow =
      "<tr Id='" +
      EmployeeID +
      "'   data-EmployeeID='" +
      EmployeeID +
      "'   data-EmployeeName='" +
      EmployeeName +
      "' data-Address='" +
      Address +
      "'   data-PostalCode='" +
      PostalCode +
      "'>" +
      "<td class='td-data'>" +
      EmployeeID +
      "</td>" +
      "<td class='td-data'>" +
      EmployeeName +
      "</td>" +
      "<td class='td-data'>" +
      Address +
      "</td>" +
      "<td class='td-data'>" +
      PostalCode +
      "</td>" +
      "<td class='td-data'>" +
      "<button id='" +
      btneditId +
      "' class='btn btn-info btn-xs btn-editcustomer' onclick='showeditrow(" +
      EmployeeID +
      ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
      "<button id='" +
      btndeleteId +
      "' class='btn btn-danger btn-xs btn-deleteEmployee' onclick='deleteEmployeeRow(" +
      EmployeeID +
      ")'><i class='fa fa-trash' aria-hidden='true'>Delete</button>" +
      "</td>" +
      "</tr>";
    debugger;
    document.getElementById("tblbody").innerHTML += tablerow;
    document.getElementById("txtEmployeeName").value = "";
    document.getElementById("txtAddress").value = "";
    document.getElementById("txtPostalCode").value = "";
  });

function showeditrow(EmployeeID) {
  debugger;
  var EmployeeRow = document.getElementById(EmployeeID); //this gives tr of  whose button was clicked

  var data = EmployeeRow.querySelectorAll(".td-data");

  /*returns array of all elements with
            "row-data" class within the row with given id*/

  var EmployeeID = data[0].innerHTML;
  var EmployeeName = data[1].innerHTML;
  var Address = data[2].innerHTML;
  var PostalCode = data[3].innerHTML;
  var btneditId = "btnedit" + EmployeeID;
  data[0].innerHTML =
    '<input name="txtupdate_EmployeeID"  disabled id="txtupdate_EmployeeID" value="' +
    EmployeeID +
    '"/>';
  data[1].innerHTML =
    '<input name="txtupdate_EmployeeName" id="txtupdate_EmployeeName" value="' +
    EmployeeName +
    '"/>';
  data[2].innerHTML =
    '<input name="txtupdate_Address" id="txtupdate_Address" value="' +
    Address +
    '"/>';
  data[3].innerHTML =
    '<input name="txtupdate_PostalCode" id="txtupdate_PostalCode" value="' +
    PostalCode +
    '"/>';

  data[4].innerHTML =
    "<button class='btn btn-primary btn-xs btn-updateEmployee' onclick='updateemployees(" +
    EmployeeID +
    ")'>" +
    "<i class='fa fa-pencil' aria-hidden='true'></i>Update</button>" +
    "<button class='btn btn-warning btn-xs btn-cancelupdate' onclick='cancelupdate(" +
    EmployeeID +
    ")'><i class='fa fa-times' aria-hidden='true'></i>Cancel</button>" +
    "<button class='btn btn-danger btn-xs btn-deleteEmployee' onclick='deleteEmployeeRow(" +
    EmployeeID +
    ")'>" +
    "<i class='fa fa-trash' aria-hidden='true'></i>Delete</button>";
}
function cancelupdate(EmployeeID) {
  debugger;
  var btneditId = "btnedit" + EmployeeID;
  var btndeleteId = "btndelete" + EmployeeID;

  var EmployeeRow = document.getElementById(EmployeeID); //this gives tr of  whose button was clicked
  var data = EmployeeRow.querySelectorAll(".td-data");

  var EmployeeName = EmployeeRow.getAttribute("data-EmployeeName");
  var Address = EmployeeRow.getAttribute("data-Address");
  var PostalCode = EmployeeRow.getAttribute("data-PostalCode");

  data[0].innerHTML = EmployeeID;
  data[1].innerHTML = EmployeeName;
  data[2].innerHTML = Address;
  data[3].innerHTML = PostalCode;

  var actionbtn =
    "<button id='" +
    btneditId +
    "' class='btn btn-info btn-xs btn-editcustomer' onclick='showeditrow(" +
    EmployeeID +
    ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
    "<button id='" +
    btndeleteId +
    "' class='btn btn-danger btn-xs btn-deleteEmployee' onclick='deleteEmployeeRow(" +
    EmployeeID +
    ")'><i class='fa fa-trash' aria-hidden='true'>Delete</button>";
  data[4].innerHTML = actionbtn;
}
function deleteEmployeeRow(EmployeeID) {
  document.getElementById(EmployeeID).remove();
}
function updateemployees(EmployeeID) {
  var btneditId = "btnedit" + EmployeeID;
  var btndeleteId = "btndelete" + EmployeeID;

  var EmployeeRow = document.getElementById(EmployeeID); //this gives tr of  whose button was clicked
  var data = EmployeeRow.querySelectorAll(".td-data");

  var EmployeeName = data[1].querySelector("#txtupdate_EmployeeName").value;
  var Address = data[2].querySelector("#txtupdate_Address").value;
  var PostalCode = data[3].querySelector("#txtupdate_PostalCode").value;

  data[0].innerHTML = EmployeeID;
  data[1].innerHTML = EmployeeName;
  data[2].innerHTML = Address;
  data[3].innerHTML = PostalCode;

  var actionbtn =
    "<button id='" +
    btneditId +
    "' class='btn btn-info btn-xs btn-editcustomer' onclick='showeditrow(" +
    EmployeeID +
    ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
    "<button id='" +
    btndeleteId +
    "' class='btn btn-danger btn-xs btn-deleteEmployee' onclick='deleteEmployeeRow(" +
    EmployeeID +
    ")'><i class='fa fa-trash' aria-hidden='true'>Delete</button>";
  data[4].innerHTML = actionbtn;
}
