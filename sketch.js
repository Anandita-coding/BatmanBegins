const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops =1000
var drops = [];
function preload(){
    boyAnimation = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
}

function setup(){
   createCanvas(700,645)
   engine = Engine.create();
  world = engine.world;
  
  for(var i = 0; i<maxDrops; i++){
      drops.push(new Drops(random(0,700), random(0,645)))
      
  }
   boy = new Umbrella(300,370,20)
	Engine.run(engine);
    
}

function draw(){
   background(0)
  
  
   for(var i = 0; i<maxDrops; i++){
    drops[i].display();
    drops[i].update();
}



     boy.display();
    
}   

