let gameState = {};

function setupGame() {
	gameStart();
	setInterval(gameLoop, 1000);
}

function gameStart() {
	gameState.score = 0;
	gameState.level = 1;
	nextPiece();
	emptyBoard();
	redraw();
}

function gameLoop() {
	tick();
	redraw();
}

function tick() {
	gameState.currentPiece.position[Y] += 1;
	if(isAtBottom(gameState.currentPiece) ) {
		fillSquares(gameState.currentPiece);
		nextPiece();
	}
}

function redraw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBoard();
	drawTetromino(gameState.currentPiece);
}

function nextPiece() {
	gameState.currentPiece = {
		name: randTetromino(),
		position: [4,0],
		rotation: 0
	};
}

function rotateLeft() {
	if(gameState.currentPiece.rotation == 0) {
		gameState.currentPiece.rotation = 3;
	}
	else {
		gameState.currentPiece.rotation--;
	}
	redraw();
}
function rotateRight() {
	if(gameState.currentPiece.rotation == 3) {
		gameState.currentPiece.rotation = 0;
	}
	else {
		gameState.currentPiece.rotation++;
	}
	redraw();
}

function moveLeft() {
	if(gameState.currentPiece.position[X] == 0) {
		return;
	}
	gameState.currentPiece.position[X]--;
	redraw();
}

function moveRight() {
	if(getWidth(getAdjustedCoords(gameState.currentPiece) ) == GAME_WIDTH - 1) {
		return;
	}
	gameState.currentPiece.position[X]++;
	redraw();
}

function emptyBoard() {
	// gameState.board = (new Array(GAME_HEIGHT) ).fill( (new Array(GAME_WIDTH) ).fill('*') );

	gameState.board = [];
	for(let y=0; y<GAME_HEIGHT; y++) {
		gameState.board[y] = [];
		for(let x=0; x<GAME_WIDTH; x++) {
			gameState.board[y][x] = '*';
		}
	}
}

function fillSquares(t) {
	let coords = translateCoords(TETROMINOS[t.name].coords, t.position[X], t.position[Y]);
	for(coord of coords) {
		fillSquare(coord[X], coord[Y], t.name);
	}
}

function fillSquare(x, y, char) {
	gameState.board[y][x] = char;
}