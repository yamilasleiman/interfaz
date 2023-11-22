function logear() {
    const user = document.getElementById('user')
    const password = document.getElementById('password')
    const mensajeError = document.getElementById('mensajeError')

    if (user.value === 'visualizacion' && password.value === '123') {
        window.location = 'home.html'
    }
    else {
        mensajeError.innerHTML=  `<p class='mensajeError'>El usuario o la contraseña son incorrectos</p>`
    }
}