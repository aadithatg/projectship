var ship, ship_sailing,edges
var seaimage
function preload(){
ship_sailing = loadAnimation("ship-1.png","ship-2.png")
seaimage = loadImage("sea.png")
}

function setup(){
  createCanvas(2000,1000);
  ship = createSprite(-100,200,0,0)
  ship.addAnimation("sailing",ship_sailing)
  edges = createEdgeSprites();


ship.scale = 0.5
sea = createSprite(1000,500,1000,500)
sea.scale = 0.5
sea.addImage(seaimage)
ship = createSprite(500,380,20,50)
ship.addAnimation("sailing",ship_sailing)
edges = createEdgeSprites();

ship.scale = 0.5








}






function draw() {
  background("blue");
 























  drawSprites();
}