let choices = ["batu", "gunting", "kertas"];
// console.log(choice);

let randomChoice = Math.random();
// console.log(randomChoice);

let comChoice = choices[randomChoice];
// console.log(comChoice);

let userPoin = 0;
let comPoin = 0;

// console.log(boxChoice);

// Mulai
// startGame()

// Tampil halaman utama

// user mengklik trial button

// user mengklik selection

// Menampilkan log pilihan user

// komputer mengklik pilihannya


function getComSelection() {
    const computer = Math.floor(Math.random() * 3);
    if (computer == 0) return 'kertas';
    if (computer == 1) return 'batu';
    return 'gunting';
}

function getResult(comp, player) {
    if(player == comp) return 'DRAW';
    if(player == 'kertas') return (comp == 'batu') ? 'YOU WIN' : '<p>COM</p><p>WIN</p>';
    if(player == 'batu') return (comp == 'gunting') ? 'YOU WIN' : '<p>COM</p><p>WIN</p>';
    if(player == 'gunting') return (comp == 'kertas') ? 'YOU WIN' : '<p>COM</p><p>WIN</p>';
}


const selection = document.querySelectorAll('#userSelection .select img');
const disable = document.querySelectorAll('#userSelection .select');
const restartBtn = document.getElementById('restartBtn');
const infoWinner = document.querySelector('.boxInfoText');

startGame();

restartBtn.addEventListener('click', startGame);

function startGame() {
    selection.forEach(selected => {
        // selected.classList.remove('bg-selected');
        selected.removeEventListener('click', handleClick);
        selected.addEventListener('click', handleClick, { once: true });
        infoWinner.innerHTML = "VS";
        
        // const bgSelected = document.querySelectorAll('.bg-selected');
        selected.classList.remove('bg-selected');
    });
    disable.forEach(disabled => {
        disabled.classList.remove('pointerevent');
    });
};


function handleClick(e) {
    const selected = e.target;
    const comSelection = getComSelection();
    const playerSelection = selected.className;
    const result = getResult(comSelection, playerSelection);
    placeMark(selected);
    infoWinner.innerHTML = result;
};


function placeMark(selected) {
    if(selected) {
        selected.classList.add('bg-selected');
        
        disable.forEach(disabled => {
            disabled.classList.add('pointerevent');
        });
        
    }
};