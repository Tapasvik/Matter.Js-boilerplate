var ball 
var ground 
var leftSide
var rightSide
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = Bodies.circle(450,400, 10, ball_options )
World.add(world, ball)

ground = Bodies.rectangle(width/2, 670, width, 20)
World.add(world, ground)

	Engine.run(engine);
  var ball_options = { 
	  isStatic: false,
	  restitution: 0.3,
	  friction: 0, 
	  density: 1.2, 
  }
  leftSide = (1100, 600, 20,120)
  rightSide = (900, 600, 20,120)

  
}




function draw() {

  rectMode(CENTER);
  background(0);

  ground.display()
  function keyPressed (){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball,{x:0, y:0}, {x: 0.005, y:0 } )
	}
}

  drawSprites();
 
}



