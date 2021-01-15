const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1,plane1,stone1,rubber1,sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8;
var iron1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer1 = new Hammer(300,300);
	plane1 = new Plane(400,800,800,20);
	stone1 = new Stone(193,679,-PI/2);
	rubber1= new Rubber(587,753);

	sand1 = new Sand(50,750);
	sand2 = new Sand(80,750);
	sand3 = new Sand(200,750);
	sand4 = new Sand(230,750);
	sand5= new Sand(500,750);
	sand6 = new Sand(530,750);
	sand7 = new Sand(700,750);
	sand8 = new Sand(750,750);
	
	iron1 = new Iron(400,750);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  //text(mouseX + ", " + mouseY, 100,100);

  hammer1.display();
  plane1.display();
  stone1.display();
  rubber1.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();

  iron1.display();

}



