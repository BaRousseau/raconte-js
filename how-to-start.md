# How to start ?

Sources : <https://webreference.com/javascript/basics/versions/#introduction>

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

## Les nouveautés

- "use strict"

Au revoir variable non défini correctement.

```js
"use strict";
var canvas = document.getElementById("playground");
```

- "use strict"
- String[number] access
- Multiline strings
- String.trim()
- Array.isArray()
- Array forEach()
- Array map()
- Array filter()
- Array reduce()
- Array reduceRight()
- Array every()
- Array some()
- Array indexOf()
- Array lastIndexOf()
- JSON.parse()
- JSON.stringify()
- Date.now()
- Date toISOString()
- Date toJSON()
- Property getters and setters
- Reserved words as property names
- Object methods
- Object defineProperty()
- Function bind()
- Trailing commas

## ES6 ou ES2015

- Added let and const
- Added default parameter values
- Added Array.find()
- Added Array.findIndex()
- Arrow Functions
- Classes
- Default Parameters
- Destructuring
- Maps
- Sets
- Template Literals

```js
// Example of let and const in ES6
let name = "John Doe";
const age = 30;

// Example of arrow function in ES6
let add = (a, b) => a + b;
console.log(add(1, 2)); // Output: 3

// Example of template literals in ES6
let message = `Hello, ${name}!`;
console.log(message); // Output: "Hello, John Doe!"

// Example of class in ES6
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, ${this.name}!`;
  }
}
let john = new Person("John Doe", 30);
console.log(john.greet()); // Output: "Hello, John Doe!"
```

## ES2016

```js
// Example of exponentiation operator in ES7
let square = 2 ** 2;
console.log(square); // Output: 4

// Example of Array.prototype.includes in ES7
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // Output: true
```

## ES2017

```js
// Example of async/await in ES8
async function fetchData() {
  let response = await fetch("https://api.example.com/data");
  let data = await response.json();
  return data;
}

// Example of Object.values() and Object.entries() in ES8
let person = { name: "John Doe", age: 30 };
console.log(Object.values(person)); // Output: ["John Doe", 30]
console.log(Object.entries(person)); // Output: [["name", "John Doe"], ["age", 30]]

// Example of string padding in ES8
let text = "Hello";
console.log(text.padStart(10, "-")); // Output: "-----Hello"
console.log(text.padEnd(10, "-")); // Output: "Hello-----"
```

## ES2018

```js
// Example of asynchronous iteration in ES9
async function asyncIterable() {
  let iterable = {
    [Symbol.asyncIterator]() {
      let i = 0;
      return {
        next() {
          if (i < 3) {
            return Promise.resolve({ value: i++, done: false });
          }
          return Promise.resolve({ done: true });
        },
      };
    },
  };

  for await (let value of iterable) {
    console.log(value); // Output: 0, 1, 2
  }
}

// Example of Promise.prototype.finally() in ES9
fetch("https://api.example.com/data")
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finished!"));

// Example of rest/spread operators in ES9
let person = { name: "John Doe", age: 30, country: "USA" };
let { name, ...rest } = person;
console.log(name); // Output: "John Doe"
console.log(rest); // Output: { age: 30, country: "USA" }
```

## ES2019

```js
// Example of Array.prototype.flat() and Array.prototype.flatMap() in ES10
let array = [1, 2, [3, 4]];
console.log(array.flat()); // Output: [1, 2, 3, 4]

let numbers = [1, 2, 3, 4];
console.log(numbers.flatMap((x) => [x, x * 2])); // Output: [1, 2, 2, 4, 3, 6, 4, 8]

// Example of Object.fromEntries() in ES10
let entries = [
  ["name", "John Doe"],
  ["age", 30],
];
console.log(Object.fromEntries(entries)); // Output: { name: "John Doe", age: 30 }
```

## ES2020

```js
// Example of globalThis in ES11
console.log(globalThis); // Output: Window {...}

// Example of private fields in ES11
class Person {
  #name = "John Doe";
  #age = 30;

  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }
}

let person = new Person();
console.log(person.getName()); // Output: "John Doe"
console.log(person.getAge()); // Output: 30

// Example of nullish coalescing in ES11
let value = null;
console.log(value ?? "default"); // Output: "default"
```

## ES2021

```js
// Example of Logical Assignment Operators in ES12
let a = 0,
  b = 1;
a &&= b;
console.log(a); // Output: 0
a ||= b;
console.log(a); // Output: 1
a &&= b;
console.log(a); // Output: 1

// Example of Numeric Separators in ES12
let billion = 1_000_000_000; // This is equivalent to let billion = 1000000000;
console.log(billion); // Output: 1000000000

// Example of Promise.any() in ES12
let promises = [Promise.reject("1"), Promise.resolve("2"), Promise.reject("3")];
Promise.any(promises)
  .then((value) => console.log(value)) // Output: "2"
  .catch((error) => console.log(error));

// Example of String.prototype.replaceAll() in ES12
let string = "foo foo foo";
console.log(string.replaceAll("foo", "bar")); // Output: "bar bar bar"
```

## ES2022

- The ability to use top-level await, making it possible to use the keyword outside of an async function
- New class elements: private and public instance fields, private and public static fields, private instance methods and accessors, and private static methods and accessors
- The ability to use static blocks inside classes, which allows for per-class evaluation initialization
- The #x in obj syntax which allows you to test for the presence of private fields on objects
- Regular expression match indices via the /d flag, which provides start and end - indices for matched substrings
- The cause property on Error objects, that can be used to record a causation chain in errors
- The at method for Strings, Arrays, and TypedArrays, which allows relative indexing
- Object.hasOwn, a convenient alternative to Object.prototype.hasOwnProperty

<https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg>

## ES2023

<https://webreference.com/javascript/basics/versions/#ecma-script-2023-es-14>
