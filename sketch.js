var platform1 , platform2;

function preload()
{}

function setup() {
  createCanvas(7346, 668);
 
  platform1 = new Platform(100);
  platform2 = new Platform(500);
}

function draw() {
  background('skyblue');  
  drawSprites();

}

