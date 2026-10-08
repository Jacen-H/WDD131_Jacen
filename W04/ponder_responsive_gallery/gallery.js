// 1. Retrieve events from the DOM

let dialog = document.querySelector('dialog');
let gallery = document.querySelector('.gallery');
let dialogImage = dialog.querySelector('img');

// 2. Add an event listener

gallery.addEventListener("click", function(event){
    console.log(event.target.src)
    // swap out src of dialog image
    if(event.target.src !== undefined) {
        dialogImage.src = event.target.src.replace("-sm", "-full");
        // show dialog box
        dialog.showModal();
    }
});

closeButton.addEventListener('click', (event) => {
    dialog.close();
})

dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
})