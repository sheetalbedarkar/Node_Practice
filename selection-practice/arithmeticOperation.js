var read = require('readline-sync');

var a = read.question('Enter the value of a :: ');

var b = read.question('Enter the value of b :: ');

var c = read.question('Enter the value of c :: ');

var operation1 = a + b * c;
console.log('First Operation :: ', operation1);

var operation2 = a % b + c;
console.log('Second Operation :: ', operation2);

var operation3 = c + a / b;
console.log('Third Operation :: ', operation3);

var operation4 = a * b + c;
console.log('Fourth Operation :: ', operation4);

