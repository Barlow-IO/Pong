"use strict";
function Car(x, y) {
    var pos = new Point(x,y);
    var speed = 0;
    var direction = new Point(0,1);
    var sprite = new Raster('car');
    function update (){
        pos += (direction * speed);
        //friction
        speed*=0.96;
    }
    function steerLeft(){
        direction = direction.rotate(-3);
    }
    function steerRight (){
        direction = direction.rotate(3);
    }
    function throttle (){
        speed = -1.0;
    }
    function brake(){
        speed = 1.0;
    }
    function render() {
        sprite.position = pos;
        sprite.rotation = direction.getAngleInDegrees();
    }
    return {
        speed: speed,
        pos: pos,
        direction: direction,
        //methods
        update: update,
        render: render,
        steerLeft: steerLeft,
        steerRight: steerRight,
        throttle: throttle,
        brake: brake,
        sprite: sprite,
    }

}

car = new Car(view.center.x, view.center.y);

var frame = 0;
console.log(Key);   
function onFrame() {
    if (Key.isDown('left')){
        car.steerLeft();
    }
    if (Key.isDown('right')) {
        car.steerRight();
    }else{
        console.log("key right up");
    }
    if (Key.isDown('up')){
        car.throttle();
    }
    if (Key.isDown('down')){
        car.brake();
    }
    frame += 0.01;
    frame %= 2 * Math.PI;
    car.update();
    car.render();
}



function onResize(event) {
	// Whenever the window is resized, recenter the path;
}