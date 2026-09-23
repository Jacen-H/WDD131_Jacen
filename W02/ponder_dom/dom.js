// how to manipulate the DOM using JavaScript

// Grab our h1 from the page
let heading = document.querySelector("h1")

console.log(heading);

// change the text of the element
heading.textContent = "Change the heading to something else!";

// change the text color
heading.style.color = "#0000FF";

// pick your own style and change it
heading.style.fontStyle = "italic";
heading.style.border = "1px solid black";

// retrieve an ID element from the page
document.getElementById("topics").style.color = "red";
document.querySelector("#topics").style.color = "red";

// select the img tag
let image = document.querySelector("img");