const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, sling;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;
var Turns;
var score;
var gamestate = "start";

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
createCanvas(1370, 610);
engine = Engine.create();
world = engine.world;

stoneObj=new Stone(235,420,30); 

mango1=new Mango(1080,170,45);//
mango2=new Mango(1180,210,30);//
mango3=new Mango(1140,150,37);
mango4=new Mango(985,75,25);//
mango5=new Mango(1100,70,30);//
mango6=new Mango(975,240,32);
mango7=new Mango(900,210,30);
mango8=new Mango(1125,250,40);//
mango9=new Mango(1010,140,43);
mango10=new Mango(1240,220,30);//



treeObj=new Tree(1050,600);
groundObject=new Ground(width/2,600,width,20);
sling=new SlingShot(stoneObj.body,{x:240,y:460})  

Turns = 0;
score = 0;

Engine.run(engine);
 
}

function draw() {

  background("rgb(155, 203, 255)");



  stroke("white");
  textFont("Cursive");
  fill('rgb(249, 59, 173)');
  stroke('purple')
  textSize(30);
  text("Press Space To Get A New Stone To Throw!",50 ,200);
  text("Drag the stone behind and then release.",50 ,100);
  text("Turns: " + Turns,50,300);
  image(boy,200,380,200,300);
  
  treeObj.display();
  stoneObj.display();
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
  
  stoneObj.display();

  groundObject.display();
  sling.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  }

function mouseDragged(){
  if(gamestate === "start"){
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY});
}
}

function mouseReleased(){
	sling.fly();
  gamestate = "launched";
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  sling.attach(stoneObj.body);
    gamestate = "start";
    Turns = Turns +1;
	}
}

  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r){
   Matter.Body.setStatic(lmango.body , false);
   stoneObj.visible = false;
  
 } 
}