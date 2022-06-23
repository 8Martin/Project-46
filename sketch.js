var form,game;
var b,bImg,intro,introImg;
var gameState = 0;
var plant,plantImg;
var walle,walle1Img,walle2Img;
var wa,waImg,trash,trashImg;//GIF//
var waste1,waste2,waste3,waste4, w1Img, w2Img;
//big,oppositeImg,small//
var c1,c2,c3;
var sound;
function preload() {
  bImg = loadImage("Disney Pixar.png");
  plantImg = loadImage("plant.png");
  walle1Img = loadAnimation("WALLE_side.png");
  walle2Img = loadAnimation("WALLE_side2.png");
  waImg = loadImage("trash_cube.png");
  trashImg = loadAnimation("b1.gif","b2.gif","b3.gif");
  cubeImg = loadImage("cube_1.png");
  m1 = loadSound("bot_m.mp3");//MUSIC//
  sound = loadSound("music.mp3");
  //WASTE//
  w1Img = loadImage("waste_1.jpg");
  w2Img = loadImage("waste_original.png");
  w3Img = loadImage("waste_2.jpg");
  //WASTE//
}

function setup(){
  canvas = createCanvas(1100,700);
  
  b = createSprite(550,348,20,20);
  b.addImage("b1",bImg);
  b.scale = 1.1;

  plant = createSprite(1280,148,20,20);
  plant.addImage("p1", plantImg);
  plant.scale = 0.5;
//GIF//
  trash = createSprite(4050,340,30,30);
  trash.addAnimation("tr1",trashImg);
  trash.scale = 2.5; 
 //GIF//  

  //IN THE SERVE STATE//
  wa = createSprite(4300,580,30,30);
  wa.addAnimation("wa1",waImg);
  wa.scale = 0.6;
  
  //IN THE PLAY STATE//
 
  waste2 = createSprite(3300,500,30,30);
  waste2.addImage("w1",w3Img);
  waste2.scale = 1.5;

  waste3 = createSprite(7300,710,30,30);
  waste3.addImage("w3",w1Img);
  waste3.scale = 1.5;

  waste1 = createSprite(7800,500,30,30);
  waste1.addImage("w2",w2Img);
  waste1.scale = 1.5;

  walle = createSprite(100,6000,30,30);
  walle.addAnimation("walle1",walle1Img);
  walle.addAnimation("walle2",walle2Img);
  walle.scale = 0.6;

  c1 = createSprite(2600,630,20,20);
  c1.addImage("cube1",cubeImg);
  c1.scale = 0.2;

  c2 = createSprite(2000,630,20,20);
  c2.addImage("cube2",cubeImg);
  c2.scale = 0.2;
  
  c3 = createSprite(2000,630,20,20);
  c3.addImage("cube3",cubeImg);
  c3.scale = 0.2;

  c4 = createSprite(2000,630,20,20);
  c4.addImage("cube3",cubeImg);
  c4.scale = 0.2;

 //IN THE PLAY STATE//
  game = new Game()
  game.start();

}

function draw(){
   background("black");
 
 
   //IN THE SERVE STATE//
   if(gameState === 1){
    b.x = 2000;
    wa.x = 430; 
    trash.x = 450;
   }

   if(gameState === 2){
    wa.x = 4300; 
    walle.y = 600;
    trash.x = 4500;
    waste1.x = 780;
    waste2.x = 330;
    waste3.x = 730;
    background("lightyellow");
    if(keyDown("LEFT_ARROW")){
      walle.x = walle.x-8;
      walle.changeAnimation("walle2");
    }
    if(keyDown("RIGHT_ARROW")){
      walle.x = walle.x+8;
      walle.changeAnimation("walle1");   
    }
    if(keyWentUp("LEFT_ARROW")){
      m1.stop();
    }
    if(keyWentUp("RIGHT_ARROW")){
      m1.stop();
    }

   if(walle.isTouching(waste2)){
    waste2.x =  waste2.x+80;
    c1.x = 90;
   }    
   if(walle.isTouching(waste2)&&waste2.x === 410){
    waste2.visible = false;
    c2.x = 230;
   }    
   if(walle.isTouching(waste1)){
    waste1.x = waste1.x+200;
    waste3.x = waste3.x+200;
    c3.x = 350;
   }   
   if(walle.isTouching(waste1)&&waste1.x === 980&&waste3.x === 930){
    waste1.visible = false;
    waste3.visible = false;
    c4.x = 480;
    plant.x = 698;
    plant.y = 580;
   }   
  }

  
   drawSprites();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


