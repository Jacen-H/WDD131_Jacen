document.querySelector('#rollButton').addEventListener("click", event => {

    document.querySelectorAll('#gameboard img');

    const images = document.querySelectorAll('#gameboard img');

    images.forEach(image => {
        image.src = 'assets/die_rolling.gif';
    });

    setTimeout(() => {

        images.forEach(image => {

            const randomNumber = Math.floor(Math.random() * 6) + 1;

            image.src = `assets/white_dice_${randomNumber}.gif`

        });
    }, 500);
})