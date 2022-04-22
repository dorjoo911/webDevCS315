/// cart
// document.querySelector("body > div.container > div:nth-child(2) > div:nth-child(2) > div > div.left2-bottom-corner > div > button")

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
