const canvas = document.getElementById('arbolCorazones');
const ctx = canvas.getContext('2d');

function ajustarTamañoCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
ajustarTamañoCanvas();
window.addEventListener('resize', ajustarTamañoCanvas);

const COLOR_CORAZON = '#e63946';
const COLOR_TRONCO = '#6a040f';
const CENTRO_X = canvas.width / 2;
const CENTRO_Y = canvas.height - 50;

let corazones = [];

function dibujarCorazon(x, y, tamaño) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x, y - tamaño/2, x - tamaño/2, y - tamaño/2, x - tamaño/2, y);
    ctx.bezierCurveTo(x - tamaño/2, y + tamaño/2, x, y + tamaño, x, y + tamaño/2);
    ctx.bezierCurveTo(x, y + tamaño, x + tamaño/2, y + tamaño/2, x + tamaño/2, y);
    ctx.bezierCurveTo(x + tamaño/2, y - tamaño/2, x, y - tamaño/2, x, y);
    ctx.closePath();
    ctx.fillStyle = COLOR_CORAZON;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    ctx.stroke();
}

function dibujarTronco() {
    ctx.beginPath();
    ctx.rect(CENTRO_X - 15, CENTRO_Y, 30, 80);
    ctx.fillStyle = COLOR_TRONCO;
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
}

function generarCorazones() {
    corazones = [];
    const niveles = 5;
    const tamañoInicial = 30;
    const espacioEntreNiveles = 40;

    for (let nivel = 0; nivel < niveles; nivel++) {
        const cantidadCorazones = nivel + 2;
        const tamañoCorazon = tamañoInicial - (nivel * 3);
        const y = CENTRO_Y - (nivel * espacioEntreNiveles);

        for (let i = 0; i < cantidadCorazones; i++) {
            const x = CENTRO_X + (i - (cantidadCorazones - 1)/2) * (tamañoCorazon + 10);
            corazones.push({ x, y, tamaño: tamañoCorazon, escala: 0 });
        }
    }
}

function animarCorazones() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarTronco();

    for (let i = 0; i < corazones.length; i++) {
        const corazon = corazones[i];
        if (corazon.escala < 1) {
            corazon.escala += 0.01;
        }

        ctx.save();
        ctx.translate(corazon.x, corazon.y);
        ctx.scale(corazon.escala, corazon.escala);
        ctx.translate(-corazon.x, -corazon.y);
        dibujarCorazon(corazon.x, corazon.y, corazon.tamaño);
        ctx.restore();
    }

    requestAnimationFrame(animarCorazones);
}

function actualizarContador() {
    // CAMBIA ESTA FECHA POR LA QUE QUIERAS
    const fechaInicial = new Date('2024-02-14T00:00:00');
    const fechaActual = new Date();
    const diferencia = fechaActual - fechaInicial;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('tiempoAmor').textContent = dias;
    document.getElementById('tiempoHoras').textContent = horas;
    document.getElementById('tiempoMinutos').textContent = minutos;
}

setInterval(actualizarContador, 60000);
actualizarContador();

window.addEventListener('load', () => {
    generarCorazones();
    animarCorazones();
});
