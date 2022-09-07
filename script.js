// select "grid-container" div in html
const grid = document.querySelector('.grid-container');
// select "grid-change" button in html
const changeGrid = document.querySelector('.grid-change');
// add click listener for changeGrid
changeGrid.addEventListener("click", () =>

);

// create enough squares for a 16^2 grid using a loop
for (let i = 0; i < 256; i++) {
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

