const cards = document.getElementById('tiles')
const expand = document.getElementById('expand-tiles')
const expandText = document.getElementById('expand-text')
const chevronDown = document.querySelector('.fa-chevron-down')
const chevronUp = document.querySelector('.fa-chevron-up')

expand.addEventListener("click", () => {
    if (expand.className === 'active') {
        expand.className = ""
        expandText.innerText = "Ver menos"
        cards.style.cssText = "height: 3300px"
        chevronDown.style.cssText = "display: none;"
        chevronUp.style.cssText = "display: inline;"
    } else {
        expand.className = "active"
        expandText.innerText = "Ver más"
        cards.style.cssText = "height: 1100px"
        chevronDown.style.cssText = "display: inline;"
        chevronUp.style.cssText = "display: none"
    } 
})