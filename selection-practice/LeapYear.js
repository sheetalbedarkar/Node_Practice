const readline = require('readline')

const inputYear = readline.createInterface({
	input: process.stdin,
	outpur: process.stdout
});

inputYear.question('Enter the year you want to check ::', (year) => {
	if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
		console.log(`${year} is Leap year`)
	else
		console.log(`${year} is not leap year`)
	inputYear.close();
})
