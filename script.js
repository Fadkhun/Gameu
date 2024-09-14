// Inisialisasi variabel untuk karakter dan kontrol
let selectedCharacter = document.getElementById('p1');
let characters = {
  'p1': document.getElementById('p1'),
  'p2': document.getElementById('p2')
};

let characterImages = {
  'p1': {
    up: 'p1atas.png',
    down: 'p1bawah.png',
    left: 'p1kiri.png',
    right: 'p1kanan.png'
  },
  'p2': {
    up: 'p2atas.png',
    down: 'p2bawah.png',
    left: 'p2kiri.png',
    right: 'p2kanan.png'
  }
};

// Fungsi untuk memilih karakter
document.getElementById('selectP1').addEventListener('click', function() {
  selectCharacter('p1');
});
document.getElementById('selectP2').addEventListener('click', function() {
  selectCharacter('p2');
});

function selectCharacter(charId) {
  selectedCharacter = characters[charId];
  document.getElementById('selectP1').classList.remove('selected');
  document.getElementById('selectP2').classList.remove('selected');
  document.getElementById('select' + charId.toUpperCase()).classList.add('selected');
}

// Fungsi untuk menggerakkan karakter
document.getElementById('upBtn').addEventListener('click', moveCharacter);
document.getElementById('downBtn').addEventListener('click', moveCharacter);
document.getElementById('leftBtn').addEventListener('click', moveCharacter);
document.getElementById('rightBtn').addEventListener('click', moveCharacter);

let instructionsHidden = false;

function moveCharacter(event) {
  if (!instructionsHidden) {
    document.getElementById('instructions').style.display = 'none';
    instructionsHidden = true;
  }

  let rect = selectedCharacter.getBoundingClientRect();
  let xChange = 0;
  let yChange = 0;
  let direction = '';

  switch (event.target.id) {
    case 'upBtn':
      yChange = -20;  // Pergerakan 2x lebih cepat
      direction = 'up';
      break;
    case 'downBtn':
      yChange = 20;   // Pergerakan 2x lebih cepat
      direction = 'down';
      break;
    case 'leftBtn':
      xChange = -20;  // Pergerakan 2x lebih cepat
      direction = 'left';
      break;
    case 'rightBtn':
      xChange = 20;   // Pergerakan 2x lebih cepat
      direction = 'right';
      break;
  }

  let newX = rect.left + xChange;
  let newY = rect.top + yChange;

  // Wrap-around: jika karakter melewati tepi layar
  if (newX < 0) newX = window.innerWidth - rect.width;
  if (newX + rect.width > window.innerWidth) newX = 0;
  if (newY < 0) newY = window.innerHeight - rect.height;
  if (newY + rect.height > window.innerHeight) newY = 0;

  selectedCharacter.style.left = newX + 'px';
  selectedCharacter.style.top = newY + 'px';

  // Ganti gambar karakter berdasarkan arah gerakan
  let charId = selectedCharacter.id;
  selectedCharacter.style.backgroundImage = `url('${characterImages[charId][direction]}')`;
}

// Set karakter default yang dipilih
selectCharacter('p1');
