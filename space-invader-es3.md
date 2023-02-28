# Space invader

## Sources

<https://spaceinvaders.lamarque.tech/>

## Transformer le space invader en ES5 valide

```shell
npm run es5
```

- Remplacer les 'let' par des 'var'.
- Remplacer les "=>" par des 'function() { return }'.

## Transformer le space invader en ES3 valide

```shell
npm run es3
```

- Supprimer la virgule sur la dernière propriété

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
