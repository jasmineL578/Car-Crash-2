var thickness,wall;
var bullet, speed, wight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,59);
  weight=random(100,1500);
  
  bullet = createSprite(50, 200, 20, 20);
  bullet.velocityX=speed;
  bullet.shapeColor=color("white");


wall = createSprite(1500,200,60,height/2);
wall.shapeColor=color(80,80,80);



}


function draw() {
  background("black");  

if(wall.x +  bullet.x < ( bullet.width + wall.width)/2);
{
  bullet.velocityX = 0;
  var deformation = 0.5 * weight * speed* speed/22509;
  if(deformation>180)
  {
    bullet.shapeColor = color(255,0,0);
  }
  
  if(deformation<180 && deformation>100)
{
  bullet.shapeColor = color(230,230,0);
}

if(deformation<100)
{
  bullet.shapeColor = color(0,255,0);

}
  }
    drawSprites();
}