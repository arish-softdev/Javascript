// Var Variable in Javascript

var name = "Arish";
console.log(name);

// Re-Declaration
var age = 20;
var age = 19;

console.log(age);

// Function Scope
function demo() {
    var msg = "Hello";
    console.log(msg);
    
}

demo();

// Not block scoped

if (true) {
    var city = "vadalur";

}

console.log(city);

// Hoisting 

console.log(x);
var x = 10; // undefined

var y;
console.log(y);
y = 11;

// Multiple variables
var a = 10; b = 20, c =30;

console.log(a, b, c);

// Update value
var score = 50;
score = 75;

console.log(score);

// Global scope 
var msg = "Welcome";

function greet() {
    console.log(msg);
    
}

greet();

// var inside loop

for (var i = 1; i <= 3; i++) {
    console.log(i);
    
    
}

console.log(i);

// var vs block

{
    var e = 100;
}
console.log(e);