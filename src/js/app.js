document.addEventListener('DOMContentLoaded', function() {
    crearGalerio();
})

function crearGalerio(){
    const CANTIDAD_IMAGENES = 8;
    const galeria = document.querySelector('.galeria__imagenes');

    for(let i = 1; i <= CANTIDAD_IMAGENES; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `src/images/full/${i}.jpg`;
        imagen.alt = `Imagen galeria`;

        //Event Handler para mostrar imagen en grande
        imagen.onclick = function(){
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(i){
    const imagen = document.createElement('IMG');
    imagen.src = `src/images/full/${i}.jpg`;
    imagen.alt = `Imagen galeria`;

    //Generar Modal
    const modal = document.createElement('DIV');//Crea un div
    modal.classList.add('modal');//Crea una clase llamada modal
    modal.onclick = cerrarModal;
    modal.appendChild(imagen);//Agrega la imagen al modal

    //Boton Cerrar Modal
    const cerrarModalBtn = document.createElement('BUTTON');
    cerrarModalBtn.textContent = 'X';
    cerrarModalBtn.classList.add('btn-cerrar');//Agrega una clase al boton
    cerrarModalBtn.onclick = cerrarModal;//Agrega el event handler para cerrar el modal
    modal.appendChild(imagen);
    modal.appendChild(cerrarModalBtn);

    //Agregar al HTML
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');//Agrega la clase para evitar el scroll al abrir el modal
    body.appendChild(modal);

    console.log(modal);
}

function cerrarModal(){
    const modal = document.querySelector('.modal');
    modal.classList.add('fadeOut');//Agrega la clase para cerrar el modal

    setTimeout(() => {
        modal?.remove();//El signo de interrogacion es para validar que exista el modal

        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden');//Quita la clase para volver a activar el scroll
    }, 500);//Espera 0.5 segundos para cerrar el modal
}