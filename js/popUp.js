const robot = document.getElementById('robot')
const popUp = document.getElementById('popUp')
const btn = document.querySelector('.btn-popUp')

robot.addEventListener('click', e => {
    mostrarPopUp()
})

function mostrarPopUp() {
    popUp.classList.remove('verPopup')

    btn.addEventListener('click', e => {
        popUp.classList.add('popup', 'verPopup')
    })
}