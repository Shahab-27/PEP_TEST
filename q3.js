const arr = [2, 3, 4, 5, 6];
const result = arr.map((n) => {
    return n % 2 === 0 ? n * n : n;
});
console.log(result);
