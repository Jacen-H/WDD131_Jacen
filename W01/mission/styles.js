let body = document.querySelector("body");
body.style.fontFamily = "Arial, sans-serif";
body.style.lineHeight = "1.6";
body.style.color = "#333";
body.style.maxWidth = "800px";
body.style.margin = "0 auto";
body.style.padding = "20px";
body.style.backgroundColor = "#f9f9f9";

let heading = document.querySelector("h1");
heading.style.color = "#002e5d";
heading.style.fontSize = "1.8rem";
heading.style.marginBottom = "15px";
let headings = document.querySelectorAll("h2");

headings.forEach(function(heading) 
{
    heading.style.color = "#002e5d";
    heading.style.fontSize = "1.3rem";
    heading.style.marginBottom = "10px";
});

let lists = document.querySelectorAll("ul");

lists.forEach(function(list) 
{
    list.style.paddingLeft = "20px";
});

let listItems = document.querySelectorAll("li");

listItems.forEach(function(item) 
{
    item.style.marginBottom = "10px";
});