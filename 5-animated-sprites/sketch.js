// Creating animations
//
// animations like p5 images should be stored in variables
// in order to be displayed during the draw cycle
var cow;
//
// //it's advisable (but not necessary) to load the images in the preload function
// //of your sketch otherwise they may appear with a little delay
function preload() {
//
//   //create an animation from a sequence of numbered images
//   //pass the first and the last file name and it will try to find the ones in between
  cow = loadAnimation('assets/cow001.png','assets/cow002.png', 'assets/cow003.png','assets/cow004.png', 'assets/cow005.png', 'assets/cow006.png', 'assets/cow007.png');

}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(200, 255, 255);

  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  animation(cow, 300, 150);

}
