// FECHA FIJA: 20 DE MAYO DE 2025
const FECHA_INICIO = new Date('2025-05-20T00:00:00');

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

actualizarContador();
setInterval(actualizarContador, 60000);
