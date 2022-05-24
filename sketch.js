const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;
var arrow, arrowimg;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  arrowimg = loadImage("./assets/arrow.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player)

 // playerArcher = new ( 340, playerBase.position.y - 112, 120, 120);
  playerArcher = new PlayerArcher( 340, playerBase.position.y - 112, 120, 120);
 // playerArcher =  PlayerArcher( 340, playerBase.position.y - 112, 120, 120);
 // playerArcher = new PlayerArcher( );

  /*arrow = createSprite(340,100, 20, 20)
  arrow.addImage(arrowimg)*/

}

function draw() {
  background(backgroundImg);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)


  // playerArcher.display;
  // playerArcherdisplay();
  playerArcher.display();
  // display();

  /*if (keyDown("up_arrow")){
    go()
  }*/

  //drawSprites()
  Engine.update(engine);
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}

/*function go(){
  Matter.Body.applyForce(arrowimg, {x: 0, y: 0}, {x: 0.08, y: 0})
}*/