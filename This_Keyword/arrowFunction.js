var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject);	// true

var obj = {func: foo};
console.log(obj.func() === globalObject);	// true

console.log(foo.call(obj) === globalObject);	// true

foo = foo.bind(obj);
console.log(foo() === globalObject);	// true
