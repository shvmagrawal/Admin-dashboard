const asideBar = document.getElementsByClassName("aside")[0]
const toggleButton = document.getElementsByClassName("toggle-button")[0]

toggleButton.addEventListener("click", () => {
    asideBar.classList.toggle("active")
})