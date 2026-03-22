// FECHA FIJA: 20 DE MAYO DE 2025
const FECHA_INICIO = new Date('2025-05-20T00:00:00');

// ACTUALIZAR CONTADOR DE TIEMPO JUNTOS
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

// CREAR ÁRBOL DE CORAZONES ANIMADO
function crearArbol() {
    const contenedor = document.getElementById('arbol-contenedor');
    const filas = 12;

    // CREAR HOJAS (CORAZONES)
    for (let fila = 0; fila < filas; fila++) {
        const cantidadCorazones = fila + 1;
        const espacio = (filas - fila) * 12;

        for (let i = 0; i < cantidadCorazones; i++) {
            const corazon = document.createElement('div');
            corazon.classList.add('corazon');
            corazon.textContent = '❤️';
            corazon.style.left = `${espacio + (i * 25)}px`;
            corazon.style.top = `${fila * 22}px`;
            corazon.style.animationDelay = `${(fila + i) * 0.2}s`;
            contenedor.appendChild(corazon);
        }
    }

    // CREAR TRONCO
    const tronco = document.createElement('div');
    tronco.classList.add('tronco');
    contenedor.appendChild(tronco);
}

// INICIAR TODO AL CARGAR LA PÁGINA
actualizarContador();
setInterval(actualizarContador, 60000); // Actualizar cada minuto
crearArbol();
