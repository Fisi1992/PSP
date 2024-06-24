// Datos ficticios para el gráfico de barras
const data = [10, 20, 15, 25, 30];

// Crear el gráfico de barras
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 300;
canvas.height = 200;
document.body.appendChild(canvas);

// Estilo del gráfico de barras
ctx.fillStyle = '#4CAF50';
const barWidth = 50;
let x = 50;

// Dibujar las barras según los datos
data.forEach(value => {
    const barHeight = value * 5;
    ctx.fillRect(x, 200 - barHeight, barWidth, barHeight);
    x += barWidth + 20;
});
