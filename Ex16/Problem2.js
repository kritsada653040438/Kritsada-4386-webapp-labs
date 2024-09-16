let getMiddleElements = s => {
    let n = s.length;
    return n % 2 === 0 ? s.slice(n / 2 - 1, n / 2 + 1) : s.slice(n / 2, n / 2 + 1);
}

console.log(getMiddleElements([1,2,3,4,5,]));
console.log(getMiddleElements([1,2,3,4]));