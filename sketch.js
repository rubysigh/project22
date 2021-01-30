
var backgroundImg;
var fairy,fairyImg;
var star,starImg;


function preload()
{

backgroundImg = loadImage("images/starnight.png");
fairyImg = loadAnimation("images/fairy1.png","images/fairy2.png");
starImg = loadImage("images/star.png");

   //preload the images here
}

function setup() {
  createCanvas(800, 750);
 
fairy=createSprite(100,500,20,20);
fairy.addAnimation("fairyflying",fairyImg);
fairy.scale=0.2;


star=createSprite(645,30,20,20);
star.addImage("yellowstar",starImg);
star.scale=0.2;
}



function draw() {
 background(backgroundImg);
 
if(star.position.y>470){
star.velocityY=0;
}
fairy.velocityX=0;
fairy.velocityY=0;

if(keyDown("RIGHT_ARROW")){
fairy.velocityX=3;
fairy.velocityY=0;
}
if(keyDown("LEFT_ARROW")){
fairy.velocityX=-3;
fairy.velocityY=0;
}
if(keyDown("DOWN_ARROW")){
star.velocityY=5;
star.velocityX=0;
}
drawSprites();
}
