// Mendapatkan elemen pion1 dan kontrol
const pion1 = document.getElementById('pion1');
const upButton = document.getElementById('up');
const downButton = document.getElementById('down');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

// Posisi awal karakter
let positionX = window.innerWidth / 2 - 25;
let positionY = window.innerHeight * 0.7 / 2 - 25;
const step = 20;

// Fungsi untuk update posisi karakter
function updatePosition() {
    pion1.style.left = positionX + 'px';
    pion1.style.top = positionY + 'px';

    // Membuat karakter menembus sisi layar
    if (positionX > window.innerWidth) positionX = -50;
    if (positionX < -50) positionX = window.innerWidth;
    if (positionY > window.innerHeight * 0.7) positionY = -50;
    if (positionY < -50) positionY = window.innerHeight * 0.7;
}

// Fungsi untuk memindahkan karakter
upButton.addEventListener('click', () => {
    positionY -= step;
    updatePosition();
});

downButton.addEventListener('click', () => {
    positionY += step;
    updatePosition();
});

leftButton.addEventListener('click', () => {
    positionX -= step;
    updatePosition();
});

rightButton.addEventListener('click', () => {
    positionX += step;
    updatePosition();
});
