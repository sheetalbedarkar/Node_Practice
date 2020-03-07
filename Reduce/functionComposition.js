// Building blocks to use for composition
const double = x => x + x;
const triple = x => 3 * x;
const quadruple = x => 4 * x;

// Function Composition enabling pipe functionality
const pipe = (...functions) => input => functions.reduce(
	(acc, fn) => fn(acc),
	input
)

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
console.log(multiply6(6));
console.log(multiply9(9));
console.log(multiply16(16));
console.log(multiply24(10));
