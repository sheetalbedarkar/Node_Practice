const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

const filterItems = (array, query) => {
	return array.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1 );
}

console.log('Search Result :: ',filterItems(fruits, 'ap'));
// expected output => Search Result ::  [ 'apple', 'grapes' ]

console.log('Search Result :: ', filterItems(fruits, 'an'));
// expected output => Search Result ::  [ 'banana', 'mango', 'orange' ]