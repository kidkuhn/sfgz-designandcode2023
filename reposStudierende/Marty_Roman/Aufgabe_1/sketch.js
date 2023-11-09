let mic;
let angle = 1;
let meinBild;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  
  // Zugriff auf das Mikrofon
  mic = new p5.AudioIn();
  mic.start();

  meinBild = loadImage('smileyface.png');

}

function draw() {
  // Mikrofonpegel abrufen
  let vol = mic.getLevel();
  
  // Hintergrundfarbe basierend auf Mikrofonpegel anpassen
  let backgroundColor = lerpColor(color(10, 29, 70), color(150, 136, 149), vol);
  background(backgroundColor);
  
  noFill();
  stroke(255);
  
  // Größe des Mandala in Bezug auf das Zentrum basierend auf Mikrofonpegel anpassen
  let mandalaSize = map(vol, 0, 1, 1, 5);



  push();
  translate(width / 2, height / 2);
  rotate(angle * 0.2);
  mandala(mandalaSize);
  pop();

  angle = angle + 1;

  // Bild dreht in die entgegengesetzte Richtung des Mandalas
  push();
  translate(width / 2, height / 2);
  rotate(-angle * 1.5);
  image(meinBild, -meinBild.width / 2, -meinBild.height / 2);
  pop();

  angle = angle + 1;
}


function mandala(size) {
  for (let i = 0; i < 36; i = i + 1) {
    push();
    rotate(i * 10);
    stroke(238, 219, 173);
    ellipse(100 * size, 0, 200, 200);
    stroke(74, 130, 143);
    ellipse(150 * size, 0, 100, 100);
    pop();

    
    push();
    rotate(i * 10);
    rotate(-angle/3);
    fill (230, 168, 108);
    noStroke();
    ellipse (225 * size, 0, 20, 20);
    stroke (230, 168, 108);
    strokeWeight (0.5)
    rotate(-angle/8);
    line (20*size,200,650, 100)    
    pop();

  }
  for (let i = 0; i < 72; i = i + 1) {
    push();
    rotate(i * 5);
    if (i % 1 === 0) {
          }
    strokeWeight(2);
    stroke(215, 86, 45);
    ellipse(300 * size, 0, 100, 15);
    pop();
    
  }
}
