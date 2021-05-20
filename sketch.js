var tower0;
var door0;
var climb0;
var ghost0;
var play=0;
var end=1;
var gameState=play;
var inv0;
var spook;

function preload(){
  towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
  climbImg=loadImage("climber.png");
  ghostImg=loadImage("ghost-standing.png");
  spooksound=loadSound("spooky.wav")
}

function setup(){
  createCanvas(500,500);
  
  tower1();
  doorGr=new Group();
  Climb= new Group();
  Inv=new Group();
  
  ghost1();
}

function draw(){
  
  
  
if(keyDown("space")){
 // gameState=play;
    ghost0.velocityY=-5;
  spooksound.play();
  }
  
 if(gameState===play){
  
    
    if(tower0.y>500){
    tower0.y=250;
  }
  
  door1();
  
  if(keyDown("left_arrow")){
    ghost0.x=ghost0.x-5;
  }
  
  if(keyDown("right_arrow")){
    ghost0.x=ghost0.x+5;
  }
  
  ghost0.velocityY=ghost0.velocityY+1;
  
  
   if(ghost0.isTouching(Inv)||ghost0.y>500){
    ghost0.destroy();
    gameState=end;
  }
   
   drawSprites();
    
  }
  
  if(gameState===end){
    
    background(0);
    stroke("purple")
    fill("pink");
    textSize(50);
    textFont("algerian");
    
    text("gameOver",100,250);
    
    
  }
  
  
}

function tower1(){
  tower0=createSprite(250,250,20,20);
  tower0.addImage("t",towerImg);
  tower0.velocityY=3;
  
}

function door1(){
  if(frameCount%200===0){
  door0=createSprite(random(50,450),0,20,20);
    door0.addImage("d",doorImg);
  door0.velocityY=3;
    door0.lifetime=200;
    
    door0.depth=ghost0.depth-1;
    
    doorGr.add(door0);
    
    climb0=createSprite(door0.x,door0.y+60,20,20);
    climb0.addImage("c",climbImg);
    climb0.lifetime=200;
    climb0.velocityY=3;
    
    climb0.depth=ghost0.depth-1;
    
    
    
    
    Climb.add(climb0);
    
    
    inv0=createSprite(climb0.x,climb0.y+5,100,2);
    inv0.debug=true;
    inv0.velocityY=3;
    
    Inv.add(inv0);
    
}
  
}

function ghost1(){
  ghost0=createSprite(250,100,20,20);
  ghost0.addImage("g",ghostImg);
  ghost0.scale=0.4;
  
  
  
  
}

