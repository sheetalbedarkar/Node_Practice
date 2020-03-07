let arr = [{ id: 15 },
{ id: -1 },
{ id: 0 },
{ id: 3 },
{ id: 3 },
{ id: 12.2 },
{},
{ id: null },
{ id: NaN },
{ id: 'undefined' }
];

let invalidEnteries = 0;

function isNumber(obj) {
	return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterById(item) {	
	if (isNumber(item.id) && item.id !== 0) {		
		return true;
	}
	invalidEnteries++;
	return false;
}

let arrayById = arr.filter(filterById);

console.log('Filtered array :: ', arrayById);
// expected output => Filtered array ::  [ { id: 15 }, { id: -1 }, { id: 3 }, { id: 3 }, { id: 12.2 } ]

console.log('Number of invalid enteries :: ', invalidEnteries);
// expected output => Number of invalid enteries ::  5