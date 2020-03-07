let intialValue = 0;
let sum = [ { x: 1 }, { x: 2 }, { x: 3 } ].reduce(
	( accumultor, currentValue ) => accumultor + currentValue.x
	, intialValue
)
console.log(sum);	// 6
