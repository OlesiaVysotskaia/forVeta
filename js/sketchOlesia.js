let d = 0;
let speed = 0.005;
// let col = {
//   r: 20,
//   g: 20,
//   b: 255,
// }


function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("canvas");
}

function draw() {
  fill(0,0,0, 15, 15);
  noStroke();
  rect(0, 0, windowWidth, windowHeight);

  // if (mouseIsPressed) {
  //  col = {r: 255,
  // g: 244,
  // b: 101,};
  // } else {
  //   col = {r: 255,
  // g: 255,
  // b: 225,};
  // }
  // fill(col.r,col.g,col.b);
  //
  // ellipse(mouseX,mouseY,60);

  randomSeed(44);
  for (let i = 0; i < 20; i++) {


    makeCircles(random(width), random(height));
  }

}

function makeCircles(x = 0, y = 0) {

  fill('white')
  noStroke()
  ellipse(x, y, d, d)

  if (d > 10) {
    speed = -0.003;
  }

  if (d < 0) {
    speed = 0.002
  }

  d = d + speed;

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
}
