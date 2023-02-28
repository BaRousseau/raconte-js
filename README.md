# Comment refaire le live-coding de Raconte-moi le JavaScript

## Pré-requis

- NodeJS contenant npm
- (Optionel) Git

## Création du projet

```cmd
cd d:/sandbox

// Création du dossier projet
mkdir mon-super-projet

cd mon-super-projet
```

## (Optionnel) Initialisation Git

```shell
git init
echo /node_modules > .gitignore
```

## Initialisation du projet npm

```shell
npm init
```

Le fichier package.json a été créé.

## (Optionel) Configuration de npm pour ce projet

```cmd
// Création du fichier .npmrc
echo registry="https://registry.npmjs.org/" > .npmrc
```

## Création d'un premier fichier JavaScript

```cmd
// Création du fichier index.js
touch index.js
```

Contenu du fichier index.js :

```js
// Je déclare une variable et je lie une string 'coucou' à cette variable
maVariable = 'coucou'

console.log('Je suis un ' + maVariable + '.')
```

## Installer es-check pour vérifier le code JavaScript

```shell
npm install es-check --save-dev
```

## Ajouter les scripts pour vérifier et lancer le projet

Rajouter les scripts suivants :

- `es*`
- `check`
- `start`

Le fichier package.json ressemble à ça :

```json
{
  "name": "raconte-js",
  "version": "1.0.0",
  "description": "Conférence Raconte-moi le JavaScript",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "check": "npm run es6 & npm run es5 & npm run es3",
    "es3": "echo ES3 && es-check es3 *.js",
    "es5": "echo ES5 && es-check es5 *.js",
    "es6": "echo ES6 / ES2015 && es-check es2015 *.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/TripX/raconte-js.git"
  },
  "keywords": [
    "JavaScript",
    "Histoire"
  ],
  "author": "Bastien Rousseau",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/TripX/raconte-js/issues"
  },
  "homepage": "https://github.com/TripX/raconte-js#readme",
  "devDependencies": {
    "es-check": "^7.1.0"
  }
}
```

## Tester les commandes

```shell
// Vérification du code
npm run check

// Lancement du projet
npm run start
```

## Comment échouer un test

Contenu du fichier index.js :

```js
// Je déclare une variable et je lie une string 'coucou' à cette variable
let maVariable = 'coucou';

console.log('Je suis un ' + maVariable + '.');
```

```shell
// Vérification du code
npm run check
```

La vérification devrait échouer en ES3 et ES5.
Le mot réservé `let` n'existait pas avant ES6.

## Lancer le JavaScript dans un navigateur

Création d'un fichier index.html :

```cmd
touch index.html
```

```html
<!DOCTYPE html>
  <head>
    <title>Coucou</title>
    <script src="./index.js"></script>
  </head>
  <body id="main">Je suis un coucou HTML !</body>
</html>
```

Modifier index.js :

```js
window.onload = function () {
  // Je déclare une variable et je lie une string 'coucou' à cette variable
  var maVariable = 'coucou';

  console.log('Je suis un ' + maVariable + ' de la jungle JavaScript.');
  console.log(document.getElementById('main'));
}
```

Tester dans un navigateur avec et sans `onload`.

Avec une URL de ce type dans un onglet de navigateur : file:///d:/sandbox/raconte-js/index.html

## Démontrer que l'objet window n'existe pas dans Node

```shell
npm run start
```

## La suite avec Space Invader

- Voir le fichier space-invader-es3.md
