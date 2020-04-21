const GRID_SIZE = 32;
const GAME_WIDTH = 10;
const GAME_HEIGHT = 20;

let canvas, ctx;

window.onload = function() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	canvas.width = GRID_SIZE * GAME_WIDTH;
	canvas.height = GRID_SIZE * GAME_HEIGHT;

	ctx.strokeStyle = 'black';
	ctx.lineWidth = 2;

	drawTetromino('O', 2, 3);
	drawTetromino('L', 5, 5);
	drawTetromino('Z', 4, 1);
	drawTetromino('I', 0, 0);
}

function drawTetromino(name, deltaX, deltaY, timesRotated=0) {
	ctx.fillStyle = TETROMINOS[name].color;

	let newCoords = TETROMINOS[name].coords;
	for(let i=0; i<timesRotated; i++) {
		newCoords = rotateCoords(newCoords, TETROMINOS[name].size);
	}
	newCoords = translateCoords(newCoords, deltaX, deltaY );

	drawSquares(newCoords);
}

function drawSquares(coords) {
	for(coord of coords) {
		drawSquare(coord[0], coord[1]);
	}
}

function drawSquare(x, y) {
	ctx.fillRect(x*GRID_SIZE, y*GRID_SIZE, GRID_SIZE, GRID_SIZE);
	ctx.strokeRect(x*GRID_SIZE, y*GRID_SIZE, GRID_SIZE, GRID_SIZE);
}