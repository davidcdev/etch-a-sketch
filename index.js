const canvas = document.querySelector('.canvas-container');
const size = 16;

for (let i = 0; i < size * size; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  canvas.appendChild(square);
};

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.classList.add('paint');
  });
});
