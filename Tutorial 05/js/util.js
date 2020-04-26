function translateCoords(coords, deltaX, deltaY) {
	let rtn = [];
	for(let i=0; i<coords.length; i++) {
		rtn[i] = [coords[i][X] + deltaX, coords[i][Y] + deltaY];
	}
	return rtn;
}

function rotateCoords(coords, size) {
	let rtn = [];
	for(let i=0; i<coords.length; i++) {
		rtn[i] = [1 - (coords[i][Y] - (size - 2) ), coords[i][X] ];
	}
	return rtn;
}

function getAdjustedCoords(t) {
	let coords = TETROMINOS[t.name].coords;
	for(let i=0; i<t.rotation; i++) {
		coords = rotateCoords(coords, TETROMINOS[t.name].size);
	}
	return translateCoords(coords, t.position[X], t.position[Y]);
}

function randTetromino() {
	return Object.keys(TETROMINOS)[randInt(0,6)];
}

function randInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isAtBottom(t) {
	for(coord of TETROMINOS[t.name].coords) {
		if(coord[Y] + t.position[Y] == GAME_HEIGHT-1) {
			return true;
		}
	}
	return false;
}

function getWidth(coords) {
	return coords.reduce( (val, cur) => val > cur[X] ? val : cur[X], 0);
}