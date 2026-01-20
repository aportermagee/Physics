let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, 10, 10);
ctx.fillRect(0, canvas.height - 10, 10, 10);
ctx.fillRect(canvas.width - 10, 0, 10, 10);
ctx.fillRect(canvas.width - 10, canvas.height - 10, 10, 10);
