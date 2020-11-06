let dec = document.querySelector('#dec')
let count = document.querySelector('#count')
dec.addEventListener('click',(e) => {
    count.textContent -=1
    countColor(count.textContent)
})

let reset = document.querySelector('#reset')
reset.addEventListener('click',(e) => {
    count.textContent =0
    countColor(count.textContent)
})

let inc = document.querySelector('#inc')
inc.addEventListener('click', (e) => {
    count.textContent = parseInt(count.textContent)+1
    countColor(count.textContent)
})


function countColor(num)
{
    if(num>0)
    {
        count.style.color = 'green'
    }
    else if(num < 0)
    {
        count.style.color = 'red'
    }
    else
    {
        count.style.color = 'black'
    }
}