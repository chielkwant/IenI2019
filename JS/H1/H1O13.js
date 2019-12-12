var xJOS;
var yJOS;

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
}

function draw() {
  background('lavender');
  fill('black');
  text("xJOS: " + round(xJOS) + " (mouseX:" + round(mouseX) + ")",10,20);
  text("yJOS: " + round(yJOS) + " (mouseY:" + round(mouseY) + ")",260,20);
  
  xJOS = constrain(mouseX,37.5,412.5);
  yJOS = constrain(mouseY,37.5,412.5);
  scale(1);
  translate(xJOS,yJOS);

  // in de volgende regels wordt JOS getekend

  push();
  noStroke();
  fill('indianred');
  ellipse(0,0,75);
  fill('slategray');
  ellipse(-10,-15,25);
  ellipse(10,-15,25);
  fill('white');
  ellipse(-10,-12.5,10,20);
  ellipse(10,-12.5,10,20);
  fill('orange');
  ellipse(0,5,25);
  stroke('slategray');
  strokeWeight(5);
  fill('white');
  arc(0, 20, 40, 20, 0, PI, CHORD);
  pop();
  // einde tekenen JOS
  
}