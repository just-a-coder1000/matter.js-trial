const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var plane;
var hammer;
var stone;
var rubber;
var sand1, sand2, sand3, sand4, sand5;
var iron;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	plane = new Plane(600,height,1200,20);

	hammer = new Hammer(100, 100);

	stone = new Stone (125, 125, 200, 20);

	iron = new Iron(300, 50, 200, 20)

	sand1 = new Sand(250, 50, 5, 5);

	sand2 = new Sand(252, 60, 5, 5);

	sand3 = new Sand(254, 70, 5, 5);

	sand4 = new Sand(256, 80, 5, 5);

	sand5 = new Sand(258, 90, 5, 5);

	var rubber_options = {
		restitution : 0.3,
		friction : 5,
		density : 1,
	  }
	
	  rubber = Bodies.circle(600, 100,30, rubber_options);
	  World.add(world, rubber);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

 
	plane.display();
	hammer.display();
	stone.display();
	iron.display();
	sand1.display();
	sand2.display();	
	sand3.display();	
	sand4.display();	
	sand5.display();	
	

	ellipseMode(RADIUS);
	fill("blue");
	ellipse(rubber.position.x, rubber.position.y, 30);
   
	
 
}



