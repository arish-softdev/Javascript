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
