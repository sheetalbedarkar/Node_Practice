function bar() {
	console.log(Object.prototype.toString.call(this));
}

bar.call(7);
/* Expected output => [object Number] */
bar.call('foo');
/* Expected output => [object String] */