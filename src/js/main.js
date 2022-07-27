'use strict';

const hamburgerMenubutton = document.querySelector('.js-hamburger-menu');
const closeMenu = document.querySelector('.js-close-menu');
const nextButton = document.querySelector('.js-next-button');
const prevButton = document.querySelector('.js-prev-button');
const changeThumb = document.querySelector('.js-change-img');
const addProduct = document.querySelector('.js-add');
const removeProduct = document.querySelector('.js-remove');
const addCartButton = document.querySelector('.js-add-cart-button');
const cartButton = document.querySelector('.js-cart-button');
const imageProduct = document.querySelector('.js-image-product');
const closeLightbox = document.querySelector('.js-close-lightbox');
const lightboxPrevButton = document.querySelector('.js-lightbox-prev-button');
const lightboxNextButton = document.querySelector('.js-lightbox-next-button');
const lightboxImage = document.querySelector('.js-lightbox__image');
const changeThumbLightbox = document.querySelector('.js-lightbox-thumbnails');

let quantity = 0;
let currentImg = 0;
const images = [
  { url: './assets/images/image-product-1.jpg', alt: 'Product 1' },
  { url: './assets/images/image-product-2.jpg', alt: 'Product 2' },
  { url: './assets/images/image-product-3.jpg', alt: 'Product 3' },
  { url: './assets/images/image-product-4.jpg', alt: 'Product 4' },
];
//Hamburger Menu

function openHamburgerMenu() {
  const opacity = document.querySelector('.js-opacity');
  const hamburgerMenu = document.querySelector('.js-hamburger-menu-container');
  hamburgerMenu.classList.remove('hide');
  opacity.classList.add('opacity');
}

function closeHamburgerMenu() {
  const opacity = document.querySelector('.js-opacity');
  const hamburgerMenu = document.querySelector('.js-hamburger-menu-container');
  hamburgerMenu.classList.add('hide');
  opacity.classList.remove('opacity');
}

//Mobile and desktop Galleries

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
  const thumbElement = document.querySelectorAll('.js-thumb-element');

  imageProduct.src = images[currentImg].url;
  imageProduct.alt = images[currentImg].alt;
  lightboxImage.src = imageProduct.src;
  lightboxImage.alt = imageProduct.alt;

  for (let element of thumbElement) {
    if (parseInt(element.id) === currentImg) {
      element.classList.add('main__image_thumbnails--element_active');
    } else {
      element.classList.remove('main__image_thumbnails--element_active');
    }
  }
}

function changeByThumb(event) {
  currentImg = parseInt(event.target.id);
  renderImg();
}

renderImg();

//Cart

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
  const cartQuantity = document.querySelector('.js-cart-quantity');
  if (quantity > 0) {
    cartQuantity.classList.add('header__right-elements--quantity');
    cartQuantity.innerHTML = quantity;
    renderCart();
  }
}

function openCart() {
  const cart = document.querySelector('.js-cart');
  cart.classList.toggle('hide');
  renderCart();
}

function renderCart() {
  const product = document.querySelector('.js-product');

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
  const cartQuantity = document.querySelector('.js-cart-quantity');
  quantity = 0;
  cartQuantity.classList.remove('header__right-elements--quantity');
  cartQuantity.innerHTML = '';
  renderQuantity();
  renderCart();
}

//Lightbox Gallery

function openGallery() {
  const lightbox = document.querySelector('.js-lightbox');
  lightbox.classList.remove('hide');
}

function closeGallery() {
  const lightbox = document.querySelector('.js-lightbox');
  lightbox.classList.add('hide');
}

hamburgerMenubutton.addEventListener('click', openHamburgerMenu);
closeMenu.addEventListener('click', closeHamburgerMenu);
nextButton.addEventListener('click', nextSlideShow);
prevButton.addEventListener('click', prevSlideShow);
addProduct.addEventListener('click', addProductCart);
removeProduct.addEventListener('click', removeProductCart);
addCartButton.addEventListener('click', cartTag);
cartButton.addEventListener('click', openCart);
changeThumb.addEventListener('click', changeByThumb);
imageProduct.addEventListener('click', openGallery);
closeLightbox.addEventListener('click', closeGallery);
lightboxPrevButton.addEventListener('click', prevSlideShow);
lightboxNextButton.addEventListener('click', nextSlideShow);
changeThumbLightbox.addEventListener('click', changeByThumb);
