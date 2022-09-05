// select "grid-container" in html
const grid = document.querySelector('.grid-container')

// create enough squares for a 16^2 grid using a loop
for (let i = 0; i < 256; i++) {
    // variable for single square div
    const square = document.createElement('div').style;
    // style width and height for a square
    square.width = '10px';
    square.height = '10px';
    // assign number id to square
    square.id = `square-container-${i}`;

}