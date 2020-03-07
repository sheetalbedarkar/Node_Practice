let people = [
	// { name: 'Alice', age: 21 },
	// { name: 'Max', age: 20 },
	// { name: 'Jane', age: 20 }
	{ name: 'Alice', age: 21 },
	{ name: 'Max', age: 20 },
	{ name: 'Jane', age: 20 }
];

let groupBy = (objectArray, property) => {
	return objectArray.reduce((acc, obj) => {
		let key = obj[property]
		if (!acc[key]) {			
			acc[key] = []
		}
		acc[key].push(obj)
		return acc
	}, {})
}

let groupedPeople = groupBy(people, 'age');
console.log(groupedPeople);
