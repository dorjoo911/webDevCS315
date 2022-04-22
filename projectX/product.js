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
    name: "Red rose",
    quantity: 10,
    price: 19,
    id: "N1",
    ratings: 3,
    description: "Red rose with 5 white roses, fresh new cut",
    imageName: "rose.png",
    brand: "department",
  },
  {
    name: "2021 Apple iMac",
    quantity: 4,
    price: 1279.99,
    id: "N2",
    ratings: 5,
    description:
      "2021 Apple iMac (24-inch, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM, 256GB) - Silver",
    imageName:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5d8EI0HtM1u10sC2wMAZ22NrsbUzXmsoBzbInphMZo4uaBVbTU59af9KJW9unopp7EO4&usqp=CAU",
    brand: "electronic",
  },
  {
    name: "Apple iPhone 12",
    quantity: 10,
    price: 853.99,
    id: "N3",
    ratings: 2,
    description: "Apple iPhone 11, 64GB, Black - Unlocked",
    imageName:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDg344WHv4K7h_O08V7ebNFuYWoaBuCgxWw&usqp=CAU",
    brand: "electronic",
  },
  {
    name: "Big Kid's Jordan ",
    quantity: 20,
    price: 209,
    id: "N4",
    ratings: 1,
    description:
      "Big Kid's Jordan 1 Mid Artic Orange White/Anthracite-Artic Orange (554725 180)",
    imageName:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZdZ2WNvUPYbb_17F1N1thOcpal1GemkHkQ&usqp=CAU",
    brand: "clothing",
  },
  {
    name: "Canon EOS Rebel T7",
    quantity: 20,
    price: 579,
    id: "N5",
    ratings: 4,
    description:
      "Canon EOS Rebel T7 Digital SLR Camera with Canon EF-S 18-55mm Image Stabilization II Lens, Sandisk 32GB SDHC Memory Cards, Accessory Bundle",
    imageName:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFhYZGBgaGh4cHRwaGB4YGB4YHB4aHhwcGh0cIS4nIR4rHxwaJzomKy8xNTU1GiU7QDs0Py40NTQBDAwMEA8QHBISGjQhISE6NDE0NDQ0NDE0NDU/NDQ0MTE0NDQ0NDQ0NDY0MTQ0NDQ0NDQ0NDQ0NDQxNDQ0ND80Mf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABAUGBwEDCAL/xABPEAACAQIEAwMHCAUJBAsBAAABAgADEQQSITEFQVEiYXEGEzKBkaHwB0JSYpKxwdIjVHKC8RQVMzVzk8LR4RclorIWQ0RTZHSDo8PT1DT/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBQQG/8QAHhEBAQEBAAMBAAMAAAAAAAAAAAERAgMSITEEE0H/2gAMAwEAAhEDEQA/ANzREQEREBERAREQEREBERAREQEREBETgmBzE4vOM0D6icEwDA5iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIHE6MXikpo1R2CooJYnYATvmtflK4iatalgUbKulSq3IAXK3/ZVWe37J5RBxjvlFrMT/ACfDqEuQtSqzEtbc5Etb7Xs2mN8QxXEcUxqtUrBQLEUBUWkoHcGtfqSSZDxWKUmy9lQMqD6Ki9vE8yeZJPOZJ5QcRp1Vw1TDvSyU0ANF6ioUdebK7LmGwuL3tzBmmdYS+CJ9Ko58SD97SK/DkHM38BNjcIxOEBRqtWnUFcVBiC7U0yOfRshph7E3s11A3sNBOKGMwgpU0d8MWGExCsbUxetmpCnra4Zh5wgc9TrCNdBWW2SrUW21mII8LHSW/BvK7G4XNkrGoGtda+eqotfVO2CpN9bd3SZJxXH4BadUUzSamy0Gw47DOlS5WojIbsoyqrNmFjnO5MjeV+OwbUMYKLYYt/KaRpeb83nNPzVHMUKasoY1ATrY5hyhpY8E+VkGoKeLpLTVjbztNiVW/N0a5C94Jt0m0lYEAg3B1BG1p5YBD9i4udBf6XLXvNhNzfJBx01sK2Hc9vDkKt9/NNfJ9khl7gqyWErYkREikREBERAREQEREBERAREQEREBERAREQERMa8seK1aFLNTIU2JJyhjZSo0vp86+x25QMlkTEcRo0/6SqiftOq/eZqHinlJXde02b9rMQb7XQtk5HYAEe7GHxdcBhTBQDUimgTQa3JVR9C9+oPPODcTW9K3lbgUNmxVEHp5wE+wTs4X5R4TEOyUK6VGUZiqnXLtmAO4uRqOo6zzUcWc2rMfaSOmo/z9xsLzyG4s2FxYxHm3dMjKQCAdbEak2tmUX+47Rhr0Pj8alGm9WowVEUsxPICeaPKLyiqvWrvqr1WJfqqkgil3WCqp52Wx5zMeNeVdfFsWqBVo0h5zzSklWZSAiVGI7eZ2RToBlLEAWvNd4jCFmLMSWYksTuWJuT4kmWRNRP5yqdZz/OT9Zy2AM6/5Mw5CU+Pr+cX6/fPk8QfrOcjD5g9kZW+iIV8HFt1nycQ3WfZRvoj2Tg4djyg+OrzzdZmnyd+UX8nxqVXNlbsVTyyOQM5/ZYIxPQGYgMI0kYWmUYNa9tx1U7j1iQ+PXQM5mmvI35QzhwMPicz0lsKdVe06pa6hl+cuUi1u0BpY8trcM4pRxCZ6FRKi9VINj0Ybg9x1mTU+IiFIiICIiAiIgIiICIiAiIgIiIHEquJ8fw9BSXqrcfNDBnPcFveap8rvKhsRiXVKjDDoSqqrEI5XRnYD0rttfSwBG5vSVOJaZQbD2CXE1l3GPlFq1AyU6RpqfnXYvbx7IXltfx1mG8T4niXzhCwDhQxza9gueZ0vm13vkXa0rkxNao5VAV8B2vEnl6pIrPWoANVDutwCrXZrEgEqTqCLjuuQDvNMu3D8crU0/k5fJzvkAexIPpbEEqPs90+chuzF3u/pWYqGHeFsCO6VflYwApKD2hnY9ysVyj2qx/eB5z54DjHe1Pc8oVb4fBoSLKPZ/nLrE4dadO46SFgkKvZhYg6zv4vUZ8lNPSdgo8WNh6rmERKdLLQF/SqsXPXImZEHtNRvBllWtmJ0+LAnnrva+mo2l9j3UsQnoLZE/YQBV9y39crwlybevl7T19u/TWBBbD67T7o8Ld9QLDqfR9bbD1kSQ+JVbgC553At7D2R6yT0kSpxBb3dizW5XJ9TNc/8J8YEocGQelXQHp6fvp5xA4Xhz/2lPs1P/qkP+draJRB6lmcE+Pm3T/lnYeNP/wB0v26//wCgQJDcBB9CrTe+3aVD7HYMfUsg4nhjocrIQeWhBI6hSAbd9pIHF0a2eiV65G+/Ort/xid9DHLlsj9nmjWCk3+g7Mh8S9/qwKjzU4CDbn/Hvve1jtaxl1Upo+tsjfvZfXftKfG46BRrIFemV0Ise/3WPMH4vvA6XXRT07J8Dqv+IeoT7QPTYVKbsjDZkYo4HTMpBt3Qgv2eot69199h6zLXA0Q6CBZ8H+U7HUCFq5cSvRxkf1Oo/wCZSZsPgPykYHEWVnOHc/Nq2VSfquOyfWQT0mmsXw1wx108Nhpzv4+2Q2wjdJMXXqUGczWvyRcfL02wTntUhmp99InVfFWI9TqORmyploiIgIiICIiAiIgIiICYd8o/Hjh8KyUz+mrXRAPSC6Z3H7KmwP0mWZjNT/KQFqYxVIBCUl0OtizOTodNeyL93PWWJWvaPBsQy3Hm1HRqgU+yH4TWG70f71ZkFXOnoBVA55b6WuWOo5X26LrIlbF1QDdhz00G2dbkkW572sSLDlNMouB4hXoAhKtIEgLnNqjgCwUDMCNBoNNtNgLQK2Lz1c71DVew7R0UW2sBYD1Acze878XjXGa516b+iABfba++5y8hKbF8Se983xvz8YHRxNy12JuTufjuA0n15PY40amdQGI5HYyFWxztuZ20c66Cxvb43HX+EjTKG40zuWcKLkmw0Fz/AAEn8LrZ6rONqdMkftv2F9gLN+5MOau6gmyjS17a93PfaZT5K4Vmw6ovpVnZ2bmtKn2FNv2jUAHVhEZS0p5ybGyL6Td/0R+JlXxDHW7C3RRpsQx/EX9p30l/xvFJh6aqmht2BvZb+merMfRvvcse7GOGcOauxZmCLcrmIzEEq72VbjMbKWNyLgG1zZZRHw1B6rqii2ZlQcu09woLDYmx0Gpsd5b/AMyU0plnqrnZSyqttwL2YGzG7K6ZlBAIB1BNuKzqlRxhgchUAg2dRqDu19AQCGPauDa+5jtgaj3dmJB1Z2YgHvJOreJNtN5eebUvUn67lxlBKQXIpfIysWAtmLhg4N8wOTs6W++/S/EqRekcq2QIGXQq+VrnQ6ajQ3vfUncyBW/k6bsXP1dF934MZF/l1K/9Hp3s/wCf8JfUl1kr4jDOydgIq07HkGqANrlQXY3K6krsb2Fp1Yvgmheic6jKLBg1S7ZRsgsRnOXKCTtuCCajDvh307SG/IhvYtlPvbwMsEoVEu6NnA0JG+otlYEa3BIysBmF9CJPW/4bJ+o1LFMmjbDToB4j5vq9ktaZWotjt71J/A6dx02NjIjVVrM71GJYrYfSLgBRmLX2AuQe0xFhq150BXoOocZQVDC+2Ruo+ieY5b9bxXOJosjWPqP3G/xt3SxwdU2YLpnyEEaWDuqsB0tdh3Wkt6AqppvrlvuGFroT7NfA65ZX4BfmHTUoeRAcG3gQQ/haBkmH4PSannct/SZWOaqcqWpnMMgKg61NX07I6GfeG4DRe4alUR87oFz1sl083diVVnuc4H0ezra4kSo7FFYZlzJZrGwzbFTbvv3aT5wGJfOgztyUHMxsptoLa220HSY9puO/9F9Z1s/N/fqNwXENgsfRZr9moEf9huw9zzCi7eKT0BNDeV+CCuqXBPm3bs30scgvmA3Ja3cLzd/DK+ejSf6dNG+0oP4y1yiXERIpERAREQEREBERATUPllW/3hWHTIv/ALaN/iM29NN+VxP84Yk6DtIBe+v6KncjXXQch6+liVArtoe65va421v3a262sJArpuN9Wvsdrm1rekACOm/K15z369OlhuNTc3HqOx0kaqu9umxHQMFzAb6Ak6aEWGhmmWPY2ny56k6b67662uNNtjMbxx7Vpl2ONy37I91vZs3vMxPEenCx84egSb8vjqZYqL8/9fx9c+aK6cvjv2klB6/C1tPcB3/wgqBjFJAUbswAHX4JE2j5NYBKOHDvsUzMefmVGlu973/9Qc1mA8OwnncTST+ILMEB9RIPqmxPLPF+aw2VbAu2g5ZKdgq+qo6jwWRWBcWxpr12ZzYZ9cutjsQutjlHZAuNj1l1SVquTDYdiFKhmbNYKgBBVwoFzYqXF2VnOmW8g8CoqlKpUYK5KlVV9VGUrYsC3azMdBkOtM2ZCCZnfkTwcJh1c+lWs5PSmPQF+hF3/eHSa452/WO+snxXfzVTpJcg5BsPnO3Vviw0ExPjVd3PaNlGyjRR6uZ7zrNhcbXNfoNAOgmBcVp6mfR1fnxw5n36xTELIZllikkBkM4u8cU5b8P4iyEXJI25FgDuBfQr1RuyR03lSqW3nekqdMwfDCqBUpECoLEZTYNrYWJ11NgCdVayk6gz5RBiUYBf0l8z1HvYBVt2m3QWU3zAi/fly1XAsYUcLyY6A7ZjpbwYdk+o/NEveKKqVadcKHSpcup0BqKFLXNrAsjIxsD2s+9pOps1ni5cRPJ7FWbzbGwNhfprZG0+ixCn6rgSdxWjkcPa2ewP1XQ21948c5lRjbrWDvT80rn0QuQBG7JIBtoAb3sASLiZLj/0lBifTVA7dzoWR7eORz+8Zh0K3DldMwqVUBucqOFW51Y+jfUknfnIFHhChr+dr/3g/LK9OK1aTZS2dDawYZbg2IseR1l/hqquA63sTsdCGG6nvgOJYZUpNYlmIF2dszm2wJ6DoJtvyOe+Awh/8PS9yKJqjjB/RmbT8hv6vwvdRQewWmasX8REjRERAREQEREBERATTXlUf944ofWTrv5qnyBHdr385uWad8qR/vHEEjQMnMDXzVO2/r+BaWJUGp323sb95BI7R2spHXXvtITkiw5i1h1OvL6Rbc6eltteyrpYWsRe636XAB0HI2IOv3MJWVjvf4Njflb6e/r0E0yqMZu1jpl0vztoLX1GgG/SYpU9OZTi92628bHa1+/e/fMXqen7P9YWJ1Emw6+N+d+hPL8fGTm6+OuttzuQBzHt9Uj0VuB8an1E735fdJAFrHYd+lt9yRbTu8NIRdeRNMHGBvor7stU/eFlj8oeIv5pOWVD63847e8J7pA8i3tiTyunTufqT0PMzp8qMX53KxFirBCO9FZb+vIT6zA7gxOGpUFJuz9vslMrEAqrC9nvnuH3so0F7DaodURgugUBB4DQe5Zp/h+Ldnoh2JVKiW22BXfqcqgXNzZQNhNkPif0bnpUHvDzt4edlcPN1liPxOroZh+PTMfj46+yX2KrXEqKi39h/Gd746+f+/n2zVZhuEq6tUe4Rb2A3J6aa87d5Mh8M4M+JaotGhpTXMxJAIBva/Qmx58psnyTwSVKSqbdlzcesn/FKjyl8oUwGMrUcOi2q0aYcjX9IrVCCAOeV7Tzu/JZ5fTHo+PmXnbWt62HyEqQbXI13BHLxkYfdLTiFXNZjuTmP4/fKkNO0uxjqfXepmYu/nMIxI1UpUW2wGdEYezEP6kXpMMUzL+FvbD1AfnIB43alb3svumv8cszqIPEhWekpZCKSjskU8qXJIZswFizMNddSvdLng753F9fOUR71Rj73eUGJxblMmd8gGiZjk3Leje25J9cu+DGz0P7Be/kn+YnN2Yy9Qq5YWvpcEZlIIGjLsQekyPhVVVYBbhHVSATcgMrFQTzKOtRMx1IVZjtYXf1L9w0ljwkk1UUfNA17lzk/wDG7D1QMk4sewfCbT8gjfh+F/sx7iZqnizfozNq/J//AFdhv7P/ABGZqxkcREjRERAREQEREBERATTvlOv+8sSe9PAgUqR77205ffNxTUPlL/WWJ/ap3Iyg/wBFTtvv8d8sSomJQW0FtLX5de1fla/sOm96moSB2dwL8+eoBIOo0YHUagHWxl1jRodBe19VGup11A0FvVcE7EGnxAt11O5NiD6Q31vbW4Hz/EHTKlxR1bfbT26chqd798xet6Z/jMoxI9LS3Z77fdqNffz3mM117fx4QsS6RHQfG/Lu6SSp+ALHffbQ6+6RkPdy+77uXwZJT1+rr100+O6ET+BV8mJQ7X9WtyoB+3OeNJY1R9GoH9TEj/5h7JWM+VlYaZT42B0vvyuD6hLrHurOjnRKiZH+qbWPrF7/ALkCrwzTYfCa/nVqIN6iZ1H107RXx9ITXFIFSVYWYEgjvGh98veCcRamy5TZlbMp+sN19e/tnTw9etxx8/HtNWrMTOltJdcVwysoxFIfo3OoHzKnzlPde5Hce6Utc6T05ee+dj8/1OvH5Mv7HW/GXoEvTbKx9Jfmk93+XLlMY4nxt6zs7IMx3IB9/wDGfXFqhuRMfJnn+aS9fj3/AOP1euNqRWqk3udTOtTOsT6Wc3epNJSSFG5Nh4mZYbJTCj6p31AGV9e79HhvtmU3BcL/ANY4Nhoo2LFtgO9tRfkMzcpNrYgtdib3vryNzdmHQM1rD6KJFuRjNqFimsp590yQWp1Ht/1NIJ+8qKp99M+2U/DEDVlZhdKf6RvBLZV/ecov7076tUikSTdqr3v1UEa+s2P70w2oyzs5C3tsDtptvvMj4Lhcmp9I7+HQToRAoGnKTcO8CZxVv0c218n/APV2G/s/xM07xJ+xNxeQH9XYX+zH3mZqxkcREjRERAREQEREBERATUXlN/WWI1O9O3T+jpnp3b7ibdmpPKymBxGr9bIfHsIPZ2fcJYlRMUugta9jtsNtdNNO7W5G+ko6p3t0uNrgG19BryY6WG9zvL7Ejs7ddL5rg9ba6hrHxB0IlFiDoSTe2++p1uTbS+ptr3A3BC6ZU+J+dpvc+3459fXMdrDtzIKp1O+nXfpr8HWUdQdswO1PjTx8bc/CSEHcfX+Fzfl37ToTl8fjb4Pr7Vt3ffp4fG0D6qrcWO23qN+/T48Z2YCvnQ0mPaB07mHPwI1+1PhvUPjc3+O7cSJiLowYX6MNQbcjrz290CZXuwz/ADhZXHPTRX+5T3hes+0Nx8XB6ifC172dbE21G4ZTobjoRoR/lOCABnS5Xnc3ZCfmt1HRuex13DI+AeUbUWKOAwYWZW9Cqvd0ce2+0t8Rw9a4LYN8550HIWsp5hb6OPDXumEsAwsRcQM4tZs1tsxIcfssNfaDO3Hl65cPJ/H57/Yj8ZVlYo6sjD5rqUYeKtrKS0y9uO4wpkZmqJtlqouIUDoDqQPUJAqV2bfD0Qfq0HX3Komeuva66cc+syKKnTLGygk90tsLwwKQ1bTmFAu7eC9O82XvO0kCvV2UZB9RVpe83YeoCcLR3zG99wL2P7RPab1m3dM7Gvtfb1zUtplQXAANxY7gHmT85+drCwsAqvYQ7gCd1MebIdh+k3RD8zo7j6XNVO255CZt1ZMSRSKIKOz1CHq/VA9BL9VBJP1nt82RqlXO+noqLDwE6atbKCt7s3pHf1e/X/XTrD2FvbAmeduZLoPtKlGk6i8Cfj27E3R5A/1dhf7IfjNJY1+xN3eQP9XYT+xWZqxkUREjRERAREQEREBERATVnl4pXG3+lSQ927qb8+Q/15bTmvPlMoFWo1tlIZC3RvSQd17ub/VliVjeJXsgG29u/XYaa87/AIGxEpMSd2tzuCDfk5FiddyPYJb1HBUaEDu6dm9rb6Xt6785RYzEKPScA63sbkg5L2uQdyd/o67GaZVVQ6nTTYX6ctwJUVR2pZGqtz2l9R+7/XX7pX13XNuPbAKPj+HjO5fj7uX36yOrjx9X+hncrj4B/wAoHcPj4va/x0nDU7i3x37ff4aTgOO/2G/3T7DDl9xHXqPX64FflZDpe2/K+vMezUd3gZIp1SCGU2PuPUWPvUztZbyFWpEaqbdRyPiIE5HQ7EUz0N/NnwO6eBuOlp2sGUXdSo+loUPg4up9sqRX+kLe0j/Me+dtDEumtN2XrlOnrA09ogZFQ4hRyIr0Fe1wWD5SwO17KdQba36i2ukl8VhChApsrEML5i+U27LC5sdeVuZtbKC2MDij/OSk56lFv6ytjPr+dD/3NL2MfcXgWvFMXSZg1On5pQigqXzXcDtNc9ffa+hJEjim5Ga2RfpOci+q+rfugyEOJv8AMyJ/Zoqt7QCZGq4i5zOxY/WJJ/E/dAsxXVD2O0/02FgvfTQ7H6za9LSK+IC63ux3PM36f5/ArqmLJ0XQfHL+M+KB1udTC4sVbmd5yHkfPOxGhEpDJVF5BR5IouLwLPFt2JvPyEW3DsH/AOXp+9QZoKtUL5UQFnYhVUbs7EBVHeSQPXPR/BsF5jD0aO/m6aJ9lQt/dM1YnxESNEREBERAREQEREBKvjfCqeKoPQqXs40I0ZWGqup6g2PuOktIgaR4twjjGEuiq2Ipj0XpDOSO9L5ge6xHQmYdjeHcSc3ODxVz/wCHqflnp+JdTHlvDeT+Pv8A/wAWK/uHH3rO8eR/EGa4wNf1pl++enYjTHmNfIDivLCP9pB/inavkHxX9Uf7afnnpeI0x5tHkLxX9Uf7dP8APH/Qfi36o/20/PPSURpjzb/0I4t+qP8AbT884PkRxTng3+0n5p6TiNMeaH8hOKH/ALG/2k/NOlvk/wCJ/qb+1PzT07EaY8yr5AcU/Van2k/F5yfk/wCK/qr/AGqf5p6ZiNMeZD8nnFTvhX+2n558/wCzfin6o326f556diNMeY/9m3Ff1Rvt0/zzkfJxxX9Ub+8p/nnpuI0x5m/2ccW/VW/vKf559j5OOL/qp/vaX556WiNMebV+TbjH6tbxrUfweWGD+SvibEZhSpDmWqZrDwQNeegojTGEeRnye0MCRVZjXrgGzsMqpffItzY20zEk2vawJEzeIkUiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiB//Z",
    brand: "electronic",
  },
  {
    name: "Shark NV356E S2 Navigator Lift",
    quantity: 20,
    price: 165.99,
    id: "N6",
    ratings: 3,
    description:
      "Shark NV356E S2 Navigator Lift-Away Professional Upright Vacuum with Pet Power Brush and Crevice Tool, White/Silver",
    imageName:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPnBEfcGQiNR1SMxgwE_P5kYjmXXt4ICoUdsYN48EjiZV2DJzQaNZm1nWa8ZWTbO0oLg&usqp=CAU",
    brand: "department",
  },
  {
    name: "TOLOCO Massage Gun",
    quantity: 20,
    price: 79.99,
    id: "N7",
    ratings: 4,
    description:
      "TOLOCO Massage Gun, Upgrade Percussion Muscle Massage Gun for Athletes, Handheld Deep Tissue Massager for Mothers Day Gifts, Black",
    imageName:
      "data:image/jpeg;base64,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",
    brand: "department",
  },
  {
    name: "Danjor Linens King Size Bed Sheets Set",
    quantity: 20,
    price: 23.99,
    id: "N8",
    ratings: 3,
    description:
      "Danjor Linens King Size Bed Sheets Set - 1800 Series 6 Piece Bedding Sheet & Pillowcases Sets w/ Deep Pockets - Fade Resistant & Machine Washable - White",
    imageName:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9FUberHv1DvzXnT3AlFb9t8Xf7o3nFJsDbswupY5FB7bS4j7oHCFK5hOiKd3GTltaMkY&usqp=CAU",
    brand: "clothing",
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
  
    <img src="${item.imageName}" class="card-img-top" alt="..." style="height: 10rem"/> 
  
  
    <a href="view.html">
  
      <h4 class="card-title">${item.name}</h4></a>
  
    <div class="card-body">
  
      <div class="row priceRate" style="text-align: left;">
  
        <h4>$${item.price}</h4>
  
      </div>
  
      <div class="card-text" style="text-align: left">
  
        <p>Rating: ${item.ratings}</p>
  
      </div>
  
    </div>
    <div class="shop-item-detail"><a href="view.html"><button class="btn btn-warning shop-item-button" type="button">ADD TO CART</button></a></div>
  
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
  let rating5 = array.filter((item) => item.ratings > 1);
  createProduct(rating5);
}

function RateAboveFour() {
  let rating4 = array.filter((item) => item.ratings > 4);
  createProduct(rating4);
}
function RateAboveThree() {
  let rating3 = array.filter((item) => item.ratings > 3);
  createProduct(rating3);
}
function RateUnderThree() {
  let rating33 = array.filter((item) => item.ratings > 2);
  createProduct(rating33);
}

function Electronic() {
  let Electronic3 = array.filter((item) => item.brand == "electronic");
  createProduct(Electronic3);
}

function Clothing() {
  let Clothing3 = array.filter((item) => item.brand == "clothing");
  createProduct(Clothing3);
}
