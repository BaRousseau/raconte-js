window.onload = function () {
  var canvas = document.getElementById("playground");
  var ctx = canvas.getContext("2d");

  // Player
  var playerSize = 50;
  var playerX = 0;
  var playerY = 0;
  var playerColor = "#0095DD";

  // Buttons
  var rightPressed = false;
  var leftPressed = false;
  var downPressed = false;
  var upPressed = false;
  var keyupName = "keyup";
  var keydownName = "keydown";

  // Window Event
  window.addEventListener("resize", resizeAndDrawCanvas, false);

  // DOM Event
  document.addEventListener(keydownName, keyHandler, false);
  document.addEventListener(keyupName, keyHandler, false);

  function keyHandler(e) {
    var status = e.type === keydownName;
    if (e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = status;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = status;
    } else if (e.key == "Down" || e.key == "ArrowDown") {
      downPressed = status;
    } else if (e.key == "Up" || e.key == "ArrowUp") {
      upPressed = status;
    }
  }

  function drawPlayer() {
    ctx.beginPath();
    ctx.rect(playerX, playerY, playerSize, playerSize);
    ctx.fillStyle = playerColor;
    ctx.fill();
    ctx.closePath();
  }

  function handlePlayerMove() {
    if (rightPressed && playerX <= window.innerWidth - playerSize * 2) {
      playerX += playerSize;
    } else if (leftPressed && playerX > 0) {
      playerX -= playerSize;
    } else if (downPressed && playerY <= window.innerHeight - playerSize * 2) {
      playerY += playerSize;
    } else if (upPressed && playerY > 0) {
      playerY -= playerSize;
    }
  }

  function cleanMap() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function draw() {
    resizeAndDrawCanvas();
    cleanMap();
    drawPlayer();
    handlePlayerMove();
    requestAnimationFrame(draw);
  }

  function resizeAndDrawCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  draw();
};
