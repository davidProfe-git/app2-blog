const api_url = 'http://localhost:3000/tattoos'
const btn = document.getElementById('btn-menu');
const modalcrear = document.getElementById('modal-crear');
const fromulario = document.getElementById('formulario-crear');
const btncerrar = document.getElementById('btn-cerrar');
const btncancelar = document.getElementById('btn-cancelar');

fetch(api_url).then(respuesta => respuesta.json()).then(datos => {
    const principal = document.getElementById('productos')
    datos.data.forEach( productos => {
           principal.innerHTML = ` <div class="gallery">
                <div class="gallery-item">${datos[0].nombre}</div>
                <div class="gallery-item">🌹 Diseño 2</div>
                <div class="gallery-item">💀 Diseño 3</div>
                <div class="gallery-item">🐉 Diseño 4</div>
                <div class="gallery-item">🦋 Diseño 5</div>
                <div class="gallery-item">🌊 Diseño 6</div>
            </div>`

    });
})


function cerrarmodal(){
    modalcrear.classList.remove ('show')
    formcrear.reset()
}

function crearproducto (){
    formcrear.addEventListener ('submit', (evento) =>{
        evento.preventDefault()
    })
}

btn.addEventListener('click', () =>{
    modalcrear.classList.add ('show')    
})

btncerrar.addEventListener('click', cerrarmodal)
btncancelar.addEventListener('click', cerrarmodal)