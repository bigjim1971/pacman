var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

// Draw the maze
// ...

// Create Pac-Man character
var pacMan = {
  x: 224,
  y: 416,
  radius: 15,
  direction: "right",
  speed: 5
};

// Draw Pac-Man
function drawPacMan() {
  ctx.beginPath();
  ctx.arc(pacMan.x, pacMan.y, pacMan.radius, 0.25 * Math.PI, 1.75 * Math.PI);
  ctx.lineTo(pacMan.x, pacMan.y);
  ctx.closePath();
  ctx.fillStyle = "yellow";
  ctx.fill();
}

// Move Pac-Man
function movePacMan() {
  if (pacMan.direction === "right") {
    pacMan.x += pacMan.speed;
  } else if (pacMan.direction === "left") {
    pacMan.x -= pacMan.speed;
  } else if (pacMan.direction === "up") {
    pacMan.y -= pacMan.speed;
  } else if (pacMan.direction === "down") {
    pacMan.y += pacMan.speed;
  }
}

// Handle arrow key input
document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowRight") {
    pacMan.direction = "right";
  } else if (event.code === "ArrowLeft") {
    pacMan.direction = "left";
  } else if (event.code === "ArrowUp") {
    pacMan.direction = "up";
  } else if (event.code === "ArrowDown") {
    pacMan.direction = "down";
  }
});

// Game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPacMan();
  movePacMan();
  // ...
  requestAnimationFrame(gameLoop);
}

gameLoop();