const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plinkos = [];
var divisions = [];
var particles = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,800,width,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Div(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 35; j <= width; j=j+50){
    plinkos.push(new Plinko(j,70));
  }

  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,170));
  }

  for (var j = 35; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,260));
  }

  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,350));
  }
}

function draw() {
  background(0);

  Engine.update(engine);

  ground.display();
  
  for (var i = 0; i<divisions.length; i++){
    divisions[i].display();
  }

  for (var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
    }

  for (var i = 0; i<particles.length; i++){
      particles[i].display();
  }
}