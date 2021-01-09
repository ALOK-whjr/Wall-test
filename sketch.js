var bullet,wall,wallThickness;
var bulletSpeed,bulletWeight,damage;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(10,300,20,10);
  bullet.shapecolor = 'white;'
  wall = createSprite(1200,300,wallThickness,height/2);
  wall.shapeColor = rgb(80,80,80);
  bulletSpeed = Math.round(random(223,321));
  bulletWeight = Math.round(random(30,52));
  wallThickness = Math.round(random(22,83));
  bullet.velocityX = bulletSpeed;
  damage = 0.5*bulletWeight*bulletSpeed*bulletSpeed/(wallThickness*wallThickness*wallThickness);
  console.log(damage);
  bullet.collide(wall);
}

function draw() {
  background(255,255,255);
  isTouching()
  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
    if(damage < 10){
      wall.shapeColor = 'green';
    }
    if(damage > 10){
      wall.shapeColor = 'red';
    }
  }
  drawSprites();
  fill('black');
  textSize(30);
  text("|Military wall strength test|",50,50);
  textSize(22);
  text("bulletWeight : "+bulletWeight,50,100);
  text("bulletSpeed : "+bulletSpeed,50,135);
  text("wallThickness : "+wallThickness,50,170);
  text("Damage : "+damage,50,205);
}

function isTouching(){
  if(bullet.x - wall.x < bullet.width/2 + wall.width/2 && wall.x - bullet.x  < bullet.width/2 + wall.width/2 && bullet.y - wall.y<bullet.height/2 + wall.height/2 && wall.y - bullet.y  <  bullet.height/2 + wall.height/2){
  }
}