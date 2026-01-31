function outer() {
    var count = 0;
    function inner() {
        count++;
        console.log(`The value of count is : ${count}`);

    }
    return inner;
}

var increment = outer();
increment();
increment();
increment();