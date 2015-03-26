function Car(x, y) {
    var pos = new Point(x,y);
    var speed = new Point(0,0);
    var rotation = 0;
    sprite = new Raster('car');
    this.update = function(){
        pos += speed;
        //friction
        speed*=0.96;
        sprite.position = pos;
    }
    this.render = function() {
        sprite.position = pos;
        //sprite.rotation = rotation;
    }

}

car = new Car(view.center.x, view.center.y);

var frame = 0;
function onFrame() {
    /*
    if (Key.isDown("left")){
        car.steerLeft();
    }
    if (Key.isDown("right")){
        car.steerRight();
    }
    */
    car.render();
    frame += 0.01;
    frame %= 2 * Math.PI;
    
}

function onResize(event) {
	// Whenever the window is resized, recenter the path;
}