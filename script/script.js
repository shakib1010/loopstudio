// menu button functionality

const nav = document.querySelector(".nav")
const navOpenBtn = nav.querySelector(".nav__open-btn")
const navCloseBtn = nav.querySelector(".nav__close-btn")
const navList = nav.querySelector(".nav__list")

console.log(nav)
console.log(navOpenBtn)
console.log(navCloseBtn)

navOpenBtn.addEventListener("click", () => {
  navList.classList.remove("nav-list-hide")
  navList.classList.add("nav-list-show")
  navOpenBtn.classList.remove("nav-show")
  navOpenBtn.classList.add("nav-hide")
  navCloseBtn.classList.remove("nav-hide")
  navCloseBtn.classList.add("nav-show")
})

navCloseBtn.addEventListener("click", () => {
  navList.classList.remove("nav-list-show")
  navList.classList.add("nav-list-hide")
  navOpenBtn.classList.remove("nav-hide")
  navOpenBtn.classList.add("nav-show")
  navCloseBtn.classList.remove("nav-show")
  navCloseBtn.classList.add("nav-hide")
})


// POPUP CLOSE FUNCTIONALITY
const popupCloseBtn = document.getElementById("popup-close");
const signupBtn = document.getElementById("popup-open-btn");
const popup = document.getElementById("popup");

console.log(popupCloseBtn)

signupBtn.addEventListener("click", () => {
  popup.classList.add("active");
})

popupCloseBtn.addEventListener("click", () => {
  popup.classList.remove("active");
})