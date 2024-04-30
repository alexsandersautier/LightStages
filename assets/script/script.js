const on = document.getElementById('on')
const off = document.getElementById('off')
const lamp = document.getElementById('lamp')


let broken = false
on.addEventListener('click', () => {
    if(!broken){
        lamp.setAttribute('src', 'assets/imgs/on.svg') 
    }
})
off.addEventListener('click', () => {
    if(!broken){
        lamp.setAttribute('src', 'assets/imgs/off.svg') 
    }
})
console.log(broken)
lamp.addEventListener('click', () => {
    lamp.setAttribute('src', 'assets/imgs/broken.svg') 
    broken = true
})