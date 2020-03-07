const myMap = new Map();

let keyString = 'a string';
let keyObject = {};
let keyFunction = function() {}

// setting the values
myMap.set(keyString, 'value associate with a String');
myMap.set(keyObject, 'Value associate with a object');
myMap.set(keyFunction, 'value associatec with a function');

console.log('Size of the map :: ', myMap.size);

// getting the values
console.log(myMap.get(keyString));	// value associate with a String
console.log(myMap.get(keyObject));	// Value associate with a object
console.log(myMap.get(keyFunction));	// value associatec with a function

console.log(myMap.get('a string'));	// value associate with a String
									// because keyString === 'a string'
console.log(myMap.get({}));		// undefined, because keyObject !== {}
console.log(myMap.get(function() {}));	// undefined, because keyFunction !== function() {}
