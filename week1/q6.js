/*console.log(a);
console.log(b);
var a = 10;
let b = 20;
function test() {
  console.log(c);
  var c = 30;
}
test();

Tasks
1.	Predict the output of the above code.
2.	Explain briefly: 1.Why a prints undefined 2.Why b throws an error 3.Why c is undefined inside the function
3.	Identify the line that causes the error.


Answers

1. THe value of be b will be not be acessed because of Temporal Dead zone
2.1. Because var is hoisted
2.2. because b is defined as let and it is in temporal deadzone and cannot be accessed
2.3. because  var cannot be redeclared
3. 1,2,7

*/



var a = 10;
let b = 20;
console.log(a);
console.log(b);
function test() {
  var c = 30;
  console.log(c);
}
test();
