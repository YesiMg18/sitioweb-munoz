addEventListener('DOMContentLoaded', () => {
    var btn_menu = document.querySelector('.btn_menu')
    if (btn_menu){
        btn_menu.addEventListener('click', () => {
            const menuItems = document.querySelector('.menuItems')
            menuItems.classList.toggle('show')
        })
    }
})