var canvas;
var music;
var redb,greenb,yellowb,blueb;
var ball,edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    blueb = createSprite(60,590,220,50);
    blueb.shapeColor = "blue";

    greenb = createSprite(285,590,180,50);
    greenb.shapeColor = "green";

    yellowb = createSprite(500,590,180,50);
    yellowb.shapeColor = "yellow";

    redb = createSprite(720,590,180,50);
    redb.shapeColor = "red";


    //create ball sprite and give velocity
    ball = createSprite(random(20,720),200,50,50);
    ball.shapeColor = "white";
    ball.velocityX = 5;
    ball.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(ball.isTouching(blueb) && ball.bounceOff(blueb)){
     ball.shapeColor = "blue";
     music.play();
    }
  
    if(ball.isTouching(greenb) && ball.bounceOff(greenb)){
        ball.shapeColor = "green";
       }

    if(ball.isTouching(yellowb) && ball.bounceOff(yellowb)){
    ball.shapeColor = "yellow";
    }
    
    if(ball.isTouching(redb) && ball.bounceOff(redb)){
    ball.shapeColor = "red";
    ball.velocityX = 0;
    ball.velocityY = 0;
    music.stop();
    } 
    drawSprites();  
}
