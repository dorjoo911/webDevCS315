/* -------------- TableArray --------------- */
let tableArray = [
  {
    firstName: "John",
    lastName: "El",
    email: "customer1@email.com",
    password: "Customer1@123456",
    role: "customer",
  },
  {
    firstName: "foo",
    lastName: "El",
    email: "manager@gmail.com",
    password: "Manager1@pwd",
    role: "manager",
  },
];

// localStorage.setItem("tableArray", JSON.stringify(tableArray));

let dataBase = [
  {
    product: "MacBook",
    category: "electronic",
    price: 99,
    rating: 5,
    picture: "./images/laptop.jpg",
  },

  {
    product: "iPhone 11 Pro",
    category: "mobile",
    price: 9,
    rating: 5,
    picture: "./images/iphone11.jpg",
  },

  {
    product: "iPab Mini",
    category: "tablet",
    price: 99,
    rating: 4,
    picture: "./images/ipadmini.jpg",
  },
];

localStorage.setItem("dataBase", JSON.stringify(dataBase));

/* ------------ preview.html ------------ */

const urlParams = new URLSearchParams(window.location.search);

let lableEmail = document.getElementsByTagName("label")[0];
lableEmail.innerHTML = lableEmail.innerHTML + ":  " + urlParams.get("email");

let lableTwo = document.getElementsByTagName("label")[1];
lableTwo.innerHTML = lableTwo.innerHTML + ":  " + urlParams.get("password");

let lableThree = document.getElementsByTagName("label")[2];
lableThree.innerHTML =
  lableThree.innerHTML + ":  " + urlParams.get("confirmPassword");

let lableFour = document.getElementsByTagName("label")[3];
lableFour.innerHTML =
  lableFour.innerHTML +
  ": " +
  urlParams.get("fname") +
  " " +
  urlParams.get("lname");

let lableFive = document.getElementsByTagName("label")[4];
lableFive.innerHTML = lableFive.innerHTML + ":  " + urlParams.get("gender");

let lableSix = document.getElementsByTagName("label")[5];
lableSix.innerHTML = lableSix.innerHTML + ":  " + urlParams.get("selection");

let lableSeven = document.getElementsByTagName("label")[6];
lableSeven.innerHTML =
  lableSeven.innerHTML + ":  " + urlParams.get("conditions");

let labelEight = document.getElementsByTagName("label")[7];
labelEight.innerHTML =
  labelEight.innerHTML + ":  " + urlParams.get("newsletter");

function edit() {
  window.location.href = "register.html";
}
function save() {
  // let tableArray = JSON.parse(localStorage.getItem("tableArray"));
  //userArray.push({firstName: urlParams.get("fname"), lastName: urlParams.get("lname"),  email: urlParams.get("email"), password: urlParams.get("password"), role: '' });
  console.log(tableArray);
  tableArray.push({
    firstName: urlParams.get("fname"),
    lastName: urlParams.get("lname"),
    email: urlParams.get("email"),
    password: urlParams.get("password"),
    role: "",
  });
  console.log(tableArray);
  localStorage.setItem("tableArray", JSON.stringify(tableArray));
  console.log("This is new", JSON.parse(localStorage.getItem("tableArray")));
  window.location.href = "login1.html";
  alert("Thank You!!!");
} /* ------------- Inventory ------------- */ /* ------------- Inventory ------------- */

/* ------------- Inventory ------------- */
/* ------------- Inventory ------------- */
/* ------------- Inventory ------------- */
/* ------------- Inventory ------------- */
