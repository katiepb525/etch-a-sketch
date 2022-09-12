//add variable for amount of "pixels" for grid to have
let pixelAmount = 16;
let newPixelAmount = 0;
// select "grid-container" div in html
const grid = document.querySelector('.grid-container');
// select "grid-change" button in html
const changeGridBtn = document.querySelector('.grid-change');
// select "color-rainbow" button in html
const rainbowColorBtn = document.querySelector('.color-rainbow');

// pick a random color

function pickRandomColor() {
    return Math.floor(Math.random() * 255);
}

// set color to a random color

function randomColor(square) {
    return square.setAttribute("style", `background-color: rgb(${pickRandomColor()},(${pickRandomColor()},(${pickRandomColor()})`)
}

// set color to black

function blackColor(square) {
    return square.setAttribute("style", "background-color: black");
}

// resize the grid

function resizeGrid(pixelAmount) {
    // make grid-template-columns/row pixelAmount
    grid.style.gridTemplateColumns = `repeat(${pixelAmount}, 1fr)`

    grid.style.gridTemplateRows = `repeat(${pixelAmount}, 1fr)`

}

// create enough squares for a (pixelAmount)^2 grid using a loop
function createGrid(pixelAmount) {
    for (let i = 1; i <= (Math.pow(pixelAmount, 2)); i++) {
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
}

window.addEventListener('load', () => {

    resizeGrid(pixelAmount);
    createGrid(pixelAmount);

});

// get a valid pixel amount
function getValidPixel() {
    // check if pixel amount is valid
    let pixelIsValid = false;
    // loop while pixel amount is invalid
    while (pixelIsValid == false) {
        newPixelAmount = prompt("enter a new pixel amount per side!");

        if (newPixelAmount > 100 || newPixelAmount < 5) {
            alert("number out of bounds! between 5 and 100. please try again..");
            pixelIsValid = false;

        }
        else if (newPixelAmount <= 100 && newPixelAmount >= 5) {
            pixelIsValid = true;
        }

        if (pixelIsValid == true) {
            return newPixelAmount;
            break;
        }
    }
}

// add click listener for changeGrid (work in progress)
changeGridBtn.addEventListener("click", () => {
    getValidPixel();
    // clear original grid
    grid.textContent = '';
    resizeGrid(newPixelAmount);
    createGrid(newPixelAmount);
});
