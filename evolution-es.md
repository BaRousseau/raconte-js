# Evolution ES

## ES1-2-3

Pas testable.

## ES-3.1 (ou 4)

```shell
npm run es3
```

Added regular expressions
Added try/catch
Added switch
Added do-while

Là on peut voir les limites de es-check, il ne vérifie que la syntaxe.
Alors que la méthode filter n'existe pas encore en es3.

Voici un polyfill de filter :

```js
Array.prototype.filter = function (callBack) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
        var result = callBack(this[i], i, this);
        if (result) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}
```

## ES5

```shell
npm run es5
```

Added "strict mode"
Added JSON support
Added String.trim()
Added Array.isArray()
Added Array iteration methods
Allows trailing commas for object literals

- Remplacer les 'let' par des 'var'.
- Remplacer les "=>" par des 'function() { return }' ???

La balise HTML script accepte defer / async en attribut (2010 = Chrome 8)

```html
    <script defer src="./index.js"></script>
```

window.onload n'est plus utile.

## ES6 ou ES2015
