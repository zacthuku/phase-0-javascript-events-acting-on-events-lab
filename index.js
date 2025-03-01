// Your code here
const dodger = document.getElementById("dodger");
    const gameWidth = 400; 
function moveDodgerLeft() {
    const left = parseInt(dodger.style.left.replace("px", ""), 10);
    if (left > 0) { 
        dodger.style.left = `${left - 10}px`;
    }
}
function moveDodgerRight() {
    const left = parseInt(dodger.style.left.replace("px", ""), 10);
    const dodgerWidth = 40; 
    if (left + dodgerWidth < gameWidth) { 
        dodger.style.left = `${left + 10}px`;
    }
}


document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});
