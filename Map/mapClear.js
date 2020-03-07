const myMap = new Map();

myMap.set('bar', 'baz');
myMap.set(1, 'foo');

console.log('Size of the map :: ', myMap.size);	// 2
console.log('Is map contains key bar :: ', myMap.has('bar'));	// true

myMap.clear();
console.log('Size of the map :: ', myMap.size);	// 0
console.log('Is map contains key bar :: ', myMap.has('bar'));	// false