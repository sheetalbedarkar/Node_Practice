const test = {
	prop: 42,
	func: function() {
		return this.prop;
	},
}

console.log('Output :: ',test.func());
/* Expected output => Output ::  42 */