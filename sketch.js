//declare variable for hour, min and sec
var hr, min, sc
var scAngle, minAngle, hrAngle
function setup() {
  createCanvas(400,400);

  angleMode(DEGREES)
}

function draw() {
  background(0,0,0);  

  translate(200,200)
  rotate(-90)
// use hour() , minute(), second() to get the current hour, min and sec
 hr=hour() 
 min=minute()
 sc=second()


// use map to plot the hour , minute, sec to get a range from 0= 60 in a circle range from 0-360
//example of scAngle given, make same for mnAngle and hrAngle
  scAngle = map(sc, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle= map(hr % 12, 0, 12, 0, 360);
  
  push();
  rotate(scAngle)

  stroke("red");
  strokeWeight(7);
  line(0,0,100,0)

  pop();

  // repeat the same as above for minute hand by rotating at mnAngle,
  // give a stroke, strokeWeight and draw a line()

  push();
  rotate(minAngle)

  stroke("blue");
  strokeWeight(7);
  line(0,0,75,0)

  pop();

// repeat the same as above for hour hand by rotating at hrAngle,
  // give a stroke, strokeWeight and draw a line()
  push();
  rotate(hrAngle)

  stroke("white");
  strokeWeight(7);
  line(0,0,50,0)

  pop();

  strokeWeight(10);
  noFill();
  stroke("green")
  arc(0,0,305,305,0,hrAngle)

  // draw an arc using the below paramaters
  //arc(x, y, w, h, start, stop)
  //also give a stroke for each arc
  stroke("blue")
  arc(0,0,280,280,0,minAngle)
  stroke("red")
  arc(0,0,255,255,0,scAngle)
}
