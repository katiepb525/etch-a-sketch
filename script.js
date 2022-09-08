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

// add click listener for changeGrid (work in progress)
changeGridBtn.addEventListener("click", () => {
    getValidPixel();
    // clear original grid
    grid.textContent = '';
    createGrid(pixelAmount);
});
