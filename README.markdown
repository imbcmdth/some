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
var myString = Some.String("A simple wish in the wind is like a bird on the dish.");

var myArray = Some.Array([1, 2, 3, 4, 5 ,6, 7, 8, 9, 10]);
````

Now, using those objects we can use some of the new functions:

````javascript
// replace 3 occurances of the letter "i" followed by at least two letters
// with the letter "a"
var newString = myString.replaceSome(/i(\w{2,})/g, 3, "a$1");

newString => "A simple wash in the wind is like a bard on the dash."

// Calculate the average value of 3 randomly chosen values
var average = myData.reduceSome(3, function(prev, curr, i) {
	var diff = curr - prev;
	return prev + diff / (i + 1);
});

average => 3.9
````

### Advanced Usage

If you want to use these decorations with *all* strings and arrays within your script they can be applied to the `String.prototype` and `Array.prototype` objects:

````javascript
Some.String(String.prototype);
Some.Array(Array.prototype);
````

## Decorations

### String([stringToDecorate])

Returns
`stringToDecorate` if provided otherwise a new `String` with the function below added to it.

#### `replaceSome(regexOrString, numToReplace, functionOrString)`

Replaces `numToReplace` number of `regexOrString` matches with `functionOrString`.

##### Parameters

### Array([stringToDecorate])

#### `filterSome(numToEvaluate, callbackFunction, thisArg)`

#### `forSome(numToEvaluate, callbackFunction, thisArg)`

#### `everySome(numToEvaluate, callbackFunction, thisArg)`

#### `someSome(numToEvaluate, callbackFunction, thisArg)`

#### `reduceSome(numToEvaluate, callbackFunction, initialValue)`

#### `reduceRightSome(numToEvaluate, callbackFunction, initialValue)`

#### `mapSome(numToEvaluate, callbackFunction, thisArg)`

#### `mapSomeSparse(numToEvaluate, callbackFunction, thisArg)`
