const on = document.getElementById('on')
const off = document.getElementById('off')
const lamp = document.getElementById('lamp')

on.addEventListener('click', () => {
    lamp.setAttribute('src', 'assets/imgs/on.svg') 
})
off.addEventListener('click', () => {
    lamp.setAttribute('src', 'assets/imgs/off.svg') 
})
lamp.addEventListener('click', () => {
    lamp.setAttribute('src', 'assets/imgs/broken.svg') 
})