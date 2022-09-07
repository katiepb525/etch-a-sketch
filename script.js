// select "grid-container" in html
const grid = document.querySelector('.grid-container');

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

