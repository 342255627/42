
var mn;
var hr;
var sc;



var scAngle,mnAngle,hrAngle;


 

function setup() {
  createCanvas(400,400);
 

}

function draw() {
  background(0);  
  drawSprites();

  push();
  translate(200,200);
  rotate(-90);
  
  mn = minute();
  hr = hour();
  sc = second();
 

  angleMode(DEGREES);

 
  

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

 
  push();
  rotate(scAngle);
  stroke("#FF3939");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  
  push();
  rotate(mnAngle);
  stroke("#FFF454");
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  
  push();
  rotate(hrAngle);
  stroke("#19FFE8");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  
  
  strokeWeight(12);
  noFill();

  stroke("#FF3939");
  arc(0,0,300,300,0,scAngle);

  stroke("#FFF454");
  arc(0,0,280,280,0,mnAngle);

  stroke("#19FFE8");
  arc(0,0,260,260,0,hrAngle);
  pop();
}