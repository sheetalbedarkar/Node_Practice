let array = [4, 6, 8, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

function isPrime(number) {	
	if (number > 2 && number % 2 == 0)
		return false;
	return number > 1;
}

console.log('Prime Numbers :: ', array.filter(isPrime));

// expected output => Prime Numbers :: [53, 2, 5, 7, 31, 97, 17]