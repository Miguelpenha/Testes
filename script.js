function showOrHiddenMenu() {
    const menu = document.getElementById('menu')

    if (menu.className.includes('hidden')) {
        menu.classList.remove('hidden')
    } else {
        menu.style.animation = 'hiddenRight 1s'
        
        setTimeout(() => {
            menu.classList.add('hidden')
            menu.style.animation = 'showLeft 1s'
        }, 1000)
    }
}

function loadImages() {
    const images = document.querySelectorAll('.container-images-grid>.column>img')

    for (let image of images) {
        image.style.visibility = 'hidden'
    }

    setInterval(() => {
        for (let image of images) {
            if (image.getBoundingClientRect().top <= window.innerHeight) {
                image.style.animation = 'bottomOnTop 1s linear'
                image.style.visibility = 'visible'
            }
        }
    }, 500)
}

document.addEventListener('DOMContentLoaded', () => loadImages())