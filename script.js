// Inisialisasi variabel untuk karakter dan kontrol
let selectedCharacter = document.getElementById('p1');
let characters = {
  'p1': document.getElementById('p1'),
  'p2': document.getElementById('p2')
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

  switch (event.target.id) {
    case 'upBtn':
      yChange = -20;  // Pergerakan 2x lebih cepat
      break;
    case 'downBtn':
      yChange = 20;   // Pergerakan 2x lebih cepat
      break;
    case 'leftBtn':
      xChange = -20;  // Pergerakan 2x lebih cepat
      break;
    case 'rightBtn':
      xChange = 20;   // Pergerakan 2x lebih cepat
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
}

// Set karakter default yang dipilih
selectCharacter('p1');
