const myMap = new Map();
myMap.set('bar', 'foo');

console.log(myMap.delete('bar'));	// true
console.log(myMap.has('bar'));	// false