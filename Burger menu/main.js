const burgerBtn = document.querySelector('.burger')
const bars = document.querySelector('.fa-bars')
const xIcon = document.querySelector('.fa-times')
const nav = document.querySelector('nav ul')
// console.log(nav)

const handleNav = () => {
    nav.classList.toggle('active')
    burgerBtn.classList.toggle('active')
    bars.classList.toggle('hide')
    xIcon.classList.toggle('hide')
}

burgerBtn.addEventListener('click', handleNav)