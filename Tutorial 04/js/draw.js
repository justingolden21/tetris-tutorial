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
}

function drawTetromino(t) {
	ctx.fillStyle = TETROMINOS[t.name].color;

	let newCoords = TETROMINOS[t.name].coords;
	for(let i=0; i<t.rotation; i++) {
		newCoords = rotateCoords(newCoords, TETROMINOS[t.name].size);
	}
	newCoords = translateCoords(newCoords, t.position[0], t.position[1]);

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