function setup() {
  createCanvas(800, 800);
 
}

function draw() {
  background(255,0,0);
  //point(300,500);
  strokeWeight(10);
  
  fill(255);
  ellipse(400,400, 600,400);

  fill(0,0,255, mouseX);
  rect(0,0,300,300);

  strokeWeight(1);
 
  line(0,0,mouseX,mouseY);
  line(0,800,800,0);
  
  //noLoop();

  
}

