const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let engine;

var ball;
var groundObj;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

    groundObj = new Ground (350, 670, 700,20)
	leftSide = new Ground (1100, 600, 20, 120)
	rightSide = new Ground (1200, 600, 20, 120)

	//Create the Bodies Here.
    ball = Bodies.circle(200, 200, 25)
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  leftSide.show();
  groundObj.show();

  ellipse(ball.position.x, ball.position.y, 10)
  
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, {x : 0, y : 0}, {x : 1, y : -1})
	}
}



