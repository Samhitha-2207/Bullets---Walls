var wall, bullet;
var thickness, speed, weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,40,80);

  wall = createSprite(1300,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
}

function draw() {
  background("blue");  
  drawSprites();

  bullet.velocityX = speed;

  if(wall.x-bullet.x < (bullet.width+wall.width)/2) {
    bullet.velocityX = 0;

    var deformation = (weight*speed*speed)/22500;

    if(deformation>180) {
      bullet.shapeColor = color(255,0,0);
    }

    if(deformation<100) {
      bullet.shapeColor = color(0,255,0);
    }

    if(deformation>100 && deformation<180) {
      bullet.shapeColor = color(230,230,0);
    }
  }

  if(hasCollided(bullet, wall)) {
    bullet.velocityX = 0;

    var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

    if(damage>10) {
      wall.shapeColor = color(255,0,0);
    }

    if(damage<10) {
      wall.shapeColor = color(0,255,0);
    }
  }
}

function hasCollided(lbullet, lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge>=wallLeftEdge) {
    return true;
  } return false;
}