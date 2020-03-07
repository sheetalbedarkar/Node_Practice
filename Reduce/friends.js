let friends = [{
	name: 'Anna',
	books: ['Bible', 'Harry potter'],
	age: 21
}, {
	name: 'Bob',
	books: ['War and peace', 'Romeo and Juliet'],
	age: 26
}, {
	name: 'Alice',
	books: ['The lord of the Rings', 'The Shining'],
	age: 18
}]

let allBooks = friends.reduce((accumulator, currentValue) => {
	return [...accumulator, ...currentValue.books]
}, ['Alphabet'])
console.log(allBooks);