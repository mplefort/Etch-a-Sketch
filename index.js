
let container = document.querySelector('.container');

let gridSize = 4;

function createGrid(gridSize) {
    for (let i = 0; i < gridSize*gridSize; i++) {
        let grid = document.createElement('div');
        grid.classList.add('pixel');
        container.appendChild(grid);
    }
}

createGrid(gridSize);

//  function to style the pixel divs to create a grid using flexbox
function styleGrid(gridSize) {
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = '400px';
    container.style.height = '400px';
    container.style.margin = 'auto';
    container.style.border = '1px solid black';
    container.style.backgroundColor = 'white';
    container.style.boxShadow = '0 0 10px black';
    container.style.borderRadius = '5px';

    let pixels = document.querySelectorAll('.pixel');
    let border_size = 1
    pixels.forEach(pixel => {
        pixel.style.width = `${400/gridSize - 2*border_size}px`;
        pixel.style.height = `${400/gridSize - 2*border_size}px`;
        pixel.style.border = `${border_size}px solid black`;
        pixel.style.backgroundColor = 'white';
    })
}

styleGrid(gridSize);