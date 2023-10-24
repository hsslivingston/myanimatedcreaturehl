let sunY;
let birdX, birdY;
let wingAngle = 0;
function setup() {
  createCanvas(800, 400);
  birdX = -20
  sunY = height;
  birdX =-50;
  birdY = height /2;
}
function draw() {
  background(106, 168, 235);
  //body
fill(101, 72, 150);
  noStroke(0);
  ellipse(130,340,100,100);
  //eyes
  fill(251, 250, 252);
  ellipse(170,320,10,10);
  ellipse(150,320,10,10);
  ellipse(170,340,15,15);
  //antena
  fill(156, 91, 163);
  rect(123,261,10,30);
  //ball
  fill(156, 91, 163);
  ellipse(128,255,17,17);
  //grass
  fill(57, 181, 38);
  ellipse(620,550,500,500);
  //chracter2body
  fill(214, 126, 211)
  ellipse(580,300,100,100);
  //chracter2eyes
  fill(251, 250, 252);
  ellipse(542,280,10,10);
  ellipse(565,280,10,10);
  ellipse(550,300,15,15);
  //annetena2
  fill(82, 47, 16);
  rect(575,221,10,30);
  //ball2
  fill(82, 47, 16);
  ellipse(580,220,17,17);
  //grass
  fill(57, 181, 38);
  ellipse(150,535,300,300);
  //clouds
  fill(251, 250, 252);
 ellipse (100,100,70,70);
  ellipse (70,120,70,70);
  ellipse (130,120,70,70);
  ellipse(100,145,35,20);
  ellipse (550,100,70,70);
  ellipse (600,100,70,70);
  ellipse (575,80,70,70);
  ellipse (575,115,40,40);
  //flowerpedals
  fill(217, 20, 36);
ellipse(700,350,7,7);
  ellipse(650,345,7,7);
  ellipse(600,380,7,7);
  ellipse(500,340,7,7);
  ellipse(540,370,7,7);
  ellipse(490,374,7,7);
  ellipse(750,370,7,7);
  ellipse(676,379,7,7);

  //sun
  fill(255, 204, 0);
 stroke(1);
  ellipse(width / 2, sunY, 100, 100);
  sunY -= 1;
  if (sunY < -50) {
    sunY = height;
  }
}