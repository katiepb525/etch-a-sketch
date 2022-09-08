//add variable for amount of "pixels" for grid to have
let pixelAmount = 16;
// select "grid-container" div in html
const grid = document.querySelector('.grid-container');
// select "grid-change" button in html
const changeGridBtn = document.querySelector('.grid-change');


// get a valid pixel amount
function getValidPixel() {
    // check if pixel amount is valid
    let pixelIsValid = false;

    // loop while pixel amount is invalid
    while (pixelIsValid == false) {
        pixelAmount = prompt("enter a new pixel amount per side!");

        if (pixelAmount > 100 || pixelAmount < 5) {
            alert("number out of bounds! between 5 and 100. please try again..")
            pixelIsValid = false;

        }
        else if (pixelAmount <= 100 && pixelAmount >= 5) {
            pixelIsValid = true;
        }

        if (pixelIsValid == true) {
            break;
        }
    }
}

// create enough squares for a (pixelAmount)^2 grid using a loop
function createGrid(pixelAmount) {
    for (let i = 0; i < (Math.pow(pixelAmount, 2)); i++) {
        // variable for single square div
        const square = document.createElement('div');
        // add a class of "square"
        square.classList.add('square');

        // add event listener for when square is hovered over, sets color to black
        square.addEventListener("mouseover", () => square.setAttribute("style", "background-color: black"))
        // assign number id to square
        square.id = `square-container-${i}`;
        // add square to grid container
        grid.appendChild(square);
    }
    // make grid-template-columns/row pixelAmount
    grid.style.gridTemplateColumns = `repeat(${pixelAmount}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${pixelAmount}, 1fr)`


}

// add click listener for changeGrid (work in progress)
changeGrid.addEventListener("click", () => {
    getValidPixel();
    // clear original grid
    grid.textContent = '';
    createGrid(pixelAmount);
}
);

createGrid(pixelAmount);

// make grid-template-columns/row pixelAmount to begin with
grid.style.gridTemplateColumns = `repeat(${pixelAmount}, 30px)`
grid.style.gridTemplateRows = `repeat(${pixelAmount}, 30px)`


