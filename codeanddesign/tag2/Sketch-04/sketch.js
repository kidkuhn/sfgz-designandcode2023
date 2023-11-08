let r1=200;
let r2=100;

/**
 * Die Variable Mikrofon bindet eine Instanz der Klasse Mic
 * Die Variable micLevel nimmt die aktuelle Lautstärke zurück, von 0 bis 255
 */
let Mikrofon;
let micLevel;


function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  /**
     * Im setup einmalig Zugriff auf das Mikrofon
     */
  Mikrofon = new Mic('Start Mic'); //Parameter übergibt Beschriftung des Buttons
 
}

function draw() {
  background(0);
  noFill();
  stroke(255);
 
   /**
     * User muss mit der Seite interagieren, um Zugriff auf das Mikrofon zu erhalten
     */
   if (Mikrofon.started) {
    /**
     * In jedem Frame wird die aktuelle Lautstärke erfragt 
     * Werte die zurückkommen, gehen von 0 bis 255
     * allenfalls umwandeln
     */
    micLevel = Mikrofon.listenMic();

    r1=micLevel;

   }

  for (let i = 0; i < 72; i = i + 1) {

    console.log(i);
    push();
    translate(width / 2, height / 2);
    rotate(i*5);
    //grid();
    ellipse(100, 0, r1, r1);
    ellipse(150, 0, r2, r2);
    pop();
  }

  //r1=r1+1;

  //r2=r2-1;

  if(r1 > width){
    r1=200;
  }

  if(r2<1){
    r2=100;
  }
}
