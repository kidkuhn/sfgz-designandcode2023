let angle=0;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0, 20);
  noFill();
  stroke(255);
  
  //Koordinatensystem speichern
  push();
  translate(width/2,height/2);
  rotate(angle);
  
  ellipse(0,width/4,width/2,width/2);

  //Koordinatensystem zurücksetzen
  pop();


  //Koordinatensystem speichern
  push();
  translate(width/2,height/2);
  rotate(angle);
  
  ellipse(0,width/8*3,width/4,width/4);

  //Koordinatensystem zurücksetzen
  pop();
  

  angle=angle+1;

}