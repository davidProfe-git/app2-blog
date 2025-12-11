const API_URL = 'http://localhost:3000/api/recetas'
const btnNuevaReceta = document.getElementById('btn-nueva-receta')
const modal = document.getElementById('modal-receta')
const formCrear = document.getElementById('form-receta')
const btnCerrar = document.getElementById('btn-cerrar-modal')
const btnCancelar = document.getElementById('btn-cancelar')
//consumo de la api para pintar datos
fetch(API_URL).then(respuesta => respuesta.json())
.then(datos =>{
    const principal = document.getElementById('recetas-lista')
    datos.data.forEach(receta => {
        principal.innerHTML += `
            <div class="receta-card">
                <img src="${receta.imagen_url}" alt="">
                <div class="receta-card-body">
                    <h3>${receta.titulo}</h3>
                    <p class="receta-time">⏱️${receta.tiempo_preparacion} min</p>
                    <p class="receta-ingredientes">${receta.ingredientes}</p>
                </div>
            </div>`    
    });    
})

function cerrarModal(){
    modal.classList.remove('show')
    formCrear.reset()
}


function crearReceta(){
    formCrear.addEventListener('submit',()=>{
        const datos = {
            titulo: document.getElementById('titulo'),
            ingredientes: document.getElementById('ingredientes'),
            instrucciones: document.getElementById('instrucciones'),
            tiempo: document.getElementById('tiempo_preparacion'),
            imagen_url: document.getElementById('imagen_url')

        }



    })
}


//captura de evento click y muestra
btnNuevaReceta.addEventListener('click',()=>{
    modal.classList.add('show')
})

btnCerrar.addEventListener('click',cerrarModal)
btnCancelar.addEventListener('click',cerrarModal)





