// CAMBIA ESTA FECHA POR LA DE INICIO DE USTEDES (FORMATO: AÑO-MES-DÍA)
const FECHA_INICIAL = new Date('2022-05-15T00:00:00');

// Función para actualizar el contador de tiempo juntos
function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - FECHA_INICIAL;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
}

// Función para crear el árbol de corazones animado
function crearArbol() {
    const contenedor = document.getElementById('arbol-corazones');
    const filas = 10;

    // Crear las hojas de corazones
    for (let i = 0; i < filas; i++) {
        const cantidadCorazones = i + 1;
        const espacio = (filas - i) * 10;

        for (let j = 0; j < cantidadCorazones; j++) {
            const corazon = document.createElement('div');
            corazon.classList.add('corazon');
            corazon.textContent = '❤️';
            corazon.style.left = `${espacio + (j * 30)}px`;
            corazon.style.top = `${i * 25}px`;
            corazon.style.animationDelay = `${(i + j) * 0.2}s`;
            contenedor.appendChild(corazon);
        }
    }

    // Crear el tronco del árbol
    const tronco = document.createElement('div');
    tronco.style.width = '20px';
    tronco.style.height = '60px';
    tronco.style.backgroundColor = '#8B4513';
    tronco.style.position = 'absolute';
    tronco.style.bottom = '0';
    tronco.style.left = 'calc(50% - 10px)';
    contenedor.appendChild(tronco);
}

// Iniciar todo al cargar la página
actualizarContador();
setInterval(actualizarContador, 60000); // Actualizar cada minuto
crearArbol();
