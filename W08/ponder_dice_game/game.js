document.querySelector('#rollButton').addEventListener("click", event => {

    document.querySelectorAll('#gameboard img');

    const images = document.querySelectorAll('#gameboard img');

    images.forEach(image => {
        if(isDieUnlocked(image)){
            image.src = 'assets/die_rolling.gif';   
        }
    });

    setTimeout(() => {

        images.forEach(image => {
            if(isDieUnlocked(image)){
                const randomNumber = Math.floor(Math.random() * 6) + 1;

                image.src = `assets/white_dice_${randomNumber}.gif`
            }
        });
    }, 500);
})

function isDieUnlocked(dieImage) {

    const checkboxes = document.querySelectorAll('#gameboard input');

    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);

    return unchecked.find(unchecked => unchecked.className === dieImage.className);



}