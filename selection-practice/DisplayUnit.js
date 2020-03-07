var read = require('readline-sync');

var unit = read.question('Enter the number to get its unit :: ');

if (unit == 1)
	console.log('UNIT');
else if (unit == 10)
	console.log('TENS');
else if (unit == 100)
        console.log('HUNDREDS');
else if (unit == 1000)
        console.log('THOUSANDS');
else if (unit == 10000)
        console.log('TEN THOUSAND');
else if (unit == 100000)
        console.log('LAKHS');
else if (unit == 1000000)
        console.log('TEN LAKH');
else if (unit == 10000000)
        console.log('CRORE');
else if (unit == 100000000)
        console.log('TEN CRORE');
else if (unit == 1000000000)
        console.log('MILLION');
else if (unit == 10000000000)
        console.log('BILLION');
else if (unit == 100000000000)
        console.log('TRILLION');
else
        console.log('Enter valid number');

