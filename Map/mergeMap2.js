let first = new Map([
	[1, 'one'],
	[2, 'two'],
	[3, 'three']
])

let second = new Map([
	[1, 'uno'],
	[2, 'dos']
])

// Merge two maps. The last repeated key wins.
// Spread operator essentially converts a Map to an Array
let merged = new Map([...first, ...second])

console.log(merged.get(1));	// uno
console.log(merged.get(2));	// dos
console.log(merged.get(3));	// three

// Merge maps with an array. The last repeated key wins.
let merge2 = new Map([...first, ...second, [1, 'eins']])

console.log((merge2.get(1)));	// eins
console.log((merge2.get(2)));	// dos
console.log((merge2.get(3)));	// three