const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var g1,b1,b2;
function setup(){
    var canvas = createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;
 g1 = new Ground(300,400,600,50);
 b1 = new Box (315,230,30,30);
 b2 = new Box (300,200,50,30);
}

function draw(){
    background(0);
    Engine.update(engine);
 g1.display();
 b1.display();
 b2.display();   
}