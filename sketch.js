var bg;
var ground, man, man1, farmer, farmer1;
var moneyGroup, enenemyGroup;
var coin;




function preload(){
 bg = loadImage("images/forest.jpg");
 man = loadImage("images/ENEMY.gif");
 farmer = loadImage("images/FARMER.gif");
 coin = loadImage("images/coin.png");
}

function setup() {
  createCanvas(1500,700);
  ground = createSprite(750,350,20,20);
  ground.addImage(bg);
  ground.velocityX = -3;
  ground.scale = 2;

 
  farmer1 = createSprite(100,600,20,20);
  farmer1.addImage(farmer);
  farmer1.scale = 0.9;
  farmer1.debug = true;
  farmer1.setCollider("rectangle",0,0,100,100);

enemyGroup = new Group();
moneyGroup = new Group();
  //farmer1.velocityX = 1;
}

function draw() {
background("white");
if(ground.x<0){
  ground.x = ground.width/2;
}

if(keyDown(RIGHT_ARROW)){
  farmer1.x = farmer1.x + 2 ;
}

if(farmer1.isTouching(moneyGroup)){
  moneyGroup.destroyEach();
}
/*camera.position.x = ground.x;
camera.position.y = height/2;*/
spawnEnemy();
money();
drawSprites();
}

function spawnEnemy(){
  if(frameCount%800 === 0){
    man1 = createSprite(1000,550,20,20);
    man1.addImage(man);
    man1.scale = 0.3;
    man1.velocityX = -2;
    enemyGroup.add(man1);
  }
 

}

function money(){
  if(frameCount%200 === 0){
    var money = createSprite(1000,600,20,20);
    money.addImage(coin);
    money.velocityX = -2;
    money.scale = 0.05;
    money.debug = true;
    money.setCollider("rectangle",0,0,money.width, money.height);
    moneyGroup.add(money);
  }
}