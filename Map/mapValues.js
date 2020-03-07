const map1 = new Map();

map1.set('0', 'bar');
map1.set(1, 'foo');
map1.set({}, 'baz');

const iterator = map1.values();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);