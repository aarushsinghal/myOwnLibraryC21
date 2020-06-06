var mRect,fRect;

function setup() {
  createCanvas(800,400);
  
  fRect=createSprite(700, 200, 50, 50);
  mRect=createSprite(100, 200, 60, 80);
  fRect.shapeColor="green";
  mRect.shapeColor="blue";
  fRect.velocityX=-5;
  mRect.velocityX=5;

  yRect=createSprite(200, 300, 50, 50);
  zRect=createSprite(200, 100, 60, 80);
  yRect.shapeColor="blue";
  zRect.shapeColor="green";
  yRect.velocityY=-5;
  zRect.velocityY=5;
}



function draw() {
  background(0);  
  bounceOff(mRect,fRect);
  bounceOff(yRect,zRect);
  drawSprites();
}
