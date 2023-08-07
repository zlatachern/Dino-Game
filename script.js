const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const modal = document.getElementById('gameOverModal');
let restartButton = document.getElementById('restartButton');

let isGamePaused = false; 

document.addEventListener('keydown', function(event) {
  if (!isGamePaused) { 
    jump();
  }
});

restartButton.addEventListener('click', function() {
  hideGameOverModal();
  restartGame();
});

function jump() {
  if (dino.classList != 'jump') {
    dino.classList.add('jump');
  }

  setTimeout(function() {
    dino.classList.remove('jump');
  }, 500);
}

let isAlive = setInterval(function() {
  if (!isGamePaused) { 
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
      displayGameOverModal();
      clearInterval(isAlive);
    }
  }
}, 10);

function displayGameOverModal() {
  isGamePaused = true;
  gameOverModal.style.display = 'flex';
}

function hideGameOverModal() {
  isGamePaused = false;
  gameOverModal.style.display = 'none';
}

function restartGame() {
  isGamePaused = false;
  dino.style.top = '140px';
  cactus.style.left = '600px';
  isAlive = setInterval(function() {
    if (!isGamePaused) {
      let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
      let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

      if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        displayGameOverModal();
        clearInterval(isAlive);
      }
    }
  }, 10);
}
