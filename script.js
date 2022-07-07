function showOrHiddenMenu() {
    const menu = window.document.getElementById('menu')

    if (menu.className === 'hidden') {
        menu.className = ''
    } else {
        menu.style.animation = 'hiddenRight 1s'
        
        setTimeout(() => {
            menu.className = 'hidden'
            menu.style.animation = 'showLeft 1s'
        }, 1000)
    }
}