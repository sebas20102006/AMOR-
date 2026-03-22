// FECHA INICIAL DE TU HISTORIA DE AMOR: 20 DE MAYO DE 2025
const FECHA_COMIENZO = new Date('2025-05-20T00:00:00');

// FUNCIÓN PARA ACTUALIZAR EL CONTADOR
function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - FECHA_COMIENZO;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
}

// FUNCIÓN PARA CREAR CORAZONES FLOTANTES
function crearCorazones() {
    const contenedor = document.getElementById('fondo-corazones');
    const corazon = document.createElement('div');
    corazon.classList.add('corazon-fondo');
    corazon.textContent = '❤️';

    // VALORES ALEATORIOS PARA CADA CORAZÓN
    const posX = Math.random() * 100;
    const tamano = 15 + Math.random() * 15;
    const retardo = Math.random() * 3;

    corazon.style.left = `${posX}%`;
    corazon.style.fontSize = `${tamano}px`;
    corazon.style.animationDelay = `${retardo}s`;

    contenedor.appendChild(corazon);

    // ELIMINAR EL CORAZÓN DESPUÉS DE SU ANIMACIÓN
    setTimeout(() => {
        corazon.remove();
    }, (retardo + 6) * 1000);
}

// INICIAR TODO
actualizarContador();
setInterval(actualizarContador, 60000);
setInterval(crearCorazones, 300);
