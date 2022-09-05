// select "grid-container" in html
const grid = document.querySelector('.grid-container')

// create enough squares for a 16^2 grid using a loop
for (let i = 0; i < 256; i++) {
    // variable for single square div
    const square = document.createElement('div');
    // style width and height for a square
    square.style.width = '10px';
    square.style.height = '10px';
    // assign number id to square
    square.id = `square-container-${i}`;
    // add square to grid container
    grid.appendChild(square);
}