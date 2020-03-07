var read = require('readline-sync');

var numberForWeekDay = read.question('Enter number between 0 to 6 :: ');

if (numberForWeekDay == 0)
	console.log('Sunday');
else if (numberForWeekDay == 1)
	console.log('Monday');
else if (numberForWeekDay == 2)
        console.log('Tuesday');
else if (numberForWeekDay == 3)
        console.log('Wednesday');
else if (numberForWeekDay == 4)
        console.log('Thursday');
else if (numberForWeekDay == 5)
        console.log('Friday');
else if (numberForWeekDay == 6)
        console.log('Saturday');
else
	console.log('Invalid choice')
