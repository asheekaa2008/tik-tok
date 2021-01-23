function setup() {
  //Clculating time using prefind func from p5.js
  hr= hour();
  mn= minute();
  sc= second();
}

function draw() {
  background(255,255,255);  
  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr,0,60,0,360);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  //drawing seconds hand
  push();
  rotate(scAngle);//rotate the hand based on angle calculated
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0)
  pop()
   
  push();
  rotate(mnAngle);//rotate the hand based on angle calculated
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0)
  pop()

  push();
  rotate(hrAngle);//rotate the hand based on angle calculated
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0)
  pop()
  drawSprites();
}