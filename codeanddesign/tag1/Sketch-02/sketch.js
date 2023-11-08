let durchmesser; 
durchmesser=20;

function setup() {
  createCanvas(400, 400);
  console.log(durchmesser);
}

function draw() {
  let r=map(mouseX,0, 400,0,255);
  let b=map(mouseY,0, 400,0,255);

  background(255,10);
  //console.log(mouseX, mouseY);
  fill(r,b,0, 30);

  ellipse(mouseX,mouseY,durchmesser,durchmesser);

  durchmesser=durchmesser+0.5;

  if(durchmesser > 300){
    durchmesser=20;
  }

}


function mouseClicked(){
  durchmesser=durchmesser+10;
}