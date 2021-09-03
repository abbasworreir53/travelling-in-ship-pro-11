var ship1,ship;
var sea1,sea;
var edges;
function preload(){ 
 ship1 =loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 sea1 = loadImage("sea.png");
}

function setup(){
  createCanvas(600,500);
  

  sea = createSprite(600,300);
  sea.addImage(sea1);
  sea.scale = 0.5;
  
  // mam I have to also tried to add velocity in setup
  // fuction but it didnt work so thats why I have added 
  // sea. velocity in draw function it is just for experiment

  
  ship = createSprite(90,300);
  ship.addAnimation("running" ,ship1);
  ship.scale = 0.25;


  
  edges = createEdgeSprites();

  

}

function draw() {
  background("blue");


  if(sea.x > 0){
    sea.x = width/2;
  }

if(keyDown("right")){
  ship.x = ship.x + 2;
}

if(keyDown("left")){
  ship.x = ship.x - 2;
}

sea.veloctiyX = -5;

  ship.collide(edges);
  drawSprites();
 
}