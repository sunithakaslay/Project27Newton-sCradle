
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roofObject;
var rope1, rope2,rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(340,500,20);
	bobObject2 = new Bob(380,500,20);
	bobObject3 = new Bob(420,500,20);
	bobObject4 = new Bob(460,500,20);
	bobObject5 = new Bob(500,500,20);

	roofObject = new Roof(415,200,200,20);

	
	rope1 = new Rope(bobObject1.body,{x:335,y:200});
	rope2 = new Rope(bobObject2.body,{x:375,y:200});
	rope3 = new Rope(bobObject3.body,{x:415,y:200});
	rope4 = new Rope(bobObject4.body, {x:455,y:200});
	rope5 = new Rope(bobObject5.body,{x:495,y:200});
	

	Engine.run(engine);
  
}


function draw() {
  
  background(180);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	//	console.log(bobObject1);
		Body.applyForce(bobObject1.body,bobObject1.body.position, {x:-50,y:-55});
	}
}
