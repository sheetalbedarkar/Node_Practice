// Modifying each words
let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];

const modifiedWords = words.filter((word, index, arr) => {
	arr[index + 1] += ' extra'
	return word.length < 6
})

console.log('Modifying each word ::', modifiedWords)
// Output => Modifying each word :: [ 'spray' ]
// There are three words below length 6, but since they've been modified one is returned

// Appending new words
words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']
const appendWords = words.filter((word, index, arr) => {
	arr.push('new');
	return word.length < 6
})

console.log('Appending new words :: ', appendWords);
// Output => Appending new words ::  [ 'spray', 'limit', 'elite' ]
// Only three fits the condition even though the words itself now has a lot more words

words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const deleteWords = words.filter( (word, index, arr) => {
	arr.pop()
	return word.length < 6
})

console.log('Delete words :: ', deleteWords);
// Notice 'elite' is not even obtained as its been popped off `words` before filter can even get there
// Output => Delete words ::  [ 'spray', 'limit' ]
