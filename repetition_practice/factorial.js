var read = require('readline-sync');
var input = read.question('Enter the number for factorial :: ');

var fact = 1
for (let i = 1; i <= input; i++) {
	fact = fact * i;
}
console.log(`Factorial of a ${input} is ${fact}`);