let person = 'Mike';
let age = 28;

function myTag(strings, personExp, ageExp) {
	let str0 = strings[0];
	let str1 = strings[1];

	if ( ageExp > 99 ) {
		ageStr = 'centenarian';
	} else {
		ageStr = 'youngster';
	}

	return `${str0}${personExp}${str1}${ageExp}`
}

let output = myTag`That ${person} is a ${age}`

console.log('Output => ',output);
