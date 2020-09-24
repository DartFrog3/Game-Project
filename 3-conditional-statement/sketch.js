//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;
let crowd;
let hits = [];

function preload() {
  crowd = loadAnimation('assets/crowd.png', 'assets/crowd.png')
}

function setup() {
  createCanvas(500, 400);

  crowd = createSprite(100, 100, 50, 100);
  animation(crowd, 50, 50);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3);

}

function draw(){
	background(220);

  me.drawMe();
  me.moveMe();

  if (frameCount % 25 == 0) {
      let  b = new Ball(width, random(0,height), -3);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }
    me.die();

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("green");
        strokeWeight(3);
    		fill("blue");
		    ellipse(this.x,this.y,20,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
	}

  moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
       crowd.position.y -= crowd.position.y;

    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
        crowd.position.y += crowd.position.y;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
      crowd.position.x -= crowd.position.x;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
      crowd.position.x += crowd.position.x;
    }
	}

  die(){
    textSize(50);
    fill("black");
    stroke("black");
    if (hits.length >= 3) {
      text("Game Over", 100, 190);
      exit();
    } else if (hits.length == 2) {
      text("Lives: 1", 325, 50);
    } else if (hits.length == 1) {
      text("Lives: 2", 325, 50);
    } else if (hits.length == 0) {
      text("Lives: 3", 325, 50);
    }
  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke("red");
      strokeWeight(2);
    	fill("red");
		  ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
            hits.push("hit");
            background("red");
    		}
  	}

}
