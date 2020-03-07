const numbers = [-5, 6, 2, 0]

let doublePositiveNumber = numbers.reduce((accumulator, currentValue) => {
	if (currentValue > 0 ) {
		const double = currentValue * 2;
		accumulator.push(double);
	}
	return accumulator;
}, []);
console.log(doublePositiveNumber);
