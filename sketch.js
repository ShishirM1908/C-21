var bullet,wall,speed,weight,thickness
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50,20);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = ("80,80,80")
  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX=speed;
  thickness = random(22,83)
}

function draw() {
  background("BLACK");  
  wall.shapeColor="white"
  if(wall. x-bullet .x < (bullet . width+wall. width)/2)
  bullet . velocityx=0;
  var damage=0.5 * speed * weight* weight/thickness*thickness*thickness
  if(damage>10)
  
  bullet . shapeColor=color(255, 0, 0) ;
  if(damage<10 )
  bullet . shapeColor=color(230, 230, 0);

  if(hasCollided(bullet, wall))
  bullet. velocityx-0;
  var damage=0.5 * weight * speed* speed/ (thickness *thickness *thickness);
  
  (damage>10)
  wall. shapeColor=color (255, 0,0) ;
  
  if (damage<10)
  
  wall . shapeColor=color (0, 255,0) ;
  

  drawSprites();
}
 
function hasCollided(Lbullet, Lwall)
{
  bulletRightEdge = 1 ;bullet.x + 1 ;bullet. width;
   wallLeftEdge=1 ;wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
  return true
  }
  return false;
}

