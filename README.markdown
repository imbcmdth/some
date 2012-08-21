# Some
A JavaScript library that adds **some** helper functions to strings and arrays for fun and profit.
Built on top of my very cool [reservoir library](http://github.com/imbcmdth/reservoir).

## Installation

### Node.js

For *Node.js*, use `npm`:

````console
npm install some
````

..then `require` Some:

````javascript
var Some = require('some');
````

### In the browser, traditional

For the *browser*, add the following to your pages:

````html
<script src="reservoir.js"></script>
<script src="some.js"></script>
````

### In the browser, using AMD (require.js)\*

...Or using AMD in the browser:

````javascript
require(["some"], function(Some) {
	// ...
});
````

\* Note the location passed to `require()` depends on where you installed the file `some.js`. The above assumes it resides directly within the main script directory of your project. `Some` also assumes that reservoir library resides in a subdirectory of it's current location named `reservoir`.


## Usage

`Some` is an object that contains two *decorator functions*: `Array` and `String`. The purpose of the decorator functions is to add some new methods to an existing `Array` or `String`.

### Basic

We can use these functions to decorate a single string or array object:

````javascript
var myString = Some.String("this is a string");

var myArray = Some.Array([1, 2, 3, 4, 5 ,6, 7, 8, 9, 10]);
````

Now, using those objects we can use some of the new functions:

````javascript
var newString = myString.replaceSome();

myData.forEach(function(e) {
	myReservoir.pushSome(e);
});
````

At this point, `myReservoir` will contain example 3 randomly-chosen values from the array `myData`:

````javascript
myReservoir => [2, 4, 7] // This can be any random subset of myData
````

## Decorations

### String

#### `replaceSome(regexOrString, numToReplace, functionOrString)`

### Array

#### `filterSome(numToEvaluate, callbackFunction, thisArg)`

#### `forSome(numToEvaluate, callbackFunction, thisArg)`

#### `everySome(numToEvaluate, callbackFunction, thisArg)`

#### `someSome(numToEvaluate, callbackFunction, thisArg)`

#### `reduceSome(numToEvaluate, callbackFunction, initialValue)`

#### `reduceRightSome(numToEvaluate, callbackFunction, initialValue)`

#### `mapSome(numToEvaluate, callbackFunction, thisArg)`

#### `mapSomeSparse(numToEvaluate, callbackFunction, thisArg)`
