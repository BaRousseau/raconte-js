# How to start ?

```bash
mkdir es-evol
ls es-evol
touch index.js
```

## Launch

```bash
node index.js
```

## Disclaimer

Node doesn't exist in 1995.

## Unicode and Emoji

Unicode Standard, Version 2.0 is supported by the first version of JavaScript.

## ES1 - ES2 (1997 - 1998)

```js
// Variable in ES1
var mathematician = "John Doe ✔️";
console.log(mathematician);

// Function in ES1
function divide(dividend, divisor) {
  // Control Flow in ES1
  if (divisor !== 0) {
    return dividend / divisor;
  } else {
    return 0;
  }
}

// For Loop in ES1
for (let index = 0; index < 10; index++) {
  console.log(divide(index * index, index));
}

// console is a global variable added at runtime.
```

## ES3 (1999)

```js
var mathematician = "John Doe ✔️";

// Regular expressions in ES3
var regex = /Doe/;
console.log("Regex:", regex.test(mathematician));

function makeError() {
  // Try-catch statement in ES3
  try {
    var explode = hello;
  } catch (error) {
    console.error(error);
  }
}

makeError();

// Closure in ES3
function makeAdder(x) {
  // Anonymous function in ES3
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

/**
 * add5 and add10 are closures. They share the same function body definition,
 * but store different lexical environments.
 * In add5's lexical environment, x is 5,
 * while in the lexical environment for add10, x is 10.
 */

// do-while and Switch not shown here
```

## ES4

```js
☠️
```

## Environnement Web

```bash
touch index.html
touch styles.css
```

index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Coucou</title>
    <script type="text/javascript" src="./index.js"></script>
    <link href="./styles.css" rel="stylesheet" />
  </head>
  <body>
    <canvas id="playground"></canvas>
  </body>
</html>
```

styles.css

```css
* {
  padding: 0;
  margin: 0;
}

canvas {
  background: #9b7653;
  display: block;
  margin: 0 auto;
}
```

## Notes Canvas

Le `canvas` est créé en 2004 par Apple.
Cette notion HTML ne sera supportée qu'à partir de 2005 par Firefox (Gecko).

## Notes requestAnimationFrame

`requestAnimationFrame` apparaît en 2011. Standard en 2013.

## Start Server

```bash
npx serve .
```

On a browser, go to :

<http://localhost:3000>

## ES5 - 5.1 (2009 - 2011)

```js
window.onload = function () {
  canvas = document.getElementById("playground");
  var ctx = canvas.getContext("2d");

  // Map
  var map = [];

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
  var KEY_UP_NAME = "keyup";
  var KEY_DOWN_NAME = "keydown";

  // Window Event
  window.addEventListener("resize", resizeAndDrawCanvas, false);

  // DOM Event
  document.addEventListener(KEY_DOWN_NAME, keyHandler, false);
  document.addEventListener(KEY_UP_NAME, keyHandler, false);

  function keyHandler(e) {
    var status = e.type === KEY_DOWN_NAME;
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

  function drawSquare(x, y, color) {
    return function () {
      ctx.beginPath();
      ctx.rect(x, y, playerSize, playerSize);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();
    };
  }

  function handlePlayerMove() {
    if (rightPressed) {
      playerX += playerSize;
    } else if (leftPressed) {
      playerX -= playerSize;
    } else if (downPressed) {
      playerY += playerSize;
    } else if (upPressed) {
      playerY -= playerSize;
    }
  }

  function drawMap() {
    map.push({ x: playerX, y: playerY });

    map.forEach((item) => {
      drawSquare(item.x, item.y, "white")();
    });
  }

  function draw() {
    resizeAndDrawCanvas();
    drawMap();
    drawSquare(playerX, playerY, playerColor)();
    handlePlayerMove();
    requestAnimationFrame(draw);
  }

  function resizeAndDrawCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  draw();
};
```

## Script defer (2010)

`window.onload` n'est plus utile dans notre cas.

La balise HTML script accepte defer / async en attribut (2010 = Chrome 8)

```html
<script defer src="./index.js"></script>
```

## "use strict"

Au revoir variable non défini correctement.

```js
"use strict";
var canvas = document.getElementById("playground");
```

## ES6 ou ES2015

- Added let and const
- Added default parameter values
- Added Array.find()
- Added Array.findIndex()
- Arrow Functions
- Classes
- Default Parameters
- Destructuring
- Let and Const
- Maps
- Sets
- Template Literals
