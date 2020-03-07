let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// filter array items based on search criteria (query)
function filterItems(arr, query) {
	return arr.filter(function(el) {
		return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
	})
}

console.log('Search Result :: ',filterItems(fruits, 'ap'));
// expected output => Search Result ::  [ 'apple', 'grapes' ]

console.log('Search Result :: ', filterItems(fruits, 'an'));
// expected output => Search Result ::  [ 'banana', 'mango', 'orange' ]
