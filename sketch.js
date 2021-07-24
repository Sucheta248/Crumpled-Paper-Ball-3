
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbinObj,groundObject,paper1, Launcher;	
var world;


function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(800,650);
	paper1 = new Paper(100, 640);
	Launcher= new launcher(paper1.body,{ x:200 ,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paper1.display();
  Launcher.display();

}


function mouseDragged(){
    Body.setPosition(paper1.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    Launcher.fly();     
}