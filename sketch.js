
var monkey, monkey_running;


var banana, bananaImage;
var obstacle,obstacleImage;
var foodGroup,obstacleGroup;
var score;
function preload(){
  
monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(700, 400);
  background("pink");
  
 var survivalTime=0;
  monkey = createSprite(80,230,10,10);
  
  monkey.addAnimation("moving", monkey_running);
  
  monkey.scale=0.1;
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  //ground.scale=2.5;
  console.log(ground.x);
  
  foodGroup=new Group();
  obstacleGroup=new Group();
  
  spawnFood();
  spawnObstacles();
  
  score=0;
  
  
}

function draw() {
  background(225);
  
  ground.velocityX = -4;
  if(ground.x < 0){
     ground.x = ground.width/2; 
 }
  
  if(keyDown("space")) {
      monkey.velocityY = -12; 
    }
  
    monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  //spawnFood();
  //spawnObstacles();
  
  drawSprites();
  stroke("white");
  textSize(20);
  fill("red");
  text("Score:"+score,500,50);
  
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX = 0;
    monkey.velocityY = 0; 
  obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
  }    

stroke("black");
textSize(20);
fill("black");
survivalTime=Math.round(frameCount/frameRate())
text("survival Time:"+survivalTime,100,50);

}

function spawnFood(){
  if (frameCount %80 === 0){
    
    banana = createSprite(620,120, 50, 50 );
    banana.y=random(120,200);
    banana.velocityX=-5;
             
    banana.lifetime = 220;
    monkey.depth=banana.depth+1;
    banana.addImage(bananaImage);
    banana.scale=0.08;
   foodGroup.add(banana);
    
    
  }
}

function spawnObstacles(){
  if (frameCount % 300 === 0){
    
    obstacle = createSprite(620,253,50,50);
    obstacle.velocityX=-6;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.15;
    
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
    
  }
  
  
}
























