function isBigEnough(value) {
	return value >= 10;
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

console.log('Result :: ', filtered);

// expected output : Result ::  [ 12, 130, 44 ]