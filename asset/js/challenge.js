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
    if(player == comp) return '<p class="draw">DRAW</p>';
    if(player == 'kertas') return (comp == 'batu') ? '<p class="you-win">YOU</br>WIN</p>' : '<p class="com-win">COM</br>WIN</p>';
    if(player == 'batu') return (comp == 'gunting') ? '<p class="you-win">YOU WIN</p>' : '<p class="com-win">COM WIN</p>';
    if(player == 'gunting') return (comp == 'kertas') ? '<p class="you-win">YOU WIN</p>' : '<p class="com-win">COM WIN</p>';
}


const selection = document.querySelectorAll('#userSelection .select img');
const comBg = document.querySelectorAll('#comSelection .select img');

const userDisable = document.querySelectorAll('#userSelection .select');
const comDisable = document.querySelectorAll('#comSelection .select');

const restartBtn = document.getElementById('restartBtn');
const infoWinner = document.querySelector('.boxInfoText');

startGame();

restartBtn.addEventListener('click', startGame);

function startGame() {
    selection.forEach(selected => {
        // selected.classList.remove('bg-selected');
        selected.removeEventListener('click', handleClick);
        selected.addEventListener('click', handleClick, { once: true });
        infoWinner.innerHTML = '<p class="vs">VS</p>';
        
        // const bgSelected = document.querySelectorAll('.bg-selected');
        selected.classList.remove('bg-selected');
    });

    userDisable.forEach(disabled => {
        disabled.classList.remove('pointerevent');
    });

    comBg.forEach(comS => {
        comS.classList.remove('bg-selected');
    });
};


function handleClick(e) {
    const selected = e.target;
    const comSelection = getComSelection();
    const playerSelection = selected.className;
    const result = getResult(comSelection, playerSelection);
    placeMark(selected);
    infoWinner.innerHTML = result;

    if(comSelection) {
            const comBg = document.querySelectorAll('.com-'+comSelection);
            comBg.forEach(comS => {
                comS.classList.add('bg-selected');
            });
        };

};


function placeMark(selected) {
    if(selected) {
        selected.classList.add('bg-selected');
        
        userDisable.forEach(disabled => {
            disabled.classList.add('pointerevent');
        });
    };
};