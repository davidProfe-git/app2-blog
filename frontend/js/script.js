const API_URL = 'http://localhost:3000/api/Recetas'


fetch(API_URL).then(respuesta => respuesta.json())
    .then(datos => {
        let recetas = datos.data[0]
        const principal = document.getElementById('platos_pricipales');

        principal.innerHTML = `
        <article class="Plato">
            <img src="${recetas.imagen}" alt="${recetas.nombre}">
            <h1>${recetas.titulo}</h1>
            <p>${recetas.descripcion}</p>
        </article>
        `

    })
