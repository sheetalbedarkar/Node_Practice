const args = require('yargs').argv;
let powerOfTwo = 1;
let i = 0
while (i <= args.power) {
		powerOfTwo = Math.pow(2, i)
		console.log("2^" + i + " = " + powerOfTwo);
		i++;
}