let myMap = new Map();
myMap.set(NaN, 'Not a number');

console.log(myMap.get(NaN));

let otherNaN = Number('foo');
console.log(myMap.get(otherNaN));