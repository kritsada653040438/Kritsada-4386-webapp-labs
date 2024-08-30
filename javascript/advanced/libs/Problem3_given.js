var numbers = [1, 2, 3, 4, 5];

function doubleNumbers(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;
}

function calculateSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

var doubledNumbers = doubleNumbers(numbers);
var sum = calculateSum(doubledNumbers);

var person = {
    name: "John",
    age: 30,
    introduce: function() {
        return "My name is " + this.name + " and I am " + this.age + " years old.";
    }
};

console.log("The sum of doubled numbers is: " + sum);
console.log(person.introduce());
