var bgImg;
var cat, mouse;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadImage("images/cat2.png");
    catImg3 = loadImage("images/cat3.png");
    catImg4 = loadImage("images/cat4.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadImage("images/mouse2.png");
    mouseImg3 = loadImage("images/mouse3.png");
    mouseImg4 = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     cat = createSprite(870, 600);
     mouse = createSprite(400, 600);
     cat.addAnimation("catSitting", catImg1);
     cat.scale = 0.2
     mouse.addAnimation("mouseSitting", mouseImg1);
     mouse.scale = 0.2
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catLastImage", catImg3);
        cat.changeAnimation("catLastImage");
        cat.x = 300;
        cat.scale=0.2;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

   if(keyCode === LEFT_ARROW){
       mouse.addAnimation("mouseTeasing", mouseImg2);
       mouse.changeAnimation("mouseTeasing");
       mouse.frameDelay = 25;

       cat.velocityX = -5
   }
}
