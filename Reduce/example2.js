let maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
let maxCallback2 = ( max, cur ) => Math.max( max, cur );

// reduce without intialValue
let result1 = [ { x: 2 }, { x: 22 }, { x: 42 } ].reduce(maxCallback);
console.log(result1);	// NaN

let result2 = [ { x: 2 }, { x: 22 } ].reduce(maxCallback);
console.log(result2);	// 22

let result3 = [ { x: 2 } ].reduce(maxCallback);
console.log(result3);

// let result4 = [].reduce(maxCallback);
// console.log(result4);	// TypeError

// map and reduce with intialValue, better solution, also works for empty
// or larger arrays
let result = [ { x: 22 }, { x: 42 } ].map( el => el.x )
									.reduce( maxCallback2, -Infinity);
console.log(result);
