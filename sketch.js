const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball,ball1,rect1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true

    }
var options={
    restitution: 1.0
}
var balloption={
    isStatic: true
}
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    rect1=Bodies.rectangle(100,100,70,70)
ball=Bodies.circle(150,150,20,balloption);
World.add(world,ball);
ball1=Bodies.circle(170,170,4,options);
World.add(world,ball1);
World.add(world,rect1)

    console.log(ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("blue")
    rect(ground.position.x,ground.position.y,400,20);
    ellipse(ball.position.x,ball.position.y,20,20)
    ellipse(ball1.position.x,ball1.position.y,40,40)
    rect(rect1.position.x,rect1.position.y,70,70)
}