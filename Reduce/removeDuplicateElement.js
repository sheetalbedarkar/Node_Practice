let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd', 'd']

let myOrderedArray = myArray.reduce((accumulator, currentValue) => {
	if (accumulator.indexOf(currentValue) === -1)
		accumulator.push(currentValue)
	return accumulator
}, [])
console.log(myOrderedArray);

/* If you are using an environment compatible with Set and Array.from() */
// let orderedArray = Array.from(new Set(myArray))
// console.log(orderedArray);