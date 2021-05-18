var canvas;
var music;
var block1,block2,block3,block4;
var edges;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1=createSprite(0,580,360,30);
    block1.shapeColor="blue";

    block2=createSprite(295,580,200,30);
    block2.shapeColor="orange";

    block3=createSprite(740,580,220,30);
    block3.shapeColor="red";

    block4=createSprite(515,580,200,30);
    block4.shapeColor="green";
    
    ball=createSprite(random(20,750),100,40,40);
    ball.shapeColor=rgb(255,255,255);
    ball.velocityX=10;
    ball.velocityY=-10;

}

function draw() {
    background(rgb(169,169,169));
    edges= createEdgeSprites();
    ball.bounceOff(edges);

    drawSprites();

    music.play();

    if(block1.isTouching(ball)&& ball.bounceOff(block1)){
        ball.shapeColor="blue";  
    }

    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
        ball.shapeColor="orange";  
    }

    if(block3.isTouching(ball)&& ball.bounceOff(block3)){
        ball.shapeColor="red";  
    }

    if(block4.isTouching(ball)&& ball.bounceOff(block4)){
        ball.shapeColor="green";  
    }

    
    
}
