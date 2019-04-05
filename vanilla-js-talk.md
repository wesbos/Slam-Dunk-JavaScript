## Get Better at JavaScript with Just JavaScript

This talk will be a mix bag of tips, techniques and code samples to improve your core JavaScript understanding and make you a more confident web developer. We will dive into the Modern Dom, data massaging techniques, flow control, async Javascript and some neat stuff in the future of JavaScript. Get ready to slam dunk JavaScript.

## The DOM
These are things that will help you interface with the web browser. Even if you aren't using Vanilla JS, most of theses APIs come in handy even inside of frameworks.

<!-- TODO -->
insertAdjacentElement()
insertAdjacentHTML()
insertAdjacentText()

'beforebegin': Before the element itself.
'afterbegin': Just inside the element, before its first child.
'beforeend': Just inside the element, after its last child.
'afterend': After the element itself.


* IntersectionObserver

* Resize Observer
  * Watching for resizing
  * Measuring
  * Content Queries

.closest()
.matches()
.contains(node)

* Bling.js


## CSS Variables?
* CSS Custom Properties

## Data Massaging
These are some tricks I use all the time

map, filter, reduce, some, every,

find - for one
filter - for many

* Array.from() map function
* Uniqueifying [...new Set(arr)]
* Object Copy with rest
* Object Copy with spread
* [...myArray].reverse()
* return an array instead of an object

## flow control
for of

Static Methods
Promise.all() - when all resolve()
Promise.race() - when one resolve() or reject()
Promise.any() - when one resolve() or all reject()
Promise.allSettled() - when all finished - can be mix of resolve() or reject()

const days = Array.from({ length: 7 }, (_, index) => (
	new Date(0, 0, index).toLocaleDateString('en-US', { weekday: 'long' })
));

## Error handling?
sequential promises ??
Promise.finally() - when a resolve() or reject()
* Async + Await

## Neat Future stuff
Speech Detection
Shape Detection - Faces - barcode...
