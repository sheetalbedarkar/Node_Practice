function f() {
	return this.a;
}

var g = f.bind({a: 'azerty'});
console.log(g());
/* Expected Output :: azerty */

var h = g.bind({a: 'yoo'});
console.log(h());
/* Expected Output :: azerty */

var o = {a: 37, f: f, g: g, h: h};
console.log(o.a, o.f(), o.g(), o.h());
/* Expected Output :: 37 37 azerty azerty */