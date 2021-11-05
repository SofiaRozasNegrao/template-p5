var caixa;

function setup() {
  createCanvas(400,400);
  caixa=createSprite(200,200,30,30)
}

function draw() 
{
  background("yellow");

if(keyDown("RIGHT_ARROW")){
background("red");
}
  drawSprites();
}

