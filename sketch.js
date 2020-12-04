const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;
var engine,world

function setup() {
  createCanvas(700,700);

	engine = Engine.create();
  world = engine.world;

  //create objects
      ground = new Ground(width/2, height-20,width,20)
    division1 = new Division(50,520,10,300)
    division2 = new Division(200,520,10,300)
    division3 = new Division(350,520,10,300)
    division4 = new Division(500,520,10,300)
    division5 = new Division(650,520,10,300)

        plinko1=new Plinko(100,300,20)
        plinko2=new Plinko(250,300,20)
        plinko3=new Plinko(400,300,20)
        plinko4=new Plinko(550,300,20)
        
        plinko5=new Plinko(200,200,20)
        plinko6=new Plinko(350,200,20)
        plinko7=new Plinko(500,200,20)
        plinko8=new Plinko(650,200,20)

        plinko9=new Plinko(20,100,20)
        plinko10=new Plinko(180,100,20)
        plinko11=new Plinko(330,100,20)
        plinko12=new Plinko(480,100,20)
      
      particle1= new Particle(100,50,20)
      particle2= new Particle(200,50,20)
      particle3= new Particle(300,50,20)
      particle4= new Particle(400,50,20)
      particle5= new Particle(500,50,20)


  Engine.run(engine);
}

function draw() {
  background("black");  

//display
  ground .display()
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()

  plinko1.display()
  plinko2.display()
  plinko3.display()
  plinko4.display()
  plinko5.display()
  plinko6.display()
  plinko7.display()
  plinko8.display()
  plinko9.display()
  plinko10.display()
    plinko11.display()
    plinko12.display()

    particle1.display()
    particle2.display()
    particle3.display()
    particle4.display()
    particle5.display()

  drawSprites();
}