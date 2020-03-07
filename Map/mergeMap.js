let original = new Map([
	[1, 'one']
])

// data itself is not clonned
let clone = new Map(original);

console.log(clone.get(1));	// one
console.log(original === clone);	// usefull for shallow comparison
