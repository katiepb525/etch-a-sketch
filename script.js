//add variable for amount of "pixels" for grid to have
let pixelAmount = 16;
// select "grid-container" div in html
const grid = document.querySelector('.grid-container');
// select "grid-change" button in html
const changeGrid = document.querySelector('.grid-change');

//check if pixel amount is valid
let pixelIsValid = false;

// add click listener for changeGrid (work in progress)
changeGrid.addEventListener("click", () => {
    pixelAmount = prompt("enter a new pixel amount per side!");
    if (pixelAmount > 100 || pixelAmount < 5) {
        alert("number out of bounds! between 5 and 100. please try again..");
        pixelAmount = prompt("enter a new pixel amount per side!");
    }
}
);


// make grid-template-columns/row pixelAmount to begin with
grid.style.gridTemplateColumns = `repeat(${pixelAmount}, 30px)`
grid.style.gridTemplateRows = `repeat(${pixelAmount}, 30px)`

// create enough squares for a 16^2 grid using a loop
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

