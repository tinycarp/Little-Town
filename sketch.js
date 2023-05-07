/* This code allows the user to create a little town by pressing the mouse 
anywhere they choose, which will spawn a random house wherever their mouse is. 
*/

let homes = [];
var ground;
var aspect;

function preload () {
  ground = loadImage ('ground1.png');
  
  for (let i = 0; i < 10; i++) {
    homes[i] = loadImage ('homes/home' + i + '.png')
  }
}


function setup() {
  aspect = ground.width/ground.height;
  
  createCanvas(windowWidth, windowHeight);
//createCanvas(640, 480); 
  
  image(ground, 0, 0, windowWidth, windowHeight);
  //now our resized image is stored in the img variable
  ground = get();
}

function draw() {
  background(255);
  imageMode(CENTER);
  image(ground, width/2, height/2);
  
  if (mousePressed) {
    createHome (mouseX, mouseY);
  }
  
}

function mousePressed() {
  createHome(mouseX, mouseY);
  // prevent default
  return false;
}


function createHome() {
  
  let home = random(homes);
  image (home, mouseX, mouseY);
  noLoop();
}

