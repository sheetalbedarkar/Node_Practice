/* The set() method adds or updates an element with specified
key and value to a Map object */

const map1 = new Map();

/* Since the Map mathod returns back the same Map Object,
we can chain the method call like this */
map1.set('bar', 'foo')
	.set(1, 'foobar')
	.set(2, 'baz');

console.log(map1.get(1));

// Update an element in the map
map1.set(1, 'foobar1');
console.log(map1.get(1));
