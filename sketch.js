// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.


var engine, world;
var ground;
var t1;

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() 
{
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400,380,800,20);
    t1 = new Tanker(161,355,80,30);
   
}


function draw() 
{
    background(0);
    Engine.update(engine);
    console.log(mouseX);
    console.log(mouseY);
    ground.display();
    t1.display();
    strokeWeight(0);
    stroke("brown");
    fill("brown");
    rect(180,306,70,30);
   // t2.display();
    //t3.display();

    // Remember to update the Matter Engine and set the background.
}


function keyReleased() {
    // Call the shoot method for the cannon.
}