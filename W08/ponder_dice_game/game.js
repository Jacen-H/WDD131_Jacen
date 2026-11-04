document.querySelector('#rollButton').addEventListener("click", event => {
    document.querySelectorAll('#gameboard img');
    const images = document.querySelectorAll('#gameboard img');
    images.forEach(image => {
        image.src = 'assets/die_rolling.gif';
    });
    setTimeout(() => {
        images.forEach(image => {
        image.src = 'assets/white_dice_1.gif';
    });
    }, 500);
})