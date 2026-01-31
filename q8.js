sayHello();
function sayHello() {
  console.log("Hello");
}
sayHi();
var sayHi = function () {
  console.log("Hi");
};

/*
sayHi will return Error because it has been stored in a variable
and it is called before even the fuction is executed
*/