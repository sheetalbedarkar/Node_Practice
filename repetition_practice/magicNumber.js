var readline = require('readline-sync');
let low = 0;
let high = 100;
function findNumber(low, high) {
	let mid = low + Math.floor((high - low) / 2);
	let k;

	if (low < high) {
		if (low == high - 1) {
			k = readline.question("Is the number " + low + "  if yes press->yes " + " IF the number is high press->no" + " :: ");
			if (k == "yes")
				return low;
			if (k == "no")
				return high;
		}
		k = readline.question("Is the number in the range " + mid + "-" + high + " If yes press yes else press no" + " :: ");
		if (k == "yes")
			mid = findNumber(mid, high);
		if (k == "no")
			mid = findNumber(low, mid - 1);
	}
	return mid;
}

var result = findNumber(low, high);
console.log("Your number is :: "+ result)