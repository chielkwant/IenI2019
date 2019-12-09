var diameter = 10;

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  noStroke();
  //noLoop();
}

function draw() {
  background('pink');
  fill('purple');
  text("mouseX:" + round(mouseX) + " mouseY:"+round(mouseY),10,20);
  fill('green');
  ellipse(mouseX, mouseY, diameter);
diameter +=1;
}

