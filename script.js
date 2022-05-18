
/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 1050; // 1280 - 80 (breedte) - 150 (verte van muur)
var spelerY = 680; // y-positie van speler
var vijandX = 300;
var vijandY = 680;
var platformX = 300;
var platformY = 280;
var platform2X = 100;
var platform2Y = 300;
var platform3X = 880; // 1280(breedte) - 100(gat) - 300(balkbreedte)
var platform3Y = 300;
var spelerspringt = false;
var snelheid = 7;
var spelerspringt2 = false;
var snelheid2 = 7;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
  if (keyIsDown(37)) { // Left Arrow
  spelerX = spelerX - 7;
  }
  if (keyIsDown(39)) { // Right Arrow
  spelerX = spelerX + 7;
  }
  if (spelerY > 694) {
    spelerY = 694;
  }

  // vijand
  if (keyIsDown(68)) { // D
  vijandX = vijandX + 7;
  }
  if (keyIsDown(65)) { // A
  vijandX = vijandX - 7;
  }
  if (vijandY > 694) {
    vijandY = 694;
  }
      // springen speler
      if (spelerspringt === false && keyIsDown(38)) {
    snelheid = 10;
    spelerspringt = true;
  }
      if (spelerspringt === true ) {  // langzamer springen
    spelerY = spelerY - snelheid;
    snelheid = snelheid - 0.1;
  }
      if (spelerspringt === true && spelerY > 690) {
    spelerspringt = false;
    spelerY = 680;
  }
      // springer vijand
        if (spelerspringt2 === false && keyIsDown(87)) {
    snelheid2 = 10;
    spelerspringt2 = true;
  }
      if (spelerspringt2 === true ) {  // langzamer springen
    vijandY = vijandY - snelheid2;
    snelheid2 = snelheid2 - 0.1;
  }
      if (spelerspringt2 === true && vijandY > 690) {
    spelerspringt2 = false;
    vijandY = 680;
  }
    
  

  
  // kogel
 
  // mechanic
  

  
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
if (spelerX - vijandX < 50 &&
    spelerX - vijandX > -50 &&
    spelerY - vijandY < 50 &&
    spelerY - vijandY > -50) {
    console.log("Botsing");
   }
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
fill (117, 147, 217)
  rect(0,0,1280,720)
  // vijand
  fill(42, 140, 0);
  rect(vijandX - 150, vijandY - 160, 90, 160);
  // kogel

  // speler
  fill(140, 0, 30);
   rect(spelerX, spelerY - 160, 90, 160);



  // punten en health

  // map & mechanic
fill(140, 0, 200);
  rect(platformX - 1000, platformY + 400, 10000, 50);
  rect(platform2X, platform2Y, 300, 20);
  rect(platform3X , platform3Y , 300, 20);
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background(117, 147, 217);
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}
