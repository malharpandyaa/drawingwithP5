function setup(){
  createCanvas(800,800);
}
function draw() {
  //Grey canvas
  background(200);


  //Example 1
  //Green rectangle
  fill(0, 255, 0); 
  noStroke(); 
  rect(63, height / 2 - 350, 245, 120);

  //White Circle with black borders
  fill(255);
  stroke(0);
  strokeWeight(2);
  circle(123, height / 2 - 290, 100, 100);

  //White Square with black borders
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(197, height / 2 - 340, 100, 100);


  //Example 2
  // White square
  fill(255, 255, 255); 
  noStroke(); 
  rect(100, 320, 225, 225);

  //Transparency and Saturation of Circles
  noStroke(); 
  let transparency = 90; 
  let saturation = 50; 

  //Red Circle
  fill(255, 0, 0, transparency); 
  ellipse(212, 397, 110, 110); 

  //Purple Circle
  fill(160, 32, 240, transparency); 
  ellipse(180, 462, 110, 110); 

  //Green Circle
  fill(0, 255, 0, transparency); 
  ellipse(245, 462, 110, 110);


  //Example 3  
  //Black background
  fill(0);
  noStroke();
  rect(500, 80, 200, 100);

  //Pacman
  fill(255, 255, 0); 
  stroke(0); 
  strokeWeight(2);
  arc(550, 130, 80, 80, PI + PI / 4, PI - PI / 5, PIE); 

  //Ghost
  fill(255, 0, 0); 
  noStroke();
  ellipse(650, 120, 80, 60);
  rect(610, height / 2 - 280, 80, 47); 

  // Ghost eyes
  fill(255, 255, 255);
  ellipse(630, 130, 25, 25);
  ellipse(670, 130, 25, 25);
  fill(0, 0, 255); 
  ellipse(630, 130, 15, 15); 
  ellipse(670, 130, 15, 15);
  

  //Example 4
  //Blue square
  fill(0, 0, 150); 
   noStroke();
   rect(500, 350, 200, 200); 
 
  //Green circle with white borders
   fill(0, 150, 0); 
   stroke(255);
   strokeWeight(3); 
   ellipse(600, 450, 100, 100); 
 
  //Red star with white borders
   fill(255, 0, 0); 
   stroke(255); 
   strokeWeight(3); 
   drawStar(600, 450, 22, 50, 5);
 
  //Function to draw the shape of the star
  function drawStar(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = -PI/2; a < -PI/2 + TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}