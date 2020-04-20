const GRID_SIZE = 64;
const GAME_WIDTH = 10;
const GAME_HEIGHT = 20;

let canvas, ctx;

window.onload = function() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	canvas.width = GRID_SIZE * GAME_WIDTH;
	canvas.height = GRID_SIZE * GAME_HEIGHT;

	drawTetromino('O', 2, 3);
	drawTetromino('L', 5, 5);

}

function drawTetromino(name, deltaX, deltaY) {
	ctx.fillStyle = TETROMINOS[name].color;
	let newCoords = translateCoords(TETROMINOS[name].coords, deltaX, deltaY);
	drawSquares(newCoords);
}

function drawSquares(coords) {
	for(coord of coords) {
		drawSquare(coord[0], coord[1]);
	}
}

function drawSquare(x, y) {
	ctx.fillRect(x*GRID_SIZE, y*GRID_SIZE, GRID_SIZE, GRID_SIZE);
}