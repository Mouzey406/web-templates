Array.from(document.querySelectorAll("._menu_toggler")).forEach(_toggler => {
    _toggler.addEventListener("click", ()=> {
        document.body.classList.toggle("_menu_active")
    })
})