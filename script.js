// FECHA INICIAL: 20 DE MAYO DE 2025
const FECHA_COMIENZO = new Date('2025-05-20T00:00:00');

// ACTUALIZAR CONTADOR
function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - FECHA_COMIENZO;

    // CALCULAR VALORES (SI LA FECHA ES PASADA, MUESTRA LOS NÚMEROS CORRECTOS)
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    // ACTUALIZAR LOS ELEMENTOS
    document.getElementById('dias').textContent = dias < 0 ? 0 : dias;
    document.getElementById('horas').textContent = horas < 0 ? 0 : horas;
    document.getElementById('minutos').textContent = minutos < 0 ? 0 : minutos;
}

// CREAR VARIOS CORAZONES
function crearCorazones() {
    const contenedor = document.getElementById('fondo-corazones');
    if (!contenedor) return; // SI NO EXISTE EL CONTENEDOR, NO HACER NADA

    const corazon = document.createElement('div');
    corazon.classList.add('corazon-fondo');
    corazon.textContent = '❤️';

    // VALORES ALEATORIOS
    const posX = Math.random() * 100;
    const tamano = 12 + Math.random() * 18;
    const duracion = 4 + Math.random() * 8;
    const retardo = Math.random() * 2;

    // APLICAR ESTILOS
    corazon.style.left = `${posX}%`;
    corazon.style.fontSize = `${tamano}px`;
    corazon.style.animation = `subir-y-girar ${duracion}s infinite ease-in-out`;
    corazon.style.animationDelay = `${retardo}s`;
    corazon.style.color = '#ff50b4';
    corazon.style.textShadow = '0 0 8px #ff50b4';

    // AGREGAR Y ELIMINAR
    contenedor.appendChild(corazon);
    setTimeout(() => corazon.remove(), (duracion + retardo) * 1000);
}

// INICIAR FUNCIONES
actualizarContador();
setInterval(actualizarContador, 60000);
setInterval(crearCorazones, 200); // CREAR UN CORAZÓN CADA 0.2 SEGUNDOS

// AGREGAR LA ANIMACIÓN AL CSS SI NO EXISTE
const style = document.createElement('style');
style.textContent = `
@keyframes subir-y-girar {
    0% { transform: translateY(100vh) rotate(0deg) scale(0.8); opacity: 0; }
    15% { opacity: 1; }
    85% { opacity: 1; }
    100% { transform: translateY(-30px) rotate(360deg) scale(1.2); opacity: 0; }
}
`;
document.head.appendChild(style);
