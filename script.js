
const menuBurgue = document.querySelector(".menu_burgue")
menuActive = document.querySelector("#menu_active")

menuBurgue.addEventListener("click", () => {
    menuBurgue.classList.toggle("active")
    menuActive.classList.toggle("active")

})
