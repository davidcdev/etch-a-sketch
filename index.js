const canvas = document.querySelector('.canvas-container');
const size = 16;
const canvasSize = 600;

for (let i = 0; i < size * size; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.style.width = `${canvasSize / size}px`;
  square.style.height = `${canvasSize / size}px`;
  canvas.appendChild(square);
};

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.classList.add('paint');
  });
});

const resizeButton = document.querySelector('.resize');
resizeButton.addEventListener('click', () => {
  const newSize = prompt('How many squares per side?');
  if (newSize > 100 || newSize < 1) {
    alert('Please enter a number between 1 and 100');
  } else {
    const actualSquares = document.querySelectorAll('.square');
    actualSquares.forEach((square) => {
      square.remove();
    });

    for (let i = 0; i < newSize * newSize; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.style.width = `${canvasSize / newSize}px`;
      square.style.height = `${canvasSize / newSize}px`;
      canvas.appendChild(square);
    };

    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
      square.addEventListener('mouseover', () => {
        square.classList.add('paint');
      });
    });
  };
});
