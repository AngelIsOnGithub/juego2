var edges, dot, flag = false,lf=100, gameState="start", redDot;
var button, score=0;

function preload(){
redDot= loadImage("redDot.png");

}

function setup(){
  createCanvas(windowWidth, windowHeight);
  edges = createEdgeSprites();
  button=createSprite(windowWidth/2+15,windowHeight/2-7,75,40);


}

function draw(){
  background("blue");
  drawSprites();
  if(gameState === "start"){
    textSize(20);
    fill("white");

text("Play",windowWidth/2,windowHeight/2);
if(mousePressedOver(button)){
  gameState="play";


}
  }

if(gameState === "play"){
  if(flag === false){
    drawDots();
    flag=true;
  }
  textSize(20);
  fill("orange");
  button.visible=false;
  text("score: "+ score, 40,40)
if(dot.lifetime===0){

gameState="end";


}
}

if(gameState === "end"){
  notification();



}


if(mousePressedOver(dot)){
  dot.destroy();
  flag=false;
  lf -= 0.5;
  score = score +1;


}





}

function drawDots(){
  dot=createSprite(700,500,100,100);
  dot.shapeColor="red";
    dot.x= Math.round(random(1, windowWidth));
    dot.y= Math.round(random(1,windowHeight));
    dot.lifetime=lf;
    dot.addImage(redDot);
    dot.scale= 0.1;

}
function notification(){
swal({
title: `Reset Game`,
confirmButtonText:"Reiniciar"


},
function(isConfirm){
if(isConfirm){
location.reload();

}


}  )

}
