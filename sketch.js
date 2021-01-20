const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops = 100
var drops = [];
function preload(){
    boyAnimation = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
}

function setup(){
   createCanvas(700,600)
   engine = Engine.create();
  world = engine.world;
  
  for(var i = 0; i<maxDrops; i++){
      drops.push(new Drops(random(0,700), random(0,600)))

  }
    
}

function draw(){
   background(0)


   for(var i = 0; i<maxDrops; i++){
    drops[i].display();

}



    
}   

