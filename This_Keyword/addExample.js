function add(c, d) {		
	return this.a + this.b + c + d;
}

let o = {a: 1, b: 3};

/* The first parameter is the object to use as 'this',
	subsequent parametr are passed as argument in the function call */
var resultCall = add.call(o, 5, 7)
console.log('Result of call() :: ', resultCall);
/* Expected output => Result of call() :: 16 */


/* The first parameter is the object to use as 'this',
	the second is an array whose member are use as the argument in the function call */
var resultApply = add.apply(o, [10, 20]);
console.log('Result of apply() :: ', resultApply);
/* Expected output => Result of apply() :: 34 */