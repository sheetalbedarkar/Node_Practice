const args = require('yargs').argv;

const date1 = new Date('March 20');
const date2 = new Date('June 20');

console.log(date1.toString())
console.log(date2.toString())

const date3 = new Date(args.date)
console.log(date3.toString())

if (date3 >= date1 && date3 <= date2)
	console.log(true)
else
	console.log(false)
