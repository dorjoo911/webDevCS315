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

/* ------------- Inventory ------------- */
let dataBase = [
  { product: "apple", category: "electronic", price: 99, rating: 5 },
  { product: "pen", category: "kids", price: 9, rating: 5 },
  { product: "desc", category: "office", price: 99, rating: 4 },
];

function generateItems() {
  let item = {};
  // get items
  dataBase.push(item);
}

/* ----------- show items in product.html ----------- */

dataBase.forloop(function (dataBase) {
  let name = document.querySelector(
    "body > div.container > div.cat1.card > h2"
  );
  let image = document.querySelector(
    "body > div.container > div.cat1.card > a > img"
  );
  let price = document.querySelector(
    "body > div.container > div.cat1.card > div > div > h4"
  );
  let rating = document.getElementById("idName");
  let description = document.querySelector(
    "body > div.container > div.cat1.card > div > p"
  );
  let category = document.querySelector(
    "body > div.container > div.cat1.card > div > div > label"
  );

  image.innerHTML = dataBase.itemName.value;
  price.innerHTML = dataBase.itemPrice.value;
  rating.innerHTML = dataBase.itemRating.value;
  description.innerHTML = dataBase.itemDesc.value;
});
