
var PLAY = 1;
var END = 0;
var gameState = 1;
var sword, swordimg;
var fruit1, fruit2, fruit3, fruit4;
var monster, monsterimg,monster1;
var score;
var gameoverimg, game;
var swordsound;
var gameoversound;
function preload() {
  swordimg = loadImage("sword.png")
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monsterimg = loadImage("alien1.png", "alien2.png");
  gameoverimg = loadImage("gameover.png");
  swordsound=loadSound("knifeSwooshSound.mp3");
  gameoversound=loadSound("gameover.mp3");
}

function setup() {
  createCanvas(500, 500);
  sword = createSprite(300, 300, 10, 10);
  sword.addImage("shrey", swordimg);
  sword.scale = 0.7;
  sword.setCollider("rectangle", 0, 0, 100, 90);

  fruitGroup = new Group();
  enemyGroup = new Group();
    fruitGroup1=new Group();
  enemyGroup1 = new Group();
}
score = 0;

function draw() {
  background("black");
  textSize(20);
  text("Score: " + score, 250, 30);
  if (gameState === PLAY) {
    fruits();
    enemy();
     enemy1();
     fruits1();
    sword.y = World.mouseY;
    sword.x = World.mouseX;

    if (fruitGroup.isTouching(sword)) {
      fruitGroup.destroyEach();
      score = score + 2;
      swordsound.play();
    }
  if (fruitGroup1.isTouching(sword)) {
      fruitGroup1.destroyEach();
      score = score + 2;
    swordsound.play();
    } 
  }
  
   
    
  if (enemyGroup.isTouching(sword)) {
    gameState = END;

    fruitGroup.destroyEach();
    
    fruitGroup1.destroyEach();
    enemyGroup.destroyEach();
    enemyGroup1.destroyEach();
    fruitGroup.setVelocityXEach(0);
    fruitGroup1.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);
enemyGroup1.setVelocityXEach(0);
    sword.addImage("shrey", gameoverimg)
    sword.scale = 1.5;
    gameoversound.play();
  }
  if (enemyGroup1.isTouching(sword)) {
    gameState = END;

    fruitGroup.destroyEach();
    
    fruitGroup1.destroyEach();
    enemyGroup.destroyEach();
    enemyGroup1.destroyEach();
    fruitGroup.setVelocityXEach(0);
    fruitGroup1.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);
enemyGroup1.setVelocityXEach(0);
    sword.addImage("shrey", gameoverimg)
    sword.scale = 1.5;
   gameoversound.play();
  }
  drawSprites();
}


function fruits() {
  if (World.frameCount % 80 === 0) {
    fruit = createSprite(400, 200, 20, 20);
    fruit.scale = 0.2;
    // fruit.debug=true;
    r = Math.round(random(1, 4));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
      fruit.addImage(fruit2);
    } else if (r == 3) {
      fruit.addImage(fruit3);
    } else {
      fruit.addImage(fruit4);
    }

    fruit.y = Math.round(random(10, 340));

    fruit.velocityX = -(9+score/4);
    fruit.setLifetime = 100;

    fruitGroup.add(fruit);
  }
}



function fruits1() {
  if (World.frameCount % 70 === 0) {
    fruit = createSprite(5, 144, 20, 20);
    fruit.scale = 0.2;
    // fruit.debug=true;
    r = Math.round(random(1, 2));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
      fruit.addImage(fruit2);
    } else if (r == 2) {
      fruit.addImage(fruit3);
    } else {
      fruit.addImage(fruit4);
    }

    fruit.y = Math.round(random(10, 340));

    fruit.velocityX = +(9+score/4);
    fruit.setLifetime = 100;

    fruitGroup1.add(fruit);
  }
}

function enemy() {
  if (frameCount % 200 === 0) {
    monster = createSprite(400, 200, 20, 20);
    monster.addAnimation("shrey", monsterimg);
    monster.y = Math.round(random(100, 300));
    monster.velocityX = -(8+score/8);
    monster.lifetime = 150;

    enemyGroup.add(monster);
  }
}
function enemy1() {
  if (frameCount % 150 === 0) {
    monster1 = createSprite(5, 144, 20, 20);
    monster1.addAnimation("shrey", monsterimg);
    monster1.y = Math.round(random(100, 300));
    monster1.velocityX = +(8+score/8);
    monster1.lifetime = 150;

    enemyGroup1.add(monster1);
  }
}
