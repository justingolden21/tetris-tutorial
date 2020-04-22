document.onkeydown = function(event) {
	if(event.keyCode == 37) { // left arrow
		rotateLeft();
	}
	else if(event.keyCode == 39) { // right arrow
		rotateRight();
	}
}