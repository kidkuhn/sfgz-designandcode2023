let sliderRot; //1. Variable initialisieren

function setup() {
  createCanvas(800, 800);
  
  //2. Variable Werte zuweisen und Slider positionieren
  sliderRot = createSlider(0, 255, 100);
  sliderRot.position(10, 60);

  
}

function draw() {
  background(255);

  text("Rotwert", 10, 100);
  //3. Wert auslesen und in neue Variable schreiben
  let gugs=sliderRot.value();

  noStroke();
  //4. Wert benutzen
  fill(gugs, 50, 200, 100);
  
  ellipse(width/2, height/2, 700, 400);
 
}