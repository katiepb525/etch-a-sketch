//add variable for amount of "pixels" for grid to have
let pixelAmount = 16;
let newPixelAmount = 0;
// select "grid-container" div in html
const grid = document.querySelector('.grid-container');
// select "grid-change" button in html
const changeGridBtn = document.querySelector('.grid-change');
// select "color-rainbow" button in html
const rainbowColorBtn = document.querySelector('.color-rainbow');
// select "color-grayscale" button in html
const grayscaleColorBtn = document.querySelector('.color-grayscale');
// store the current "mode" that the squares should be set to
let coloringMode = blackColor;

// set color to a random color

function rainbowColor(element) {
    element.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}

// set color to black

function blackColor(element) {
    element.style.backgroundColor = "black";
}

// resize the grid

function resizeGrid(pixelAmount) {
    // make grid-template-columns/row pixelAmount
    grid.style.gridTemplateColumns = `repeat(${pixelAmount}, 1fr)`

    grid.style.gridTemplateRows = `repeat(${pixelAmount}, 1fr)`

}

// create grid using a loop
function createGrid(pixelAmount) {
    resizeGrid(pixelAmount);
    for (let i = 1; i <= (Math.pow(pixelAmount, 2)); i++) {
        createSquare();
    }
}

// create the squares
function createSquare() {
    // variable for single square div
    const square = document.createElement('div');
    // add a class of "square"
    square.classList.add('square');
    // add event listener for when square is hovered over, sets color to black
    square.addEventListener("mouseover", () => {
        switch (coloringMode) {
            case blackColor:
                blackColor(square);
                break;
            case rainbowColor:
                rainbowColor(square);
                break;
        }

    })
    // // assign number id to square
    // square.id = `square - container - ${ i } `;
    // add square to grid container
    grid.appendChild(square);
}

window.addEventListener('load', () => {
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
    createGrid(newPixelAmount);
    // make into current pixel amount;
    pixelAmount = newPixelAmount;
});



// add click listener for button that changes color to rainbow 
rainbowColorBtn.addEventListener("click", () => {
    if (coloringMode !== rainbowColor) {
        coloringMode = rainbowColor;
    }
    else if (coloringMode == rainbowColor) {
        coloringMode = blackColor;
    }
    console.log(coloringMode);
})  