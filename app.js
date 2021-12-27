const searchButton = document.querySelector("nav .desktop__nav .nav__link--search")
const closeButton = document.querySelector(".search__container .nav__link--close")
const desktopNav = document.querySelector(".desktop__nav")
const searchContainer = document.querySelector(".search__container")
const overlay = document.querySelector(".overlay")

searchButton.addEventListener("click", () => {
  desktopNav.classList.add('hide');
  searchContainer.classList.remove('hide');
  overlay.classList.add('show');
})

closeButton.addEventListener("click", () => {
  desktopNav.classList.remove('hide');
  searchContainer.classList.add('hide');
  overlay.classList.remove('show');
})

overlay.addEventListener("click", () => {
  desktopNav.classList.remove('hide');
  searchContainer.classList.add('hide');
  overlay.classList.remove('show');
})

 
/* ====== Mobile Version ====== */

const menuIconContainer = document.querySelector("nav .menu");
const navContainer = document.querySelector(".nav__container");

menuIconContainer.addEventListener("click", () => {
  navContainer.classList.toggle("active");
})
 

const searchBar = document.querySelector(".mobile__search-container .nav__search--bar");
const nav = document.querySelector(".nav__container nav");
const searchInput = document.querySelector(".mobile__search-container input");
const cancelBtn = document.querySelector(".mobile__search-container .cancel-btn");

searchInput.addEventListener("click", () => {
  searchBar.classList.add('active');
  nav.classList.add('move-up');
  desktopNav.classList.add('move-down');
})

cancelBtn.addEventListener("click", () => {
  searchBar.classList.remove('active');
  nav.classList.remove('move-up');
  desktopNav.classList.remove('move-down');
})