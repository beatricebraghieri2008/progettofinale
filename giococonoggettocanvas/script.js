js:const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Parametri del gioco
const pacmanRadius = 20;
let pacmanX = 180;
let pacmanY = 180;
const speed = 5;

// Funzione per disegnare Pac-Man
function drawPacman() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Pulisce la tela ad ogni frame

    ctx.beginPath();
    ctx.arc(pacmanX, pacmanY, pacmanRadius, 0.2 * Math.PI, 1.8 * Math.PI);  // Pac-Man come arco
    ctx.lineTo(pacmanX, pacmanY);  // Completa la forma
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
}
// Funzione per muovere Pac-Man
function movePacman(event) {
    switch (event.key) {
        case "ArrowUp":
            if (pacmanY - pacmanRadius > 0) pacmanY -= speed;
            break;
        case "ArrowDown":
            if (pacmanY + pacmanRadius < canvas.height) pacmanY += speed;
            break;
        case "ArrowLeft":
            if (pacmanX - pacmanRadius > 0) pacmanX -= speed;
            break;
        case "ArrowRight":
            if (pacmanX + pacmanRadius < canvas.width) pacmanX += speed;
            break;
    }

    drawPacman();  // Rende visibile Pac-Man dopo ogni movimento
}

// Inizializza il gioco e imposta gli eventi per i tasti direzionali
document.addEventListener('keydown', movePacman);
drawPacman();  // Disegna Pac-Man all'inizio
