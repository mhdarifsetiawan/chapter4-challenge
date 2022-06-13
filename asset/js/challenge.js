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
    if(player == 'kertas') return (comp == 'batu') ? 'WIN' : '<p>COM</p><p>WIN</p>';
    if(player == 'batu') return (comp == 'gunting') ? 'WIN' : '<p>COM</p><p>WIN</p>';
    if(player == 'gunting') return (comp == 'kertas') ? 'WIN' : '<p>COM</p><p>WIN</p>';
}

const selection = document.querySelectorAll('#userSelection .select img');
selection.forEach(function(selected) {
    selected.addEventListener('click', function() {
        
        const comSelection = getComSelection();
        const playerSelection = selected.className;
        const result = getResult(comSelection, playerSelection);

        const bgSelected = document.getElementById(playerSelection);
        bgSelected.classList.toggle('bg-selected');

        const infoWinner = document.querySelector('.boxInfoText');
        infoWinner.innerHTML = result;

    });
});


function reset() {

}


// const pKertas = document.querySelector('.kertas');
// pKertas.addEventListener('click', function() {
//     const comSelection = getComSelection();
//     const playerSelection = pKertas.className;
//     const result = getResult(comSelection, playerSelection);

//     const infoWinner = document.querySelector('.boxInfoText');
//     infoWinner.innerHTML = result;
// });