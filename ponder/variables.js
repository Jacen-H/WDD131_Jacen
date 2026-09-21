
// declare a variable
let x = 5;
let age = 23, name = "John Doe";
let uyguguyguyguygyuguyguyguyguyguyguyg 
= 1;

// console.log is similar to print in python
console.log(age);

// a constant variable. these cannot be changed after being declared
const name2 = "Jane Doe";

// Scope = where a variable can be referenced by name

if(age == 22)
{
    // a new scope
    console.log(name2);
    let favoriteColor = "blue";
}

// console.log(favoriteColor); 
// This won't work, because favoriteColor is defined in a smaller scope.

document.querySelector("h1").style.color = "blue";