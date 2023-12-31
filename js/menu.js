const menuBtn= document.querySelector('.menu-btn');
const hamburger= document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.primary-menu');
const menuNav = document.querySelector('.menu-item-list');
const navItems = document.querySelectorAll('.menu-items');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));
    showMenu = true;
  }
  else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));
    showMenu = false;
  }
}