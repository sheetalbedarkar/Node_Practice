var read = require('readline-sync');

var unit = read.question('Enter the number to get its unit :: ');

switch (unit)	{
case '1':
	console.log('UNIT');
	break;
case '10':
	console.log('TENS');
	break;
case '100':
        console.log('HUNDREDS');
	break;
case '1000':
        console.log('THOUSANDS');
	break;
case '10000':
        console.log('TEN THOUSAND');
	break;
case '100000':
        console.log('LAKHS');
	break;
case '1000000':
        console.log('TEN LAKH');
	break;
case '10000000':
        console.log('CRORE');
	break;
case '100000000':
        console.log('TEN CRORE');
	break;
case '1000000000':
        console.log('MILLION');
	break;
case '10000000000':
        console.log('BILLION');
	break;
case '100000000000':
        console.log('TRILLION');
	break;
default:
        console.log('Enter valid number');
}
