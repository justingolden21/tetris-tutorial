function translateCoords(coords, deltaX, deltaY) {
	let rtn = [];
	for(let i=0; i<coords.length; i++) {
		rtn[i] = [coords[i][0] + deltaX, coords[i][1] + deltaY];
	}
	return rtn;
}