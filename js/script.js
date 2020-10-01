
window.addEventListener('scroll', () => {
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
    
})

let check = document.getElementById('check')

function splitMenu() {
    if (check.checked == true ) {
        check.checked = false
    }
}

/*
const select = document.getElementById('select')
const item = document.querySelectorAll('.link')

function indicador(e) {
    select.style.top = e.offsetTop + 'px'
    select.style.width = e.offsetWidth + 'px'
}

item.forEach(link => {
    link.addEventListener("mousemove", (e) => {
        indicador(e.target)
    })
})
*/
