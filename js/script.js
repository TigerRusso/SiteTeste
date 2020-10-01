
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







