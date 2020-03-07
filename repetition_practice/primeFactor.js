let read = require('readline-sync');

let input = read.question('Enter the number for prime factors :: ');

for (let i = 2; i * i < input; i++)	{
	while(input % i == 0)	{
		console.log(i);
		input = input / i;
	}
}
if (input > 2) {
	console.log(input)
}