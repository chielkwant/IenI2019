function setup() {
  canvas = createCanvas(450,450);
  background('red');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  noStroke();
  fill('pink');
  rect(125,125,200,200);
}