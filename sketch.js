
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var stone1;
var rubber1;
var hammer1;
var groundl;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1200);


	engine = Engine.create();
	world = engine.world;
	

	ground = new ground(600,height,1200,20)
	stone1 = new stone(500,40,80,80);
	rubber1 = new rubber(800,40,40,40);
	hammer1 = new hammer(600,600);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  
  stone1.display();
  rubber1.display();
  hammer1.display();


  ground.display();




 drawSprites();
}



