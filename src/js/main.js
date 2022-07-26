'use strict';

const hamburgerMenubutton = document.querySelector('.js-hamburger-menu');
const hamburgerMenu = document.querySelector('.js-hamburger-menu-container');
const closeMenu = document.querySelector('.js-close-menu');

const imageProduct = document.querySelector('.js-image-product');
const nextButton = document.querySelector('.js-next-button');
const prevButton = document.querySelector('.js-prev-button');

const addProduct = document.querySelector('.js-add');
const removeProduct = document.querySelector('.js-remove');

const addCartButton = document.querySelector('.js-add-cart-button');
const cartQuantity = document.querySelector('.js-cart-quantity');

const cart = document.querySelector('.js-cart');
const cartButton = document.querySelector('.js-cart-button');

const product = document.querySelector('.js-product');

const opacity = document.querySelector('.js-opacity');
let currentImg = 0;
const images = [
  { url: './assets/images/image-product-1.jpg', alt: 'Product 1' },
  { url: './assets/images/image-product-2.jpg', alt: 'Product 2' },
  { url: './assets/images/image-product-3.jpg', alt: 'Product 3' },
  { url: './assets/images/image-product-4.jpg', alt: 'Product 4' },
];

let quantity = 0;

function collapseHamburgerMenu() {
  hamburgerMenu.classList.remove('collapse');
  opacity.classList.add('opacity');
}

function closeHamburgerMenu() {
  hamburgerMenu.classList.add('collapse');
  opacity.classList.remove('opacity');
}

function nextSlideShow() {
  if (currentImg < images.length - 1) {
    currentImg += 1;
  } else {
    currentImg = 0;
  }

  renderImg();
}

function prevSlideShow() {
  if (currentImg === 0) {
    currentImg = images.length - 1;
  } else {
    currentImg -= 1;
  }

  renderImg();
}

function renderImg() {
  imageProduct.src = images[currentImg].url;
  imageProduct.alt = images[currentImg].alt;
}

function addProductCart() {
  quantity++;
  renderQuantity();
}

function renderQuantity() {
  document.querySelector('.js-quantity').value = quantity;
}

function removeProductCart() {
  if (quantity > 0) {
    quantity--;
  }
  renderQuantity();
}

function cartTag() {
  if (quantity > 0) {
    cartQuantity.classList.add('header__right-elements--quantity');
    cartQuantity.innerHTML = quantity;
    renderCart();
  }
}

function renderCart() {
  cart.classList.toggle('collapse');
  if (quantity > 0) {
    let html = '';
    html += `<div class="cart__product js-product">`;
    html += ` <img
    class="cart__product--img"
    src="./assets/images/image-product-1-thumbnail.jpg"
    alt="Product"
  />`;
    html += `<p class="cart__product--text">
    Autumn Limited Edition… $125.00 x
    <span>${quantity}</span>
    <span class="total-checkout"> $${quantity * 125}.00</span>
  </p>`;
    html += `<img class="js-clear" src="./assets/images/icon-delete.svg" alt="Delete" />`;
    html += `</div>`;
    html += `<button class="cart__checkout">Checkout</button>`;
    product.innerHTML = html;
    addEventClear();
  } else {
    product.innerHTML = `<div class="cart__product js-product">Your cart is empty</div>`;
  }
}

function addEventClear() {
  const cartClear = document.querySelector('.js-clear');
  cartClear.addEventListener('click', clearCart);
}

function clearCart() {
  quantity = 0;
  cartQuantity.classList.remove('header__right-elements--quantity');
  cartQuantity.innerHTML = '';
  cart.classList.toggle('collapse');
  renderQuantity();
  renderCart();
}

renderImg();

hamburgerMenubutton.addEventListener('click', collapseHamburgerMenu);
closeMenu.addEventListener('click', closeHamburgerMenu);
nextButton.addEventListener('click', nextSlideShow);
prevButton.addEventListener('click', prevSlideShow);
addProduct.addEventListener('click', addProductCart);
removeProduct.addEventListener('click', removeProductCart);
addCartButton.addEventListener('click', cartTag);
cartButton.addEventListener('click', renderCart);
