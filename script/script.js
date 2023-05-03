// menu button functionality

const nav = document.querySelector(".nav")
const navOpenBtn = nav.querySelector(".nav__open-btn")
const navCloseBtn = nav.querySelector(".nav__close-btn")
const navList = nav.querySelector(".nav__list")

console.log(nav)
console.log(navOpenBtn)
console.log(navCloseBtn)

navOpenBtn.addEventListener("click", () => {
  navList.classList.add("show")
  navOpenBtn.classList.remove("show")
  navCloseBtn.classList.add("show")
})

navCloseBtn.addEventListener("click", () => {
  navList.classList.remove("show")
  navCloseBtn.classList.add("hide")
  navCloseBtn.classList.remove("show")
  navOpenBtn.classList.add("show")
})
