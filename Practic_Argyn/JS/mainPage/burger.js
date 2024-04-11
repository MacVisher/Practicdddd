const burgElem = document.getElementById('burgMenu')
const invisMenu = document.getElementById('invisibleMenu')
let visibleMod = true

burgElem.onclick = function () {
    if (visibleMod == true) {
        invisMenu.style.display = 'block'
        visibleMod = false
    } else {
        invisMenu.style.display = 'none'
        visibleMod = true
    }
} 

