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
