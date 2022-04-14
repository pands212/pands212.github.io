function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}
function draw() {
  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX;  // Inverse X
  let iy = height - mouseY; // Inverse Y
  //fill(255, 153, 51);
  fill(255, 51, 204);
  stroke("pink");
  ellipse(x, height/2, y, y);
  //fill(255,0,0,63);
  fill(255, 153, 51);
  ellipse(ix, height/2, iy, iy);

 
}