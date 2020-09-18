let b;
let c;
let d
let e;

function setup() {
  createCanvas(800, 400);
  b = new hyper(0, 100,"red"); //make a new ball from the Ball class and call it b.
  c = new hyper (200, 200, "blue");
  d = new hyper(50, 50, "green");
  e = new perfectCircle(20, 20, 20);


}


function draw(){
	background("blue");
  b.drawHyper();
  b.moveHyper();
  c.drawHyper();
  c.moveHyper();
  d.drawHyper();
  d.moveHyper();
  e.drawCircle();
  e.moveCircle();


}


//ball class from which to create new balls with similar properties.
class hyper {

	constructor(x,y,hyperColor){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.hyperColor= hyperColor;
	}
	drawHyper(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.hyperColor);
		    hypercube(this.x,this.y);
	}
	moveHyper(){ //update the location of the ball, so it moves across the screen
		this.x++;
		this.y++;
	}
}
  function hypercube_1(x,y) {
  push();
  noFill();
  line(x+125-140,y+105-140,x+125-140,y+170-140);
  line(x+105-140,y+125-140,x+170-140,y+125-140);
  line(x+105-140,y+150-140,x+170-140,y+150-140);
  line(x+150-140,y+170-140,x+150-140,y+105-140);
  line(x+150-140,y+105-140,x+105-140,y+150-140);
  line(x+105-140,y+125-140,x+150-140,y+170-140);
  line(x+125-140,y+170-140,x+170-140,y+125-140);
  line(x+170-140,y+150-140,x+125-140,y+105-140);
  line(x+105-140,y+125-140,x+105-140,y+60-140);
  line(x+105-140,y+60-140,x+170-140,y+60-140);
  line(x+170-140,y+60-140,x+170-140,y+125-140);
  line(x+150-140,y+105-140,x+215-140,y+105-140);
  line(x+215-140,y+105-140,x+215-140,y+170-140);
  line(x+215-140,y+170-140,x+150-140,y+170-140);
  line(x+170-140,y+150-140,x+170-140,y+215-140);
  line(x+170-140,y+215-140,x+105-140,y+215-140);
  line(x+105-140,y+215-140,x+105-140,y+150-140);
  line(x+125-140,y+170-140,x+60-140,y+170-140);
  line(x+60-140,y+170-140,x+60-140,y+105-140);
  line(x+60-140,y+105-140,x+125-140,y+105-140);
  line(x+105-140,y+150-140,x+60-140,y+105-140);
  line(x+60-140,y+105-140,x+105-140,y+60-140);
  line(x+105-140,y+60-140,x+150-140,y+105-140);
  line(x+125-140,y+105-140,x+170-140,y+60-140);
  line(x+170-140,y+60-140,x+215-140,y+105-140);
  line(x+215-140,y+105-140,x+170-140,y+150-140);
  line(x+170-140,y+125-140,x+170-140,y+170-140);
  line(x+215-140,y+170-140,x+170-140,y+215-140);
  line(x+170-140,y+215-140,x+125-140,y+170-140);
  line(x+150-140,y+170-140,x+105-140,y+215-140);
  line(x+105-140,y+215-140,x+60-140,y+170-140);
  line(x+60-140,y+170-140,x+105-140,y+125-140);
  pop();
}
function hypercube(x,y) {
hypercube_1(x+2.5,y+2.5);
}

class perfectCircle {

  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  drawCircle() {
    ellipse(this.x, this.y, this.r, this.r);
  }

  moveCircle() {
    this.x++;
    this.y++;
    this.r++;
  }
}
