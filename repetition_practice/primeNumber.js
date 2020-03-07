var read = require('readline-sync');
var range = read.question('Enter the range of numbers :: ');
var i = 0;
var num = 0;
var primeNumber = "";
for( i = 1; i <= range; i++) {
	var counter = 0;
	for (num = i; num >= 1; num--) {
		if(i % num == 0)
			counter = counter + 1;
	}
	if (counter == 2)
		primeNumber = primeNumber + i + " ";
}
console.log("Number is prime", primeNumber)