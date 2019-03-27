---
title: React Practice
---

# React Practice

Opdrachten om te oefenen met met React componenten, interactie, en state.


### 1. Hoe vang je interactie op een element?

Klik op de button, er verschijnt een alert.

![simple interaction](img/01_handle-click-on-button.gif)


### 2. Gebruik interactie op een element om een ander element aan te passen

In plaats van alleen eenmalig een alert tonen, verander nu een ander element in de DOM.

![verander een element](img/02_set-state-on-click.gif)


### 3. Toggle state

Maak het vorige voorbeeld zodat je met een volgende klik weer terug naar de beginstatus kan gaan.
In het voorbeeld verander ik de tekst en klassenaam van de button zelf, en ik toon een tekst als de status 'liked' is. Hint: als je er niet in één keer uitkomt, bouw dit één stapje tegelijk!

![toggle state](img/03_toggle.gif)

### 4. Deel state tussen componenten.

Het verschil met oefening 3 is dat we nu de interactie tussen losse componenten willen laten plaatsvinden.

In het voorbeeld heb ik een header met login-knop en een 'content' gedeelte. In het echt zouden deze allebei waarschijnlijk ingewikkeld genoeg zijn dat ze ook echt hun eigen component zouden verdienen, dus heb ik ze als twee componenten geimplementeerd die ik in `App.js` importeer en gebruik:

```javascript
import HeaderBar from './ex04-headerbar.js';
import Content from './ex04-content';
```

Waar het in deze oefening om gaat is dat je een klik binnen de Header Bar component kan registreren en ervoor zorgen dat iets in een ander component verandert. Hint: 'lift state up'.

![lift state up](img/04_lift-state-up.gif)
