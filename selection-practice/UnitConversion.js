let read  = require('readline-sync');
let convert = require('convert-units');
console.log('------CHOICE------');
console.log('1: FEET TO INCH');
console.log('2: FEET TO METER');
console.log('3: INCH TO FEET');
console.log('4: METER TO FEET');
let choice = read.question('Enter your choice :: ')

let FEET_TO_INCH = '1';
let FEET_TO_METER = '2';
let INCH_TO_FEET = '3';
let METER_TO_FEET = '4';

console.log(choice)
switch (choice)	{
case FEET_TO_INCH:
	var input = read.question('Enter value in feets to convert in inches ::');
	var output = convert(input).from('ft').to('in');
	console.log('Output in inches :: ',output);
	break;
case FEET_TO_METER:
	 var input = read.question('Enter value in feets to convert in meter ::');
        var output = convert(input).from('ft').to('m')
        console.log('Output in meter :: ',output)
	break;
case INCH_TO_FEET:
	var input = read.question('Enter value in inches to convert in feets ::');
        var output = convert(input).from('in').to('ft')
        console.log('Output in feets :: ',output)
	break;
case METER_TO_FEET:
	var input = read.question('Enter value in meters to convert in feets ::');
        var output = convert(input).from('m').to('ft')
        console.log('Output in feets :: ',output)
	break;
default:
	console.log('Enter valid choice')
}
