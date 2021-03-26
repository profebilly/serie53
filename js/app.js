smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
    selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
    speed: 2000, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function(anchor, toggle) {} // Function to run after scrolling
});

const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.peliculas');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');


/*Evento Listener flecha derecha */
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
})


/*Evento Listener flecha derecha */
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
})
const numeroPaginas = Math.ceil(peliculas / 5);
for (let i = 0; i < numeroPaginas; i++) {
    const indicador = document.createElement('button');

    if (i === 0) {
        indicador.classList.add('activo');
    }
    document.querySelector('.indicadores').appendChild('indicador');
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;
        document.querySelector('.indicador .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });

}