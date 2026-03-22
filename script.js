// FECHA FIJA: 20 DE MAYO DE 2025
const FECHA_INICIO = new Date('2025-05-20T00:00:00');

// ACTUALIZAR CONTADOR
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

// CREAR CORAZONES FLOTANTES
function crearCorazon() {
    const zona = document.getElementById('zona-corazones');
    const corazon = document.createElement('div');
    corazon.classList.add('corazon-flotante');
    corazon.textContent = '❤️';

    // POSICIÓN ALEATORIA EN LA PANTALLA
    const posicionX = Math.random() * 100;
    // TIEMPO DE ANIMACIÓN ALEATORIO
    const tiempoAnimacion = 3 + Math.random() * 7;
    // TAMAÑO ALEATORIO
    const tamano = 15 + Math.random() * 15;

    corazon.style.left = `${posicionX}%`;
    corazon.style.fontSize = `${tamano}px`;
    corazon.style.animationDuration = `${tiempoAnimacion}s`;

    zona.appendChild(corazon);

    // BORRAR EL CORAZÓN DESPUÉS DE SU ANIMACIÓN
    setTimeout(() => {
        corazon.remove();
    }, tiempoAnimacion * 1000);
}

// INICIAR TODO
actualizarContador();
setInterval(actualizarContador, 60000);
// CREAR UN CORAZÓN CADA SEGUNDO
setInterval(crearCorazon, 1000);
