let dec = document.querySelector('#dec')
let count = document.querySelector('#count')
dec.addEventListener('click',(e) => {
    count.textContent -=1
})

let reset = document.querySelector('#reset')
reset.addEventListener('click',(e) => {
    count.textContent =0
})

let inc = document.querySelector('#inc')
inc.addEventListener('click', (e) => {
    count.textContent = parseInt(count.textContent)+1
})