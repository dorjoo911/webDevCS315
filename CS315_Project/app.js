/* ****************** submitForm ************** */
window.addEventListener("load", function () {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.entries().length == 0) return;
  document.getElementsByName("email")[0].value = urlParams.get("email");
  document.getElementsByName("fname")[0].value = urlParams.get("fname");
  document.getElementsByName("lname")[0].value = urlParams.get("lname");
  if (urlParams.get("select").length == 0) return;
  for (let eachOption of document.getElementsByName("select")[0].options) {
    if (urlParams.get("select").split(",").includes(eachOption.value))
      eachOption.selected = true;
    else eachOption.selected = false;
  }
});
