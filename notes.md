# Notes


## Javascript en React

`this`

`this` in Javascript verwijst naar het context waarin de functie werd uitgeroepen. Er zijn echter een aantal verschillende regels waardoor het verwarrend kan zijn. Voor React Class components, moet je het volgende weten:

* alle methodes op de klasse moet je `bind`-en in de `constructor`.

```javascript

class MyComp extends React.Component {
  constructor {
    super(props)
    this.myHandler = this.myHandler.bind(this)
  
  
  }
  
  myHandler(args) {
    doSomething()
  }
  
  render() {
    //...
  }

}
```

De speciale methodes `componentDidMount`, `componentWillUpdate` etc. hoef je niet te binden.

Voor details, zie de MDN documentatie ([this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)).


**Arrow functions** creëren niet een nieuwe context (closure). Arrow functions zien er zo uit:

```javascript
() => 1+1; //de enige statement wordt automatisch geretourneerd
```

of:

```javascript
() => {
  //met meerdere regels moet je wel expliciet 'return' zeggen
  let n = 1 + 1;
  return n;
}
```


## Types React components

### Classes

* kunnen state hebben

### F
