const GRID_SIZE = 32;
const GAME_WIDTH = 10;
const GAME_HEIGHT = 20;

const X = 0;
const Y = 1;

let canvas, ctx;

function setupCanvas() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	canvas.width = GRID_SIZE * GAME_WIDTH;
	canvas.height = GRID_SIZE * GAME_HEIGHT;

	ctx.strokeStyle = 'black';
	ctx.lineWidth = 2;
}

function drawTetromino(t) {
	ctx.fillStyle = TETROMINOS[t.name].color;
	drawSquares(getAdjustedCoords(t) );
}

function drawBoard() {
	for(let y=0; y<GAME_HEIGHT; y++) {
		for(let x=0; x<GAME_WIDTH; x++) {
			let sq = gameState.board[y][x];
			if(sq=='*') {
				continue;
			}
			ctx.fillStyle = TETROMINOS[sq].color;
			drawSquare(x, y);
		}
	}
}

function drawSquares(coords) {
	for(coord of coords) {
		drawSquare(coord[X], coord[Y]);
	}
}

function drawSquare(x, y) {
	ctx.fillRect(x*GRID_SIZE, y*GRID_SIZE, GRID_SIZE, GRID_SIZE);
	ctx.strokeRect(x*GRID_SIZE, y*GRID_SIZE, GRID_SIZE, GRID_SIZE);
}