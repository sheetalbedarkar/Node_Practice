const map1 = new Map();

map1.set(0, 'zero');
map1.set(1, 'one');

for (const [key, value] of map1) {
	console.log(`${key} = ${value}`);
}

for (const key of map1.keys()) {
	console.log(key);
}

for (const value of map1.values()) {
	console.log(value);
}

for (const [key, value] of map1.entries()) {
	console.log(`${key} = ${value}`);
}

map1.forEach( (value, key) => {
	console.log(`${key} = ${value}`);
});