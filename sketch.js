const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var player, player_sad;
var star;
var star_img;
var backg;
var ground;
var btn;


function preload()
{
  star_img = loadImage("star.png");
  backg = loadImage("backg.png");
}
function setup()
{
  createCanvas(1400, 817);
  engine = Engine.create();
  world = engine.world;

  player_sad = createImg("player_sad.png");
  player_sad.position(800, 500);
  player_sad.size(100, 200);

  player = createImg("player.png");
  player.position(800, 500);
  player.size(100, 200);

  btn = createImg("btn.png");
  btn.position(1000, 200);
  btn.size(75, 75);
  btn.mouseClicked(force);


  var star_options = 
  {
    restitution: 0.95,
    firctionAir: 3
    
  }

  star = Bodies.circle(200, 100, 20, star_options);
  World.add(world, star);
  star.scale = 0.5;

  ground = new Ground(0, 810, 2800, 15);
  World.add(world, ground);

  


}

function draw()
{
  background(51);
  image(backg, 0, 0);
  push();
  imageMode(CENTER);
  if(star!=null)
  {
    image(star_img, star.position.x, star.position.y, 70,70);
  }
  pop();
  Engine.update(engine);
  ground.show();

  if(star.y >=800)
  {
    World.remove(engine.world, btn);
    text("GAME OVER", 600, 750);
    World.remove(engine.world, player);

  }

  else if(star.x = 800 && star.y == 500)
  {
     World.remove(engine.world, btn);
     text("YOU WIN", 600, 750);
     World.remove(engine.world, star);
  }


}

function force()
{
  Matter.Body.applyForce(star,{x:0, y:0}, {x:0.02, y:0});
}



