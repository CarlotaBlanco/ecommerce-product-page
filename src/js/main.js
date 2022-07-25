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
const cardQuantity = document.querySelector('.js-cart-quantity');

const opacity = document.querySelector('.js-opacity');
let currentImg = 0;
const images = [
  { url: './assets/images/image-product-1.jpg', alt: 'Product 1' },
  { url: './assets/images/image-product-2.jpg', alt: 'Product 2' },
  { url: './assets/images/image-product-3.jpg', alt: 'Product 3' },
  { url: './assets/images/image-product-4.jpg', alt: 'Product 4' },
];

let quantity = 0;

function handleCollapseHamburgerMenu() {
  hamburgerMenu.classList.remove('collapse');
  opacity.classList.add('opacity');
}

function handleCloseHamburgerMenu() {
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
  renderCart();
}

function renderCart() {
  document.querySelector('.js-quantity').value = quantity;
}

function removeProductCart() {
  if (quantity > 0) {
    quantity--;
  }
  renderCart();
}
function submitToCart() {
  if (quantity > 0) {
    cardQuantity.classList.add('header__right-elements--quantity');
    cardQuantity.innerHTML = quantity;
  } else {
    alert('Error! Empty Cart!');
  }
}
renderImg();

hamburgerMenubutton.addEventListener('click', handleCollapseHamburgerMenu);
closeMenu.addEventListener('click', handleCloseHamburgerMenu);
nextButton.addEventListener('click', nextSlideShow);
prevButton.addEventListener('click', prevSlideShow);
addProduct.addEventListener('click', addProductCart);
removeProduct.addEventListener('click', removeProductCart);
addCartButton.addEventListener('click', submitToCart);
