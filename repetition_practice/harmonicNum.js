const args = require('yargs').argv;

var sum = 0;
for(let i = 1; i <= args.number; i++) {
	sum += (1 / i);
	console.log("1/" + i + " + ")
}
console.log("Harmonic series :: "+ args.number + " = "+ sum);