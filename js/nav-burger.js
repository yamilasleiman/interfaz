const burger = document.getElementById('burger')
const verBurger = document.getElementById('verBurger')

burger.addEventListener('click', e => {
    e.preventDefault()
    verBurger.classList.toggle('burgerNone')

})