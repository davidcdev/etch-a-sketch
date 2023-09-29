const canvas = document.querySelector('.canvas-container');
const size = 16;
const canvasSize = 600;
const sizeInfo = document.querySelector('.actual-size');

for (let i = 0; i < size * size; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.style.width = `${canvasSize / size}px`;
  square.style.height = `${canvasSize / size}px`;
  canvas.appendChild(square);
  sizeInfo.textContent = `Actual size: ${size} x ${size}`;
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
      sizeInfo.textContent = `Actual size: ${newSize} x ${newSize}`;
    };

    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
      square.addEventListener('mouseover', () => {
        square.classList.add('paint');
      });
    });
  };
});

eraser.addEventListener('click', () => {
  brush.classList.remove('active');
  eraser.classList.add('active');

  const actualSquares = document.querySelectorAll('.square');
  actualSquares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.classList.remove('paint');
      square.classList.add('eraser');
    });
  });
});

brush.addEventListener('click', () => {
  eraser.classList.remove('active');
  brush.classList.add('active');

  const actualSquares = document.querySelectorAll('.square');
  actualSquares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.classList.remove('eraser');
      square.classList.add('paint');
    });
  });
});
