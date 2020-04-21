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
