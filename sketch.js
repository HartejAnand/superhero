const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,b0x11,b0x12,b0x13,b0x14,box15,box16,box17,box18,box19,box20;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground1.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(windowWidth/2, windowHeight, windowWidth, 20);

  hero = new Hero(windowWidth/5,windowHeight*3/4,windowWidth/7);
  rope = new Rope(hero.body, { x: windowWidth/5, y: 0 });
  monster = new Monster(windowWidth*5/6,windowWidth/2,windowHeight/2);

  box1 = new Box(windowWidth*1.3/3, windowHeight/4, windowWidth/20, windowHeight/10);
  box2 = new Box(windowWidth*1.3/3, windowHeight*1.25/4, windowWidth/20, windowHeight/10);
  box3 = new Box(windowWidth*1.3/3, windowHeight*1.5/4, windowWidth/20, windowHeight/10);
  box4 = new Box(windowWidth*1.3/3, windowHeight*1.75/4, windowWidth/20, windowHeight/10);
  box5 = new Box(windowWidth*1.3/3, windowHeight/2, windowWidth/20, windowHeight/10);
  box6 = new Box(windowWidth*1.3/3, windowHeight*2.25/4, windowWidth/20, windowHeight/10);
  box7 = new Box(windowWidth*1.3/3, windowHeight*2.5/4, windowWidth/20, windowHeight/10);
  box8 = new Box(windowWidth*1.3/3, windowHeight*2.75/4, windowWidth/20, windowHeight/10);
  box9 = new Box(windowWidth*1.3/3, windowHeight*3/4, windowWidth/20, windowHeight/10);
  box10 = new Box(windowWidth*1.3/3, windowHeight*3.5/4, windowWidth/20, windowHeight/10);

  box11 = new Box(windowWidth*1.7/3, windowHeight/4, windowWidth /20, windowHeight/10);
  box12 = new Box(windowWidth*1.7/3, windowHeight*1.25/4, windowWidth /20, windowHeight/10);
  box13 = new Box(windowWidth*1.7/3, windowHeight*1.5/4, windowWidth/20, windowHeight/10);
  box14 = new Box(windowWidth*1.7/3, windowHeight*1.75/4, windowWidth/20, windowHeight/10);
  box15 = new Box(windowWidth*1.7/3, windowHeight/2, windowWidth/20, windowHeight/10);
  box16 = new Box(windowWidth*1.7/3, windowHeight*2.25/4, windowWidth/20, windowHeight/10);
  box17 = new Box(windowWidth*1.7/3, windowHeight*2.5/4, windowWidth/20, windowHeight/10);
  box18 = new Box(windowWidth*1.7/3, windowHeight*2.75/4, windowWidth/20, windowHeight/10);
  box19 = new Box(windowWidth*1.7/3, windowHeight*3/4, windowWidth/20, windowHeight/10);
  box20 = new Box(windowWidth*1.7/3, windowHeight*3.5/4, windowWidth/20, windowHeight/10);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()

  hero.display();
 // rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}