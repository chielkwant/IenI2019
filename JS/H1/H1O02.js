function setup() {
  canvas = createCanvas(450,450);
  background('darkred');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  noStroke();
  fill('darkred');
  triangle(225,0,0,450,450,450);
    noStroke();
    fill("pink");
    triangle(450,0,450,450,0,225);
    noStroke();
    fill("purple");
    triangle(0,450,0,0,450,225);
}