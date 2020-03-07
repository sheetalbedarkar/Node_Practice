var read = require('readline-sync');

var numberForWeekDay = read.question('Enter number between 0 to 6 :: ');

switch (numberForWeekDay) {
case '0':
	console.log('Sunday');
	break;
case '1':
	console.log('Monday');
	 break;
case '2':
        console.log('Tuesday');
	 break;
case '3':
        console.log('Wednesday');
	 break;
case '4':
        console.log('Thursday');
	 break;
case '5':
        console.log('Friday');
	 break;
case '6':
        console.log('Saturday');
	 break;
default:
	console.log('Invalid choice')
}
