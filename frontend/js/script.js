const API_URL = 'http://localhost:3000/api/recetas'
const btnNuevaReceta = document.getElementById('btn btn-primary')
const modalCrear = document.getElementById('modal-receta')
const formCrear = document.getElementById('form-receta')
const btnCerrar = document.getElementById('')
const btnCancelar = document.getElementById('')

fetch(API_URL).then(respuesta => respuesta.json()).then (datos =>{
    const principal = document.getElementById('recetas')
    datos.data.forEach(receta => {

    principal.innerHTML = `
        <article class="room">
            <img src="assets/tarta.jpg" width="400" height="256">
            <div class="content">
              <h3>${titulo}</h3>
              <div class="subtle">${descripcion}</div>
            </div>
          </article>`

    });
})

function cerrarModal(){
modalCrear.classList.remove('show')
formCrear.reset()
}

function crearReceta(){
  formCrear.addEventListener('submit', (evento)=>{
    evento.preventDefault()
  })
}


btnNuevaReceta.addEventListener('click', ()=>{
  modalCrear.classList.add('show')
})

btnCerrar.addEventListener('click', cerrarModal)
btnCancelar.addEventListener('click',cerrarModal)