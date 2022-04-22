//   /* ----------- show items in product.html ----------- */

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let removeCartItemButtons = document.getElementsByClassName("btn-danger");
  for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  let quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  let addToCartButtons = document.getElementsByClassName("left2-lists");
  for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }

  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click", purchaseClicked);
}

function purchaseClicked() {
  alert("Thank you for your purchase");
  let cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  let button = event.target;

  let shopItem = button.parentElement.parentElement;
  let title = shopItem.getElementsByClassName("content-location")[0].innerText;

  let price = shopItem.getElementsByClassName("left2-price")[0].innerText;
  let imageSrc = shopItem.getElementsByClassName("left2-image")[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
  let cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  let cartItems = document.getElementsByClassName("cart-items")[0];
  let cartItemNames = cartItems.getElementsByClassName("content-location");
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }

  let cartRowContents = `
  <p class="midle"> ${title}
                </p>
                <p style="padding:10px">
                   <label>Visit the Amazon Store </label> 
                   </p>
                   <p style="border-bottom: 1px solid rgb(190, 187, 187);padding:10px">
                    <img src="https://clipartmag.com/images/5-star-rating-clipart-43.jpg" style="max-width: 90px;object-fit: cover;">
                    <lable style="font-size: 15px;color:rgb(69, 143, 253);  "> ^ 250,028 rating | 1000+ answered questions</lable>
                    
                </p>
            <div class="card-body">
              <h3 class="card-title" style="color:red;">${price}</h3>
              <p class="card-text" style="font-size: 20px;color:rgb(26, 167, 26); margin-left:20px">save and extract 20% when apply coupon</p>
              <p class="card-text"><small class="text-muted" style="font-size:15px">Available at lower price from other seller of the brand.</small></p>
            </div>
          </div>
  <div class="cart-item cart-column">
  
    <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
   
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">delete</button>
  </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("cart-items")[0];
  let cartRows = cartItemContainer.getElementsByClassName("cart-row");
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName("cart-price")[0];
    let quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}

//// product page//////

window.onload = addProduct;
var array = [
  {
    name: "Mens Wool",
    quantity: 10,
    price: 204,
    id: "N1",
    ratings: 5,
    description:
      "Mens Wool Tweed Suit 3 Piece Authentic 1920s Tailored Fit Classic",
    imageName: "/photo/suit.webp",
  },
  {
    name: "2021 Apple iMac",
    quantity: 5,
    price: 1279.99,
    id: "N2",
    ratings: 5,
    description:
      "2021 Apple iMac (24-inch, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM, 256GB) - Silver",
    imageName: "/photo/apple desktop.webp",
  },
  {
    name: "Apple iPhone 12",
    quantity: 10,
    price: 853.99,
    id: "N3",
    ratings: 5,
    description: "Apple iPhone 11, 64GB, Black - Unlocked",
    imageName: "/photo/iphone .webp",
  },
  {
    name: "Big Kid's Jordan ",
    quantity: 20,
    price: 209,
    id: "N4",
    ratings: 4,
    description:
      "Big Kid's Jordan 1 Mid Artic Orange White/Anthracite-Artic Orange (554725 180)",
    imageName: "/photo/jordan shoes.jpeg",
  },
  {
    name: "Canon EOS Rebel T7",
    quantity: 20,
    price: 579,
    id: "N5",
    ratings: 4,
    description:
      "Canon EOS Rebel T7 Digital SLR Camera with Canon EF-S 18-55mm Image Stabilization II Lens, Sandisk 32GB SDHC Memory Cards, Accessory Bundle",
    imageName: "/photo/camera.webp",
  },
  {
    name: "Shark NV356E S2 Navigator Lift",
    quantity: 20,
    price: 165.99,
    id: "N6",
    ratings: 4,
    description:
      "Shark NV356E S2 Navigator Lift-Away Professional Upright Vacuum with Pet Power Brush and Crevice Tool, White/Silver",
    imageName: "/photo/vaccum.jpeg",
  },
  {
    name: "TOLOCO Massage Gun",
    quantity: 20,
    price: 79.99,
    id: "N7",
    ratings: 4,
    description:
      "TOLOCO Massage Gun, Upgrade Percussion Muscle Massage Gun for Athletes, Handheld Deep Tissue Massager for Mothers Day Gifts, Black",
    imageName: "/photo/tolocoMessage.jpeg",
  },
  {
    name: "Danjor Linens King Size Bed Sheets Set",
    quantity: 20,
    price: 23.99,
    id: "N8",
    ratings: 4,
    description:
      "Danjor Linens King Size Bed Sheets Set - 1800 Series 6 Piece Bedding Sheet & Pillowcases Sets w/ Deep Pockets - Fade Resistant & Machine Washable - White",
    imageName: "/photo/bedsheets.webp",
  },
];

function addProduct() {
  createProduct(array);
}
function createProduct(arr) {
  let cards = document.getElementById("card");

  let html = "";

  arr.forEach(function (item) {
    html += `<div class="cat1 card" style="width: 18rem">
  
    <img src="${item.imageName}" class="card-img-top" alt="..." />
  
  
  
    <a href="view.html">
  
      <h4 class="card-title">${item.name}</h4></a>
  
    <div class="card-body">
  
      <div class="row priceRate" style="text-align: left; color:red">
  
        <h4>${item.price}</h4>
  
      </div>
  
      <div class="card-text" style="text-align: left">
  
        <img src="" class="card-img-top" alt="..." />${item.ratings}
  
      </div>
  
    </div>
    <div class="shop-item-detail"><button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button></div>
  
  </div>`;
  });

  cards.innerHTML = html;
}

function sortAscendingbyPrice() {
  let ascendingArray = array.sort(function (a, b) {
    return a.price - b.price;
  });
  createProduct(ascendingArray);
}

function sortAscendingbyRating() {
  let RatingArray = array.sort(function (a, b) {
    return a.ratings - b.ratings;
  });
  createProduct(RatingArray);
}

function PriceAboveHundered() {
  let priceArray = array.filter((item) => item.price > 100);
  createProduct(priceArray);
}

function PriceUnderHundered() {
  let priceArray1 = array.filter((item) => item.price < 100);
  createProduct(priceArray1);
}

function PriceAboveFiveHundered() {
  let priceArray2 = array.filter((item) => item.price > 500);
  createProduct(priceArray2);
}

function PriceAboveTwoHunderedFifty() {
  let priceArray3 = array.filter((item) => item.price < 250);
  createProduct(priceArray3);
}

function Ratefive() {
  let rating5 = array.filter((item) => (item.ratings = 5));
  createProduct(rating5);
}

function RateAboveFour() {
  let rating4 = array.filter((item) => (item.ratings = 5));
  createProduct(rating4);
}
function RateAboveThree() {
  let rating3 = array.filter((item) => (item.ratings = 5));
  createProduct(rating3);
}
function RateUnderThree() {
  let rating33 = array.filter((item) => (item.ratings = 5));
  createProduct(rating33);
}

function Electronic() {
  let Electronic3 = array.filter((item) => (item.brand = "electronic"));
  createProduct(Electronic3);
}

function Clothing() {
  let Clothing3 = array.filter((item) => (item.brand = "department"));
  createProduct(Clothing3);
}
