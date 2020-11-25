const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var tree,treeIMG,boy,boyIMG,stone,ground;

function preload()
{
boyIMG = loadImage("sprites/boy.png");
treeIMG = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	ground = createSprite(750,650,1500,20);
	ground.shapeColor = rgb(102,52,12);
	var options = {
		isStatic: true
	}
	ground = Bodies.rectangle(750,590,1500,20,options);
	World.add(world,ground);
	
	boy = createSprite(170,590,50,50);
	boy.addImage(boyIMG);
	boy.scale = 0.1;

	tree = createSprite(1000,350,500,300)
	tree.addImage(treeIMG);
	tree.scale = 0.5;

//tree.x was  = 700

	stone = new Stone(20,50,1);
	
	mango1 = new Mango(510,30,80,80) // 360
	mango2 = new Mango(445,43,55,55) // 295
	mango3 = new Mango(610,115,65,65) // 460
	mango4 = new Mango(480,75,50,50) // 330 //
	mango5 = new Mango(545,70,80,80)
	mango6 = new Mango(555,120,70,70)
	mango7 = new Mango(395,103,75,75)
	mango8 = new Mango(508,100,60,60) 
	mango9 = new Mango(435,80,70,70)
	mango10 = new Mango(465,125,70,70)
	
	chain1=new SlingShot(stone.body,{x:120,y:533});

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white"); // white

  Engine.update(engine);
  
  drawSprites();

 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
 mango10.display();

  stone.display();

  chain1.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  
  
  fill("black")
  textSize(25);
  text("Press Space to get another chance to play",50,50);
 
}


function detectCollision(mango,stone){
	mangoBodyPosition = mango.body.position;
	stoneBodyPosition = stone.body.position;
	

	
	}

function mouseDragged()
{
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  chain1.fly();
}

function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(stone.body,{x:140,y:315});
    chain1.attacher(stone.body);
  }
}