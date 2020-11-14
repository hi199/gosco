var  car , wall
  var speed , weight
  function setup() {
  speed=random(55,90)
  weight=random(400,1500)
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(700, 200, 60, height/2);
}

function draw() {
  car.velocityX=speed
   if (wall.x-car.x<(car.width/2+wall.width/2)){
   car.velocityX=0
   var defomation=0.5 * weight * speed * speed/22509
   if (defomation>180){
     car.shapeColor="red"
   }
   if (defomation<180 && defomation>100){
    car.shapeColor="green"
  }
  if(defomation<100){
    car.shapeColor="blue"
  }
}
  background(255,255,255);  
  drawSprites()
   }