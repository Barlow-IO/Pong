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
        speed -= 0.5;
    }
    function brake(){
        speed += 0.5;
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

var car = new Car(view.center.x, view.center.y);
var npcCar = new Car(view.center.x + 20, view.center.y);

var frame = 0;  
function onFrame() {
    if (Key.isDown('a')){
        car.steerLeft();

    }
    if (Key.isDown('d')) {
        car.steerRight();
    }
    if (Key.isDown('w')){
        car.throttle();
    }
    if (Key.isDown('s')){
        car.brake();
    }
    frame += 0.01;
    frame %= 2 * Math.PI;
    car.update();
    npcCar.update();
    car.render();
    npcCar.render();
}



function onResize(event) {
	// Whenever the window is resized, recenter the path;
}