
//create an empty array called balls

let balls = [];
let rects = [];

function setup() {
  createCanvas(800, 400);

}

function draw(){
	background(220);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }

   for (let j = 0; j < rects.length; j++) {
  	    rects[j].drawRect();
        rects[j].moveRect();
  	 }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  console.log(keyCode);
  if (keyCode === 78) {
    let  b = new Ball(random(0,800), random(0,400), random(0, 20));
    balls.push(b);
    console.log(balls);
  } else if (keyCode === 80){
    let r = new notBall(random(0,800), random(0,400), random(0, 20), random(0, 20));
    rects.push(r);
    console.log(rects);
  }
  return false;
}

//ball class from which to create new balls with similar properties.
class Ball {

  constructor(x,y,z){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.z = z;
	  }

	  drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(random(0,270), random(0,270), random(0,270));
		    ellipse(this.x,this.y,this.z,this.z);
	  }

	  moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+random(-2,2);
		this.y = this.y+random(-0.5,0.5);
    this.z = this.z+random(-5,5);
	  }
  }

class notBall {

  constructor(x,y,z,a){ //every rect needs an x value and a y value
  	this.x = x;
    this.y = y;
    this.z = z;
    this.a = a;
  }

  drawRect(){  // draw a rect on the screen at x,y
      stroke(0);
      fill(random(0,270), random(0,270), random(0,270));
  	  rect(this.x,this.y,this.z,this.a);
  }

  moveRect(){ //update the location of the ball, so it moves across the screen
  	this.x = this.x+random(-2,2);
  	this.y = this.y+random(-0.5,0.5);
    this.z = this.z+random(-5,5);
    this.a = this.a+random(-5,5);
  }
}
