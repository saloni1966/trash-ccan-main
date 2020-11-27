
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var ground;
var dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(100,390,60);

	ground = new Ground(600,400,1200,40);
	
	dustbin = new Dustbin(1000,370);
	

	Engine.run(engine);
  
}


function draw() {
 
  background("white");
  
  
  dustbin.display();
  

  ball1.display();

  ground.display();

  

  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:50,y:-50});

	}

}



