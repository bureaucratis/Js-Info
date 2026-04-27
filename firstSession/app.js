
document.querySelector('body').style.backgroundColor = 'grey';

// Working with variables:

// ---

// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).


let admin;
let name;

name = "John";
admin = name;

console.log(admin);
console.log(alert(admin)); 


// Giving the right name

// ---

// Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?

const ourPlanetName = "Earth";
let currentVisitorName = "John";


// String quotes

// ---

// What is the output of the script?

let userName = "Ilya";

console.log(`hello ${1}`);
console.log(alert(`Hello ${userName}`))
// The output will be hello 1 and Hello Ilya.

console.log(`hello {"name"}`);
// The output will be hello {"name:}.