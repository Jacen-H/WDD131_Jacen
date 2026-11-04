document.querySelector('#rollButton').addEventListener("click", event => {
    document.querySelectorAll('#gameboard img');
    const images = document.querySelectorAll('#gameboard img');
    images.forEach(image => {
        image.src = 'assets/die_rolling.gif';
    })
})