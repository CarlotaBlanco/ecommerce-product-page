'use strict';

const hamburgerMenubutton = document.querySelector('.js-hamburger-menu');
const hamburgerMenu = document.querySelector('.js-hamburger-menu-container');
const closeMenu = document.querySelector('.js-close-menu');

const opacity = document.querySelector('.js-opacity');

function handleCollapseHamburgerMenu() {
  hamburgerMenu.classList.remove('collapse');
  opacity.classList.add('opacity');
}

function handleCloseHamburgerMenu() {
  hamburgerMenu.classList.add('collapse');
  opacity.classList.remove('opacity');
}

hamburgerMenubutton.addEventListener('click', handleCollapseHamburgerMenu);
closeMenu.addEventListener('click', handleCloseHamburgerMenu);
