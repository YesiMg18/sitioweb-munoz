addEventListener('DOMContentLoaded', () => {
    var btn_menu = document.querySelector('btn_menu')
    if (btn_menu){
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('menuItems')
            menu_items.classList.toggle('show')
        })
    }
})