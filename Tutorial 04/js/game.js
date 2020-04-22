let gameState = {};

gameStart();
setInterval(gameLoop, 1000);

function gameStart() {
	gameState.score = 0;
	gameState.level = 1;
	gameState.currentPiece = {
		name: randTetromino(),
		position: [4,0],
		rotation: 0
	};
}

function gameLoop() {
	tick();
	redraw();
}

function tick() {
	gameState.currentPiece.position[1] += 1; // move it down 1
}

function redraw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawTetromino(gameState.currentPiece);
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