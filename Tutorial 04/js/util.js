function translateCoords(coords, deltaX, deltaY) {
	let rtn = [];
	for(let i=0; i<coords.length; i++) {
		rtn[i] = [coords[i][0] + deltaX, coords[i][1] + deltaY];
	}
	return rtn;
}

function rotateCoords(coords, size) {
	let rtn = [];
	for(let i=0; i<coords.length; i++) {
		rtn[i] = [1 - (coords[i][1] - (size - 2) ), coords[i][0] ];
	}
	return rtn;
}

function randTetromino() {
	return Object.keys(TETROMINOS)[randInt(0,6)];
}

function randInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}