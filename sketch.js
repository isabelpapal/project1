//This code displays a circle in the center of the canvas, and changes its color based on the position of the mouse. If the mouse is on the left side of the canvas, the circle will be red, and if it's on the right side, the circle will be green.

//It also draws a grid of squares using a nested for loop, and changes the background color randomly when the mouse is clicked.



let r = 0;
let g = 0;
let b = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  

  if (mouseX < width / 2) {
    r = 255;
    g = 0;
    b = 0;
  } else {
    r = 0;
    g = 255;
    b = 0;
  }
  
  
  fill(r, g, b);
  ellipse(width / 2, height / 2, 100);
  

  for (let x = 0; x < width; x += 50) {
    for (let y = 0; y < height; y += 50) {
      rect(x, y, 25, 25);
    }
  }
}


function mouseClicked() {
  background(random(255), random(255), random(255));
}
