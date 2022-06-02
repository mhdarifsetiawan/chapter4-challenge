const boxElements = document.querySelectorAll(".box");

function handleClick(e){
    const boxTarget = e.target;

    boxTarget.style.backgroundColor = 'yellow';
}

function startGame(){
    boxElements.forEach((box) => {
        box.addEventListener("click", handleClick);
    });
}

startGame();