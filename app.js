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
