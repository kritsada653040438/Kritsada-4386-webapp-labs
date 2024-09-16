function filterShortStrings(arr) {
    return arr.filter(str => str.length > 3);
    
}

console.log(filterShortStrings(["hi", "hello", "hey", "word"]));
console.log(filterShortStrings(["a", "ab", "abc", "abcd"]));