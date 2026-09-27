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


let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    
    if (current == 'dark') {
        body.style.backgroundColor = "#1a1a1a";
        body.style.color = "#f0f0f0";
        logo.setAttribute('src', 'byui-logo_dark.png');
        body.style.backgroundColor = "#f9f9f9";
        body.style.color = "#333333";
        logo.setAttribute('src', 'byui-logo.png');
    }
}