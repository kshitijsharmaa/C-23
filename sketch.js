/*Fun Fact: A part of the IQ test for dogs involves throwing blankets at their faces and recording how long it
takes for them to get out from it
PS: I did not have any inspirations to draw the castle, so I drew something that resembled it sorry :(
*/

//making alliases for the modules
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground;
var FortGate,ForTower,FortTower2;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ForTower = new Box(146,200,20,150);
  ForTower2 =  new Box(210,200,20,150);
  FortGate  = new Box(175,200,40,100);
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(0,380,800,20,options);
  World.add(world,ground);  
  console.log(ForTower);
}

function draw() {
  background(0,0,0);  
  Engine.run(engine);
  FortGate.display();
  ForTower.display();
  ForTower2.display();
}