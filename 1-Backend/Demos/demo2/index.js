// JSON: example
//https://www.w3schools.com/js/js_json_stringify.asp
const data = {
    message: 'Hello, this is a simple Express app!',
    timestamp: new Date()
  };

console.log(JSON.stringify(data))

// Template literals: example 1
//https://www.w3schools.com/JS//js_string_templates.asp
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
console.log(text);

// Template literals: example 2
let header = "Header";
let tags = ["item 1", "item 2", "item 3"];

let html = `<h2>${header}</h2>
<ul>
<li>${tags[0]}</li>
<li>${tags[1]}</li>
<li>${tags[2]}</li>
</ul>`;

console.log(html);

//Functions as a first class citizens 
//https://www.geeksforgeeks.org/what-is-first-class-citizen-in-javascript/
// Case 1/3: Ability to treat functions as values

const greet1 = function() {
	console.log("Welcome!");
}
greet1();


// Functions as a first class citizens
// Case 2/3: Ability to pass a function as arguments
function teacher(){
	return "Teacher";
}

function student(){
	return "Student";
}

function greet2(user){
	console.log("Welcome", user());	
}

// Prints "Welcome Teacher"
let message = greet2(teacher);

// Prints "Welcome Student"
message = greet2(student);


// Functions as a first class citizens
// Case 3/3: Ability to return a function from another function

const greet = function(){
	return function(){
	console.log("Welcome !!!!!");
	}
}
// What's the difference between greet()() and greet()
greet(); 
greet()();


