
let container = document.querySelector('.container');

let gridSize = 4;



const form = document.querySelector('#gridsize-form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting and reloading the page
  gridSize = document.getElementById('gridsize').value;
  console.log(gridSize); // Log the value of the number input to the console

    resizeGrid(gridSize);
});


const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    resetGrid();
})

// function to resize the grid
function resizeGrid(gridSize) {
    container.innerHTML = ''; // clear the grid
    createGrid(gridSize);
    styleGrid(gridSize);
    changeColor(); // add event listener to the new grid
}


function createGrid(gridSize) {
    for (let i = 0; i < gridSize*gridSize; i++) {
        let grid = document.createElement('div');
        grid.classList.add('pixel');
        container.appendChild(grid);
    }
}


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
        
    })
}


// function to change the color of the pixel divs when the mouse hovers over them
function changeColor() {
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', () => {
            pixel.classList.add('colored');
        })
    })
}

// reset the grid color to white
function resetGrid() {
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.classList.remove('colored');
    })
}


createGrid(gridSize);
styleGrid(gridSize);
changeColor();

