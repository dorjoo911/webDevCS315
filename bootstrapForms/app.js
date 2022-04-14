$(document).ready(function () {
  $(".pass_show").append('<span class="ptxt">Show</span>');
});

$(document).on("click", ".pass_show .ptxt", function () {
  $(this).text($(this).text() == "Show" ? "Hide" : "Show");

  $(this)
    .prev()
    .attr("type", function (index, attr) {
      return attr == "password" ? "text" : "password";
    });
});

var alertPlaceholder = document.getElementById("liveAlertPlaceholder");
var alertTrigger = document.getElementById("liveAlertBtn");

function alert(message, type) {
  var wrapper = document.createElement("div");
  wrapper.innerHTML =
    '<div class="alert alert-' +
    type +
    ' alert-dismissible" role="alert">' +
    message +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

  alertPlaceholder.append(wrapper);
}

if (alertTrigger) {
  alertTrigger.addEventListener("click", function () {
    alert("Nice, you triggered this alert message!", "success");
  });
}
