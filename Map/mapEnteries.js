const myMap = new Map();

myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

const mapIterator = myMap.entries();

console.log(mapIterator.next().value);	// [ '0', 'foo' ]
console.log(mapIterator.next().value);	// [ 1, 'bar' ]
console.log(mapIterator.next().value);	// [ {}, 'baz' ]