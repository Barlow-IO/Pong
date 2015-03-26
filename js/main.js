var path = new Path.Circle({
	center: view.center,
	radius: 30,
	strokeColor: 'black'
});

var frame = 0;
function onFrame() {
    frame += 0.01;
    frame %= 2 * Math.PI;
    
    path.position.x = Math.cos(frame) * 100 + 100;
}

function onResize(event) {
	// Whenever the window is resized, recenter the path:
	path.position = view.center;
}