/* ****************** submitForm ************** */
// window.addEventListener("load", function () {
//     const urlParams = new URLSearchParams(window.location.search);
//     if (urlParams.entries().length == 0) return;
//     document.getElementsByName("email")[0].value = urlParams.get("email");
//     document.getElementsByName("fname")[0].value = urlParams.get("fname");
//     document.getElementsByName("lname")[0].value = urlParams.get("lname");
//     if (urlParams.get("select").length == 0) return;
//     for (let eachOption of document.getElementsByName("select")[0].options) {
//       if (urlParams.get("select").split(",").includes(eachOption.value))
//         eachOption.selected = true;
//       else eachOption.selected = false;
//     }
//   });
  
//   /* ------------- Inventory ------------- */
//   let dataBase = [
//     { product: "apple", category: "electronic", price: 99, rating: 5 },
//     { product: "pen", category: "kids", price: 9, rating: 5 },
//     { product: "desc", category: "office", price: 99, rating: 4 },
//   ];
  
//   function generateItems() {
//     let item = {};
//     // get items
//     dataBase.push(item);
//   }
  
//   /* ----------- show items in product.html ----------- */
  
//   dataBase.forloop(function (dataBase) {
//     let name = document.querySelector(
//       "body > div.container > div.cat1.card > h2"
//     );
//     let image = document.querySelector(
//       "body > div.container > div.cat1.card > a > img"
//     );
//     let price = document.querySelector(
//       "body > div.container > div.cat1.card > div > div > h4"
//     );
//     let rating = document.getElementById("idName");
//     let description = document.querySelector(
//       "body > div.container > div.cat1.card > div > p"
//     );
//     let category = document.querySelector(
//       "body > div.container > div.cat1.card > div > div > label"
//     );
  
//     image.innerHTML = dataBase.itemName.value;
//     price.innerHTML = dataBase.itemPrice.value;
//     rating.innerHTML = dataBase.itemRating.value;
//     description.innerHTML = dataBase.itemDesc.value;
//   });

//                             //

/// cart 


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    let quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    let addToCartButtons = document.getElementsByClassName('left2-lists')
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    let button = event.target
   
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('content-location')[0].innerText
   
    let price = shopItem.getElementsByClassName('left2-price')[0].innerText
    let imageSrc = shopItem.getElementsByClassName('left2-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    let cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    let cartItemNames = cartItems.getElementsByClassName('content-location')
    for (let i = 0; i < cartItemNames.length; i++) {
       
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }

//     let cartRowContents = `
//         <div class="cart-item cart-column">
//             <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
//             <span class="cart-item-title">${title}</span>
//         </div>
//         <span class="cart-price cart-column">${price}</span>
//         <div class="cart-quantity cart-column">
//             <input class="cart-quantity-input" type="number" value="1">
//             <button class="btn btn-danger" type="button">delete</button>
//         </div>`
//     cartRow.innerHTML = cartRowContents
//     cartItems.append(cartRow)
//     cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
//     cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
// }
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
</div>`
cartRow.innerHTML = cartRowContents
cartItems.append(cartRow)
cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0]
    let cartRows = cartItemContainer.getElementsByClassName('cart-row')
    let total = 0
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        let price = parseFloat(priceElement.innerText.replace('$', ''))
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}