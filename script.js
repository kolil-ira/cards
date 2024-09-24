document.addEventListener("DOMContentLoaded", function() {
    const redColor = document.getElementById('red');
    const blackColor = document.getElementById('black');
    const greyColor = document.getElementById('grey');
    const carImage = document.getElementById('carImage'); // Change from 'image' to 'carImage'

    redColor.addEventListener("click", function() {
        carImage.src = 'image/red.jpg'; // Ensure this path is correct
    });

    blackColor.addEventListener("click", function() {
        carImage.src = 'image/black.jpg'; // Ensure this path is correct
    });

    greyColor.addEventListener("click", function() {
        carImage.src = 'image/grey.jpg'; // Ensure this path is correct
    });
});
