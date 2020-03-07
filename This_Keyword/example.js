// An object can be passed as the first argument to call or apply and this will bound to it
var obj = { a: 'Custom' };

// This property is set on the  global object
var a = 'Global';

function whatsThis() {
	return this.a;  // The value of this is dependent on how the function is called
}

console.log(whatsThis()); // Expected Output :: Global

console.log(whatsThis.call(obj)); // Expected Output :: Custom

console.log(whatsThis.apply(obj)); // Expected Output :: Custom
