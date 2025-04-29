const coin = document.getElementById('coin');
const flipButton = document.getElementById('flip-button');
const result = document.getElementById('result');

let flips = 0;

function flipCoin() {
  flipButton.disabled = true;
  result.textContent = 'Flipping...';
  coin.classList.add('flipping');

  setTimeout(() => {
    coin.classList.remove('flipping');
    
    // Determine result based on flip count
    const isHeads = Math.floor(flips / 2) % 2 === 0;
    const side = isHeads ? 'HEADS' : 'TAILS';
    
    // Update display
    result.textContent = side;
    coin.style.transform = `rotateY(${isHeads ? 0 : 180}deg)`;
    
    // Increment flip counter
    flips++;
    flipButton.disabled = false;
  }, 6000);
}

flipButton.addEventListener('click', flipCoin);