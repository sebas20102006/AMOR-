// FECHA FIJA: 20 DE MAYO DE 2025
const FECHA_INICIO = new Date('2025-05-20T00:00:00');

// FUNCIÓN PARA ACTUALIZAR EL CONTADOR
function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - FECHA_INICIO;
    
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
}

// FUNCIÓN PARA CREAR EL ÁRBOL DE CORAZONES FORMA CORRECTA
function crearArbol() {
    const contenedor = document.getElementById('arbol-contenedor');
    const filas = 12;

    // CREAR LAS FILAS DE CORAZONES (FORMANDO EL ÁRBOL)
    for (let fila = 0; fila < filas; fila++) {
        const cantidadCorazones = fila + 1;
        const espacioIzquierdo = (contenedor.offsetWidth / 2) - ((cantidadCorazones * 25) / 2);

        for (let i = 0; i < cantidadCorazones; i++) {
            const corazon = document.createElement('div');
            corazon.classList.add('corazon');
            corazon.textContent = '❤️';
            corazon.style.left = `${espacioIzquierdo + (i * 25)}px`;
            corazon.style.top = `${fila * 22}px`;
            corazon.style.animationDelay = `${(fila + i) * 0.2}s`;
            contenedor.appendChild(corazon);
        }
    }

    // CREAR EL TRONCO DEL ÁRBOL
    const tronco = document.createElement('div');
    tronco.classList.add('tronco');
    contenedor.appendChild(tronco);
}

// INICIAR TODAS LAS FUNCIONES
actualizarContador();
setInterval(actualizarContador, 60000); // Actualizar cada minuto
crearArbol();
