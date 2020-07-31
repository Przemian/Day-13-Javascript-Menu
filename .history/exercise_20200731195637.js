// Pobranie elementu (przycisku)

const circle = document.querySelector('.circle')
const cross = document.querySelector('.inside')
const menu = document.querySelector('.menu')

// Ustawienie nasłuchiwania na wydarzenie

circle.addEventListener('click', function () {
    console.log('kliknięcie');
    cross.style.transform = "translate(-50%,-50%),rotate(360deg)";

})