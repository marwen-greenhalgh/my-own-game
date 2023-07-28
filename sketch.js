var pc_running,pc

var ground, invisibleGround, groundImage;

function preload(){
  pc_running = loadAnimation("idle_front.png","idle_left.png","idle_right.png","idle_back.png")
  groundImage = loadImage("tank.jpg");
 /* trex_collided = loadAnimation("trex_collided.png");
  
  
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  
  restartImg = loadImage("restart.png")
  gameOverImg = loadImage("gameOver.png")
  
  jumpSound = loadSound("jump.mp3")
  dieSound = loadSound("die.mp3")
  checkPointSound = loadSound("checkPoint.mp3")*/
}
function setup() 
{
  createCanvas(1200,800);
 
  ground = createSprite(200,180,400,20);
  ground.addImage(groundImage)
  ground.velocityX = -2
  pc = createSprite(50,550,20,50);
  pc.addAnimation("running", pc_running);
  pc.scale=2 
}

function draw() 
{
background("tank.jpg");
if (ground.x < 0){
  ground.x = ground.width/2;
}
drawSprites()
}

