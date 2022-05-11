
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

var spelerX = 900; // x-positie van speler
var spelerY = 680; // y-positie van speler
var vijandX = 300;
var vijandY = 680;
var platformX = 300;
var platformY = 280;
var platform2X = 100;
var platform2Y = 300;
var platform3X = 880; // 1280(breedte) - 100(gat) - 300(balkbreedte)
var platform3Y = 300;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
  if (keyIsDown(37)) {
  spelerX = spelerX - 7;
  }
  if (keyIsDown(39)) {
  spelerX = spelerX + 7;
  }
  if (keyIsDown(38)) {
  spelerY = spelerY - 7;
  }
  // vijand
  if (keyIsDown(68)) {
  vijandX = vijandX + 7;
  }
  if (keyIsDown(65)) {
  vijandX = vijandX - 7;
  }
    if (keyIsDown(87)) {
  vijandY = vijandY - 7;
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
  rect(vijandX - 80/2, vijandY - 160, 90, 160);
  fill(0,0,0);
  ellipse(vijandX, vijandY, 10,10);
  // kogel

  // speler
  fill(140, 0, 30);
   rect(spelerX - 80/2, spelerY - 160, 80, 160);
  fill(0,0,0);
  ellipse(spelerX, spelerY, 10,10);

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
